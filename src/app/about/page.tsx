"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Reveal } from "@/components/effects/Reveal";
import {
  Sparkles,
  Shield,
  Heart,
  Globe2,
  Lock,
  Award,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "Innovation",
    desc: "Pioneering generative biochemistry and multi-agent clinical diagnostic models.",
    icon: Sparkles,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    title: "Trust",
    desc: "Unwavering commitment to clinical precision and transparent diagnostic confidence scores.",
    icon: Shield,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Security",
    desc: "Absolute HIPAA database isolation, SOC-2 Type II controls, and end-to-end TLS tunnels.",
    icon: Lock,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Scientific Excellence",
    desc: "Peer-reviewed medical models fine-tuned on PubMed, pharmacology, and FHIR datasets.",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Healthcare Accessibility",
    desc: "Global 24/7 care intake expanding clinical availability across 12+ languages.",
    icon: Globe2,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
];

const leadership = [
  {
    name: "Dr. Kalyan Kalwa",
    role: "Chief Medical Officer",
    bio: "Physician, healthcare innovator, and AI pioneer advancing AI-native clinical operating systems, FHIR interoperability, and preventative medicine.",
    image: "/kalyan-kalwa.jpg",
    linkedin: "https://www.linkedin.com/in/kalyankalwa/",
  },
  {
    name: "Monish Verma",
    role: "Chief Marketing and Sales Manager",
    bio: "Strategic growth leader and executive strategist with extensive expertise in scaling global software platforms, commercial partnerships, and health tech innovations.",
    image: "/monish-verma.jpg",
    linkedin: "https://www.linkedin.com/in/monish-verma-incircle/",
  },
  {
    name: "Gunasekaran",
    role: "Chief Technology Officer",
    bio: "Technology leader and systems architect directing core AI platform development, cloud infrastructure, and enterprise engineering standards.",
    image: "/gunasekaran.jpg",
  },
];

const coreTeam = [
  {
    name: "Dr. Marcus Vance",
    role: "Lead AI Research Scientist",
    department: "AI Research",
    bio: "Ex-OpenAI research architect specializing in clinical NLP foundation models, bio-transformers, and zero-hallucination RAG frameworks.",
    initials: "MV",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "Ananya Sharma",
    role: "Lead Healthcare Data Architect",
    department: "Systems Architecture",
    bio: "10+ years architecting enterprise FHIR R4 data pipelines, HL7 EMR sync servers, and HIPAA zero-knowledge cloud security.",
    initials: "AS",
    color: "from-emerald-600 to-teal-600",
  },
  {
    name: "David Chen",
    role: "Head of Product & UX Design",
    department: "Product Design",
    bio: "Veteran product designer crafting high-aesthetic clinical consoles, patient telemetry portals, and fluid multi-device design systems.",
    initials: "DC",
    color: "from-violet-600 to-purple-600",
  },
  {
    name: "Dr. Priya Patel",
    role: "Clinical Safety & Compliance Lead",
    department: "Medical Operations",
    bio: "Board-certified physician directing clinical trial telemetry, RxNorm allergen safety checks, and FDA compliance guidelines.",
    initials: "PP",
    color: "from-rose-600 to-amber-600",
  },
];

const companyJourney = [
  {
    year: "2023",
    title: "Foundation & AI R&D",
    desc: "Good Health 247 founded in Chennai, India. Initial training models on closed clinical biometric data structures.",
  },
  {
    year: "2024",
    title: "HIPAA & SOC-2 Certification",
    desc: "Approved standard audits. Launched the pilot version of our virtual pre-screening platform with 10 test enterprises.",
  },
  {
    year: "2025",
    title: "Global Care Network Expansion",
    desc: "Scaled clinical operations to provide virtual physician intakes in 12 languages with under 3 minutes SLA.",
  },
  {
    year: "2026",
    title: "Enterprise Standardization & DrGodly Launch",
    desc: "Serving 120+ Fortune 500 corporations, processing millions of diagnostic logs under absolute encryption.",
  },
];

const futureRoadmap = [
  {
    period: "Q4 2026",
    title: "Bio-Foundation Model V3 Release",
    desc: "Deploying next-gen 100B parameter bio-medical transformer for complex drug-target docking simulations.",
  },
  {
    period: "Q2 2027",
    title: "Predictive ICU Triage Warnings",
    desc: "Expanding neural metabolic monitors to pre-warn hospital networks of cardiac spikes 6 hours in advance.",
  },
  {
    period: "Q4 2027",
    title: "Universal Autonomous Pharmacy Network",
    desc: "Direct integration with 100,000+ local pharmacies for automated prescription fulfillment and claims verification.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative overflow-hidden border-b py-24 text-center md:py-32">
          <GridPattern className="opacity-40" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/3" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 md:px-8">
            <Badge variant="violet">COMPANY & PURPOSE</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Building the future of healthcare with AI.
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
              Good Health 247 develops AI-native operating systems transforming
              healthcare, life sciences, medication intelligence, fitness, and
              enterprise productivity.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 gap-8 pt-6 text-left md:grid-cols-2">
              {/* Mission Card */}
              <Card
                glass
                className="relative overflow-hidden border-violet-500/20 p-8"
              >
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10">
                    <Compass className="h-5 w-5 text-violet-500" />
                  </div>
                  <Badge variant="violet">MISSION</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">
                  Building AI-Native Operating Systems
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Engineering unified clinical platforms that empower
                  physicians, accelerate drug discovery, and elevate patient
                  care worldwide.
                </p>
              </Card>

              {/* Vision Card */}
              <Card
                glass
                className="relative overflow-hidden border-emerald-500/20 p-8"
              >
                <div className="mb-4 flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                    <Heart className="h-5 w-5 text-emerald-500" />
                  </div>
                  <Badge variant="emerald">VISION</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">
                  Transform Healthcare Through AI
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creating a seamless world where intelligent telemetry and
                  zero-hallucination models eliminate diagnostic errors and
                  expand care access.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Corporate Values */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">CORE VALUES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Principles that guide our engineering.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <Reveal key={idx} variant="slide-up" delay={idx * 0.04}>
                    <Card
                      glass
                      className="flex h-full flex-col justify-between p-6"
                    >
                      <CardHeader className="mb-4 space-y-4 p-0">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg border ${val.bg}`}
                        >
                          <Icon className={`h-5.5 w-5.5 ${val.color}`} />
                        </div>
                        <CardTitle className="text-xl">{val.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {val.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section
          id="team"
          className="bg-secondary/15 border-border/40 border-y py-20 md:py-28"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">LEADERSHIP TEAM</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Led by clinicians & AI researchers.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
              {leadership.map((member) => (
                <Card
                  key={member.name}
                  glass
                  className="flex flex-col justify-between space-y-4 p-6"
                >
                  <div className="space-y-4">
                    {member.image.startsWith("/") ? (
                      <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-violet-500/20 shadow-md">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 font-bold text-white shadow-md">
                        {member.image}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-blue-500"
                            aria-label={`${member.name} LinkedIn Profile`}
                          >
                            <svg
                              className="h-4.5 w-4.5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-violet-500">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team & Specialists Section */}
        <section className="bg-secondary/10 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">ENGINEERING & MEDICAL TEAM</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The experts driving our innovation.
              </h2>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                Our multidisciplinary team spans clinical informatics, AI
                research, distributed cloud infrastructure, and product design.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
              {coreTeam.map((member) => (
                <Card
                  key={member.name}
                  glass
                  className="border-border/80 flex flex-col justify-between space-y-4 p-5 transition-colors duration-300 hover:border-emerald-500/40"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${member.color} text-sm font-bold text-white shadow-md`}
                      >
                        {member.initials}
                      </div>
                      <Badge
                        variant="violet"
                        className="px-2 py-0.5 text-[10px] font-semibold"
                      >
                        {member.department}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-base font-bold">{member.name}</h3>
                      <p className="text-xs font-semibold text-emerald-500">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section: Company Journey & Future Roadmap */}
        <section id="careers" className="relative py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">TIMELINE & ROADMAP</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Our company journey & future vision.
              </h2>
            </div>

            {/* Part 1: Company Journey */}
            <div className="mb-16 space-y-8">
              <h3 className="flex items-center gap-2 text-left text-xl font-bold">
                <Users className="h-5 w-5 text-violet-500" />
                Company Journey
              </h3>

              <div className="border-border/40 relative ml-4 space-y-12 border-l pl-6 md:pl-12">
                {companyJourney.map((milestone, idx) => (
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
                        {milestone.year}
                      </span>
                      <h4 className="text-foreground text-lg font-bold">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Part 2: Future Roadmap */}
            <div className="space-y-8">
              <h3 className="flex items-center gap-2 text-left text-xl font-bold">
                <Sparkles className="h-5 w-5 text-emerald-500" />
                Future Roadmap
              </h3>

              <div className="border-border/40 relative ml-4 space-y-12 border-l pl-6 md:pl-12">
                {futureRoadmap.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative text-left"
                  >
                    {/* Circle Node */}
                    <div className="bg-background absolute top-1.5 -left-[31px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-500 transition-transform duration-200 group-hover:scale-125 md:-left-[55px]" />

                    <div className="space-y-1">
                      <span className="font-mono text-xl font-extrabold text-emerald-500">
                        {item.period}
                      </span>
                      <h4 className="text-foreground text-lg font-bold">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-secondary/10 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-violet-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="violet">JOIN THE MISSION</Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Partner with Good Health 247.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Explore our clinical solutions or connect with our research
                    team to build custom AI operating systems for your
                    enterprise.
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
                      Contact Advisors
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
