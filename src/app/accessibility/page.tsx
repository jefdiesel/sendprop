export const metadata = {
  title: "Accessibility — sendprop",
  description: "How sendprop is built to be accessible and how to get help.",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-10 pb-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Accessibility
        </h1>
        <p className="mt-3 text-lg text-zinc-600 leading-relaxed">
          This site is built to work for everyone. If something gets in the way,
          email{" "}
          <a
            href="mailto:jef@sendprop.com"
            className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
          >
            jef@sendprop.com
          </a>{" "}
          and it will be fixed.
        </p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-zinc-600">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              What we test for
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Color contrast:</strong> All text meets WCAG AA
                contrast ratios — minimum 4.5:1 for body text, 3:1 for large
                headings. No information is conveyed by color alone.
              </li>
              <li>
                <strong>Keyboard navigation:</strong> Every interactive element
                (links, buttons, form fields) is reachable and operable with a
                keyboard. Focus indicators are visible.
              </li>
              <li>
                <strong>Screen readers:</strong> Form fields have proper labels.
                Headings follow a logical hierarchy. Error messages are
                announced with ARIA live regions.
              </li>
              <li>
                <strong>Text scaling:</strong> The layout remains usable when
                text is scaled to 200% in browser settings.
              </li>
              <li>
                <strong>Motion:</strong> No auto-playing animations. The few
                transitions on the site respect the{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono">
                  prefers-reduced-motion
                </code>{" "}
                setting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              The audit report
            </h2>
            <p className="mt-3">
              Reports are delivered as PDF documents. If you need the report in
              a different format (plain text, HTML, large print), let us know
              when you book and we will accommodate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Payment
            </h2>
            <p className="mt-3">
              Payment is processed through Stripe&apos;s checkout, which
              maintains its own accessibility standards. If the payment form
              presents a barrier, email{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>{" "}
              and we will process your order directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Known limitations
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                PDF reports may not be fully navigable with all screen readers.
                Request an alternative format if needed.
              </li>
              <li>
                Stripe&apos;s hosted checkout page is outside our direct
                control. Stripe publishes their own{" "}
                <a
                  href="https://stripe.com/docs/security"
                  className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  accessibility documentation
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900">
              Feedback
            </h2>
            <p className="mt-3">
              If you encounter an accessibility barrier on this site, email{" "}
              <a
                href="mailto:jef@sendprop.com?subject=Accessibility"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>
              . Describe what you were trying to do and what got in the way. It
              will be addressed within 48 hours.
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t border-zinc-200 bg-[#fafaf7]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-zinc-500">
          <span className="font-semibold text-zinc-900">
            sendprop<span className="text-orange-500">.</span>
          </span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-zinc-900">
              Terms
            </a>
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
