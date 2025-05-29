'use client';
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-evenly w-full py-4 bg-white/30 border border-white/20 backdrop-blur-md shadow-sm">
      <div className="flex gap-12 items-center">
        <Link href="/" className="font-medium hover:underline">Home</Link>
        <Link href="/futureself/habit" className="font-medium hover:underline">Future Self</Link>
        <Link href="/smallwins/manual" className="font-medium hover:underline">Small Wins</Link>
      </div>
    </nav>
  );
}
