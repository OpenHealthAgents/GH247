"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variant?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right";
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  variant = "slide-up",
  duration = 0.6,
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const directionMap = {
    fade: { x: 0, y: 0 },
    "slide-up": { x: 0, y: 40 },
    "slide-down": { x: 0, y: -40 },
    "slide-left": { x: 40, y: 0 },
    "slide-right": { x: -40, y: 0 },
  };

  const selectedDirection = directionMap[variant];

  const variants = {
    hidden: {
      opacity: 0,
      x: selectedDirection.x,
      y: selectedDirection.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
