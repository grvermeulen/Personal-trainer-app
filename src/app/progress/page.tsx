import Link from "next/link";

export default function ProgressPage() {
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
          <h1 className="text-2xl font-bold">Progress</h1>
        </div>
      </header>

      <main className="px-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "This Week", value: "3 / 5", sub: "sessions" },
            { label: "Volume", value: "12,450", sub: "kg lifted" },
            { label: "Consistency", value: "85%", sub: "last 4 weeks" },
            { label: "Personal Bests", value: "3", sub: "this month" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4"
            >
              <p className="text-xs text-[var(--color-text-secondary)] mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-5">
          <h3 className="font-semibold mb-3">Activity by Sport</h3>
          <div className="space-y-3">
            {[
              { sport: "Strength", pct: 35, color: "bg-indigo-500" },
              { sport: "CrossFit", pct: 25, color: "bg-orange-500" },
              { sport: "Water Polo", pct: 20, color: "bg-blue-500" },
              { sport: "Cycling", pct: 12, color: "bg-green-500" },
              { sport: "Recovery", pct: 8, color: "bg-purple-500" },
            ].map((item) => (
              <div key={item.sport}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.sport}</span>
                  <span className="text-[var(--color-text-secondary)]">
                    {item.pct}%
                  </span>
                </div>
                <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
