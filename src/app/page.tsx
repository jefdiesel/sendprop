import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop — The $400 AI Audit",
  description:
    "I review your business and write you a 4-page report on the 3 places AI could save you real money. $400 flat. 48 hours. No meeting. Refund if it's not worth $10k/year.",
};

const TRUST_BADGES = [
  { label: "Fixed price", value: "$400" },
  { label: "Turnaround", value: "48 hours" },
  { label: "Meetings required", value: "Zero" },
  { label: "Refund window", value: "7 days" },
];

const STEPS = [
  {
    n: "01",
    title: "Pay",
    body: "Stripe checkout, $400 flat. You get a private upload link.",
  },
  {
    n: "02",
    title: "Upload",
    body: "Click to accept the mutual NDA. Drop in 5 customer emails, 5 vendor emails, and a phone photo of your desk. Ten minutes, tops.",
  },
  {
    n: "03",
    title: "Receive",
    body: "Within 48 hours a 4-page PDF lands in your inbox. Three specific recommendations. Real dollar figures. Step-by-step actions.",
  },
  {
    n: "04",
    title: "Decide",
    body: "Two recommendations are DIY with the exact prompts. One is a custom build I could do for you, fixed price. You choose what to act on.",
  },
];

const NOT_INCLUDED = [
  "Discovery calls",
  "Zoom meetings",
  "Slide decks",
  "“Strategic alignment”",
  "Subscriptions",
  "Follow-up sequences",
  "Anyone trying to sell you SaaS",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-zinc-900 antialiased selection:bg-orange-200">
      {/* nav */}
      <nav className="border-b border-zinc-900/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="/" className="font-semibold tracking-tight">
            sendprop
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-orange-500" />
          </a>
          <a
            href="#start"
            className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-900 sm:block"
          >
            Start an audit →
          </a>
        </div>
      </nav>

      {/* hero */}
      <section className="relative overflow-hidden">
        {/* subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-900/15 bg-white/60 px-3 py-1 font-mono text-xs uppercase tracking-wider text-zinc-700 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
            For owner-operated small businesses
          </div>

          <h1 className="font-semibold leading-[0.95] tracking-tight">
            <span className="block text-5xl sm:text-7xl">A written</span>
            <span className="block text-5xl sm:text-7xl">
              <span className="text-orange-600">AI audit</span> of your business.
            </span>
            <span className="mt-4 block font-mono text-2xl font-medium text-zinc-500 sm:text-3xl">
              $400 / 48 hours / no meeting
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-700 sm:text-2xl">
            You opened ChatGPT once, asked it about your shop, got a generic
            answer, and closed the tab. I&apos;ll tell you exactly{" "}
            <span className="font-medium text-zinc-900">
              the three places AI could save you real money in your business
            </span>
            , with dollar figures, in 48 hours.
          </p>

          {/* hero CTA */}
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#start"
              className="group inline-flex items-center gap-3 rounded-md bg-zinc-900 px-7 py-4 text-base font-semibold text-white transition hover:bg-zinc-800"
            >
              Start your audit
              <span className="rounded bg-white/15 px-2 py-0.5 font-mono text-xs">
                $400
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span className="font-mono text-sm text-zinc-500">
              Refund guaranteed if not worth $10k/yr to you
            </span>
          </div>
        </div>

        {/* trust strip */}
        <div className="relative border-y border-zinc-900/10 bg-white/50">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-zinc-900/10 sm:grid-cols-4">
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="bg-[#f8f7f4] px-6 py-6">
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  {b.label}
                </div>
                <div className="mt-1 font-mono text-2xl font-semibold tabular-nums text-zinc-900">
                  {b.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* the pitch */}
      <section className="border-b border-zinc-900/10">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-orange-600">
              The problem
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              You know AI matters. You don&apos;t know where to start.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-zinc-700">
            <p>
              Most AI advice is either generic blog posts or a vendor trying to
              sell you a $300/month subscription you don&apos;t need. Neither
              tells you what would actually move the needle in{" "}
              <em>your specific shop</em>.
            </p>
            <p>
              I take a sample of how your business actually runs — emails,
              paperwork, an export from your booking system, whatever you can
              pull in 10 minutes — and write a custom report on the 3 highest
              ROI places AI could help. Two are things you can do yourself this
              week with the exact prompts. One is something I could build you
              for a fixed price.
            </p>
            <p className="font-medium text-zinc-900">
              You decide what to do next. No pitch, no follow-up sequence.
            </p>
          </div>
        </div>
      </section>

      {/* steps */}
      <section className="border-b border-zinc-900/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-orange-600">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Four steps. Ten minutes of your time.
              </h2>
            </div>
          </div>
          <div className="grid gap-px bg-zinc-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="bg-white p-8 transition hover:bg-orange-50/60"
              >
                <div className="font-mono text-xs font-medium tracking-wider text-orange-600">
                  {step.n}
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what you don't get */}
      <section className="border-b border-zinc-900/10">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-orange-600">
              Not included
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              What this isn&apos;t.
            </h2>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {NOT_INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border border-zinc-900/10 bg-white px-4 py-3 text-base text-zinc-700"
                >
                  <span className="font-mono text-xs text-zinc-400 line-through">
                    ×
                  </span>
                  <span className="line-through decoration-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-500">
              The whole point is you don&apos;t want to deal with any of this.
              Neither do I.
            </p>
          </div>
        </div>
      </section>

      {/* the offer / start form */}
      <section
        id="start"
        className="border-b border-zinc-900/10 bg-zinc-950 text-zinc-50"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-orange-400">
                Start your audit
              </div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                One time. <span className="text-orange-400">$400.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
                Fill in three fields, pay through Stripe, get redirected to the
                upload page. The whole thing takes about a minute.
              </p>

              <ul className="mt-10 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <span className="font-medium text-white">
                      48-hour delivery.
                    </span>{" "}
                    From the moment you upload your data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <span className="font-medium text-white">
                      Mutual NDA.
                    </span>{" "}
                    Your data is deleted within 14 days.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <span className="font-medium text-white">
                      Refund guarantee.
                    </span>{" "}
                    7 days. Reply &ldquo;refund&rdquo;, money back, no
                    questions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-zinc-300">
                    <span className="font-medium text-white">
                      No upsell trap.
                    </span>{" "}
                    Zero subscriptions. Zero follow-up emails.
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
                    placeholder="Midway Insurance Agency"
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
                    placeholder="mike@midwayinsurance.com"
                    required
                    className="w-full rounded border border-white/15 bg-white/5 px-3 py-2.5 text-base text-white placeholder:text-zinc-600 focus:border-orange-400 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-3 rounded bg-orange-500 px-6 py-4 text-base font-semibold text-zinc-950 transition hover:bg-orange-400"
                >
                  Pay $400 and start
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Secure payment via Stripe
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-[#f8f7f4]">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-12 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <div>
            <span className="font-semibold text-zinc-900">sendprop</span>
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-orange-500" />
            <span className="ml-3 font-mono text-xs uppercase tracking-wider">
              AI consulting that ships
            </span>
          </div>
          <div className="font-mono text-xs">
            © 2026 Sendprop &nbsp;·&nbsp;{" "}
            <a href="mailto:jef@sendprop.com" className="hover:text-zinc-900">
              jef@sendprop.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
