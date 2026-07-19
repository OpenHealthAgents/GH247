"use client";

import { motion } from "framer-motion";
import { Activity, Shield, Cpu, Terminal } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="relative py-20 md:py-28" id="tech">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
          <Badge variant="emerald">CORE PIPELINES</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Integrated health technology built for scale.
          </h2>
          <p className="text-muted-foreground">
            A comprehensive stack engineered to connect employees, medical
            teams, and diagnostic algorithms in absolute harmony.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid auto-rows-[22rem] grid-cols-1 gap-6 md:grid-cols-3"
        >
          {/* Card 1: Virtual Clinic (Large: col-span-2) */}
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-2"
          >
            <Card glass className="flex h-full flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                    <Activity className="h-5 w-5 text-violet-500" />
                  </div>
                  <CardTitle className="text-xl">24/7 Virtual Clinic</CardTitle>
                </div>
                <CardDescription className="max-w-md pt-2">
                  Instant connections to board-certified physicians worldwide.
                  Seamless scheduling, audio/video channels, and instant
                  prescription routing.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex flex-grow items-end justify-center overflow-hidden pt-0">
                {/* Visual Representation mockup */}
                <div className="border-border/40 bg-secondary/30 flex w-11/12 translate-y-3 transform flex-col space-y-3 rounded-t-xl border p-4 transition-transform duration-300 group-hover:translate-y-1">
                  <div className="border-border/10 flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground text-xs font-semibold">
                      ACTIVE CONSULTATION
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">
                      <span className="h-1 w-1 animate-ping rounded-full bg-emerald-500" />
                      Live (04:12)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white shadow-sm">
                      Dr.
                    </div>
                    <div>
                      <div className="text-xs font-bold">
                        Dr. Elizabeth Vance
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        Cardiology & Preventive Care Specialist
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/40 border-border/10 rounded-lg border p-2.5 font-mono text-[10px] leading-relaxed">
                    &quot;We are seeing a 15% reduction in cardiovascular
                    fatigue markers after standardizing the 30-day hydration
                    protocol.&quot;
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: AI Diagnostic Assistant (Small) */}
          <motion.div variants={itemVariants}>
            <Card glass className="flex h-full flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-500/20 bg-teal-500/10">
                    <Cpu className="h-5 w-5 text-teal-500" />
                  </div>
                  <CardTitle className="text-xl">AI Assistant</CardTitle>
                </div>
                <CardDescription className="pt-2">
                  Accelerated intake diagnostics using machine learning
                  patterns.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-center space-y-3">
                <div className="bg-secondary/30 border-border/10 space-y-2 rounded-lg border p-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Anomaly Scan</span>
                    <span className="font-semibold text-emerald-500">
                      99.7% No Threat
                    </span>
                  </div>
                  <div className="bg-border/40 h-2 overflow-hidden rounded-full">
                    <div className="h-full w-[99.7%] bg-emerald-500" />
                  </div>
                </div>
                <div className="bg-secondary/30 border-border/10 space-y-1 rounded-lg border p-3">
                  <div className="text-muted-foreground font-mono text-[10px]">
                    PRE-SCREENING DIAGNOSIS:
                  </div>
                  <div className="text-foreground text-xs font-bold">
                    Asymptomatic. Hydration level normal.
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3: Security & Compliance (Small) */}
          <motion.div variants={itemVariants}>
            <Card glass className="flex h-full flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                    <Shield className="h-5 w-5 text-emerald-500" />
                  </div>
                  <CardTitle className="text-xl">Compliance</CardTitle>
                </div>
                <CardDescription className="pt-2">
                  Enterprise security standards that put privacy at the core.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-center space-y-2">
                <div className="border-border/20 bg-secondary/20 flex items-center space-x-3 rounded-lg border p-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold">
                    HIPAA Regulatory Guardrails
                  </span>
                </div>
                <div className="border-border/20 bg-secondary/20 flex items-center space-x-3 rounded-lg border p-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold">
                    SOC-2 Type II Certified
                  </span>
                </div>
                <div className="border-border/20 bg-secondary/20 flex items-center space-x-3 rounded-lg border p-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold">
                    AES-256 Encryption at Rest
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4: Developer APIs (Large: col-span-2) */}
          <motion.div
            variants={itemVariants}
            className="group relative md:col-span-2"
          >
            <Card glass className="flex h-full flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-500/20 bg-slate-500/10">
                    <Terminal className="text-foreground h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">
                    Developer Integrations
                  </CardTitle>
                </div>
                <CardDescription className="max-w-md pt-2">
                  Seamlessly bridge employee roster syncs, benefits enrollment
                  platforms, and clinical diagnostic feeds through our REST
                  endpoints and webhook pipelines.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative flex flex-grow items-end justify-center overflow-hidden pt-0">
                {/* Code Terminal Visual Representation */}
                <div className="border-border/40 bg-secondary/30 text-muted-foreground flex w-11/12 translate-y-3 transform flex-col space-y-2 rounded-t-xl border p-4 font-mono text-[10px] transition-transform duration-300 select-none group-hover:translate-y-1">
                  <div className="border-border/10 mb-1 flex items-center space-x-1.5 border-b pb-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  </div>
                  <div className="text-violet-500">
                    POST{" "}
                    <span className="text-foreground">
                      https://api.goodhealth247.com/v1/clinical/sync
                    </span>
                  </div>
                  <div>{"{"}</div>
                  <div className="pl-4">
                    <span className="text-emerald-500">
                      &quot;provider_id&quot;
                    </span>
                    :{" "}
                    <span className="text-indigo-400">
                      &quot;prov_8bf9&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-emerald-500">
                      &quot;diagnostic_code&quot;
                    </span>
                    : <span className="text-indigo-400">&quot;E11.9&quot;</span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="font-mono text-emerald-500">
                      &quot;encrypted_payload&quot;
                    </span>
                    :{" "}
                    <span className="text-indigo-400">
                      &quot;G3aK9x...8PzL&quot;
                    </span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
