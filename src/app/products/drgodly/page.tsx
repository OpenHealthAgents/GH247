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
  Brain,
  Shield,
  Video,
  Database,
  Cpu,
  Terminal,
  ArrowRight,
  Globe,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "FHIR R4 Standard",
    desc: "Core clinical database structured natively in HL7 FHIR R4 schemas, ensuring absolute global interoperability.",
    icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "HIPAA & SOC-2 Protected",
    desc: "Isolated data stores, complete read/write audit logging, and automated end-to-end TLS tunnels.",
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "HD Telemedicine",
    desc: "WebRTC-driven video consultations and secure real-time messaging layers embedded directly into the EMR portal.",
    icon: Video,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "AI Clinical Agents",
    desc: "Multi-agent pipelines executing symptom pre-screening assessments, compound safety checks, and ICD-10 coding.",
    icon: Cpu,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Model Context Protocol (MCP)",
    desc: "Built-in MCP Server allowing certified clinical models to securely query EMR datasets with strict permission scopes.",
    icon: Terminal,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Ambient AI Copilot",
    desc: "Voice-to-text dictation notes generated live during consultations, populating FHIR diagnostic reports in seconds.",
    icon: Brain,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
];

const benefits = [
  {
    metric: "-60%",
    title: "Clinician Charting Overhead",
    desc: "Automated ambient dictation and smart pre-fill forms decrease administrative charting fatigue.",
  },
  {
    metric: "99.4%",
    title: "Pre-Screening Accuracy",
    desc: "AI triage pipelines identify severity and route patients to correct specialists with precision.",
  },
  {
    metric: "100%",
    title: "FHIR Compliance Interoperability",
    desc: "Direct integration with major hospital databases including Epic, Cerner, and regional EMR repositories.",
  },
];

const roadmap = [
  {
    quarter: "Q3 2026",
    title: "FHIR R5 Upgrade & Wearable Tunnel",
    desc: "Migrate core EMR models to FHIR R5 standard and release active continuous syncing APIs for smart wearables.",
  },
  {
    quarter: "Q4 2026",
    title: "Decentralized Trial Cohort Builder",
    desc: "Launch an encrypted cohort search interface allowing clinical researchers to query patient sets under zero-knowledge checks.",
  },
  {
    quarter: "Q1 2027",
    title: "Predictive ICU Triage Warnings",
    desc: "Deploy neural stress-pattern monitors that pre-warn clinical teams of patient metabolic spikes 6 hours in advance.",
  },
];

export default function DrGodlyProduct() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="blue" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="violet">AI-NATIVE EMR</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
              DrGodly
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              AI-Native FHIR EMR Built for Modern Healthcare
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              A comprehensive clinical operating system that unifies patient
              telemetry, AI pre-screening agents, and compliant medical record
              storage.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="premium"
                size="lg"
                className="w-full gap-2 sm:w-auto"
                asChild
              >
                <a
                  href="https://drgodly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit DrGodly.com
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">Book Advisor Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">CAPABILITIES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Engineered for clinical precision.
              </h2>
            </div>

            {/* Grid */}
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

        {/* Architecture Diagram Section */}
        <section className="bg-secondary/15 border-border/40 border-y py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">EMR ARCHITECTURE</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Isolated clinical data pipelines.
              </h2>
              <p className="text-muted-foreground">
                How patient inputs traverse diagnostic modeling layers and
                secure FHIR storage.
              </p>
            </div>

            {/* SVG Visual Flow Diagram */}
            <Card
              glass
              className="flex flex-col items-center justify-center overflow-x-auto p-6 md:p-10"
            >
              <div className="text-muted-foreground flex w-full min-w-[600px] flex-col items-center space-y-8 font-mono text-xs">
                {/* Layer 1: Inputs */}
                <div className="flex w-full justify-around">
                  <div className="border-border/60 bg-background/50 flex w-40 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span className="text-foreground font-bold">
                      Patient Portal
                    </span>
                    <span className="text-center text-[10px]">
                      Web & Wearable Sync
                    </span>
                  </div>
                  <div className="border-border/60 bg-background/50 flex w-40 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <Video className="h-5 w-5 text-rose-500" />
                    <span className="text-foreground font-bold">
                      Video Session
                    </span>
                    <span className="text-center text-[10px]">
                      Live Consult Feed
                    </span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="from-primary to-secondary relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b">
                  <div className="bg-secondary absolute -bottom-1 h-1.5 w-1.5 rounded-full" />
                </div>

                {/* Layer 2: Pipeline processing */}
                <div className="relative flex w-11/12 items-center justify-around rounded-2xl border border-violet-500/30 bg-violet-500/5 p-5">
                  <div className="absolute top-2 left-4 flex items-center gap-1 text-[10px] font-bold text-violet-500">
                    <Network className="h-3 w-3 animate-pulse" />
                    PROCESSING PIPELINE
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-36 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Brain className="h-4 w-4 text-violet-500" />
                    <span className="text-foreground font-bold">
                      Ambient Copilot
                    </span>
                    <span className="text-[9px]">Consult Dictations</span>
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-36 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Cpu className="h-4 w-4 text-teal-500" />
                    <span className="text-foreground font-bold">
                      Clinical Agents
                    </span>
                    <span className="text-[9px]">Symptom Triage</span>
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-36 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Terminal className="h-4 w-4 text-amber-500" />
                    <span className="text-foreground font-bold">
                      MCP Server
                    </span>
                    <span className="text-[9px]">Secure SQL Queries</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="from-secondary relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b to-emerald-500">
                  <div className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>

                {/* Layer 3: Database & Compliance */}
                <div className="flex w-full justify-around">
                  <div className="flex w-44 flex-col items-center space-y-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 shadow-sm">
                    <Database className="h-5 w-5 text-emerald-500" />
                    <span className="text-foreground font-bold">
                      HL7 FHIR R4 Store
                    </span>
                    <span className="text-center text-[10px]">
                      Structured Patients DB
                    </span>
                  </div>
                  <div className="flex w-44 flex-col items-center space-y-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 shadow-sm">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    <span className="text-foreground font-bold">
                      Compliance Isolation
                    </span>
                    <span className="text-center text-[10px]">
                      HIPAA Isolated Table
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">BENEFITS & METRICS</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Quantifiable clinician metrics.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {benefits.map((ben, idx) => (
                <Card
                  key={idx}
                  glass
                  className="flex flex-col justify-between space-y-4 p-6 text-center"
                >
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
                    {ben.metric}
                  </div>
                  <h3 className="text-lg font-bold">{ben.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {ben.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Roadmap Section */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">FUTURE ROADMAP</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Emr expansion pipeline.
              </h2>
            </div>

            {/* Timeline */}
            <div className="border-border/40 relative ml-4 space-y-12 border-l pl-6 md:pl-12">
              {roadmap.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative text-left"
                >
                  {/* Circle Node */}
                  <div className="bg-background absolute top-1.5 -left-[31px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-violet-500 transition-transform duration-200 group-hover:scale-125 md:-left-[55px]" />

                  <div className="space-y-1">
                    <span className="font-mono text-xl font-extrabold text-violet-500">
                      {item.quarter}
                    </span>
                    <h3 className="text-foreground text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-violet-500/20 shadow-2xl dark:shadow-violet-900/10"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet" className="gap-1.5">
                    <Shield className="h-3.5 w-3.5" />
                    HIPAA Protected Store
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Visit DrGodly to deploy your EMR today.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Access our sandbox environment to review FHIR database
                    endpoints and active clinical dictation copilots
                    immediately.
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full gap-2"
                    asChild
                  >
                    <a
                      href="https://drgodly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit DrGodly.com
                      <ArrowRight className="h-4 w-4" />
                    </a>
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
