import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop — AI Audit",
  description:
    "A written audit of your business that tells you exactly what to automate next. $400. 48 hours. No meeting.",
};

const STATS = [
  { label: "Price", value: "$400" },
  { label: "Turnaround", value: "48h" },
  { label: "Meetings", value: "0" },
  { label: "Format", value: "PDF" },
];

const QUESTIONS = [
  {
    n: "01",
    q: "What busywork should a computer be doing?",
    a: "The repetitive tasks eating your team's hours that don't need a human.",
  },
  {
    n: "02",
    q: "What's the highest-leverage AI play in your shop?",
    a: "Ranked by ROI per dollar of effort. With the math.",
  },
  {
    n: "03",
    q: "What should AI never touch in your business?",
    a: "The places automation makes things worse. Most audits skip this. Yours won't.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
      {/* nav */}
      <nav className="border-b border-zinc-900/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="font-semibold tracking-tight">
            sendprop<span className="text-orange-500">.</span>
          </a>
          <a
            href="#start"
            className="font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-zinc-900"
          >
            Get the audit →
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="relative overflow-hidden border-b border-zinc-900/10">
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
            Now booking audits for Q2
          </div>

          <h1 className="font-semibold leading-[0.92] tracking-[-0.025em]">
            <span className="block text-6xl sm:text-8xl">Know what</span>
            <span className="block text-6xl sm:text-8xl">
              to <span className="text-orange-600">automate</span>.
            </span>
            <span className="mt-3 block text-6xl sm:text-8xl text-zinc-400">
              In 48 hours.
            </span>
          </h1>

          <p className="mt-12 max-w-2xl text-xl leading-relaxed text-zinc-700 sm:text-2xl">
            A written audit of your operations that names the three highest-ROI
            places to use AI in your business. Specific. With the math.
            Yours forever.
          </p>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#start"
              className="group inline-flex items-center gap-3 rounded-md bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800"
            >
              Start the audit
              <span className="rounded bg-white/15 px-2 py-0.5 font-mono text-xs">
                $400
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              No meeting · No upsell · Refund guarantee
            </span>
          </div>
        </div>

        {/* stat strip */}
        <div className="relative grid grid-cols-2 border-t border-zinc-900/10 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-7 ${
                i < STATS.length - 1 ? "border-r border-zinc-900/10" : ""
              } ${i < 2 ? "border-b border-zinc-900/10 sm:border-b-0" : ""}`}
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

      {/* the three questions */}
      <section className="border-b border-zinc-900/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="mb-16 max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-wider text-orange-600">
              Every audit answers three questions
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              The same three. Answered for your shop, specifically.
            </h2>
          </div>

          <div className="space-y-px">
            {QUESTIONS.map((item) => (
              <div
                key={item.n}
                className="group grid grid-cols-[3rem_1fr] gap-6 border-t border-zinc-900/10 py-10 transition sm:grid-cols-[5rem_1fr] sm:gap-12"
              >
                <div className="font-mono text-2xl font-medium text-orange-600 sm:text-3xl">
                  {item.n}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.q}
                  </h3>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-zinc-600">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-900/10" />
          </div>
        </div>
      </section>

      {/* what's in the report */}
      <section className="border-b border-zinc-900/10">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-orange-600">
              The deliverable
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              A 4-page PDF.
            </h2>
            <p className="mt-6 font-mono text-sm text-zinc-500">
              In your inbox in 48 hours.
            </p>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-zinc-700">
            <p>
              Three recommendations, ranked by ROI. Each one names the task,
              shows the math (hours per week × loaded cost), and gives the
              annual dollar value if you fix it.
            </p>
            <p>
              Two of the three are <strong className="text-zinc-900">do it yourself</strong> &mdash; the report includes the
              exact prompts, the tools, and a step-by-step setup guide. You can
              act on them this week without hiring anyone.
            </p>
            <p>
              The third is a <strong className="text-zinc-900">custom build</strong> available as a separate
              fixed-price engagement. You decide if you want it. No pressure,
              no follow-up sequence, no &ldquo;circling back.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* the offer */}
      <section
        id="start"
        className="border-b border-zinc-900/10 bg-zinc-950 text-zinc-50"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-orange-400">
                Begin
              </div>
              <h2 className="mt-4 text-6xl font-semibold tracking-[-0.025em] sm:text-7xl">
                <span className="text-orange-400">$400.</span>
                <br />
                One time.
              </h2>
              <p className="mt-8 max-w-md text-xl leading-relaxed text-zinc-300">
                Fill in three fields, pay through Stripe, get your upload link.
                The whole transaction takes about ninety seconds.
              </p>

              <ul className="mt-12 space-y-5 text-base">
                <li className="flex items-start gap-4">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <strong className="text-white">48-hour delivery.</strong>{" "}
                    From the moment you upload your data.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <strong className="text-white">Mutual NDA.</strong>{" "}
                    Signed before any data is uploaded. Data deleted within 14 days.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <strong className="text-white">Refund guarantee.</strong>{" "}
                    7 days. Reply &ldquo;refund&rdquo; and the payment is reversed. No questions.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <strong className="text-white">No upsell trap.</strong>{" "}
                    Zero subscriptions. Zero follow-up emails. The audit is the product.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <form action={createCheckoutSession} className="space-y-5">
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Your name
                  </label>
                  <input
                    name="customerName"
                    placeholder="Mike Petrov"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Business
                  </label>
                  <input
                    name="businessName"
                    placeholder="Midway Insurance Agency"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Email
                  </label>
                  <input
                    name="customerEmail"
                    type="email"
                    placeholder="mike@midway.example"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-3 flex w-full items-center justify-center gap-3 rounded bg-orange-500 px-6 py-4 text-base font-semibold text-zinc-950 shadow-sm transition hover:bg-orange-400"
                >
                  Pay $400 →
                </button>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Stripe checkout · Card, Apple Pay, Google Pay
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#fafaf7]">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 py-12 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <div>
            <span className="font-semibold text-zinc-900">sendprop</span>
            <span className="text-orange-500">.</span>
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
