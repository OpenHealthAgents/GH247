"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  color?: "violet" | "emerald" | "blue" | "teal";
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export function GlowEffect({
  className,
  color = "violet",
  size = "md",
  animate = true,
}: GlowEffectProps) {
  const colorMap = {
    violet:
      "bg-violet-500/10 dark:bg-violet-500/15 shadow-[0_0_80px_rgba(139,92,246,0.15)]",
    emerald:
      "bg-emerald-500/10 dark:bg-emerald-500/15 shadow-[0_0_80px_rgba(16,185,129,0.15)]",
    blue: "bg-blue-500/10 dark:bg-blue-500/15 shadow-[0_0_80px_rgba(59,130,246,0.15)]",
    teal: "bg-teal-500/10 dark:bg-teal-500/15 shadow-[0_0_80px_rgba(20,184,166,0.15)]",
  };

  const sizeMap = {
    sm: "w-48 h-48 blur-2xl",
    md: "w-72 h-72 blur-3xl",
    lg: "w-[30rem] h-[30rem] blur-[100px]",
  };

  if (!animate) {
    return (
      <div
        className={cn(
          "pointer-events-none absolute rounded-full transition-all duration-1000",
          colorMap[color],
          sizeMap[size],
          className
        )}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.1, 1],
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "pointer-events-none absolute rounded-full",
        colorMap[color],
        sizeMap[size],
        className
      )}
    />
  );
}
