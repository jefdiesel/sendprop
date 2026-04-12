import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop",
  description:
    "We look at your business and find the money you're leaving on the table. $400. 48 hours. No meetings.",
};

const STATS = [
  { label: "Price", value: "$400" },
  { label: "Turnaround", value: "48h" },
  { label: "Meetings", value: "0" },
  { label: "Guarantee", value: "$10k+" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
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
            $400
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-zinc-900/15 bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-700 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
            Now booking
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-7xl">
            We look at your business and find the money you&apos;re{" "}
            <span className="text-orange-600">leaving on the table.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-700 sm:text-2xl">
            Not &ldquo;AI consulting.&rdquo; Not a Zoom call where some guy
            tells you to use ChatGPT. We actually dig into how your shop
            runs and come back with a written report that says: here&apos;s
            where the money is, here&apos;s how to get it, here&apos;s what
            to do first.
          </p>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#start"
              className="group inline-flex items-center gap-3 rounded-md bg-orange-500 px-8 py-4 text-base font-semibold text-zinc-950 shadow-sm transition hover:bg-orange-400 active:translate-y-px"
            >
              See what we&apos;d find
              <span className="text-zinc-900/40">·</span>
              <span className="font-mono tabular-nums">$400</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="text-sm text-zinc-500">
              If we don&apos;t find $10k in savings, you pay nothing.
            </span>
          </div>
        </div>

        {/* stat strip */}
        <div className="relative grid grid-cols-2 border-t border-zinc-200 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 ${
                i < STATS.length - 1 ? "border-r border-zinc-200" : ""
              } ${i < 2 ? "border-b border-zinc-200 sm:border-b-0" : ""}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {s.label}
              </div>
              <div className="mt-2 font-mono text-3xl font-semibold tabular-nums tracking-tight">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* the pitch */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-sm font-medium text-orange-600">
              Why this exists
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              You didn&apos;t build your business to spend half of it on
              paperwork.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 lg:col-span-8">
            <p>
              Somewhere in your shop right now, someone&apos;s spending real
              hours on something a machine could handle in seconds. The
              emails, the invoices, the quoting, the scheduling, the follow-ups
              &mdash; the stuff you&apos;re doing at 9pm that you shouldn&apos;t
              be doing. You can feel it. You just can&apos;t see it clearly
              enough to know what to do about it.
            </p>
            <p>
              That&apos;s us. We look at the messy reality of how your business
              actually operates &mdash; not the org chart, not the mission
              statement, the actual emails and invoices and daily grind &mdash;
              and come back with three things you can do about it. Each one
              priced out. Each one with the steps. Two you can do yourself
              this week. One we can build for you.
            </p>
            <p className="font-medium text-zinc-900">
              No calls. No pitch deck. No one trying to sell you a
              subscription. Just a document that tells you the truth.
            </p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-orange-600">
              How it works
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              You spend ten minutes. We handle the rest.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="group">
              <div className="font-mono text-sm tabular-nums text-orange-500">
                01
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Pay
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Stripe checkout, $400 flat. Takes about thirty seconds. You
                get a private upload link and a mutual NDA.
              </p>
            </div>
            <div className="group">
              <div className="font-mono text-sm tabular-nums text-orange-500">
                02
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Upload
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                Drop in a sample of the real stuff &mdash; customer emails,
                vendor emails, a phone photo of your desk, an export from your
                booking system. Whatever you can pull in ten minutes.
              </p>
            </div>
            <div className="group">
              <div className="font-mono text-sm tabular-nums text-orange-500">
                03
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Get the report
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">
                48 hours later, a 4-page PDF lands in your inbox. Three things
                to do, ranked by how much money they save you, with the exact
                steps to make each one happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* guarantee */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-sm font-medium text-orange-600">
              The guarantee
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              We eat the risk. Not you.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
              <p>
                If the report doesn&apos;t identify at least $10,000 a year in
                savings for your business, you reply &ldquo;refund&rdquo; and
                we send the money back. Not credits. Not a discount on the
                next thing. Your actual money, back on your card, within 7 days
                of delivery. No questions, no conversation, no guilt trip.
              </p>
              <p>
                Your data is protected by a mutual NDA signed before you
                upload anything. We delete everything within 14 days of
                delivering the report. No subscriptions, no follow-up
                sequences, no &ldquo;just circling back.&rdquo;
              </p>
              <p className="font-medium text-zinc-900">
                The report is the whole product. If it&apos;s not worth it,
                it&apos;s free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                Let&apos;s see what we find.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
                Three fields, one checkout, then you upload the data.
                We&apos;ll have your report back in 48 hours.
              </p>
              <p className="mt-10 text-sm text-zinc-500">
                Questions?{" "}
                <a
                  href="mailto:jef@sendprop.com"
                  className="text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-300"
                >
                  jef@sendprop.com
                </a>
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
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Business
                    </label>
                    <input
                      name="businessName"
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <input
                      name="customerEmail"
                      type="email"
                      required
                      className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-orange-500 px-6 py-4 text-base font-semibold text-zinc-950 shadow-sm transition hover:bg-orange-400 active:translate-y-px active:shadow-none"
                >
                  Continue to Stripe
                  <span className="text-zinc-900/40">·</span>
                  <span className="font-mono tabular-nums">$400</span>
                </button>
                <p className="mt-4 text-center text-sm text-zinc-500">
                  Card, Apple Pay, Google Pay. Refund within 7 days, no
                  questions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-[#fafaf7]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
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
