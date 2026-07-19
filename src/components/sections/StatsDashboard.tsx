"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Clock, Heart } from "lucide-react";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";

export function StatsDashboard() {
  return (
    <section className="bg-secondary/20 border-border/40 relative border-y py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
          <Badge variant="violet">ENTERPRISE IMPACT</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Quantifiable healthcare gains.
          </h2>
          <p className="text-muted-foreground">
            How Good Health 247 transforms clinical throughput, employee
            wellness, and corporate insurance expenditure.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Diagnostic Speedup */}
          <Card
            glass
            hoverEffect={false}
            className="border-border/30 border shadow-md"
          >
            <CardContent className="flex flex-col items-center space-y-6 pt-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                <Clock className="h-6 w-6 text-violet-500" />
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
                  10x
                </div>
                <div className="text-lg font-semibold">
                  Diagnostic Acceleration
                </div>
                <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                  Automated clinical pre-screening processes client logs and
                  diagnostic data in seconds, rather than days.
                </p>
              </div>

              {/* Progress Ring Visualizer */}
              <div className="relative flex h-28 w-28 items-center justify-center">
                <svg className="h-full w-full -rotate-90 transform">
                  <circle
                    cx="56"
                    cy="56"
                    r="45"
                    className="stroke-muted/40 fill-none"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r="45"
                    className="fill-none stroke-violet-500"
                    strokeWidth="8"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 28.3 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute text-lg font-bold">
                  <AnimatedCounter to={90} suffix="%" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Active Patients visits */}
          <Card
            glass
            hoverEffect={false}
            className="border-border/30 border shadow-md"
          >
            <CardContent className="flex flex-col items-center space-y-6 pt-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                <Activity className="h-6 w-6 text-emerald-500" />
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
                  <AnimatedCounter to={25} suffix="k+" />
                </div>
                <div className="text-lg font-semibold">Daily Consultations</div>
                <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                  A global virtual clinic handling patient cases across 24 time
                  zones with zero platform bottlenecks.
                </p>
              </div>

              {/* Sine Wave Visualizer */}
              <div className="bg-background/30 border-border/10 relative flex h-24 w-full items-end overflow-hidden rounded-lg border p-2">
                <svg viewBox="0 0 300 100" className="h-full w-full">
                  <motion.path
                    d="M0,50 Q40,10 80,50 T160,50 T240,50 T300,50"
                    className="fill-none stroke-emerald-500"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M0,60 Q40,30 80,60 T160,60 T240,60 T300,60"
                    className="fill-none stroke-emerald-500/30"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute top-2 right-2 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-500 uppercase">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live Sync
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Absence Reduction */}
          <Card
            glass
            hoverEffect={false}
            className="border-border/30 border shadow-md"
          >
            <CardContent className="flex flex-col items-center space-y-6 pt-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10">
                <Heart className="h-6 w-6 text-rose-500" />
              </div>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
                  <AnimatedCounter from={0} to={42} prefix="-" suffix="%" />
                </div>
                <div className="text-lg font-semibold">
                  Sick Leave Reductions
                </div>
                <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                  Proactive screening triggers, customized wellness plans, and
                  early telehealth intake decrease productivity losses.
                </p>
              </div>

              {/* Comparison Bars Visualizer */}
              <div className="text-muted-foreground border-border/10 bg-background/30 w-full space-y-2 rounded-lg border p-3 font-mono text-[10px]">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Baseline Absence</span>
                    <span className="text-foreground font-semibold">100%</span>
                  </div>
                  <div className="bg-border/40 h-2 overflow-hidden rounded-full">
                    <div className="bg-muted-foreground/50 h-full w-full" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>With Good Health 247</span>
                    <span className="font-semibold text-rose-500">-42%</span>
                  </div>
                  <div className="bg-border/40 h-2 overflow-hidden rounded-full">
                    <motion.div
                      className="h-full bg-rose-500"
                      initial={{ width: "100%" }}
                      whileInView={{ width: "58%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
