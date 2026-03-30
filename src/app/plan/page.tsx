import Link from "next/link";

const DAYS = [
  {
    day: "Monday",
    workout: "Upper Body Push",
    type: "Strength",
    duration: "45 min",
  },
  {
    day: "Tuesday",
    workout: "Water Polo Conditioning",
    type: "Conditioning",
    duration: "60 min",
  },
  {
    day: "Wednesday",
    workout: "Active Recovery",
    type: "Recovery",
    duration: "30 min",
  },
  {
    day: "Thursday",
    workout: "CrossFit WOD",
    type: "CrossFit",
    duration: "50 min",
  },
  { day: "Friday", workout: "Cycling Endurance", type: "Cycling", duration: "60 min" },
  { day: "Saturday", workout: "Full Body Strength", type: "Strength", duration: "55 min" },
  { day: "Sunday", workout: "Rest Day", type: "Rest", duration: "—" },
];

export default function PlanPage() {
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
          <h1 className="text-2xl font-bold">Training Plan</h1>
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Week 4 of 8 &middot; Mixed Training Block
        </p>
      </header>

      <main className="px-4 space-y-3">
        {DAYS.map((item) => (
          <div
            key={item.day}
            className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-[var(--color-text-secondary)] font-medium">
                {item.day}
              </p>
              <p className="font-semibold">{item.workout}</p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {item.type} &middot; {item.duration}
              </p>
            </div>
            {item.type !== "Rest" && (
              <button className="px-3 py-1.5 text-sm bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                Start
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
