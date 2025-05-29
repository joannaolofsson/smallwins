"use client";
import Link from "next/link";
import { Button } from "./ui/button";

export default function SubmitSuccess({ type }: { type: string }) {
  const getNextType = (currentType: string): string | null => {
    const order = ["habit", "accomplishment", "gift"];
    const i = order.indexOf(currentType.toLowerCase());
    return i !== -1 && i < order.length - 1 ? order[i + 1] : null;
  };

  const nextType = getNextType(type);

  return (
    <div className="flex flex-col items-end gap-2">
      <span className="text-green-500 text-xl">✔️</span>
      <p className="text-gray-600">{type} success!</p>

      {nextType ? (
        <Link href={`/futureself/${nextType}`}>
          <Button>{nextType[0].toUpperCase() + nextType.slice(1)}</Button>
        </Link>
      ) : (
        <Link href="/">
          <Button>Finish</Button>
        </Link>
      )}
    </div>
  );
}
