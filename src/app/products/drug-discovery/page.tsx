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
  GitFork,
  BookOpen,
  Cpu,
  Target,
  Dna,
  Atom,
  Lightbulb,
  Activity,
  ArrowRight,
  Shield,
  Layers,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    title: "Knowledge Graph",
    desc: "Traces billions of relations between genes, diseases, pathways, and chemical compounds to map novel correlations.",
    icon: GitFork,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Scientific Literature Intelligence",
    desc: "Autonomous NLP pipelines parsing millions of preprints, patents, and articles daily to extract structured correlations.",
    icon: BookOpen,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "AI Agents System",
    desc: "Autonomous multi-agent swarms evaluating target hypotheses, scoring bindings, and initiating automated experiments.",
    icon: Cpu,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Drug Target Discovery",
    desc: "Deep graph neural networks mapping pathway anomalies and nominating novel drug targets for complex pathologies.",
    icon: Target,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "Foundation Bio-Models",
    desc: "In-house pre-trained biochemical transformers modeling molecular ADMET profiles and ligand properties.",
    icon: Dna,
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
  {
    title: "Protein Analysis",
    desc: "3D molecular dynamics analyzing pocket binding affinity and predicting protein-ligand docking conformations.",
    icon: Atom,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Hypothesis Generation",
    desc: "Generative generative-adversarial models constructing optimization compounds and synthesis pipelines.",
    icon: Lightbulb,
    color: "text-orange-500",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    title: "Clinical Translation",
    desc: "Mapping biomakers and model trial designs to forecast clinical outcome response distributions.",
    icon: Activity,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
];

export default function DrugDiscoveryProduct() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="emerald" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="emerald">PHARMACEUTICAL OPERATING SYSTEM</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Drug Discovery OS
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              AI-Native Drug Discovery Operating System
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              Accelerate lead-optimization pipelines and target validation
              metrics using bio-foundation transformers and knowledge graph
              maps.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="w-full gap-2 sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Schedule Enterprise Briefing
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/solutions">Request OS Trial</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">CORE SUITES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Pillars of generative biochemistry.
              </h2>
              <p className="text-muted-foreground">
                Connecting multi-omics datasets, autonomous paper scans, and
                protein modeling.
              </p>
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

        {/* Architecture Section */}
        <section className="bg-secondary/15 border-border/40 border-y py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">SYSTEM ARCHITECTURE</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Biomedical transformation pipeline.
              </h2>
              <p className="text-muted-foreground">
                How unstructured data coordinates into optimized clinical
                compounds.
              </p>
            </div>

            {/* SVG Visual Flow Diagram */}
            <Card
              glass
              className="flex flex-col items-center justify-center overflow-x-auto p-6 md:p-10"
            >
              <div className="text-muted-foreground flex w-full min-w-[650px] flex-col items-center space-y-8 font-mono text-xs">
                {/* Layer 1: Raw inputs */}
                <div className="flex w-full justify-around">
                  <div className="border-border/60 bg-background/50 flex w-44 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <BookOpen className="h-5 w-5 text-violet-500" />
                    <span className="text-foreground font-bold">
                      Literature & Patents
                    </span>
                    <span className="text-center text-[10px]">
                      Unstructured Parsing
                    </span>
                  </div>
                  <div className="border-border/60 bg-background/50 flex w-44 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <Dna className="h-5 w-5 text-emerald-500" />
                    <span className="text-foreground font-bold">
                      Multi-Omics Raw
                    </span>
                    <span className="text-center text-[10px]">
                      Genomic & Proteomic
                    </span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="from-primary to-secondary relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b">
                  <div className="bg-secondary absolute -bottom-1 h-1.5 w-1.5 rounded-full" />
                </div>

                {/* Layer 2: Foundation Processing & Agents */}
                <div className="relative flex w-11/12 items-center justify-around rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                  <div className="absolute top-2 left-4 flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                    <Layers className="h-3 w-3 animate-pulse" />
                    FOUNDATION LAYERS
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-40 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Atom className="h-4 w-4 text-amber-500" />
                    <span className="text-foreground font-bold">
                      Binding Predictor
                    </span>
                    <span className="text-[9px]">Molecular Docking</span>
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-40 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Cpu className="h-4 w-4 text-violet-500" />
                    <span className="text-foreground font-bold">
                      Synthesis Agent
                    </span>
                    <span className="text-[9px]">Hypothesis Gen</span>
                  </div>
                </div>

                {/* Arrow down */}
                <div className="from-secondary to-primary relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b">
                  <div className="bg-primary absolute -bottom-1 h-1.5 w-1.5 rounded-full" />
                </div>

                {/* Layer 3: Output Knowledge Graphs */}
                <div className="flex w-full justify-around">
                  <div className="border-border/60 bg-background/50 flex w-48 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <GitFork className="h-5 w-5 text-blue-500" />
                    <span className="text-foreground font-bold">
                      Biomed Knowledge Graph
                    </span>
                    <span className="text-center text-[10px]">
                      10B+ Connected Relations
                    </span>
                  </div>
                  <div className="border-border/60 bg-background/50 flex w-48 flex-col items-center space-y-2 rounded-xl border p-4 shadow-sm">
                    <Activity className="h-5 w-5 text-indigo-500" />
                    <span className="text-foreground font-bold">
                      Clinical Translation
                    </span>
                    <span className="text-center text-[10px]">
                      Biomarker Predictors
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-emerald-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet" className="gap-1.5">
                    <Shield className="h-3.5 w-3.5" />
                    Enterprise Isolation ISO-27001
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Transform your discovery pipelines.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Deploy Drug Discovery OS within a private tenant VPC.
                    Connect internal screening databases under absolute data
                    isolation.
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
                      Contact Enterprise Teams
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
