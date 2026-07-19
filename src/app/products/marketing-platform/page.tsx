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
  Layout,
  Cpu,
  Kanban,
  CheckSquare,
  BarChart3,
  PenTool,
  Share2,
  Plug,
  Shield,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const modules = [
  {
    title: "Marketing Workspace",
    desc: "Centralized collaborative workspace organizing healthcare campaigns, asset libraries, and brand guidelines.",
    icon: Layout,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "AI Agents",
    desc: "Autonomous agents drafting compliant medical messaging, optimizing audience targeting, and monitoring spend.",
    icon: Cpu,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Visual Campaign Builder",
    desc: "Drag-and-drop orchestration canvas connecting multi-step email journeys, portal banners, and mobile triggers.",
    icon: Kanban,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "MLR & Legal Approvals",
    desc: "Automated Medical, Legal, and Regulatory (MLR) review workflows with built-in audit trails and sign-off tracking.",
    icon: CheckSquare,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Attribution Analytics",
    desc: "Real-time performance tracking tracing physician engagements, conversion funnels, and ROI metrics.",
    icon: BarChart3,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "Generative Content Studio",
    desc: "AI studio constructing multi-lingual assets, medical graphics, and compliant landing page variations in seconds.",
    icon: PenTool,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Omnichannel Publishing",
    desc: "One-click deployment distributing content across medical portals, physician apps, and email networks.",
    icon: Share2,
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
  {
    title: "Enterprise Integrations",
    desc: "Native connectors syncing Salesforce Health Cloud, Veeva Vault, HubSpot, and custom CRM databases.",
    icon: Plug,
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
];

export default function MarketingPlatform() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="blue" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="emerald">ENTERPRISE MARKETING SUITE</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Marketing Platform
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              AI-native workspace for healthcare, pharmaceutical, and enterprise
              campaign management.
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              Unify campaign creation, MLR compliance approvals, and omnichannel
              publishing inside an enterprise-grade workspace.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="w-full gap-2 sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Schedule Platform Demo
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/solutions">Explore Workflows</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modules grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">PLATFORM CAPABILITIES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Engineered for compliant growth.
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {modules.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <Reveal key={idx} variant="slide-up" delay={idx * 0.04}>
                    <Card
                      glass
                      className="flex h-full flex-col justify-between p-5"
                    >
                      <CardHeader className="mb-4 space-y-3 p-0">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg border ${feat.bg}`}
                        >
                          <Icon className={`h-5 w-5 ${feat.color}`} />
                        </div>
                        <CardTitle className="text-lg font-bold">
                          {feat.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground text-xs leading-relaxed">
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

        {/* Enterprise Dashboard Illustration */}
        <section className="bg-secondary/15 border-border/40 border-y py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">ENTERPRISE DASHBOARD</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Campaign performance & MLR tracking console.
              </h2>
              <p className="text-muted-foreground">
                Monitor live campaign metrics, approval queues, and
                multi-channel attribution.
              </p>
            </div>

            {/* Dashboard Container */}
            <Card
              glass
              className="border-border/80 relative overflow-hidden p-6 text-left md:p-8"
            >
              {/* Top Bar */}
              <div className="border-border/20 mb-6 flex items-center justify-between border-b pb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">
                      Global Launch Campaign Q3
                    </h3>
                    <p className="text-muted-foreground font-mono text-[11px]">
                      Status: Active & Published
                    </p>
                  </div>
                </div>
                <Badge variant="emerald" className="gap-1">
                  <Zap className="h-3 w-3" /> 98.4% MLR Score
                </Badge>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Metric 1 */}
                <div className="bg-background/40 border-border/20 space-y-2 rounded-xl border p-4">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                    PHYSICIAN ENGAGEMENTS
                  </span>
                  <div className="text-3xl font-extrabold">142.8K</div>
                  <div className="text-xs font-semibold text-emerald-500">
                    +18.4% vs last month
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="bg-background/40 border-border/20 space-y-2 rounded-xl border p-4">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                    MLR APPROVAL SLA
                  </span>
                  <div className="text-3xl font-extrabold">&lt; 4 Hours</div>
                  <div className="text-xs font-semibold text-violet-500">
                    Automated review speed
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="bg-background/40 border-border/20 space-y-2 rounded-xl border p-4">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                    OMNICHANNELS ACTIVE
                  </span>
                  <div className="text-3xl font-extrabold">14 Portals</div>
                  <div className="text-xs font-semibold text-blue-500">
                    Synced Veeva & Salesforce
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="border-border/20 mt-6 space-y-2 border-t pt-6">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Campaign Deployment Progress</span>
                  <span className="font-mono text-blue-500">88% Completed</span>
                </div>
                <div className="bg-secondary/40 h-2 w-full overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-violet-500 to-emerald-500"
                  />
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
              className="relative overflow-hidden border border-blue-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet" className="gap-1.5">
                    <Shield className="h-3.5 w-3.5" />
                    SOC-2 & HIPAA Isolated
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Upgrade your enterprise marketing OS.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Automate MLR review cycles and orchestrate omnichannel
                    healthcare messaging inside a unified workspace.
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
                      Request Platform Access
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
