"use client";
import { useState } from "react";
import { useFuture } from "../context/FutureContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FutureInputForm({ type, onSubmitted }: { type: string, onSubmitted: () => void }) {
  const [value, setValue] = useState("");
  const { addInput } = useFuture();

  const handleSubmit = async () => {
    if (!value.trim()) return;
    await addInput(type, value);
    setValue("");
    onSubmitted();
  };

  return (
    <div className="flex flex-col gap-4">
      <Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder={`Add a ${type}...`} 
      />
      <Button 
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
