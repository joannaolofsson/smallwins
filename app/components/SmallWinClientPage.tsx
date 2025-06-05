'use client';
import { Button } from "./ui/button";
import Link from "next/link";
import { PiCaretLeft } from "react-icons/pi";
import { SmallWinFormSection } from "./SmallWinFormSection";
import SmallWinBooster from "./SmallWinBooster";
import { SmallWinProps } from "../types/interfaces";

export default function SmallWinClientPage({ selectedCategory }: SmallWinProps) {
  console.log("selectedCategory:", selectedCategory);

  return (  
    <div className="min-h-screen mt-8"> 
      <Button asChild variant="none" className="mx-8">
        <Link href="/"><PiCaretLeft /> Tillbaka</Link>
      </Button>
      <h2 className="text-4xl text-[#333333] py-4 px-12">Small Wins</h2>
      <p className="text-[#333333] px-12">Add your small wins to see your accomplishments grow</p>
      <h2 className="text-4xl">{selectedCategory}</h2> 
      

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-10 ">
        <div className="col-span-1 md:col-span-3">
        <SmallWinFormSection selectedId={selectedCategory} category={selectedCategory} />

      </div>
      <div className="col-span-1 md:col-span-2">
      <SmallWinBooster limit={10} />
      </div>
      </div>

    </div>
  );
}
