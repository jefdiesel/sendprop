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
          $400
        </a>
      </nav>

      {/* hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-28 sm:pb-32">
        <h1 className="max-w-[24ch] text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.0] tracking-[-0.035em]">
          What could AI actually do for{" "}
          <span className="text-orange-500">your business?</span>
        </h1>

        <p className="mt-10 max-w-xl text-xl leading-relaxed text-zinc-600">
          Not a guess. Not a pitch. A real answer, built around the way your
          business runs.
        </p>

        <div className="mt-10 flex items-center gap-8">
          <a
            href="#start"
            className="group inline-flex items-center gap-3 rounded-md bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px"
          >
            Book the Audit
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <span className="text-sm text-zinc-400">
            $400 flat &middot; Report in 48 hours
          </span>
        </div>
      </section>

      {/* the moment */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Something shifted.
          </h2>
          <p className="mt-2 text-lg text-zinc-400">You can feel it.</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
            Every industry, every size. The businesses figuring out where AI
            fits — in their operation, with their team — are pulling ahead. Not
            because the technology is magic. Because it frees up the thing that
            matters: your time, your attention, your ability to grow.
          </p>
          <div className="mt-10 space-y-6 max-w-2xl">
            <div className="border-l-2 border-orange-300 pl-6 text-lg italic text-zinc-600">
              What if every quote went out in minutes instead of days?
            </div>
            <div className="border-l-2 border-orange-300 pl-6 text-lg italic text-zinc-600">
              What if the knowledge in your head was available to your whole
              team, instantly?
            </div>
            <div className="border-l-2 border-orange-300 pl-6 text-lg italic text-zinc-600">
              What if you took on more work without adding headcount?
            </div>
          </div>
        </div>
      </section>

      {/* what you get */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          What you get
        </h2>
        <p className="mt-2 text-lg text-zinc-400">Not a pitch. A map.</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          A written report, specific to your business, delivered within 48
          hours.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
          <div className="bg-[#fafaf7] p-8">
            <div className="text-sm font-medium text-orange-500">
              Opportunities
            </div>
            <p className="mt-3 font-semibold">
              Every opportunity, sized in dollars
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              What changes, what it saves, what the first week looks like —
              specific to your revenue, your team, your workflows.
            </p>
          </div>
          <div className="bg-[#fafaf7] p-8">
            <div className="text-sm font-medium text-orange-500">
              Solutions
            </div>
            <p className="mt-3 font-semibold">
              Shaped to how you already work
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Custom recommendations — some free, some built — designed around
              your operation as it runs today.
            </p>
          </div>
          <div className="bg-[#fafaf7] p-8">
            <div className="text-sm font-medium text-orange-500">Clarity</div>
            <p className="mt-3 font-semibold">What AI won&apos;t do</p>
            <p className="mt-2 text-sm text-zinc-500">
              So you invest in the right things and skip the expensive wrong
              turns.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            How it works
          </h2>
          <p className="mt-2 text-lg text-zinc-500">
            Under an hour of your time. A roadmap in return.
          </p>

          <div className="mt-12 space-y-10 text-lg">
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Call</span>
              <p className="text-zinc-300">
                15 minutes. Quick conversation to see if it&apos;s a fit.
                Mutual NDA signed.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Talk</span>
              <p className="text-zinc-300">
                20 minutes about your operations. How your business runs. Where
                the time goes. What you&apos;d change if you could.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Analysis
              </span>
              <p className="text-zinc-300">
                2 hours. Your operations examined for automation, revenue, and
                the opportunities hiding in plain sight.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Report
              </span>
              <p className="text-zinc-300">
                Delivered within 48 hours. Written report. Branded PDF. Yours to
                keep, share, and act on.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
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
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Who this is for
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          You&apos;ve built something real. Now you&apos;re hearing
          &ldquo;AI&rdquo; from every direction — and you want someone to look
          at your operation and tell you what&apos;s worth doing.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
          Businesses running $500K–$5M in revenue — whether the work runs on
          job sites, kitchens, storefronts, client calls, or spreadsheets. If
          your team spends time on tasks that should be faster by now,
          there&apos;s probably a reason.
        </p>
      </section>

      {/* faq */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Common questions
          </h2>
          <dl className="mt-12 space-y-10 max-w-2xl">
            <div>
              <dt className="text-base font-semibold italic">
                We&apos;ve played with ChatGPT. How is this different?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                That&apos;s the perfect starting point. You&apos;ve seen
                what&apos;s possible — the audit maps out how to wire it into
                the way your business operates.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold italic">
                Is this a sales pitch for software?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                No. Sometimes the right answer is a free tool you set up
                yourself. Sometimes it&apos;s something custom. The report tells
                you which is which.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold italic">
                What happens after the audit?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                The report is yours. Every recommendation includes steps your
                team can take on their own. If something needs building,
                fixed-price proposals are available. No retainers. No open-ended
                consulting.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* closing cta */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-lg text-zinc-500">
            $400 flat. Under an hour of your time. A written report in 48 hours.
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            If the recommendations aren&apos;t collectively worth $10,000/year
            to your business, full refund.
          </p>
        </div>
      </section>

      {/* form */}
      <section id="start" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                Book the Audit.
              </h2>

              <div className="mt-10 space-y-3 text-sm text-zinc-400">
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
                  Full refund if it&apos;s not worth it
                </div>
              </div>

              <p className="mt-10 text-sm text-zinc-400">
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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-400">
          <span className="font-semibold text-zinc-900">
            sendprop<span className="text-orange-500">.</span>
          </span>
          <a href="mailto:jef@sendprop.com" className="hover:text-zinc-900">
            jef@sendprop.com
          </a>
        </div>
      </footer>
    </div>
  );
}
