"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { NetworkCanvas } from "@/components/effects/NetworkCanvas";
import { useState } from "react";
import Link from "next/link";

export function Hero() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  // Handle mouse movements to drive subtle parallax shifts
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Calculate fractional coordinate offsets from center
    const x = (clientX / width - 0.5) * 30;
    const y = (clientY / height - 0.5) * 30;
    setMouseCoords({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background Grids & Canvas AI Network */}
      <GridPattern className="opacity-50" strokeDasharray="3 3" />
      <NetworkCanvas />

      {/* Floating Parallax Gradients (Glow Spheres) */}
      <motion.div
        animate={{ x: mouseCoords.x * -0.8, y: mouseCoords.y * -0.8 }}
        transition={{ type: "spring", stiffness: 75, damping: 25 }}
        className="pointer-events-none absolute inset-0"
      >
        <GlowEffect
          color="blue"
          size="lg"
          className="-top-40 -left-40"
          animate={false}
        />
        <GlowEffect
          color="violet"
          size="lg"
          className="-right-40 bottom-0"
          animate={false}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center md:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge
              variant="violet"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold shadow-sm"
            >
              <Sparkles className="h-3 w-3 animate-pulse text-violet-500" />
              Good Health 247 Inc.
            </Badge>
          </motion.div>

          {/* Heading with Mouse Parallax */}
          <motion.div
            animate={{ x: mouseCoords.x * 0.25, y: mouseCoords.y * 0.25 }}
            transition={{ type: "spring", stiffness: 100, damping: 22 }}
            className="space-y-4 md:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl leading-none font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
            >
              Building the Future of{" "}
              <span className="text-glow bg-gradient-to-r from-blue-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent">
                AI-Native
              </span>{" "}
              Healthcare.
            </motion.h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            Good Health 247 develops AI-native platforms transforming
            healthcare, life sciences, medication intelligence, fitness, and
            enterprise productivity.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full gap-2 sm:w-auto"
              asChild
            >
              <Link href="/solutions">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Parallax Dashboard Mockup Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-16 w-full"
          >
            <motion.div
              animate={{ x: mouseCoords.x * 0.5, y: mouseCoords.y * 0.5 }}
              transition={{ type: "spring", stiffness: 85, damping: 20 }}
              className="border-border/80 bg-background/50 relative w-full overflow-hidden rounded-2xl border shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm dark:shadow-[0_20px_50px_rgba(37,99,235,0.03)]"
            >
              {/* Header controls bar */}
              <div className="bg-secondary/50 border-border/40 flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="bg-destructive/60 h-3 w-3 rounded-full" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/60" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="text-muted-foreground font-mono text-xs">
                  good-health-engine
                </div>
                <div className="w-6" />
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-1 gap-6 p-6 text-left md:grid-cols-3 md:p-8">
                {/* Card 1 */}
                <div className="border-border/40 bg-secondary/20 flex flex-col space-y-4 rounded-xl border p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      AI DIAGNOSTICS
                    </span>
                    <Zap className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-extrabold">99.7%</div>
                    <p className="text-xs font-semibold text-emerald-500">
                      Model Prescribing Precision
                    </p>
                  </div>
                  <div className="bg-background/60 border-border/10 space-y-1 rounded-lg border p-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Confidence SLA
                      </span>
                      <span className="font-bold text-emerald-500">Passed</span>
                    </div>
                    <div className="bg-border/40 mt-1.5 h-1.5 w-full overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "99.7%" }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-full rounded-full bg-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="border-border/40 bg-secondary/20 flex flex-col space-y-4 rounded-xl border p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      CARE RESPONSE
                    </span>
                    <Heart className="h-4 w-4 text-rose-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-extrabold">&lt; 3 mins</div>
                    <p className="text-xs font-semibold text-violet-500">
                      Physician Setup SLA
                    </p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                      <div className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-500" />
                      <span>Clinical network fully online</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="border-border/40 bg-secondary/20 flex flex-col space-y-4 rounded-xl border p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                      COMPLIANCE
                    </span>
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-extrabold">SOC-2</div>
                    <p className="text-xs font-semibold text-emerald-500">
                      HIPAA Isolation Active
                    </p>
                  </div>
                  <div className="bg-background/60 border-border/10 space-y-1 rounded-lg border p-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground font-mono">
                        TLS 1.3 Tunneling
                      </span>
                      <span className="font-mono font-bold text-emerald-500">
                        Verified
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-muted-foreground font-mono">
                        Isolated DBs
                      </span>
                      <span className="font-mono font-bold text-emerald-500">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
