import { notFound } from "next/navigation";
import { stripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export default async function DonePage({
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

  const customerEmail = session.customer_email ?? "your inbox";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight">You&apos;re done.</h1>
        <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300">
          Your data is uploaded. I&apos;m on it.
        </p>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Your 4&ndash;6 page report will land in <strong>{customerEmail}</strong>{" "}
          within <strong>48 hours</strong>.
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          You don&apos;t need to do anything else. If 48 hours pass and you
          haven&apos;t heard back, reply to your confirmation email.
        </p>
        <hr className="my-12 border-zinc-200 dark:border-zinc-800" />
        <p className="text-xs text-zinc-500">Order ref: {sessionId.slice(-12)}</p>
      </main>
    </div>
  );
}
