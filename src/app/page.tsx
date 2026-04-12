import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "sendprop — your business, but faster",
  description:
    "We study how your business runs and show you three specific upgrades ranked by impact. 48 hours. $400 flat. Money back if it's not worth it.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
      {/* nav — barely there */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
        <a
          href="#start"
          className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
        >
          $400 &mdash; start now
        </a>
      </nav>

      {/* hero — one idea, massive */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-28 sm:pb-32">
        <h1 className="max-w-[22ch] text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1.0] tracking-[-0.035em]">
          Your business,{" "}
          <span className="text-orange-500">but faster.</span>
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-lg space-y-6 text-lg leading-relaxed text-zinc-600">
            <p>
              You built something that works. We look at how it runs
              today and show you the version where the quoting takes
              minutes instead of hours, the scheduling runs itself,
              and the follow-ups never slip through the cracks.
            </p>
            <p className="text-zinc-900 font-medium">
              48 hours. Three specific upgrades, ranked by impact, with
              exact steps and costs. A short report that shows you
              what&apos;s possible.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 lg:items-end">
            <a
              href="#start"
              className="group inline-flex items-center gap-3 rounded-md bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 active:translate-y-px"
            >
              $400 &mdash; show me what&apos;s possible
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <p className="text-sm text-zinc-400 lg:text-right">
              No calls. No meetings. Refund if it&apos;s not worth it.
            </p>
          </div>
        </div>
      </section>

      {/* the deal — horizontal scroll of what they actually get */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400">
            What you get for $400
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
            <div className="bg-white p-8">
              <div className="text-3xl font-semibold tracking-tight">3</div>
              <div className="mt-1 text-sm font-medium text-zinc-900">
                specific fixes
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Not theory. Not &ldquo;consider exploring AI.&rdquo; Three
                concrete upgrades to how your operation runs,
                ranked by impact.
              </p>
            </div>
            <div className="bg-white p-8">
              <div className="text-3xl font-semibold tracking-tight">4</div>
              <div className="mt-1 text-sm font-medium text-zinc-900">
                page report
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Each upgrade includes what changes, how to do it, what it
                costs, and the steps to get there this week. Two you can
                handle yourself. One we can build for you.
              </p>
            </div>
            <div className="bg-white p-8">
              <div className="text-3xl font-semibold tracking-tight">48h</div>
              <div className="mt-1 text-sm font-medium text-zinc-900">
                turnaround
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                You spend ten minutes uploading. We spend two days going
                through everything. Report in your inbox, done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* who this is for — real examples, not personas */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Picture your
              <br />
              business in 6 months.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-500">
              The tools exist to get there. You just need someone to
              tell you which ones and in what order.
            </p>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-zinc-600 lg:col-span-3">
            <div className="border-l-2 border-orange-300 pl-6">
              Estimates that used to take your office manager an hour
              now take five minutes &mdash; one system, auto-populated,
              sent before the customer&apos;s even off the phone.
            </div>
            <div className="border-l-2 border-orange-300 pl-6">
              Appointments book themselves. No phone tag, no back-and-forth
              emails. Your front desk handles the work that actually
              needs a human.
            </div>
            <div className="border-l-2 border-orange-300 pl-6">
              Friday afternoon invoicing? Gone. It runs in the background
              now. Someone on your team just got five hours a week back.
            </div>
            <p className="pt-2 font-medium text-zinc-900">
              That&apos;s what the report maps out &mdash; the specific
              path from where you are to where you could be.
            </p>
          </div>
        </div>
      </section>

      {/* how it works — inline, not cards */}
      <section className="border-y border-zinc-200 bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            How it works
          </h2>

          <div className="mt-12 space-y-12 text-lg">
            <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Pay $400
              </span>
              <p className="text-zinc-300">
                Stripe checkout. Thirty seconds. You get a private upload
                link and a mutual NDA &mdash; your data is protected before
                you share a single file.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Share
              </span>
              <p className="text-zinc-300">
                Customer emails, invoices, screenshots of your booking
                system, your quoting workflow &mdash; whatever shows how
                your operation runs today. Ten minutes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:items-baseline">
              <span className="text-sm font-medium text-orange-400">
                Read
              </span>
              <p className="text-zinc-300">
                48 hours later, a 4-page PDF in your inbox. Three moves
                you can make this month, with exact steps and costs.
                That&apos;s the whole thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* guarantee — one strong statement */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
            If the report doesn&apos;t show you something valuable,
            reply &ldquo;refund&rdquo; and we put the money back on
            your card. No questions. No conversation. Within 7 days.
          </p>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-zinc-500">
            Your data is locked behind a mutual NDA. We delete everything
            14 days after delivery. No subscriptions, no drip campaigns,
            no follow-up.
          </p>
        </div>
      </section>

      {/* CTA — the form */}
      <section id="start" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                Ready?
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-500">
                Three fields. One checkout. Upload your data, and the
                report lands in your inbox within 48 hours.
              </p>

              <div className="mt-12 space-y-4 text-sm text-zinc-400">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  Mutual NDA before you upload anything
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  Data deleted 14 days after delivery
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  Full refund, no questions, within 7 days
                </div>
              </div>

              <p className="mt-12 text-sm text-zinc-400">
                Questions?{" "}
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
                    Your name
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
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 active:translate-y-px active:shadow-none"
              >
                Pay $400 &amp; get started
              </button>
              <p className="mt-4 text-center text-sm text-zinc-400">
                Card, Apple Pay, Google Pay. Takes 30 seconds.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-[#fafaf7]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-zinc-400">
          <span>
            <span className="font-semibold text-zinc-900">sendprop</span>
            <span className="text-orange-500">.</span>
          </span>
          <a href="mailto:jef@sendprop.com" className="hover:text-zinc-900">
            jef@sendprop.com
          </a>
        </div>
      </footer>
    </div>
  );
}
