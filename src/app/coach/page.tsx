"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content:
      "Hey! I'm your AI coach. I can help you plan workouts, adjust your training, and keep you on track. What would you like to work on today?",
  },
];

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        role: "assistant",
        content:
          "Great question! Based on your training history, I'd suggest focusing on recovery today since you've had 3 intense sessions this week. A light mobility session would be perfect.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto flex flex-col h-screen">
      <header className="px-4 pt-6 pb-4 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
          >
            ← Back
          </Link>
          <div>
            <h1 className="text-xl font-bold">AI Coach</h1>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Your personal training assistant
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-[var(--color-primary)] text-white rounded-br-md"
                  : "bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-bl-md"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 border-t border-[var(--color-border)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask your coach..."
            className="flex-1 px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-primary)]"
          />
          <button
            onClick={handleSend}
            className="px-4 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
