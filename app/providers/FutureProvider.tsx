// /providers/FutureProvider.tsx
"use client";
import { FutureProvider } from "../context/FutureContext";

export default function WithFutureProvider({ children }: { children: React.ReactNode }) {
  return <FutureProvider>{children}</FutureProvider>;
}
