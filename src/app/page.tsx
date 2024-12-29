"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex space-x-2 items-center animate-pulse">
      <ArrowLeftCircle size={40} />
      <h1 className="font-bold">Get start to create a new document</h1>
    </div>
  );
}
