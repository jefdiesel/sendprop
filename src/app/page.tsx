import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop — find $10k of automatable work in your business",
  description:
    "A $400 written report on the 3 highest-ROI places to automate work in your business. 48 hours. No meeting. Refund if not worth $10k/year.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-zinc-900 antialiased selection:bg-orange-200">
      {/* nav */}
      <nav className="border-b border-zinc-900/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <a href="/" className="font-semibold tracking-tight">
            sendprop
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-orange-500" />
          </a>
          <a
            href="#start"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
          >
            $400 →
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="border-b border-zinc-900/10">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            I&apos;ll find <span className="text-orange-600">$10k of busywork</span> in
            your business that a computer should be doing.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-700 sm:text-2xl">
            $400 flat. A 4-page written report in 48 hours. No meeting, no
            sales pitch, full refund if I don&apos;t deliver.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="#start"
              className="group inline-flex items-center gap-3 rounded-md bg-zinc-900 px-7 py-4 text-base font-semibold text-white transition hover:bg-zinc-800"
            >
              Start →
            </a>
            <span className="font-mono text-sm text-zinc-500">
              Pay → upload data → get report
            </span>
          </div>
        </div>
      </section>

      {/* what you get */}
      <section className="border-b border-zinc-900/10 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="font-mono text-xs uppercase tracking-wider text-orange-600">
            What you get
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three things to do, in priority order, with the math.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-700">
            <p>
              You upload a small sample of how your business actually runs &mdash;
              5 customer emails, 5 vendor emails, a phone photo of whatever
              paperwork is on your desk. Takes you ten minutes.
            </p>
            <p>
              I read it, find the three biggest places a computer should be
              doing the work instead of you, and write it up as a 4-page PDF
              with real dollar figures. Two recommendations come with the
              exact prompts so you can act on them this week. One is a custom
              build I could ship you for a fixed price if you want it.
            </p>
          </div>
        </div>
      </section>

      {/* example */}
      <section className="border-b border-zinc-900/10">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="font-mono text-xs uppercase tracking-wider text-orange-600">
            What a recommendation looks like
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Specific. With the math.
          </h2>

          <div className="mt-10 rounded-lg border-l-4 border-orange-500 bg-white p-8 shadow-sm">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Recommendation 02 / 03 — Independent insurance agency
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Stop hand-typing renewal notices.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              Your office sends ~80 policy renewal notices a month. Each one
              takes your front-desk staff 12&ndash;15 minutes to look up,
              personalize, and email. That&apos;s about{" "}
              <span className="font-mono font-semibold text-zinc-900">
                17 hours/week
              </span>{" "}
              at a loaded cost of{" "}
              <span className="font-mono font-semibold text-zinc-900">
                ~$22/hr
              </span>{" "}
              &mdash; roughly{" "}
              <span className="font-mono font-semibold text-zinc-900">
                $19,400/year
              </span>{" "}
              of admin labor on a task a Claude-based template engine handles
              in 4 seconds per notice.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Annual savings
                </dt>
                <dd className="mt-1 font-mono text-lg font-semibold tabular-nums">
                  $19,400
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Effort
                </dt>
                <dd className="mt-1 font-mono text-lg font-semibold">DIY</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Setup time
                </dt>
                <dd className="mt-1 font-mono text-lg font-semibold tabular-nums">
                  ~3 hours
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Tools needed
                </dt>
                <dd className="mt-1 font-mono text-lg font-semibold">
                  Claude
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-zinc-500">
              The actual report includes the prompt, the template, and a
              walk-through of how to wire it up. You&apos;d get two more
              recommendations like this one, ranked by ROI.
            </p>
          </div>
        </div>
      </section>

      {/* the offer */}
      <section
        id="start"
        className="border-b border-zinc-900/10 bg-zinc-950 text-zinc-50"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-orange-400">
                The offer
              </div>
              <h2 className="mt-3 text-5xl font-semibold tracking-tight">
                <span className="text-orange-400">$400.</span> One time.
              </h2>
              <ul className="mt-10 space-y-4 text-base">
                <li className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-orange-400">→</span>
                  <span>
                    <strong className="text-white">48-hour delivery</strong>{" "}
                    from the moment you upload your data.
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-orange-400">→</span>
                  <span>
                    <strong className="text-white">Mutual NDA.</strong> Your
                    data is deleted within 14 days.
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-orange-400">→</span>
                  <span>
                    <strong className="text-white">Refund guarantee.</strong>{" "}
                    7 days. If the report isn&apos;t worth $10k/year to you,
                    reply &ldquo;refund&rdquo; and I send the money back.
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-orange-400">→</span>
                  <span>
                    <strong className="text-white">No meeting.</strong> The
                    whole thing is async. The report is the deliverable.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <form action={createCheckoutSession} className="space-y-4">
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Your name
                  </label>
                  <input
                    name="customerName"
                    placeholder="Mike Petrov"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-3 py-2.5 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Business name
                  </label>
                  <input
                    name="businessName"
                    placeholder="Midway Insurance"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-3 py-2.5 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Your email
                  </label>
                  <input
                    name="customerEmail"
                    type="email"
                    placeholder="mike@midway.example"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-3 py-2.5 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-3 rounded bg-orange-500 px-6 py-4 text-base font-semibold text-zinc-950 transition hover:bg-orange-400"
                >
                  Pay $400 and start
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Secure payment via Stripe
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#f8f7f4]">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <div>
            <span className="font-semibold text-zinc-900">sendprop</span>
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-orange-500" />
          </div>
          <div className="font-mono text-xs">
            <a href="mailto:jef@sendprop.com" className="hover:text-zinc-900">
              jef@sendprop.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
