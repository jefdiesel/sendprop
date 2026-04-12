import { createCheckoutSession } from "./actions";

export const metadata = {
  title: "Sendprop",
  description:
    "We look at your business and find the money you're leaving on the table. $400. 48 hours. No meetings.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
      <nav className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
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

      <main className="mx-auto max-w-3xl px-6">
        {/* the pitch — one block, no sections, no headers, just talk */}
        <div className="pt-20 pb-16 sm:pt-32 sm:pb-24">
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-6xl">
            We look at your business and find the money you&apos;re{" "}
            <span className="text-orange-600">leaving on the table.</span>
          </h1>

          <div className="mt-14 space-y-6 text-xl leading-relaxed text-zinc-700 sm:text-2xl">
            <p>
              Not &ldquo;AI consulting.&rdquo; Not a Zoom call where some guy
              tells you to use ChatGPT. We actually dig into how your shop
              runs &mdash; the emails, the invoices, the stuff you&apos;re
              doing at 9pm that you shouldn&apos;t be doing &mdash; and come
              back with a written report that says:{" "}
              <span className="font-medium text-zinc-900">
                here&apos;s where the money is, here&apos;s how to get it,
                here&apos;s exactly what to do first.
              </span>
            </p>

            <p>
              Three things you can act on. Two you can set up yourself this
              week. One we can build for you if you want it. Every one of them
              with the math.
            </p>

            <p className="font-medium text-zinc-900">
              <span className="font-mono tabular-nums text-orange-600">$400.</span>{" "}
              Report in 48 hours. If we don&apos;t find at least $10k in annual
              savings, you pay nothing.
            </p>

            <p className="text-zinc-500">
              No calls. No meetings. No follow-up emails asking if you
              &ldquo;had a chance to review.&rdquo; The report is the whole
              product.
            </p>
          </div>
        </div>

        {/* form — right here, no dark section, no ceremony */}
        <section
          id="start"
          className="border-t border-zinc-200 pt-16 pb-24 sm:pt-20 sm:pb-32"
        >
          <form action={createCheckoutSession} className="max-w-md">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-600">
                  Your name
                </label>
                <input
                  name="customerName"
                  required
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-600">
                  Business
                </label>
                <input
                  name="businessName"
                  required
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-600">
                  Email
                </label>
                <input
                  name="customerEmail"
                  type="email"
                  required
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="group mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 text-base font-semibold text-zinc-950 shadow-sm transition hover:bg-orange-400 active:translate-y-px active:shadow-none"
            >
              Continue to Stripe
              <span className="text-zinc-900/40">·</span>
              <span className="font-mono tabular-nums">$400</span>
            </button>
            <p className="mt-4 text-center text-sm text-zinc-500">
              Card, Apple Pay, Google Pay. Full refund within 7 days if you&apos;re
              not happy. Mutual NDA before you upload anything.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm text-zinc-500">
          <span>
            <span className="font-semibold text-zinc-900">sendprop</span>
            <span className="text-orange-500">.</span>
          </span>
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
