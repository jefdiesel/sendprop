"use server";

import { redirect } from "next/navigation";
import { stripe, AUDIT_PRICE_CENTS } from "@/lib/stripe";
import { sendAuditOrderNotification } from "@/lib/notify";

function getOrigin(): string {
  return (
    process.env.PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000"
  );
}

export type CheckoutState = { error?: string } | undefined;

export async function createCheckoutSession(
  _prev: CheckoutState,
  formData: FormData,
): Promise<CheckoutState> {
  const customerEmail = String(formData.get("customerEmail") ?? "").trim();
  const customerName = String(formData.get("customerName") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();

  if (!customerName) return { error: "Name is required." };
  if (!businessName) return { error: "Business name is required." };
  if (!customerEmail) return { error: "Email is required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail))
    return { error: "That doesn't look like a valid email address." };

  const origin = getOrigin();

  let session;
  try {
    // Stripe holds the order state — we don't have our own DB. The customer
    // info we collected here goes into the Stripe session metadata so we
    // can read it back on the upload page.
    session = await stripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: AUDIT_PRICE_CENTS,
            product_data: {
              name: "AI Audit",
              description:
                "4-page written report on 3 ways AI could save your business real money. 48-hour delivery. Full refund if not worth $10k/year.",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/upload/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=1`,
      metadata: {
        customerName,
        businessName,
      },
    });
  } catch {
    return { error: "Something went wrong connecting to payment. Try again in a moment." };
  }

  if (!session.url)
    return { error: "Something went wrong connecting to payment. Try again in a moment." };
  redirect(session.url);
}

export async function submitIntake(
  sessionId: string,
  formData: FormData,
) {
  const ndaAccepted = formData.get("nda") === "on";
  if (!ndaAccepted) throw new Error("you must accept the NDA to continue");

  // Pull the order state from Stripe (no DB).
  const session = await stripe().checkout.sessions.retrieve(sessionId);
  if (session.payment_status !== "paid") {
    throw new Error("payment not yet confirmed — try refreshing in 30 seconds");
  }

  const customerEmail = (session.customer_email ?? "").trim();
  const customerName = (session.metadata?.customerName ?? "").trim();
  const businessName = (session.metadata?.businessName ?? "").trim();
  const amountCents = session.amount_total ?? AUDIT_PRICE_CENTS;

  // Intake fields
  const websiteUrl = String(formData.get("websiteUrl") ?? "").trim();
  const businessDescription = String(formData.get("businessDescription") ?? "").trim();
  const teamSize = String(formData.get("teamSize") ?? "").trim();
  const painPoints = formData.getAll("painPoints").map(String);
  const callPreference = String(formData.get("callPreference") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  // Optional file uploads — cap at 25MB for Resend attachment limit.
  const rawFiles = formData.getAll("files");
  const files: Array<{ name: string; size: number; type: string; content: Buffer }> = [];
  let totalSize = 0;
  const MAX_TOTAL = 25 * 1024 * 1024;

  for (const f of rawFiles) {
    if (!(f instanceof File) || f.size === 0) continue;
    if (totalSize + f.size > MAX_TOTAL) {
      throw new Error(
        `Total upload size exceeds 25MB. Please upload less, or send the rest by replying to the order email later.`,
      );
    }
    const buf = Buffer.from(await f.arrayBuffer());
    files.push({ name: f.name, size: f.size, type: f.type, content: buf });
    totalSize += f.size;
  }

  // Build a structured notes block for the notification email
  const intakeSummary = [
    websiteUrl && `Website: ${websiteUrl}`,
    businessDescription && `Business: ${businessDescription}`,
    teamSize && `Team size: ${teamSize}`,
    painPoints.length > 0 && `Pain points: ${painPoints.join(", ")}`,
    callPreference && `Call preference: ${callPreference}`,
    notes && `\nAdditional notes:\n${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  await sendAuditOrderNotification({
    customerName,
    businessName,
    customerEmail,
    amountCents,
    stripeSessionId: sessionId,
    notes: intakeSummary,
    files,
  });

  redirect(`/done/${sessionId}`);
}
