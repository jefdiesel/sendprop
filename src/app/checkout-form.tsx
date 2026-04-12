"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createCheckoutSession, type CheckoutState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-8 flex w-full items-center justify-center rounded-md bg-zinc-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-zinc-800 active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0"
    >
      {pending ? "Connecting to Stripe\u2026" : "Pay $400"}
    </button>
  );
}

export function CheckoutForm() {
  const [state, action] = useActionState<CheckoutState, FormData>(
    createCheckoutSession,
    undefined,
  );

  return (
    <form
      action={action}
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
            autoComplete="name"
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
            autoComplete="organization"
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
            autoComplete="email"
            className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          />
        </div>
      </div>

      {state?.error && (
        <p role="alert" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <SubmitButton />

      <p className="mt-3 text-center text-sm text-zinc-400">
        Card, Apple Pay, Google Pay.
      </p>
      <p className="mt-1 text-center text-xs text-zinc-300">
        Secure checkout via Stripe. You&apos;ll sign an NDA and upload details after payment.
      </p>
    </form>
  );
}
