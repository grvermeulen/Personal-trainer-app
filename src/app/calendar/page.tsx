import Link from "next/link";

export default function CalendarPage() {
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
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          March 2026
        </p>
      </header>

      <main className="px-4 space-y-4">
        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-4">
          <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className="text-[var(--color-text-secondary)] py-1">
                {d}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const isToday = day === 30;
              const hasWorkout = [1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 15, 16, 18, 19, 20, 22, 23, 25, 26, 27, 29, 30].includes(day);
              return (
                <div
                  key={day}
                  className={`py-2 rounded-lg ${
                    isToday
                      ? "bg-[var(--color-primary)] text-white font-bold"
                      : hasWorkout
                        ? "bg-indigo-100 dark:bg-indigo-900/30 text-[var(--color-primary)]"
                        : ""
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-[var(--color-text-secondary)]">
            TODAY — MARCH 30
          </h3>
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Upper Body Push</p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Strength &middot; 45 min
                </p>
              </div>
              <button className="px-3 py-1.5 text-sm bg-[var(--color-primary)] text-white rounded-lg">
                Start
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
