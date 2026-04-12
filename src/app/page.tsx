import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop — AI Audit",
  description:
    "A $400 written report identifying the three highest-ROI places to use AI in your business. Delivered in 48 hours. No meetings.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* nav */}
      <nav className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="text-sm font-semibold tracking-tight">
            sendprop<span className="text-orange-500">.</span>
          </a>
          <a
            href="#start"
            className="rounded-md bg-orange-500 px-3.5 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-orange-400"
          >
            Start an audit
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-7xl">
            Every week you wait is another week <span className="text-orange-600">paying people to do work software should be doing.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-600 sm:text-2xl">
            We&apos;ll look at how your business actually runs and tell you
            exactly where the money is going &mdash; and which parts a
            computer can take over this month.
          </p>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3.5 text-base font-semibold text-zinc-950 transition hover:bg-orange-400"
            >
              Get your audit
              <span className="text-zinc-900/40">·</span>
              <span className="font-mono tabular-nums">$400</span>
            </a>
            <span className="text-sm text-zinc-500">
              If we can&apos;t find $10k worth of savings, you get your money back.
            </span>
          </div>
        </div>
      </section>

      {/* what it is */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-sm font-medium text-orange-600">
              The problem
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              You already know AI matters. You just don&apos;t have 40 hours
              to figure out where.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 lg:col-span-8">
            <p>
              Somewhere in your business right now, someone is spending real
              hours on something a machine could handle in seconds. You can
              feel it. You just can&apos;t see it clearly enough to act on it.
            </p>
            <p>
              That&apos;s what the audit is for. You show us a slice of your
              operations &mdash; the emails, the invoices, the daily grind &mdash;
              and we come back with the three biggest places you&apos;re
              bleeding time and money. Each one ranked, priced out, and ready
              to act on. Two you can do yourself this week. One we can build
              for you.
            </p>
            <p>
              No calls. No pitch deck. No one trying to sell you a subscription.
              Just a document that tells you the truth about your business.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-orange-600">How it works</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              You spend ten minutes. We do the rest.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="font-mono text-sm tabular-nums text-zinc-400">
                01
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Pay
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Stripe checkout, $400 flat. You receive a private upload link
                and a mutual NDA to sign with one click.
              </p>
            </div>
            <div>
              <div className="font-mono text-sm tabular-nums text-zinc-400">
                02
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Upload
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Drop in a small sample of your operations &mdash; emails,
                paperwork photos, an export from your booking system, whatever
                you can pull in ten minutes. The more we see, the better the
                report.
              </p>
            </div>
            <div>
              <div className="font-mono text-sm tabular-nums text-zinc-400">
                03
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Receive
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Within 48 hours, a 4-page PDF lands in your inbox. Three
                ranked recommendations, real dollar figures, step-by-step
                actions. Refund window opens for 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* terms */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-sm font-medium text-orange-600">What you&apos;re not signing up for</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              No contracts. No surprises. No bullshit.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-zinc-200 border-y border-zinc-200">
              <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm font-medium text-zinc-500">Price</dt>
                <dd className="text-base text-zinc-800 sm:col-span-2">
                  $400 flat, one time. Paid up front via Stripe.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm font-medium text-zinc-500">Delivery</dt>
                <dd className="text-base text-zinc-800 sm:col-span-2">
                  4-page PDF in your inbox within 48 hours of upload.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm font-medium text-zinc-500">NDA</dt>
                <dd className="text-base text-zinc-800 sm:col-span-2">
                  Mutual, signed before any data is uploaded. Your data is
                  deleted within 14 days of report delivery.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm font-medium text-zinc-500">Refund</dt>
                <dd className="text-base text-zinc-800 sm:col-span-2">
                  7 days from delivery. If the report isn&apos;t worth $10,000
                  a year to your business, reply &ldquo;refund&rdquo; and the
                  payment is reversed. No questions, no friction.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm font-medium text-zinc-500">No upsell</dt>
                <dd className="text-base text-zinc-800 sm:col-span-2">
                  No subscription, no follow-up sequence, no &ldquo;circling
                  back.&rdquo; The audit is the product.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                Find out what you&apos;re missing.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
                Three fields, one checkout, then you upload the data.
                Takes about ninety seconds. Report back in 48 hours.
              </p>
              <p className="mt-10 text-sm text-zinc-500">
                Questions? Email{" "}
                <a
                  href="mailto:jef@sendprop.com"
                  className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
                >
                  jef@sendprop.com
                </a>
                .
              </p>
            </div>

            <div className="lg:col-span-7">
              <form
                action={createCheckoutSession}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Your name
                    </label>
                    <input
                      name="customerName"
                      placeholder="Mike Petrov"
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Business
                    </label>
                    <input
                      name="businessName"
                      placeholder="Midway Insurance Agency"
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <input
                      name="customerEmail"
                      type="email"
                      placeholder="mike@midway.example"
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-white/40 focus:bg-white/10 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-4 text-base font-semibold text-zinc-950 transition hover:bg-orange-400"
                >
                  Continue to Stripe
                  <span className="text-zinc-900/40">·</span>
                  <span className="font-mono tabular-nums">$400</span>
                </button>
                <p className="mt-4 text-center text-xs text-zinc-500">
                  Card, Apple Pay, Google Pay. Secure checkout via Stripe.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
          <span className="font-semibold text-zinc-900">sendprop</span>
          <a
            href="mailto:jef@sendprop.com"
            className="hover:text-zinc-900"
          >
            jef@sendprop.com
          </a>
        </div>
      </footer>
    </div>
  );
}
