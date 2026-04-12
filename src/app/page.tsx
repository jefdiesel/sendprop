import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "sendprop — your business, but faster",
  description:
    "Three upgrades to how your business runs. Ranked by impact, with exact steps. 48 hours. $400.",
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
        <h1 className="max-w-[22ch] text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.0] tracking-[-0.035em]">
          Your business,{" "}
          <span className="text-orange-500">but faster.</span>
        </h1>

        <p className="mt-10 max-w-xl text-xl leading-relaxed text-zinc-600">
          We look at how your operation runs and show you three
          things that could be faster, cheaper, or automatic.
          Ranked by impact. Exact steps. 48 hours.
        </p>

        <div className="mt-10 flex items-center gap-8">
          <a
            href="#start"
            className="group inline-flex items-center gap-3 rounded-md bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px"
          >
            $400 &mdash; show me
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <span className="text-sm text-zinc-400">
            Money back if it&apos;s not worth it.
          </span>
        </div>
      </section>

      {/* what you get */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
            <div className="bg-white p-8">
              <div className="text-3xl font-semibold tracking-tight">3</div>
              <div className="mt-1 text-sm font-medium">upgrades</div>
              <p className="mt-3 text-sm text-zinc-500">
                Specific to your business. Not theory.
              </p>
            </div>
            <div className="bg-white p-8">
              <div className="text-3xl font-semibold tracking-tight">4</div>
              <div className="mt-1 text-sm font-medium">pages</div>
              <p className="mt-3 text-sm text-zinc-500">
                Steps, costs, priority order. Act on it this week.
              </p>
            </div>
            <div className="bg-white p-8">
              <div className="text-3xl font-semibold tracking-tight">48h</div>
              <div className="mt-1 text-sm font-medium">turnaround</div>
              <p className="mt-3 text-sm text-zinc-500">
                You share for 10 minutes. We deliver in two days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* what it looks like */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              6 months
              <br />
              from now.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-zinc-600 lg:col-span-3">
            <div className="border-l-2 border-orange-300 pl-6">
              Estimates go out in minutes, not hours.
            </div>
            <div className="border-l-2 border-orange-300 pl-6">
              Appointments book themselves.
            </div>
            <div className="border-l-2 border-orange-300 pl-6">
              Invoicing runs in the background. Someone on your team
              just got Friday afternoons back.
            </div>
            <p className="pt-2 text-sm font-medium text-zinc-900">
              The report shows you the path from here to there.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="space-y-10 text-lg">
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Pay</span>
              <p className="text-zinc-300">
                $400 via Stripe. Mutual NDA. Private upload link.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Share</span>
              <p className="text-zinc-300">
                Emails, invoices, screenshots &mdash; whatever shows how
                your day runs. Ten minutes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[100px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">Read</span>
              <p className="text-zinc-300">
                4-page PDF, 48 hours. Three moves, ranked, with steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* guarantee */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="mx-auto max-w-xl text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Not worth it? Reply &ldquo;refund.&rdquo;
          <br />
          Money back in 7 days. No conversation.
        </p>
      </section>

      {/* form */}
      <section id="start" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                Let&apos;s go.
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
                  Full refund, no questions
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

            <form
              action={createCheckoutSession}
              className="rounded-lg border border-zinc-200 bg-[#fafaf7] p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Name
                  </label>
                  <input
                    name="customerName"
                    required
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Business
                  </label>
                  <input
                    name="businessName"
                    required
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    name="customerEmail"
                    type="email"
                    required
                    className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md bg-zinc-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px"
              >
                Pay $400
              </button>
              <p className="mt-3 text-center text-sm text-zinc-400">
                Card, Apple Pay, Google Pay.
              </p>
            </form>
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
