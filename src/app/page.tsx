import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop — AI Audit",
  description:
    "A written report identifying the three highest-ROI places to use AI in your business. $400. 48 hours. No meeting. Refund if not worth $10,000/year.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-zinc-900 antialiased">
      <nav className="border-b border-zinc-900/10">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            sendprop
          </a>
          <a
            href="#start"
            className="text-sm text-zinc-500 hover:text-zinc-900"
          >
            $400
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          AI Audit
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-zinc-700">
          A written report identifying the three highest-ROI places to use AI
          in your business. $400 flat. Delivered in 48 hours.
        </p>

        <div className="mt-10 border-t border-zinc-900/10 pt-10">
          <dl className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Price
              </dt>
              <dd className="mt-1 font-mono text-lg font-medium tabular-nums">
                $400
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Turnaround
              </dt>
              <dd className="mt-1 font-mono text-lg font-medium tabular-nums">
                48 hours
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Format
              </dt>
              <dd className="mt-1 font-mono text-lg font-medium">
                4-page PDF
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Refund
              </dt>
              <dd className="mt-1 font-mono text-lg font-medium">7 days</dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 space-y-6 text-base leading-relaxed text-zinc-700">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500">
            What you get
          </h2>
          <p>
            A 4-page written report with three specific recommendations for
            where AI could replace manual work in your operations. Each
            recommendation includes a dollar estimate, the steps to implement
            it, and the tools required.
          </p>
          <p>
            Two of the three recommendations are DIY &mdash; the report
            includes the prompts and a setup guide so you can act on them
            yourself the same week. The third is a custom build available as a
            separate engagement if you want it.
          </p>
        </div>

        <div className="mt-16 space-y-6 text-base leading-relaxed text-zinc-700">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500">
            How it works
          </h2>
          <ol className="space-y-4">
            <li className="grid grid-cols-[2.5rem_1fr] gap-2">
              <span className="font-mono text-zinc-400">01</span>
              <span>
                Pay $400 via Stripe. You receive a private upload link.
              </span>
            </li>
            <li className="grid grid-cols-[2.5rem_1fr] gap-2">
              <span className="font-mono text-zinc-400">02</span>
              <span>
                Accept the mutual NDA and upload a small sample of your
                operations &mdash; emails, paperwork photos, an export from
                your booking system, whatever you can pull in 10 minutes.
              </span>
            </li>
            <li className="grid grid-cols-[2.5rem_1fr] gap-2">
              <span className="font-mono text-zinc-400">03</span>
              <span>
                The report lands in your inbox within 48 hours of upload.
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-16 space-y-6 text-base leading-relaxed text-zinc-700">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-500">
            Terms
          </h2>
          <ul className="space-y-2">
            <li>Mutual NDA signed before any data is uploaded.</li>
            <li>Uploaded data is deleted within 14 days of report delivery.</li>
            <li>
              7-day refund window from delivery. If the recommendations
              aren&apos;t worth $10,000/year to your business, reply
              &ldquo;refund&rdquo; and the payment is reversed.
            </li>
            <li>No subscription. No follow-up sequence. One-time fee.</li>
          </ul>
        </div>

        <section
          id="start"
          className="mt-20 border-t border-zinc-900/10 pt-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Begin
          </h2>
          <form action={createCheckoutSession} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Name
              </label>
              <input
                name="customerName"
                required
                className="w-full rounded border border-zinc-300 bg-white px-3 py-2.5 text-base focus:border-zinc-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Business
              </label>
              <input
                name="businessName"
                required
                className="w-full rounded border border-zinc-300 bg-white px-3 py-2.5 text-base focus:border-zinc-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                Email
              </label>
              <input
                name="customerEmail"
                type="email"
                required
                className="w-full rounded border border-zinc-300 bg-white px-3 py-2.5 text-base focus:border-zinc-900 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded bg-zinc-900 px-6 py-3.5 text-base font-medium text-white transition hover:bg-zinc-800"
            >
              Continue to payment — $400
            </button>
            <p className="text-center font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Stripe checkout
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-900/10">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-xs text-zinc-500">
          <span className="font-mono">sendprop</span>
          <a href="mailto:jef@sendprop.com" className="font-mono hover:text-zinc-900">
            jef@sendprop.com
          </a>
        </div>
      </footer>
    </div>
  );
}
