export const metadata = {
  title: "Terms of Service — sendprop",
  description: "Terms of service for sendprop AI audit engagements.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-10 pb-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Last updated: April 12, 2026
        </p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-zinc-600">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              The service
            </h2>
            <p className="mt-2">
              Sendprop provides a paid AI audit service for small and
              medium-sized businesses. The deliverable is a written report
              analyzing your operations and identifying specific opportunities
              where AI and automation can save time or generate revenue. Reports
              are delivered as branded PDF documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Pricing and payment
            </h2>
            <p className="mt-2">
              The AI audit is $400 USD, paid upfront via Stripe at the time of
              booking. Payment is required before the engagement begins. All
              prices are listed in US dollars. Stripe processes payments
              securely — sendprop does not store credit card information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Refund and dispute policy
            </h2>
            <p className="mt-2">
              If the recommendations in your audit report are not collectively
              worth at least $10,000 per year to your business, you are entitled
              to a full refund. To request a refund, email{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>{" "}
              within 30 days of receiving your report. Refunds are processed
              back to the original payment method within 7 business days.
            </p>
            <p className="mt-2">
              If you have a dispute or concern about the service, contact{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>{" "}
              and it will be resolved directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Cancellation policy
            </h2>
            <p className="mt-2">
              You may cancel your audit at any time before the report is
              delivered by emailing{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>
              . If analysis has not yet begun, you will receive a full refund.
              If analysis is already underway, a partial refund may be issued at
              our discretion. Once the report has been delivered, the refund
              guarantee above applies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Confidentiality
            </h2>
            <p className="mt-2">
              A mutual non-disclosure agreement (NDA) is signed before any
              business data is shared. All client data uploaded to sendprop is
              deleted within 14 days of report delivery. We do not share, sell,
              or reuse your business data for any purpose outside of your
              engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Deliverables and intellectual property
            </h2>
            <p className="mt-2">
              The audit report delivered to you is yours to keep, share with
              your team, and act on. Sendprop retains no ownership over the
              recommendations or content in your report. We may retain anonymized,
              non-identifying insights for improving the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Limitation of liability
            </h2>
            <p className="mt-2">
              The audit report contains recommendations and analysis, not
              guarantees of business outcomes. Sendprop is not liable for
              business decisions made based on the report. Our total liability
              is limited to the amount paid for the service ($400 USD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">Contact</h2>
            <p className="mt-2">
              For questions about these terms, email{" "}
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
            <a href="/privacy" className="hover:text-zinc-900">
              Privacy
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
