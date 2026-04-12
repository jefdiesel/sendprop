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
      className="mt-6 flex w-full items-center justify-center rounded-md bg-zinc-900 px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-zinc-800 active:translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:active:translate-y-0"
    >
      {pending ? "Connecting to Stripe\u2026" : "Book my audit"}
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
      className="rounded-lg border border-zinc-200 bg-[#fafaf7] p-5 sm:p-7"
    >
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700">
            Name
          </label>
          <input
            name="customerName"
            required
            autoComplete="name"
            className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700">
            Business
          </label>
          <input
            name="businessName"
            required
            autoComplete="organization"
            className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            name="customerEmail"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
          />
        </div>
      </div>

      {state?.error && (
        <p
          role="alert"
          className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700 animate-[fadeIn_200ms_ease-out]"
        >
          {state.error}
        </p>
      )}

      <SubmitButton />

      <div className="mt-3 text-center space-y-0.5">
        <p className="text-sm text-zinc-400">
          Secure payment via Stripe. Card, Apple Pay, Google Pay.
        </p>
        <p className="text-xs text-zinc-300">
          After payment you&apos;ll sign an NDA and share details about your
          operation.
        </p>
      </div>
    </form>
  );
}
