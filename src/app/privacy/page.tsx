export const metadata = {
  title: "Privacy Policy — sendprop",
  description: "How sendprop handles your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-10 pb-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Last updated: April 12, 2026
        </p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-zinc-600">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Who we are
            </h2>
            <p className="mt-2">
              Sendprop is operated by Jef Diesel. Contact:{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              What we collect
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Checkout information:</strong> Name, business name, and
                email address — collected at the time of purchase to identify
                your engagement and deliver the report.
              </li>
              <li>
                <strong>Payment information:</strong> Processed entirely by
                Stripe. Sendprop does not see or store credit card numbers. See{" "}
                <a
                  href="https://stripe.com/privacy"
                  className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe&apos;s privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Business data you upload:</strong> Documents, emails,
                screenshots, and other files you share for the audit. This data
                is used solely to produce your report.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              How we use your data
            </h2>
            <ul className="mt-2 space-y-2">
              <li>To produce your audit report</li>
              <li>To communicate with you about your engagement</li>
              <li>To process payment and issue refunds if requested</li>
            </ul>
            <p className="mt-2">
              We do not use your data for marketing, advertising, or any
              purpose unrelated to the service you purchased.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Data retention and deletion
            </h2>
            <p className="mt-2">
              All business data you upload is deleted within 14 days of report
              delivery. Your name, business name, and email may be retained for
              bookkeeping and tax purposes. A mutual NDA is signed before any
              data is shared.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Who we share data with
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <strong>Stripe:</strong> Payment processing.
              </li>
              <li>
                <strong>Resend:</strong> Transactional email delivery (order
                confirmations, report delivery).
              </li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or share your data with anyone else. Your
              business data is never used to train AI models or shared with
              third-party AI providers beyond what is necessary to produce your
              report.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">Cookies</h2>
            <p className="mt-2">
              This site does not use tracking cookies, analytics, or
              advertising pixels. Stripe may set cookies necessary for payment
              processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Your rights
            </h2>
            <p className="mt-2">
              You can request a copy of your data, ask for corrections, or
              request deletion at any time by emailing{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">Contact</h2>
            <p className="mt-2">
              For privacy questions or data requests, email{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t border-zinc-200 bg-[#fafaf7]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-zinc-400">
          <span className="font-semibold text-zinc-900">
            sendprop<span className="text-orange-500">.</span>
          </span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-zinc-900">
              Terms
            </a>
            <a href="mailto:jef@sendprop.com" className="hover:text-zinc-900">
              jef@sendprop.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
