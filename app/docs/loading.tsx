"use client";

import GoldWaveLoader from "@/components/GoldWaveLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999]">
      <GoldWaveLoader />
    </div>
  );
}