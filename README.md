# sendprop

The customer-facing audit funnel for [sendprop.com](https://sendprop.com).

A tiny Next.js app: landing page → Stripe Checkout → NDA + file upload → notification email to the consultant. **No database.** Stripe holds the order state, Resend delivers the upload as an email attachment.

This is the *only* thing customers ever see. The dialer + scraper + email tracker live separately on a private machine and never serve any public traffic.

## Routes

| Path | What it does |
|---|---|
| `/` | Landing page with the offer + Stripe checkout form |
| `/upload/[sessionId]` | NDA acceptance + file upload (gated on Stripe payment status) |
| `/done/[sessionId]` | Thank-you page |
| `/api/stripe/webhook` | Stripe webhook (logging only — no DB to update) |

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind v4
- `stripe` SDK for checkout sessions + payment verification
- `resend` for sending the order notification email with file attachments
- No database. State lives in Stripe.

## Local development

```bash
npm install
cp .env.example .env
# Fill in the env vars
npm run dev
```

Open http://localhost:3000.

## Production deployment (Vercel)

1. Push this repo to GitHub
2. Import it into Vercel (one click)
3. Add env vars in Vercel's dashboard:
   - `PUBLIC_BASE_URL=https://sendprop.com`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
   - `NOTIFICATION_FROM`
4. Add `sendprop.com` as a custom domain in Vercel
5. Vercel gives you DNS records — add them in Cloudflare DNS as **gray cloud (DNS only)**, NOT proxied
6. Create the Stripe webhook at https://dashboard.stripe.com/webhooks pointing at `https://sendprop.com/api/stripe/webhook` (event: `checkout.session.completed`)
7. Test with Stripe test card `4242 4242 4242 4242`

## How it works end-to-end

1. Cold email links to `https://sendprop.com`
2. Prospect clicks → lands on `/`
3. Fills in name + business + email → clicks "Pay $400 and start"
4. Server creates a Stripe Checkout session, redirects to Stripe
5. Prospect pays on Stripe's page
6. Stripe redirects to `/upload/{checkoutSessionId}`
7. Page verifies payment status against Stripe directly (no DB)
8. Prospect accepts NDA, uploads files
9. Server reads files into memory, calls Resend to email them as attachments to the consultant
10. Prospect sees `/done/{sessionId}` thank-you page
11. Consultant gets an email with all files attached, replies with the report within 48 hours
