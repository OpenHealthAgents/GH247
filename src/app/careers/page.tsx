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
  Megaphone,
  TrendingUp,
  Target,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const roles = [
  {
    id: "digital-marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing & Growth",
    location: "Chennai, Tamil Nadu",
    type: "Internship (Fall / Spring 2026)",
    desc: "Drive omnichannel marketing campaigns, social media content strategy, SEO positioning, and digital growth analytics for our AI-native healthcare platform.",
    icon: Megaphone,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    id: "business-development-intern",
    title: "Business Development Intern",
    department: "Business Operations",
    location: "Chennai, Tamil Nadu",
    type: "Internship (Fall / Spring 2026)",
    desc: "Identify strategic partnership opportunities with healthcare providers, analyze market trends, assist with corporate client outreach, and support enterprise expansion.",
    icon: TrendingUp,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "sales-intern",
    title: "Sales Intern",
    department: "Sales & Partnerships",
    location: "Chennai, Tamil Nadu",
    type: "Internship (Fall / Spring 2026)",
    desc: "Support enterprise sales pipelines, build qualified lead databases for DrGodly and ClaimPulse platforms, conduct prospect outreach, and assist with client pitch decks.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = [
    "All",
    "Marketing & Growth",
    "Business Operations",
    "Sales & Partnerships",
  ];

  const filteredRoles =
    selectedDept === "All"
      ? roles
      : roles.filter((r) => r.department === selectedDept);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="violet">CAREERS AT GOOD HEALTH 247</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Join us in building the future of AI.
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              Work alongside leading clinicians, AI researchers, and systems
              engineers to pioneer AI-native healthcare.
            </p>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
              We offer competitive equity, comprehensive health benefits,
              learning stipends, and flexible remote work options.
            </p>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            {/* Filter Bar */}
            <div className="border-border/20 mb-12 flex flex-wrap items-center justify-between gap-4 border-b pb-6">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-violet-500" />
                <h2 className="text-2xl font-bold tracking-tight">
                  Open Positions ({filteredRoles.length})
                </h2>
              </div>

              {/* Department Pills */}
              <div className="flex items-center gap-2 overflow-x-auto py-2">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDept === dept ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedDept(dept)}
                    className="shrink-0 cursor-pointer text-xs font-semibold"
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredRoles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <Reveal key={role.id} variant="slide-up" delay={idx * 0.04}>
                    <Card
                      glass
                      className="border-border/80 flex h-full flex-col justify-between space-y-6 p-6 text-left transition-colors duration-300 hover:border-violet-500/40"
                    >
                      <CardHeader className="space-y-4 p-0">
                        <div className="flex items-center justify-between">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-lg border ${role.bg}`}
                          >
                            <Icon className={`h-5.5 w-5.5 ${role.color}`} />
                          </div>
                          <Badge
                            variant="violet"
                            className="px-2 py-0.5 text-[11px]"
                          >
                            {role.department}
                          </Badge>
                        </div>

                        <div>
                          <CardTitle className="text-2xl font-bold">
                            {role.title}
                          </CardTitle>
                          <div className="text-muted-foreground mt-2 flex items-center space-x-4 text-xs">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-violet-500" />
                              {role.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-emerald-500" />
                              {role.type}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0">
                        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                          {role.desc}
                        </CardDescription>
                      </CardContent>

                      <div className="border-border/10 border-t pt-4">
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-full gap-1.5"
                          asChild
                        >
                          <Link
                            href={`/contact?role=${encodeURIComponent(role.title)}`}
                          >
                            Apply for this Position
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Talent Network CTA */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-violet-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="emerald">GENERAL APPLICATIONS</Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Don&apos;t see your specific role?
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We are always looking for exceptional engineers,
                    researchers, and clinical experts. Join our general talent
                    network.
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
                      Submit General Application
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
