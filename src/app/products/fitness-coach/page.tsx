"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Reveal } from "@/components/effects/Reveal";
import {
  Flame,
  Utensils,
  Smartphone,
  Sparkles,
  TrendingUp,
  FileBarChart,
  Apple,
  Activity,
  Heart,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Workout Planning",
    desc: "Generative routines adapting to your muscle fatigue telemetry and biometrics.",
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Nutrition & Meal Tracking",
    desc: "Computer vision photo scanning to instantly log recipes, food types, and macros.",
    icon: Utensils,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Wearable Integration",
    desc: "Seamless background integrations syncing Apple Health, WHOOP, Garmin, and Oura.",
    icon: Smartphone,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Personal AI Coach",
    desc: "24/7 text and audio updates providing direct form correction and routine advice.",
    icon: Sparkles,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Progress Analytics",
    desc: "Deep predictive charts tracing body mass index, recovery states, and output trends.",
    icon: TrendingUp,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "Community & AI Reports",
    desc: "Consolidated PDF health summaries and social circles to share stats with coaches.",
    icon: FileBarChart,
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
];

export default function FitnessCoachProduct() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-20 md:py-28">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="emerald">HYPER-PERSONALIZED FIT-TECH</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
              AI Fitness Coach
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              Your Personalized AI Health & Fitness Protocol
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              Good Health 247 develops AI-native platforms transforming
              healthcare, life sciences, medication intelligence, fitness, and
              enterprise productivity.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="w-full gap-2 sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Start Free Coaching
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/solutions">Explore Integrations</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Visual Illustration & Charts */}
        <section className="bg-secondary/10 py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">FITNESS CONSOLE</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Live biometric dashboard tracking.
              </h2>
              <p className="text-muted-foreground">
                Consolidated view of wearable metrics, macro tracking, and
                performance.
              </p>
            </div>

            {/* Dashboard Interface Mock */}
            <div className="grid grid-cols-1 items-stretch gap-8 text-left lg:grid-cols-12">
              {/* Left Column: Metrics & Macro Split (Span-5) */}
              <div className="flex flex-col gap-6 lg:col-span-5">
                {/* Calories Burned card */}
                <Card glass className="p-6">
                  <CardHeader className="mb-4 flex flex-row items-center justify-between p-0">
                    <div>
                      <CardTitle className="text-base font-bold">
                        Today&apos;s Calories
                      </CardTitle>
                      <CardDescription className="text-[11px]">
                        Sync: 2 mins ago
                      </CardDescription>
                    </div>
                    <Flame className="h-5 w-5 animate-pulse text-orange-500" />
                  </CardHeader>
                  <CardContent className="space-y-4 p-0">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-black">2,420</span>
                      <span className="text-muted-foreground text-xs">
                        / 2,800 kcal target
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="bg-secondary/40 h-2 w-full overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "86.4%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Macronutrient Split */}
                <Card glass className="p-6">
                  <CardHeader className="mb-4 flex flex-row items-center justify-between p-0">
                    <CardTitle className="text-base font-bold">
                      Macronutrient Profile
                    </CardTitle>
                    <Apple className="h-5 w-5 text-emerald-500" />
                  </CardHeader>
                  <CardContent className="space-y-3.5 p-0">
                    {/* Protein */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold">Protein (185g)</span>
                        <span className="font-bold text-emerald-500">92%</span>
                      </div>
                      <div className="bg-secondary/40 h-1.5 w-full overflow-hidden rounded-full">
                        <div className="h-full w-[92%] bg-emerald-500" />
                      </div>
                    </div>
                    {/* Carbs */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold">Carbs (220g)</span>
                        <span className="font-bold text-blue-500">78%</span>
                      </div>
                      <div className="bg-secondary/40 h-1.5 w-full overflow-hidden rounded-full">
                        <div className="h-full w-[78%] bg-blue-500" />
                      </div>
                    </div>
                    {/* Fats */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold">Fats (70g)</span>
                        <span className="font-bold text-amber-500">85%</span>
                      </div>
                      <div className="bg-secondary/40 h-1.5 w-full overflow-hidden rounded-full">
                        <div className="h-full w-[85%] bg-amber-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Performance Area Charts (Span-7) */}
              <div className="lg:col-span-7">
                <Card
                  glass
                  className="flex h-full flex-col justify-between p-6"
                >
                  <CardHeader className="mb-4 flex flex-row items-center justify-between p-0">
                    <div>
                      <CardTitle className="text-base font-bold">
                        Weekly Performance Curve
                      </CardTitle>
                      <CardDescription className="text-[11px]">
                        Heart Rate Zone Output vs. Recovery Index
                      </CardDescription>
                    </div>
                    <Activity className="h-5 w-5 text-violet-500" />
                  </CardHeader>
                  <CardContent className="flex min-h-[220px] flex-grow flex-col justify-center p-0">
                    {/* SVG Line Graph */}
                    <div className="relative mt-4 h-44 w-full">
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 300 120"
                        preserveAspectRatio="none"
                      >
                        {/* Grid lines */}
                        <line
                          x1="0"
                          y1="20"
                          x2="300"
                          y2="20"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="0.5"
                        />
                        <line
                          x1="0"
                          y1="60"
                          x2="300"
                          y2="60"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="0.5"
                        />
                        <line
                          x1="0"
                          y1="100"
                          x2="300"
                          y2="100"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="0.5"
                        />

                        {/* Chart path area gradient */}
                        <defs>
                          <linearGradient
                            id="fitnessGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(124, 58, 237, 0.25)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(124, 58, 237, 0)"
                            />
                          </linearGradient>
                        </defs>

                        {/* Area shape */}
                        <path
                          d="M 0 100 Q 50 40 100 80 T 200 30 T 300 60 L 300 120 L 0 120 Z"
                          fill="url(#fitnessGrad)"
                        />

                        {/* Line path */}
                        <motion.path
                          d="M 0 100 Q 50 40 100 80 T 200 30 T 300 60"
                          fill="none"
                          stroke="rgb(139, 92, 246)"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {/* Points */}
                        <circle
                          cx="100"
                          cy="80"
                          r="4"
                          fill="rgb(139, 92, 246)"
                        />
                        <circle
                          cx="200"
                          cy="30"
                          r="4"
                          fill="rgb(139, 92, 246)"
                        />
                        <circle
                          cx="300"
                          cy="60"
                          r="4"
                          fill="rgb(139, 92, 246)"
                        />
                      </svg>
                      {/* X Axis labels */}
                      <div className="text-muted-foreground mt-2 flex justify-between font-mono text-[9px]">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                        <span>Sun</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">FEATURES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                AI integrations driving wellness.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <Reveal key={idx} variant="slide-up" delay={idx * 0.05}>
                    <Card
                      glass
                      className="flex h-full flex-col justify-between p-6"
                    >
                      <CardHeader className="mb-4 space-y-4 p-0">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg border ${feat.bg}`}
                        >
                          <Icon className={`h-5.5 w-5.5 ${feat.color}`} />
                        </div>
                        <CardTitle className="text-xl">{feat.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                          {feat.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-secondary/10 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-orange-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet" className="gap-1.5">
                    <Heart className="h-3.5 w-3.5 fill-current" />
                    Biometrics Connected
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Deploy your AI coaching portal.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Synchronize your active biometrics and begin receiving
                    custom meal schedules and workout plans immediately.
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full gap-2"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started Today
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
