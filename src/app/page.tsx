"use client";

import CalculatorCard from "@/components/CalculatorCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 flex flex-col">
      <CalculatorCard />

      <footer className="w-full text-center py-6 text-sm text-purple-900/70">
        © 2026 CanonCodeCraft
      </footer>
    </main>
  );
}