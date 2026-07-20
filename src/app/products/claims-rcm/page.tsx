"use client";

import { useState } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Reveal } from "@/components/effects/Reveal";
import {
  ReceiptText,
  FileCheck2,
  ShieldAlert,
  Zap,
  TrendingUp,
  Database,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  FileText,
  Building2,
  Bot,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "AI Prior-Authorization Engine",
    desc: "Autonomous clinical NLP parses chart notes, matches payer-specific medical policies, and generates instant authorization requests with high approval rates.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "EDI 837/835 Real-Time Scrubber",
    desc: "Pre-submission evaluation engine checks CPT/ICD-10 coding compliance, modifier usage, and patient eligibility before claims hit clearinghouses.",
    icon: FileCheck2,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Autonomous Denial Appeals",
    desc: "AI agents analyze 835 ERA denial codes (CO/OA/PR), extract clinical evidence from EHR charts, and draft comprehensive legal-grade appeal letters automatically.",
    icon: ShieldAlert,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "Smart Charge Capture Audit Bot",
    desc: "Detects unbilled procedures, missing secondary codes, and undocumented services across clinical encounters before final claim generation.",
    icon: Bot,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Universal Payer Tunnel (2,500+ Payers)",
    desc: "Direct API and EDI connections with Medicare, Medicaid, Commercial health plans, and regional clearinghouses with zero intermediary delays.",
    icon: Building2,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Predictive Cash Flow & AR Intelligence",
    desc: "Machine learning models forecast revenue velocity, detect payer adjudication delays, and prioritize high-value claims for billing teams.",
    icon: TrendingUp,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
];

const sampleClaims = [
  {
    id: "CLM-2026-8891",
    patient: "Eleanor Vance (Member #EV-99201)",
    provider: "Dr. Marcus Chen (NPI: 1841920491)",
    facility: "Metropolitan Heart Institute",
    date: "2026-07-18",
    codes: [
      { code: "CPT 93458", desc: "Left Heart Catheterization", amount: "$3,450.00" },
      { code: "ICD-10 I25.10", desc: "Atherosclerotic Heart Disease", amount: "--" },
      { code: "CPT 99214", desc: "Level 4 Office Visit", amount: "$220.00" },
    ],
    total: "$3,670.00",
    status: "Clean Claim Ready",
    score: 99.4,
    auditNotes: "All 14 validation rules passed. Prior-auth token #PA-8812 verified. Direct clearinghouse transmission queued.",
  },
  {
    id: "CLM-2026-9042",
    patient: "Robert Sterling (Member #RS-44812)",
    provider: "Dr. Sarah Jenkins (NPI: 1294018274)",
    facility: "St. Jude Outpatient Surgery",
    date: "2026-07-19",
    codes: [
      { code: "CPT 73721", desc: "MRI Lower Extremity w/o Contrast", amount: "$1,850.00" },
      { code: "ICD-10 M23.22", desc: "Derangement of Meniscus", amount: "--" },
    ],
    total: "$1,850.00",
    status: "Auto-Corrected Modifier",
    score: 97.8,
    auditNotes: "Missing modifier -LT identified and appended based on EHR operative note. Risk score cleared.",
  },
];

const sampleDenials = [
  {
    claimId: "DEN-77401",
    payer: "BlueCross BlueShield",
    code: "CO-197",
    reason: "Pre-certification / Prior Authorization missing or invalid.",
    originalAmount: "$4,200.00",
    aiAction: "Clinical charts retrieved. Prior-Auth #PA-9011 attached along with conservative therapy history. Appeal packet ready.",
    appealStatus: "Generated & Signed",
  },
  {
    claimId: "DEN-88219",
    payer: "Aetna Commercial",
    code: "CO-50",
    reason: "Non-covered service / Lack of medical necessity documented.",
    originalAmount: "$2,950.00",
    aiAction: "Matching Peer-Reviewed guidelines mapped to ICD-10 M54.5. Reconsideration brief automatically compiled.",
    appealStatus: "Queued for Payer Portal",
  },
];

export default function ClaimsRCMProduct() {
  const [activeClaimIndex, setActiveClaimIndex] = useState(0);
  const [scrubbing, setScrubbing] = useState(false);
  const [scrubbed, setScrubbed] = useState(true);

  const activeClaim = sampleClaims[activeClaimIndex];

  const triggerScrub = () => {
    setScrubbing(true);
    setScrubbed(false);
    setTimeout(() => {
      setScrubbing(false);
      setScrubbed(true);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/40 py-24 md:py-32 text-center">
          <GridPattern className="opacity-40" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/3" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 md:px-8">
            <Reveal>
              <div className="flex justify-center">
                <Badge variant="violet" className="gap-1.5 px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  AI-NATIVE REVENUE CYCLE MANAGEMENT
                </Badge>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                ClaimPulse AI
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-muted-foreground mx-auto max-w-3xl text-xl font-semibold leading-relaxed md:text-2xl">
                Autonomous Healthcare Claims Adjudication & Revenue Cycle Intelligence
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
                Eliminate claims rejections, automate prior-authorization workflows, and accelerate net collections with real-time EDI 837 scrubbing and AI-powered denial appeal swarms.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="premium" size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <Link href="/contact">
                    Schedule RCM Audit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full hover:bg-secondary/40 sm:w-auto" asChild>
                  <a href="#interactive-demo">
                    <ReceiptText className="mr-2 h-4 w-4 text-violet-500" />
                    Try Live Simulator
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Quantitative Impact Metrics */}
        <section className="bg-secondary/20 border-b border-border/40 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { metric: "99.2%", label: "First-Pass Clean Claim Rate", sub: "Up from industry avg of 78%" },
                { metric: "-75%", label: "Prior-Auth Turnaround", sub: "Instant token generation" },
                { metric: "14 Days", label: "Average Days in AR", sub: "Reduced from 48 days baseline" },
                { metric: "3.4x", label: "Net Revenue Cycle ROI", sub: "Verified clinical yield" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1 text-center">
                  <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-500 bg-clip-text font-mono text-3xl font-extrabold text-transparent md:text-4xl">
                    {item.metric}
                  </span>
                  <span className="text-xs font-bold md:text-sm">{item.label}</span>
                  <span className="text-muted-foreground text-[11px]">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Live Claims & RCM Simulator */}
        <section id="interactive-demo" className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center space-y-4">
              <Badge variant="emerald">INTERACTIVE DEMO</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Experience Autonomous Claims Adjudication
              </h2>
              <p className="text-muted-foreground">
                Test how ClaimPulse AI scrubbers analyze ANSI X12 EDI payloads, apply medical necessity algorithms, and resolve denials in real-time.
              </p>
            </div>

            <Card glass className="mx-auto max-w-5xl overflow-hidden border border-violet-500/20 shadow-xl">
              <Tabs defaultValue="scrubber" className="w-full">
                <div className="border-b border-border/30 bg-secondary/30 px-6 py-4">
                  <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                    <TabsTrigger value="scrubber" className="text-xs sm:text-sm">
                      Claims Scrubber
                    </TabsTrigger>
                    <TabsTrigger value="prior-auth" className="text-xs sm:text-sm">
                      Prior-Auth AI
                    </TabsTrigger>
                    <TabsTrigger value="denial-resolver" className="text-xs sm:text-sm">
                      Denial Appeals
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Tab 1: Claims Scrubber */}
                <TabsContent value="scrubber" className="p-6 md:p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/20 pb-4">
                    <div>
                      <h3 className="text-lg font-bold flex items-center gap-2">
                        <FileCheck2 className="h-5 w-5 text-emerald-500" />
                        ANSI X12 837 Claims Validation Simulator
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Select a clinical payload to run real-time ICD-10/CPT cross-referencing.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveClaimIndex((prev) => (prev === 0 ? 1 : 0))}
                        className="text-xs"
                      >
                        Switch Claim Sample
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={triggerScrub}
                        disabled={scrubbing}
                        className="text-xs gap-1.5"
                      >
                        <RefreshCw className={`h-3.5 w-3.5 ${scrubbing ? "animate-spin" : ""}`} />
                        Run AI Scrubber
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left: Claim Specs */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="bg-secondary/40 border border-border/30 rounded-xl p-4 space-y-3 font-mono text-xs">
                        <div className="flex justify-between items-center border-b border-border/20 pb-2">
                          <span className="text-muted-foreground font-sans font-bold">Claim Payload:</span>
                          <span className="text-violet-500 font-bold">{activeClaim.id}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div><span className="text-muted-foreground">Patient:</span> {activeClaim.patient}</div>
                          <div><span className="text-muted-foreground">Provider:</span> {activeClaim.provider}</div>
                          <div><span className="text-muted-foreground">Facility:</span> {activeClaim.facility}</div>
                          <div><span className="text-muted-foreground">Enc Date:</span> {activeClaim.date}</div>
                        </div>

                        <div className="pt-2">
                          <div className="text-muted-foreground font-sans font-bold mb-1">Billed Line Items:</div>
                          <div className="space-y-1.5">
                            {activeClaim.codes.map((item, i) => (
                              <div key={i} className="flex justify-between bg-background/60 p-2 rounded border border-border/10">
                                <span className="text-emerald-500 font-bold">{item.code}</span>
                                <span>{item.desc}</span>
                                <span className="text-muted-foreground">{item.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between pt-2 border-t border-border/20 font-bold text-sm">
                          <span>Total Billed Amount:</span>
                          <span className="text-emerald-500">{activeClaim.total}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: AI Adjudication Verdict */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-background/60 border border-border/40 rounded-xl p-5">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-muted-foreground">CLEAN CLAIM SCORE</span>
                          {scrubbing ? (
                            <span className="text-xs font-mono text-amber-500 animate-pulse">Scrubbing Payload...</span>
                          ) : (
                            <Badge variant="emerald" className="font-mono text-xs">
                              {activeClaim.score}% Verified
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: scrubbed ? `${activeClaim.score}%` : "30%" }}
                              transition={{ duration: 0.6 }}
                              className="h-full bg-gradient-to-r from-violet-500 to-emerald-500"
                            />
                          </div>
                          <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                            <span>0% (Rejection Risk)</span>
                            <span>100% (Clean Adjudication)</span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2">
                          <div className="text-xs font-bold">AI Audit Checks Output:</div>
                          <div className="space-y-1.5 text-xs">
                            <div className="flex items-center gap-2 text-emerald-500">
                              <CheckCircle2 className="h-4 w-4 shrink-0" />
                              <span>NPI & Taxonomy active in CMS Registry</span>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-500">
                              <CheckCircle2 className="h-4 w-4 shrink-0" />
                              <span>ICD-10 & CPT medical necessity validated</span>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-500">
                              <CheckCircle2 className="h-4 w-4 shrink-0" />
                              <span>EDI 837 segment formatting verified</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-xs text-emerald-500 font-medium">
                          {activeClaim.auditNotes}
                        </div>
                      </div>

                      <Button variant="premium" className="w-full mt-4 text-xs gap-1.5" asChild>
                        <Link href="/contact">
                          Transmit EDI 837 Batch
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab 2: Prior-Auth AI */}
                <TabsContent value="prior-auth" className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-secondary/30 border border-border/20 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2 text-violet-500 font-bold text-sm">
                        <FileText className="h-4 w-4" />
                        1. Clinical Chart Sync
                      </div>
                      <p className="text-xs text-muted-foreground">
                        EHR chart notes ingested automatically via FHIR R4 API tunnel upon order creation.
                      </p>
                      <div className="bg-background/80 p-2.5 rounded border border-border/10 text-[11px] font-mono">
                        &quot;Patient presents with severe lumbar radiculopathy unresponsive to 6 wks physical therapy...&quot;
                      </div>
                    </div>

                    <div className="bg-secondary/30 border border-border/20 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                        <Zap className="h-4 w-4" />
                        2. Payer Policy Match
                      </div>
                      <p className="text-xs text-muted-foreground">
                        AI cross-references UnitedHealthcare Policy #2026-PA-99 with conservative therapy requirements.
                      </p>
                      <div className="bg-background/80 p-2.5 rounded border border-border/10 text-[11px] font-mono text-emerald-500">
                        ✓ Conservative Therapy criteria met (6/6 wks documented).
                      </div>
                    </div>

                    <div className="bg-secondary/30 border border-border/20 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        3. Instant Authorization
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Auth token generated and written directly to EHR order field without human intervention.
                      </p>
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded text-[11px] font-mono font-bold text-emerald-500">
                        Token: #PA-UHC-881920 (APPROVED)
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Tab 3: Denial Appeals */}
                <TabsContent value="denial-resolver" className="p-6 md:p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/20 pb-3">
                      <h4 className="font-bold text-sm flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-rose-500" />
                        Automated 835 ERA Denial Resolution Engine
                      </h4>
                      <Badge variant="violet">AI Agent Active</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sampleDenials.map((denial, i) => (
                        <div key={i} className="bg-secondary/30 border border-border/20 rounded-xl p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-xs font-bold text-rose-500">{denial.claimId}</span>
                            <span className="text-xs font-semibold">{denial.payer}</span>
                          </div>
                          <div className="text-xs font-mono bg-background/60 p-2 rounded border border-border/10">
                            <span className="text-amber-500 font-bold">Reason Code {denial.code}:</span> {denial.reason}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">AI Resolution:</strong> {denial.aiAction}
                          </p>
                          <div className="flex items-center justify-between pt-2 border-t border-border/10 text-xs">
                            <span className="text-muted-foreground font-mono">Amount: {denial.originalAmount}</span>
                            <span className="text-emerald-500 font-bold flex items-center gap-1">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              {denial.appealStatus}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </section>

        {/* Product Modules Grid */}
        <section className="py-20 md:py-28 bg-secondary/10 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center space-y-4">
              <Badge variant="violet">PLATFORM ARCHITECTURE</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Comprehensive Revenue Cycle Suite
              </h2>
              <p className="text-muted-foreground">
                Engineered for hospitals, health systems, and physician groups seeking end-to-end automated claims processing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <Card glass className="h-full flex flex-col justify-between p-6 space-y-4 hover:border-violet-500/40 transition-colors">
                      <div className="space-y-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${feature.bg}`}>
                          <Icon className={`h-6 w-6 ${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security & Interoperability Section */}
        <section className="py-20 md:py-28 border-t border-border/40 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="emerald">ENTERPRISE INTEROPERABILITY</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Seamless EHR & Clearinghouse Tunnels
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  ClaimPulse AI integrates directly with major hospital EHR systems and national clearinghouse networks through standard ANSI X12 EDI protocols and HL7 FHIR R4 APIs.
                </p>

                <div className="space-y-3">
                  {[
                    "Epic, Cerner, MEDITECH, Athenahealth EHR connectors",
                    "Supports ANSI X12 837I (Institutional), 837P (Professional), and 835 (ERA)",
                    "HIPAA & SOC 2 Type II certified with end-to-end TLS 1.3 encryption",
                    "Real-time 270/271 Eligibility & Benefit Verification endpoints",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 text-sm font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="premium" className="gap-2" asChild>
                  <Link href="/contact">
                    Request EHR Connector Spec
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Protocol Spec Mockup */}
              <Card glass className="p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-border/20 pb-4">
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-violet-500" />
                    <span className="font-bold text-sm">Supported EDI & FHIR Protocols</span>
                  </div>
                  <Badge variant="emerald">Live Gateway</Badge>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {[
                    { spec: "ANSI X12 837P / 837I", type: "Claim Transmission", status: "Active" },
                    { spec: "ANSI X12 835", type: "Electronic Remittance (ERA)", status: "Active" },
                    { spec: "ANSI X12 270 / 271", type: "Eligibility Verification", status: "Active" },
                    { spec: "ANSI X12 278", type: "Prior-Auth Request/Response", status: "Active" },
                    { spec: "HL7 FHIR R4", type: "Clinical Documentation API", status: "Active" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-secondary/40 border border-border/10 p-3 rounded-lg flex items-center justify-between">
                      <div>
                        <div className="font-bold text-foreground">{item.spec}</div>
                        <div className="text-[10px] text-muted-foreground">{item.type}</div>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-bold px-2 py-0.5 rounded">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4 md:px-8">
            <Card glass className="p-8 md:p-14 text-center space-y-6 border border-violet-500/30 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
              <Badge variant="violet" className="mx-auto">READY TO ELEVATE YOUR REVENUE CYCLE?</Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto">
                Transform claims processing into an autonomous profit engine.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-base">
                Join forward-thinking healthcare organizations reducing billing friction and accelerating cash collections with ClaimPulse AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant="premium" size="lg" className="w-full sm:w-auto gap-2" asChild>
                  <Link href="/contact">
                    Schedule Executive Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-secondary/40" asChild>
                  <Link href="/solutions">View All Products</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
