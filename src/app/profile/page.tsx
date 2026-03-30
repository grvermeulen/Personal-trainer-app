import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto pb-20">
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
          >
            ← Back
          </Link>
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
      </header>

      <main className="px-4 space-y-4">
        <div className="flex items-center gap-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-5">
          <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-2xl text-white font-bold">
            PC
          </div>
          <div>
            <p className="font-bold text-lg">PulseCoach User</p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Mixed-sport athlete &middot; Level 5
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Workouts", value: "47" },
            { label: "Streak", value: "3" },
            { label: "XP", value: "1,250" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-3 text-center"
            >
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl divide-y divide-[var(--color-border)]">
          {[
            "Personal Information",
            "Goals & Targets",
            "Injuries & Limitations",
            "Notification Settings",
            "Unit Preferences",
            "Spotify Connection",
            "Achievements",
          ].map((item) => (
            <div
              key={item}
              className="px-5 py-4 flex items-center justify-between"
            >
              <span className="text-sm font-medium">{item}</span>
              <span className="text-[var(--color-text-secondary)]">→</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
