"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Activity,
  ShieldCheck,
  Pill,
  LineChart,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products = [
  {
    id: "drgodly",
    name: "DrGodly",
    badge: "Clinical Intake",
    description:
      "AI-native pre-screening clinical assistant. Automates patient intakes, pre-diagnoses symptom telemetry, and calculates confidence triage scores in real-time.",
    icon: Brain,
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    id: "steady-ai",
    name: "Steady AI",
    badge: "Continuous Biometrics",
    description:
      "Wearable biometric telemetry sync. Tracks HRV, sleep metrics, and cardiovascular strain anomalies to alert medical teams before clinical issues manifest.",
    icon: Activity,
    gradient: "from-emerald-600 via-teal-500 to-indigo-500",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "rx-os",
    name: "AI-RxOS",
    badge: "Pharmacy Routing",
    description:
      "Cloud-native pharmacy transmission pipeline. Syncs insurance claims verification and securely transmits encrypted e-prescriptions to 60,000+ local pharmacies.",
    icon: ShieldCheck,
    gradient: "from-violet-600 via-fuchsia-500 to-blue-500",
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    id: "medpilot",
    name: "MedPilot",
    badge: "Medication Safety",
    description:
      "Advanced compound safety checker. Cross-references pharmaceutical active substances, flags allergen adverse warnings, and schedules precise intake intervals.",
    icon: Pill,
    gradient: "from-rose-600 via-orange-500 to-amber-500",
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    id: "workpilot-ai",
    name: "WorkPilot AI",
    badge: "Workforce Analytics",
    description:
      "Corporate wellness telemetry dashboard. Aggregates staff health factors to reduce absenteeism by 42% while preserving absolute HIPAA database isolation.",
    icon: LineChart,
    gradient: "from-indigo-600 via-blue-500 to-emerald-500",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
];

export function ProductShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center space-y-4 text-center">
          <Badge variant="emerald">PRODUCT SHOWCASE</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            AI-Native Products for Global Healthcare
          </h2>
          <p className="text-muted-foreground">
            Explore our clinical suites engineered to connect patient telemetry,
            physician routing, and corporate wellness.
          </p>
        </div>

        {/* Large Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group from-border/50 to-border/50 relative flex flex-col justify-between rounded-2xl bg-gradient-to-br p-[1px] shadow-md transition-all duration-500 hover:from-blue-500 hover:via-purple-500 hover:to-emerald-500 hover:shadow-[0_12px_40px_-15px_rgba(139,92,246,0.15)]"
              >
                {/* Visual Glow behind the card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} pointer-events-none rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-[0.02]`}
                />

                <Card
                  glass
                  hoverEffect={false}
                  className="relative z-10 flex h-full flex-col justify-between space-y-6 rounded-[15px] border-0 p-6"
                >
                  <CardHeader className="space-y-4 p-0">
                    <div className="flex items-center justify-between">
                      {/* Logo placeholder */}
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${product.bg}`}
                      >
                        <Icon className={`h-6 w-6 ${product.color}`} />
                      </div>
                      <Badge variant="violet" className="px-2 py-0.5">
                        {product.badge}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <CardTitle className="group-hover:text-primary text-2xl font-bold transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow p-0">
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="border-border/10 border-t p-0 pt-4">
                    <Button
                      variant="ghost"
                      className="hover:text-primary shrink-0 cursor-pointer gap-1.5 p-0 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1 hover:bg-transparent"
                      asChild
                    >
                      <Link
                        href={
                          product.id === "drgodly"
                            ? "/products/drgodly"
                            : "/contact"
                        }
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
