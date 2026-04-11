// Stripe webhook handler. We don't have a database — there's nothing to
// update on payment success. The webhook exists mostly so Stripe is happy
// (and so we can log + add side effects later if needed).
//
// Add this URL in https://dashboard.stripe.com/webhooks:
//   https://sendprop.com/api/stripe/webhook
// Events: checkout.session.completed
// Then copy the signing secret into STRIPE_WEBHOOK_SECRET in env.

import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json(
      { error: "missing signature or webhook secret" },
      { status: 400 },
    );
  }

  const rawBody = await req.text();
  let event;
  try {
    event = stripe().webhooks.constructEvent(rawBody, sig, secret);
  } catch (err) {
    console.error("[stripe] signature verification failed:", err);
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    console.log(
      `[stripe] paid: ${session.id} ${session.customer_email} ${session.metadata?.businessName ?? ""}`,
    );
    // Nothing to update — order state lives in Stripe.
  }

  return NextResponse.json({ received: true });
}
