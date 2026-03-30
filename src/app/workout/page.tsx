"use client";

import { useState } from "react";
import Link from "next/link";

const EXERCISES = [
  { name: "Bench Press", sets: 4, reps: "8-10", rest: "90s" },
  { name: "Overhead Press", sets: 3, reps: "10-12", rest: "60s" },
  { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60s" },
  { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "45s" },
  { name: "Tricep Dips", sets: 3, reps: "12-15", rest: "45s" },
  { name: "Push-ups", sets: 2, reps: "AMRAP", rest: "60s" },
];

export default function WorkoutPage() {
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="max-w-md mx-auto pb-20">
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <Link
            href="/"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold">Upper Body Push</h1>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {completed.size} of {EXERCISES.length} exercises complete
        </p>
        <div className="mt-2 h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all"
            style={{
              width: `${(completed.size / EXERCISES.length) * 100}%`,
            }}
          />
        </div>
      </header>

      <main className="px-4 space-y-3">
        {EXERCISES.map((ex, i) => (
          <button
            key={ex.name}
            onClick={() => toggle(i)}
            className={`w-full text-left bg-[var(--color-bg-secondary)] border rounded-xl p-4 transition-all ${
              completed.has(i)
                ? "border-green-500 opacity-60"
                : "border-[var(--color-border)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-semibold ${completed.has(i) ? "line-through" : ""}`}>
                  {ex.name}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {ex.sets} sets × {ex.reps} &middot; Rest {ex.rest}
                </p>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  completed.has(i)
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-[var(--color-border)]"
                }`}
              >
                {completed.has(i) && "✓"}
              </div>
            </div>
          </button>
        ))}
      </main>
    </div>
  );
}
