import { CheckoutForm } from "./checkout-form";

export const metadata = {
  title: "sendprop — what could AI actually do for your business?",
  description:
    "Not a guess. Not a pitch. A real answer, built around the way your business runs. $400 flat. Report in 48 hours.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
        <a
          href="#start"
          className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          Get started
        </a>
      </nav>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-14 sm:pt-20 sm:pb-20">
        <h1 className="max-w-[20ch] text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          What could AI actually do for{" "}
          <span className="text-orange-500">your business?</span>
        </h1>

        <p className="mt-6 max-w-xl text-xl leading-relaxed text-zinc-600 sm:text-2xl">
          Not a guess. Not a pitch. A real answer, built around the way your
          business runs.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href="#start"
            className="group inline-flex items-center justify-center gap-3 rounded-md bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px"
          >
            Book the Audit
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <span className="text-sm text-zinc-500">
            $400 flat &middot; Report in 48 hours
          </span>
        </div>
      </section>

      {/* the pitch — merged "the moment" + "what-ifs" into one section */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 sm:text-2xl">
            Something shifted. Every industry, every size — the businesses
            figuring out where AI fits are pulling ahead. Because it frees up
            the thing that matters: your time, your attention, your ability to
            grow.
          </p>
          <div className="mt-8 space-y-3 max-w-2xl">
            <p className="border-l-2 border-orange-300 pl-5 text-lg italic text-zinc-500 sm:text-xl">
              What if every quote went out in minutes instead of days?
            </p>
            <p className="border-l-2 border-orange-300 pl-5 text-lg italic text-zinc-500 sm:text-xl">
              What if the knowledge in your head was available to your whole
              team, instantly?
            </p>
            <p className="border-l-2 border-orange-300 pl-5 text-lg italic text-zinc-500 sm:text-xl">
              What if you took on more work without adding headcount?
            </p>
          </div>
        </div>
      </section>

      {/* what you get */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
          What you get
        </h2>
        <p className="mt-1 text-lg text-zinc-500 sm:text-xl">
          Not a pitch. A map.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          A written report, specific to your business, delivered within 48
          hours.
        </p>

        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 grid-cols-1 sm:grid-cols-3">
          <div className="bg-[#fafaf7] p-6 sm:p-8">
            <div className="text-sm font-medium text-orange-600">
              Opportunities
            </div>
            <p className="mt-2 text-base font-semibold sm:text-lg">
              Every opportunity, sized in dollars
            </p>
            <p className="mt-1 text-sm text-zinc-500 sm:text-base">
              What changes, what it saves, what the first week looks like —
              specific to your revenue, your team, your workflows.
            </p>
          </div>
          <div className="bg-[#fafaf7] p-6 sm:p-8">
            <div className="text-sm font-medium text-orange-600">
              Solutions
            </div>
            <p className="mt-2 text-base font-semibold sm:text-lg">
              Shaped to how you already work
            </p>
            <p className="mt-1 text-sm text-zinc-500 sm:text-base">
              Custom recommendations — some free, some built — designed around
              your operation as it runs today.
            </p>
          </div>
          <div className="bg-[#fafaf7] p-6 sm:p-8">
            <div className="text-sm font-medium text-orange-600">Clarity</div>
            <p className="mt-2 text-base font-semibold sm:text-lg">
              What AI won&apos;t do
            </p>
            <p className="mt-1 text-sm text-zinc-500 sm:text-base">
              So you invest in the right things and skip the expensive wrong
              turns.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            How it works
          </h2>
          <p className="mt-1 text-lg text-zinc-400 sm:text-xl">
            Under an hour of your time. A roadmap in return.
          </p>

          <div className="mt-8 space-y-6 text-lg sm:text-xl">
            <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-4 sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Call</span>
              <p className="text-zinc-300">
                15 minutes. Quick conversation to see if it&apos;s a fit.
                Mutual NDA signed.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-4 sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Talk</span>
              <p className="text-zinc-300">
                Tell us about your operations. How your business runs. Where
                the time goes. What you&apos;d change if you could.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-4 sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Analysis
              </span>
              <p className="text-zinc-300">
                2 hours. Your operations examined for automation, revenue, and
                the opportunities hiding in plain sight.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-4 sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Report
              </span>
              <p className="text-zinc-300">
                Delivered within 48 hours. Written report. Branded PDF. Yours to
                keep, share, and act on.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-[100px_1fr] sm:gap-4 sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Review
              </span>
              <p className="text-zinc-300">
                30-minute walkthrough. Every recommendation explained. Your
                questions answered. Next steps laid out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* who this is for */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
          Who this is for
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          You&apos;ve built something real. Now you&apos;re hearing
          &ldquo;AI&rdquo; from every direction — and you want someone to look
          at your operation and tell you what&apos;s worth doing.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
          Businesses running $500K–$5M in revenue — whether the work runs on
          job sites, kitchens, storefronts, client calls, or spreadsheets. If
          your team spends time on tasks that should be faster by now,
          there&apos;s probably a reason.
        </p>
      </section>

      {/* faq */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Common questions
          </h2>
          <dl className="mt-6 space-y-6 max-w-2xl">
            <div>
              <dt className="text-base font-semibold italic sm:text-lg">
                We&apos;ve played with ChatGPT. How is this different?
              </dt>
              <dd className="mt-1 text-base text-zinc-600 leading-relaxed sm:text-lg">
                That&apos;s the perfect starting point. You&apos;ve seen
                what&apos;s possible — the audit maps out how to wire it into
                the way your business operates.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold italic sm:text-lg">
                Is this a sales pitch for software?
              </dt>
              <dd className="mt-1 text-base text-zinc-600 leading-relaxed sm:text-lg">
                No. Sometimes the right answer is a free tool you set up
                yourself. Sometimes it&apos;s something custom. The report tells
                you which is which.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold italic sm:text-lg">
                What happens after the audit?
              </dt>
              <dd className="mt-1 text-base text-zinc-600 leading-relaxed sm:text-lg">
                The report is yours. Every recommendation includes steps your
                team can take on their own. If something needs building,
                fixed-price proposals are available. No retainers. No open-ended
                consulting.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* form — closing CTA folded in */}
      <section id="start" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Book the Audit.
              </h2>
              <p className="mt-3 text-lg text-zinc-500 sm:text-xl">
                $400 flat. Under an hour of your time. Report in 48 hours.
              </p>

              <div className="mt-6 space-y-3 text-base text-zinc-500">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                  NDA before you share anything
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                  Data deleted 14 days after delivery
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                  Full refund if it&apos;s not worth $10,000/year
                </div>
              </div>

              <p className="mt-6 text-base text-zinc-500">
                <a
                  href="mailto:jef@sendprop.com"
                  className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                >
                  jef@sendprop.com
                </a>
              </p>
            </div>

            <CheckoutForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-[#fafaf7]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-zinc-500">
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
            <a href="/accessibility" className="hover:text-zinc-900">
              Accessibility
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
