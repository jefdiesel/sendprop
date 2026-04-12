import { notFound } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { submitIntake } from "../../actions";

export const dynamic = "force-dynamic";

const PAIN_POINTS = [
  { value: "quoting", label: "Quoting / estimating" },
  { value: "client-onboarding", label: "Onboarding new clients" },
  { value: "customer-management", label: "Customer management / follow-up" },
  { value: "scheduling", label: "Scheduling / appointments" },
  { value: "hiring", label: "Hiring / recruiting" },
  { value: "staff-onboarding", label: "Training / onboarding new staff" },
  { value: "invoicing", label: "Invoicing / chasing payments" },
  { value: "social-media", label: "Social media" },
  { value: "reviews", label: "Review sites (Google, Yelp, etc.)" },
  { value: "repeat-questions", label: "Answering the same questions over and over" },
  { value: "gaining-business", label: "Gaining more business / leads" },
  { value: "data-entry", label: "Data entry / moving info between systems" },
];

export default async function IntakePage({
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

  const businessName = session.metadata?.businessName ?? "your business";
  const customerEmail = session.customer_email ?? "your inbox";

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

  return (
    <div className="min-h-screen bg-[#fafaf7] text-zinc-900 antialiased selection:bg-orange-200">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <a href="/" className="text-sm font-semibold tracking-tight">
          sendprop<span className="text-orange-500">.</span>
        </a>
        <span className="text-sm text-zinc-500">Step 2 of 2</span>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-8 pb-20">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Tell us about {businessName}.
          </h1>
          <p className="mt-2 text-lg text-zinc-600">
            Your report will land in{" "}
            <strong>{customerEmail}</strong> within 48 hours of submitting this
            form.
          </p>
        </header>

        <form
          action={submitIntake.bind(null, sessionId)}
          className="space-y-10"
        >
          {/* About the business */}
          <section className="space-y-5">
            <h2 className="text-lg font-semibold">About your business</h2>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                Website URL
              </label>
              <input
                name="websiteUrl"
                type="url"
                placeholder="https://"
                className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                What does your business do? <span className="text-zinc-500">(one sentence is fine)</span>
              </label>
              <input
                name="businessDescription"
                required
                placeholder="We run a property management company in the Hudson Valley"
                className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-zinc-700">
                Team size
              </label>
              <select
                name="teamSize"
                required
                className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              >
                <option value="">Select...</option>
                <option value="solo">Just me</option>
                <option value="2-5">2–5 people</option>
                <option value="6-15">6–15 people</option>
                <option value="16-50">16–50 people</option>
                <option value="50+">50+</option>
              </select>
            </div>
          </section>

          {/* Pain points */}
          <section>
            <h2 className="text-lg font-semibold">
              Where does your time go?
            </h2>
            <p className="mt-1 text-base text-zinc-500">
              Check everything that feels like a problem or an opportunity.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {PAIN_POINTS.map((p) => (
                <label
                  key={p.value}
                  className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 text-base cursor-pointer transition hover:border-orange-300 has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50"
                >
                  <input
                    type="checkbox"
                    name="painPoints"
                    value={p.value}
                    className="h-4 w-4 rounded border-zinc-300 accent-orange-500"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </section>

          {/* Current tools */}
          <section>
            <h2 className="text-lg font-semibold">
              Tools and services you currently pay for
            </h2>
            <p className="mt-1 text-base text-zinc-500">
              Subscriptions, online services, platforms — anything you pay
              monthly or yearly for. Helps us understand what&apos;s already in
              place.
            </p>
            <textarea
              name="currentTools"
              rows={4}
              placeholder={"QuickBooks, Mailchimp, Google Workspace, Indeed job postings, Jobber, Yelp ads..."}
              className="mt-3 w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            />
          </section>

          {/* Considered tools */}
          <section>
            <h2 className="text-lg font-semibold">
              Tools you&apos;ve looked at but didn&apos;t go with
            </h2>
            <p className="mt-1 text-base text-zinc-500">
              Software you considered or tried but dropped — too expensive, too
              complicated, didn&apos;t fit. This tells us a lot about what
              you actually need.
            </p>
            <textarea
              name="consideredTools"
              rows={3}
              placeholder={"Salesforce (too expensive), HubSpot (too complex), a custom app someone quoted us $20k for..."}
              className="mt-3 w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            />
          </section>

          {/* Open-ended */}
          <section>
            <label className="block text-lg font-semibold">
              Anything else we should know?
            </label>
            <p className="mt-1 text-base text-zinc-500">
              The thing that makes you say &ldquo;there has to be a better
              way.&rdquo; Specific is helpful.
            </p>
            <textarea
              name="notes"
              rows={4}
              className="mt-3 w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            />
          </section>

          {/* File upload — optional */}
          <section>
            <h2 className="text-lg font-semibold">
              Attach files <span className="font-normal text-zinc-500">(optional)</span>
            </h2>
            <p className="mt-1 text-base text-zinc-500">
              Screenshots, SOPs, exports — anything that helps us understand
              how your business runs. Not required.
            </p>
            <input
              type="file"
              name="files"
              multiple
              className="mt-3 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-zinc-200"
            />
            <p className="mt-1 text-sm text-zinc-500">
              25MB max. You can also email files later to{" "}
              <a
                href="mailto:jef@sendprop.com"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                jef@sendprop.com
              </a>
              .
            </p>
          </section>

          {/* Call preference */}
          <section>
            <h2 className="text-lg font-semibold">
              Want a quick call before we start?
            </h2>
            <p className="mt-1 text-base text-zinc-500">
              15 minutes to walk us through your operation. Helps us dig deeper
              than the form alone. Optional.
            </p>
            <div className="mt-3 space-y-2">
              <label className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 text-base cursor-pointer transition hover:border-orange-300 has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50">
                <input
                  type="radio"
                  name="callPreference"
                  value="yes"
                  required
                  className="h-4 w-4 border-zinc-300 accent-orange-500"
                />
                Yes, schedule a call
              </label>
              <label className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 text-base cursor-pointer transition hover:border-orange-300 has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50">
                <input
                  type="radio"
                  name="callPreference"
                  value="no"
                  className="h-4 w-4 border-zinc-300 accent-orange-500"
                />
                No, the form is enough
              </label>
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-md bg-zinc-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px"
          >
            Submit and start my audit
          </button>
        </form>
      </main>
    </div>
  );
}
