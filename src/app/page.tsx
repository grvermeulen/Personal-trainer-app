"use client";

import { useState } from "react";
import Link from "next/link";

const SPORTS = [
  { name: "Water Polo", emoji: "🤽" },
  { name: "CrossFit", emoji: "🏋️" },
  { name: "Cycling", emoji: "🚴" },
  { name: "Running", emoji: "🏃" },
  { name: "Swimming", emoji: "🏊" },
  { name: "Gym", emoji: "💪" },
  { name: "HIIT", emoji: "⚡" },
  { name: "Mobility", emoji: "🧘" },
];

function StreakCard() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-90">Current Streak</p>
          <p className="text-3xl font-bold">3 days</p>
        </div>
        <div className="text-4xl">🔥</div>
      </div>
    </div>
  );
}

function TodayWorkoutCard() {
  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">Today&apos;s Workout</h3>
        <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded-full font-medium">
          Strength
        </span>
      </div>
      <p className="text-[var(--color-text-secondary)] text-sm mb-4">
        Upper Body Push &middot; 45 min &middot; Moderate
      </p>
      <div className="flex gap-2">
        <button className="flex-1 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 rounded-xl font-semibold transition-colors">
          Start Workout
        </button>
        <button className="px-4 py-3 border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] transition-colors">
          View
        </button>
      </div>
    </div>
  );
}

function WeeklyProgress() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const completed = [true, true, true, false, false, false, false];

  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-5">
      <h3 className="font-semibold text-lg mb-3">Weekly Progress</h3>
      <div className="flex justify-between">
        {days.map((day, i) => (
          <div key={day} className="flex flex-col items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                completed[i]
                  ? "bg-green-500 text-white"
                  : "bg-[var(--color-border)] text-[var(--color-text-secondary)]"
              }`}
            >
              {completed[i] ? "✓" : ""}
            </div>
            <span className="text-xs text-[var(--color-text-secondary)]">
              {day}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--color-text-secondary)] mt-3">
        3 of 5 sessions completed
      </p>
    </div>
  );
}

function AiSuggestionCard() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 text-white">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🤖</span>
        <div>
          <p className="font-semibold mb-1">AI Coach Suggestion</p>
          <p className="text-sm opacity-90">
            Based on your schedule and recovery, today is a great day for upper
            body strength. You&apos;ve been hitting legs hard this week!
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    { label: "AI Coach", icon: "🤖", href: "/coach" },
    { label: "Calendar", icon: "📅", href: "/calendar" },
    { label: "Progress", icon: "📊", href: "/progress" },
    { label: "Goals", icon: "🎯", href: "/goals" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="flex flex-col items-center gap-2 p-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors"
        >
          <span className="text-2xl">{action.icon}</span>
          <span className="text-xs font-medium text-[var(--color-text-secondary)]">
            {action.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

function SportTags() {
  const [selected, setSelected] = useState<string>("CrossFit");

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {SPORTS.map((sport) => (
        <button
          key={sport.name}
          onClick={() => setSelected(sport.name)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            selected === sport.name
              ? "bg-[var(--color-primary)] text-white"
              : "bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
          }`}
        >
          {sport.emoji} {sport.name}
        </button>
      ))}
    </div>
  );
}

function BottomNav() {
  const items = [
    { label: "Home", icon: "🏠", href: "/", active: true },
    { label: "Plan", icon: "📋", href: "/plan", active: false },
    { label: "Workout", icon: "💪", href: "/workout", active: false },
    { label: "Coach", icon: "🤖", href: "/coach", active: false },
    { label: "Profile", icon: "👤", href: "/profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--color-bg)] border-t border-[var(--color-border)] z-50">
      <div className="max-w-md mx-auto flex justify-around py-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 ${
              item.active
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="max-w-md mx-auto pb-20">
      <header className="px-4 pt-6 pb-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          Good morning 👋
        </p>
        <h1 className="text-2xl font-bold">Welcome to PulseCoach</h1>
      </header>

      <main className="px-4 space-y-4">
        <SportTags />
        <StreakCard />
        <TodayWorkoutCard />
        <QuickActions />
        <AiSuggestionCard />
        <WeeklyProgress />
      </main>

      <BottomNav />
    </div>
  );
}
