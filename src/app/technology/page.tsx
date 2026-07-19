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
  Cpu,
  Brain,
  Terminal,
  Database,
  GitFork,
  BookOpen,
  Search,
  ShieldCheck,
  Lock,
  Cloud,
  Network,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const techPillars = [
  {
    id: "ai-agents",
    title: "AI Agents",
    desc: "Autonomous multi-agent swarms executing parallel clinical triage, drug safety checks, and diagnostic recommendations.",
    icon: Cpu,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    id: "foundation-models",
    title: "Foundation Models & LLMs",
    desc: "Domain-adapted medical LLMs fine-tuned on PubMed, pharmacology, and HL7 FHIR clinical datasets for zero-hallucination outputs.",
    icon: Brain,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    id: "mcp",
    title: "Model Context Protocol (MCP)",
    desc: "Standardized open protocol enabling LLM agents to securely query EMR databases and FHIR servers with granular scopes.",
    icon: Terminal,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "fhir",
    title: "HL7 FHIR Integration",
    desc: "Native FHIR R4 and R5 schemas guaranteeing instant interoperability with Epic, Cerner, and global hospital repositories.",
    icon: Database,
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
  {
    id: "knowledge-graphs",
    title: "Knowledge Graphs",
    desc: "Structured graph databases mapping 10B+ connections across genes, proteins, diseases, and chemical interactions.",
    icon: GitFork,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    id: "llm-wiki",
    title: "LLM Wiki (Google OKF)",
    desc: "Organized medical knowledge representations aligning open knowledge schemas (Google OKF) with dynamic EMR updates.",
    icon: BookOpen,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    id: "rag",
    title: "Retrieval Augmented Generation (RAG)",
    desc: "Hybrid vector + graph search querying clinical guidelines and patient charts with source citation back-references.",
    icon: Search,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    id: "healthcare-standards",
    title: "Healthcare Standards",
    desc: "Strict adherence to ICD-10/11 coding, CPT, LOINC, and RxNorm medical terminologies.",
    icon: ShieldCheck,
    color: "text-sky-500",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    id: "security",
    title: "Enterprise Security",
    desc: "HIPAA database isolation, SOC-2 Type II controls, TLS 1.3 encryption tunnels, and zero-knowledge data masking.",
    icon: Lock,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "cloud-arch",
    title: "Cloud Architecture",
    desc: "Zero-trust VPC multi-tenant topology with sub-10ms edge latency and failover availability across regions.",
    icon: Cloud,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="violet">ENTERPRISE TECHNICAL STACK</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              AI-Native Health Architecture
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              The AI-native architecture powering the next generation of
              clinical intelligence.
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              Explore how Model Context Protocol, HL7 FHIR schemas, graph
              bio-models, and zero-trust security construct our medical engine.
            </p>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">CORE STACK</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Architectural Pillars
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {techPillars.map((pill, idx) => {
                const Icon = pill.icon;
                return (
                  <Reveal key={pill.id} variant="slide-up" delay={idx * 0.03}>
                    <Card
                      glass
                      className="flex h-full flex-col justify-between p-6"
                    >
                      <CardHeader className="mb-4 space-y-4 p-0">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg border ${pill.bg}`}
                        >
                          <Icon className={`h-5.5 w-5.5 ${pill.color}`} />
                        </div>
                        <CardTitle className="text-xl">{pill.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                          {pill.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Animated Architecture Diagram 1: Agentic RAG & MCP Loop */}
        <section className="bg-secondary/15 border-border/40 border-y py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">ARCHITECTURE DIAGRAM 1</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Agentic RAG & MCP Context Flow
              </h2>
              <p className="text-muted-foreground">
                How user prompts interact with Knowledge Graphs, MCP servers,
                and FHIR data stores.
              </p>
            </div>

            <Card
              glass
              className="flex flex-col items-center justify-center overflow-x-auto p-6 md:p-10"
            >
              <div className="text-muted-foreground flex w-full min-w-[650px] flex-col items-center space-y-8 font-mono text-xs">
                {/* Step 1 */}
                <div className="border-border/60 bg-background/50 flex w-full items-center justify-between rounded-xl border p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-5 w-5 text-violet-500" />
                    <div>
                      <span className="text-foreground block font-bold">
                        Clinical Prompt Input
                      </span>
                      <span className="text-[10px]">
                        Natural language physician query
                      </span>
                    </div>
                  </div>
                  <Badge variant="violet">Step 01</Badge>
                </div>

                {/* Animated connector */}
                <div className="relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b from-violet-500 to-blue-500">
                  <div className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
                </div>

                {/* Step 2 */}
                <div className="relative flex w-full items-center justify-around rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5">
                  <div className="absolute top-2 left-4 flex items-center gap-1 text-[10px] font-bold text-blue-500">
                    <Network className="h-3 w-3 animate-pulse" />
                    CONTEXT ENRICHMENT ENGINE
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-44 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Search className="h-4 w-4 text-blue-500" />
                    <span className="text-foreground font-bold">
                      Vector Search
                    </span>
                    <span className="text-[9px]">PubMed Embeddings</span>
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-44 flex-col items-center space-y-1 rounded-lg border p-2">
                    <GitFork className="h-4 w-4 text-amber-500" />
                    <span className="text-foreground font-bold">
                      Knowledge Graph
                    </span>
                    <span className="text-[9px]">Google OKF Schemas</span>
                  </div>
                  <div className="bg-background/40 border-border/20 flex w-44 flex-col items-center space-y-1 rounded-lg border p-2">
                    <Terminal className="h-4 w-4 text-emerald-500" />
                    <span className="text-foreground font-bold">
                      MCP Server
                    </span>
                    <span className="text-[9px]">FHIR EMR Query</span>
                  </div>
                </div>

                {/* Animated connector */}
                <div className="relative flex h-8 w-0.5 items-center justify-center bg-gradient-to-b from-blue-500 to-emerald-500">
                  <div className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
                </div>

                {/* Step 3 */}
                <div className="flex w-full items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-emerald-500" />
                    <div>
                      <span className="text-foreground block font-bold">
                        Domain Medical LLM Response
                      </span>
                      <span className="text-[10px]">
                        Zero-hallucination verified output with citation links
                      </span>
                    </div>
                  </div>
                  <Badge variant="emerald">Step 03</Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Animated Architecture Diagram 2: Zero-Trust Enterprise Security Topography */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">ARCHITECTURE DIAGRAM 2</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Zero-Trust Enterprise Cloud Security
              </h2>
              <p className="text-muted-foreground">
                Multi-tenant database isolation, TLS 1.3 tunnels, and HIPAA
                privacy boundaries.
              </p>
            </div>

            <Card
              glass
              className="flex flex-col items-center justify-center overflow-x-auto p-6 md:p-10"
            >
              <div className="text-muted-foreground flex w-full min-w-[650px] flex-col items-center space-y-8 font-mono text-xs">
                <div className="grid w-full grid-cols-3 gap-6 text-center">
                  <div className="border-border/40 bg-background/40 space-y-2 rounded-xl border p-4">
                    <Lock className="mx-auto h-5 w-5 text-emerald-500" />
                    <span className="text-foreground block font-bold">
                      TLS 1.3 Tunnel
                    </span>
                    <span className="block text-[10px]">
                      Encrypted Data-In-Transit
                    </span>
                  </div>

                  <div className="border-border/40 bg-background/40 space-y-2 rounded-xl border p-4">
                    <ShieldCheck className="mx-auto h-5 w-5 text-blue-500" />
                    <span className="text-foreground block font-bold">
                      HIPAA VPC Boundary
                    </span>
                    <span className="block text-[10px]">
                      Isolated Tenant Storage
                    </span>
                  </div>

                  <div className="border-border/40 bg-background/40 space-y-2 rounded-xl border p-4">
                    <Layers className="mx-auto h-5 w-5 text-violet-500" />
                    <span className="text-foreground block font-bold">
                      SOC-2 Audit Logs
                    </span>
                    <span className="block text-[10px]">
                      Immutable Access Tracing
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-violet-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet" className="gap-1.5">
                    <Cpu className="h-3.5 w-3.5" />
                    Open Standard MCP
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Deploy AI-native clinical architecture.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Review our technical documentation or schedule an enterprise
                    architectural briefing with our team.
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
                      Request Tech Briefing
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
