import { notFound } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { acceptNda } from "../../actions";

export const dynamic = "force-dynamic";

export default async function NdaPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await params;

  let session;
  try {
    session = await stripe().checkout.sessions.retrieve(sessionId);
  } catch {
    notFound();
  }

  if (session.payment_status !== "paid") {
    return (
      <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased">
        <main className="mx-auto max-w-xl px-6 py-16">
          <h1 className="text-2xl font-semibold tracking-tight">
            Confirming payment...
          </h1>
          <p className="mt-3 text-lg text-zinc-600">
            Stripe is still processing. This usually takes a few seconds.
            <br />
            <strong>Refresh this page</strong> in 30 seconds to continue.
          </p>
        </main>
      </div>
    );
  }

  const businessName = session.metadata?.businessName ?? "your business";

  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
        <span className="text-sm text-zinc-500">Step 1 of 2</span>
      </nav>

      <main className="mx-auto max-w-2xl px-6 py-8 pb-20">
        <h1 className="text-3xl font-semibold tracking-tight">
          Before we get started.
        </h1>
        <p className="mt-2 text-lg text-zinc-600">
          Payment confirmed for <strong>{businessName}</strong>. One thing
          first — a mutual NDA so everything you share stays between us.
        </p>

        <form
          action={acceptNda.bind(null, sessionId)}
          className="mt-10"
        >
          <div className="rounded-lg border border-zinc-200 bg-white">
            <div className="border-b border-zinc-100 px-6 py-4">
              <h2 className="text-base font-semibold">
                Mutual Non-Disclosure Agreement
              </h2>
            </div>

            <div className="px-6 py-5 space-y-4 text-base leading-relaxed text-zinc-600">
              <div className="flex gap-4">
                <span className="mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-500">
                  1
                </span>
                <p>
                  Everything shared during this engagement is confidential.
                  Neither party will disclose, resell, or repurpose the
                  other&apos;s information outside of this audit.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-500">
                  2
                </span>
                <p>
                  All data you submit will be deleted within 14 days of report
                  delivery.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-500">
                  3
                </span>
                <p>
                  Both parties retain ownership of their pre-existing
                  intellectual property.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-500">
                  4
                </span>
                <p>
                  Anonymous case study references require explicit written
                  consent from {businessName}.
                </p>
              </div>
            </div>

            <div className="border-t border-zinc-100 px-6 py-5">
              <label className="flex items-start gap-3 text-base cursor-pointer">
                <input
                  type="checkbox"
                  name="nda"
                  required
                  className="mt-1 h-4 w-4 rounded border-zinc-300 accent-orange-500"
                />
                <span>
                  I accept on behalf of <strong>{businessName}</strong>.
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-zinc-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px"
          >
            Continue to intake form
          </button>
        </form>
      </main>
    </div>
  );
}
