import Link from "next/link";

const GOALS = [
  {
    title: "Build Muscle",
    progress: 60,
    target: "Gain 3kg lean mass",
    deadline: "Aug 2026",
  },
  {
    title: "Improve Conditioning",
    progress: 45,
    target: "Complete 20 conditioning sessions",
    deadline: "Jul 2026",
  },
  {
    title: "Stay Consistent",
    progress: 75,
    target: "Train 5x/week for 8 weeks",
    deadline: "May 2026",
  },
  {
    title: "Match Fitness",
    progress: 30,
    target: "Water polo season prep",
    deadline: "Sep 2026",
  },
];

export default function GoalsPage() {
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
          <h1 className="text-2xl font-bold">Goals</h1>
        </div>
      </header>

      <main className="px-4 space-y-3">
        {GOALS.map((goal) => (
          <div
            key={goal.title}
            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <p className="font-semibold">{goal.title}</p>
              <span className="text-xs text-[var(--color-text-secondary)]">
                {goal.deadline}
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              {goal.target}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-primary)] rounded-full"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <span className="text-xs font-medium">{goal.progress}%</span>
            </div>
          </div>
        ))}

        <button className="w-full py-3 border-2 border-dashed border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors font-medium">
          + Add New Goal
        </button>
      </main>
    </div>
  );
}
