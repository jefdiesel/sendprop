// Send notification emails via Resend. The funnel doesn't have a database —
// when someone pays + uploads, this is how the consultant finds out.
//
// Resend free tier: 3000 emails/month, 100/day. Plenty for this scale.

import { Resend } from "resend";

let _resend: Resend | null = null;

function client(): Resend {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  _resend = new Resend(key);
  return _resend;
}

const FROM = process.env.NOTIFICATION_FROM || "Sendprop <notify@sendprop.com>";
const TO = process.env.NOTIFICATION_EMAIL;

if (typeof window === "undefined" && !TO && process.env.NODE_ENV !== "test") {
  // Soft-warn at startup; failure is at send time.
  console.warn("[notify] NOTIFICATION_EMAIL not set — order notifications won't be delivered");
}

export type AuditOrderNotification = {
  customerName: string;
  businessName: string;
  customerEmail: string;
  amountCents: number;
  stripeSessionId: string;
  notes?: string;
  files: Array<{
    name: string;
    size: number;
    type: string;
    content: Buffer;
  }>;
};

export async function sendAuditOrderNotification(o: AuditOrderNotification) {
  if (!TO) {
    console.error("[notify] NOTIFICATION_EMAIL not set, skipping send for", o.stripeSessionId);
    return;
  }

  const subject = `[New audit] ${o.customerName} at ${o.businessName} — $${(o.amountCents / 100).toFixed(0)}`;

  const filesList = o.files.length
    ? o.files
        .map(
          (f, i) => `  ${i + 1}. ${f.name}  (${(f.size / 1024).toFixed(1)} KB, ${f.type || "unknown"})`,
        )
        .join("\n")
    : "  (no files uploaded)";

  const body = `New audit order paid and submitted.

Customer:  ${o.customerName}
Business:  ${o.businessName}
Email:     ${o.customerEmail}
Amount:    $${(o.amountCents / 100).toFixed(2)}
Stripe:    https://dashboard.stripe.com/payments?session=${o.stripeSessionId}

Notes from customer:
${o.notes ? o.notes : "(none)"}

Files attached (${o.files.length}):
${filesList}

You have 48 hours from now to deliver the report.
Reply to ${o.customerEmail} when done.
`;

  const totalSize = o.files.reduce((sum, f) => sum + f.size, 0);
  // Resend's hard limit is 40MB per email. If we're over, fall back to text-only
  // and let the consultant chase the customer for the actual files separately.
  const useAttachments = totalSize < 35 * 1024 * 1024;

  await client().emails.send({
    from: FROM,
    to: TO,
    replyTo: o.customerEmail,
    subject,
    text: body,
    ...(useAttachments && o.files.length > 0
      ? {
          attachments: o.files.map((f) => ({
            filename: f.name,
            content: f.content,
          })),
        }
      : {}),
  });
}
