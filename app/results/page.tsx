"use client";

import React from "react";
import ResultsView from "@/components/ResultsView";
import { useRouter } from "next/navigation";

export default function ResultsPage() {
  const router = useRouter();

  return (
    <ResultsView 
      onCheckout={() => router.push("/checkout")} 
    />
  );
}
