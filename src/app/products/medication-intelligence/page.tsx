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
  Search,
  AlertTriangle,
  MessageSquare,
  FileText,
  Calendar,
  CheckCircle,
  Database,
  User,
  Shield,
  Building,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Medication Search",
    desc: "Lightning-fast queries mapping 100,000+ compounds and brand names to FDA/EMA registers.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Drug Interaction Checker",
    desc: "Real-time cross-referencing flagging critical contraindications and allergic risk factors.",
    icon: AlertTriangle,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "AI Medication Assistant",
    desc: "Patient-facing chat agent providing clear explanations on dosages, dietary guidelines, and side effects.",
    icon: MessageSquare,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Prescription Intelligence",
    desc: "Neural network parsing of digital templates and handwritten scrawls to reduce ingestion errors.",
    icon: FileText,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Patient Timeline",
    desc: "Unified chronological records detailing past treatments, active scripts, and historical adherence metrics.",
    icon: Calendar,
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
  {
    title: "Medication Adherence",
    desc: "Automated SMS alerts, interactive calendars, and smart check-ins coordinating patient compliance.",
    icon: CheckCircle,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "FHIR standard Integration",
    desc: "Direct JSON endpoints syncing securely with hospital EMR architectures via HL7 FHIR guidelines.",
    icon: Database,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Doctor Portal",
    desc: "Dedicated clinical console allowing physicians to draft, sign, and securely route scripts.",
    icon: User,
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    title: "Pharmacy Portal",
    desc: "Dispenser check screens validating dosage weights, drug limits, and insurer coverages.",
    icon: Building,
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Government Compliance",
    desc: "Connected database tunnels checking controlled registries and reporting toxic parameters.",
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Prescribing AI Copilot",
    desc: "Real-time clinician companion suggesting therapeutic drug equivalents and checking coverages.",
    icon: Sparkles,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

export default function MedicationIntelligence() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="violet">CLINICAL SAFETY CONSOLE</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Medication Intelligence
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              Connected AI workflows for prescriptions, safety interactions, and
              pharmacy integrations.
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              Automate prescription routing, audit contraindications, and track
              compliance metrics through secure clinical pipelines.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="w-full gap-2 sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Schedule Technical Demo
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/solutions">Explore API Docs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">CORE MODULES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Unified medication ecosystems.
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <Reveal key={idx} variant="slide-up" delay={idx * 0.04}>
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

        {/* Architecture Section */}
        <section className="bg-secondary/15 border-border/40 border-y py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">PRESCRIPTION PIPELINE</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Secure medication routing loops.
              </h2>
              <p className="text-muted-foreground">
                How EMR sign-offs validate against controlled substance
                registers and route to patient compliance.
              </p>
            </div>

            {/* SVG Visual Flow Diagram */}
            <Card
              glass
              className="flex flex-col items-center justify-center overflow-x-auto p-6 md:p-10"
            >
              <div className="text-muted-foreground flex w-full min-w-[650px] flex-col items-center space-y-8 font-mono text-xs">
                {/* Layer 1: Doctor Portal */}
                <div className="flex w-full justify-around">
                  <div className="border-border/60 bg-background/50 flex w-44 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <User className="h-5 w-5 text-blue-500" />
                    <span className="text-foreground font-bold">
                      Doctor Console
                    </span>
                    <span className="text-center text-[10px]">
                      EMR Sign-off Draft
                    </span>
                  </div>
                  <div className="border-border/60 bg-background/50 flex w-44 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <Sparkles className="h-5 w-5 text-violet-500" />
                    <span className="text-foreground font-bold">
                      Prescribing AI Copilot
                    </span>
                    <span className="text-center text-[10px]">
                      Equivalent Suggestions
                    </span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="from-primary to-secondary relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b">
                  <div className="bg-secondary absolute -bottom-1 h-1.5 w-1.5 rounded-full" />
                </div>

                {/* Layer 2: Safety & Integration checks */}
                <div className="relative flex w-11/12 items-center justify-around rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
                  <div className="absolute top-2 left-4 flex items-center gap-1 text-[10px] font-bold text-violet-500">
                    <Database className="h-3 w-3 animate-pulse" />
                    COMPLIANCE CHECK ENGINE
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-44 flex-col items-center space-y-1 rounded-lg border p-2">
                    <AlertTriangle className="h-4 w-4 text-rose-500" />
                    <span className="text-foreground font-bold">
                      Interaction Check
                    </span>
                    <span className="text-[9px]">Contraindications Check</span>
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-44 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    <span className="text-foreground font-bold">
                      Controlled Register
                    </span>
                    <span className="text-[9px]">Government API check</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="from-secondary to-primary relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b">
                  <div className="bg-primary absolute -bottom-1 h-1.5 w-1.5 rounded-full" />
                </div>

                {/* Layer 3: Dispatch & Adherence */}
                <div className="flex w-full justify-around">
                  <div className="border-border/60 bg-background/50 flex w-48 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <Building className="h-5 w-5 text-indigo-500" />
                    <span className="text-foreground font-bold">
                      Pharmacy Portal
                    </span>
                    <span className="text-center text-[10px]">
                      Fulfillment & Claim verification
                    </span>
                  </div>
                  <div className="border-border/60 bg-background/50 flex w-48 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-foreground font-bold">
                      Patient Compliance
                    </span>
                    <span className="text-center text-[10px]">
                      SMS Adherence Tracker
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-violet-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet" className="gap-1.5">
                    <Shield className="h-3.5 w-3.5" />
                    EPCS Certified
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Integrate Medication Intelligence.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Review API endpoints or schedule an enterprise integration
                    pipeline audit with our compliance engineering team.
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full gap-2"
                    asChild
                  >
                    <Link href="/contact">
                      Request Sandbox Access
                      <ArrowRight className="h-4 w-4" />
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
