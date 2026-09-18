import { useState } from "react";

const AMOUNTS = [10, 25, 50, 100];

export default function DonateCTA() {
  const [frequency, setFrequency] = useState("one-time");
  const [amount, setAmount] = useState(50);

  return (
    <section id="donate" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid gap-10 rounded-[1.75rem] border border-border bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
            Make a difference today
          </h2>
          <p className="mt-4 max-w-md text-text-secondary">
            Your support pays for training materials, clinic visits, and the small grants
            that get a livelihood off the ground. Every donation goes directly to our
            programs.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-success">
            <span aria-hidden="true">✓</span>
            <span>Secure checkout — funds tracked and reported to donors annually</span>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
          <div className="flex gap-2 rounded-full border border-border p-1">
            {["one-time", "monthly"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFrequency(option)}
                className={`flex-1 rounded-full py-2 text-sm font-semibold capitalize transition-colors ${
                  frequency === option
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {option.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {AMOUNTS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
                  amount === value
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-text-secondary hover:border-primary/40"
                }`}
              >
                ${value}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            Donate ${amount}
            {frequency === "monthly" ? " / month" : ""}
          </button>
        </div>
      </div>
    </section>
  );
}
