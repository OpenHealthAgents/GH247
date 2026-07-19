"use client";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import {
  ClipboardList,
  Cpu,
  UserCheck,
  Truck,
  CheckCircle2,
  Shield,
  Heart,
  Activity,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const workflowSteps = [
  {
    step: "01",
    title: "Telehealth Intake & Bioscan",
    description:
      "Patients input symptoms and sync wearable biometric telemetry via our client app portal.",
    icon: ClipboardList,
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    step: "02",
    title: "AI Triage & Recommendation",
    description:
      "Our secure diagnostic pipeline evaluates critical risk categories and calculates confidence factors.",
    icon: Cpu,
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
  {
    step: "03",
    title: "Physician Consult & Telemetry Review",
    description:
      "A board-certified physician connects in under 3 minutes to review recommendations and sign off.",
    icon: UserCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    step: "04",
    title: "Fulfillment & Direct Dispatch",
    description:
      "Prescriptions are sent electronically to local networks, and home testing packages are dispatched.",
    icon: Truck,
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
];

export default function Solutions() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative overflow-hidden py-20 text-center md:py-28">
          <GridPattern className="opacity-40" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/3" />

          <div className="relative z-10 container mx-auto max-w-3xl space-y-6 px-4 md:px-8">
            <Badge variant="emerald">CLINICAL SOLUTIONS</Badge>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              Unified digital health architectures.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              From automated clinical telemetry syncs to worldwide telehealth
              availability, explore the core engines of Good Health 247.
            </p>
          </div>
        </section>

        {/* Product Showcase Catalog */}
        <ProductShowcase />

        {/* Interactive Tabs Section */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4 md:px-8">
            <Tabs defaultValue="enterprise" className="w-full">
              <div className="mb-12 flex justify-center">
                <TabsList className="grid w-full max-w-lg grid-cols-3">
                  <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                  <TabsTrigger value="virtual">Virtual Care</TabsTrigger>
                  <TabsTrigger value="preventive">Preventive</TabsTrigger>
                </TabsList>
              </div>

              {/* Enterprise Tab Content */}
              <TabsContent value="enterprise">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div className="space-y-6 text-left">
                    <Badge variant="violet">STAFF HEALTH INFRASTRUCTURE</Badge>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      Designed for corporate wellness at global scale.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Equip your organization with customized insurance
                      compliance wrappers, real-time aggregate health logs, and
                      seamless employee onboarding channels.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Automated HR database rosters syncs via active API tunnels",
                        "Aggregated diagnostic reports for insurance premium reduction",
                        "Dedicated medical concierge staff allocated to your enterprise",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="premium" className="gap-2" asChild>
                      <Link href="/contact">
                        Contact Enterprise Sales
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Mockup Card */}
                  <Card glass className="space-y-6 p-8">
                    <div className="border-border/10 flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-violet-500" />
                        <span className="text-sm font-bold">
                          Security Controls Portal
                        </span>
                      </div>
                      <Badge variant="emerald">Active</Badge>
                    </div>
                    <div className="space-y-4">
                      {[
                        {
                          title: "HIPAA Compliant Tunneling",
                          status: "Enabled",
                          desc: "Patient identity data is isolated from employer dashboards.",
                        },
                        {
                          title: "SSO (SAML 2.0 / Okta)",
                          status: "Verified",
                          desc: "Secure staff authentication directly integrated.",
                        },
                        {
                          title: "Insurance API Integrations",
                          status: "Active",
                          desc: "Claims processed automatically via verified endpoints.",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-secondary/35 border-border/10 space-y-1 rounded-xl border p-3.5"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold">{item.title}</h4>
                            <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-500">
                              {item.status}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-[11px]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Virtual Care Tab Content */}
              <TabsContent value="virtual">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div className="space-y-6 text-left">
                    <Badge variant="violet">CLINICAL NETWORK</Badge>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      Virtual medical rooms that connect in seconds.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Break down geographic boundaries. Connect your staff to
                      certified physicians, therapists, and specialists
                      immediately through high-fidelity diagnostic dashboards.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Virtual room setup in under 3 minutes average wait times",
                        "High-definition video channels with integrated health charts",
                        "Direct electronic prescription routing to 60,000+ pharmacies",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="premium" className="gap-2" asChild>
                      <Link href="/contact">
                        Register Account
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Mockup Card */}
                  <Card glass className="space-y-6 p-8">
                    <div className="border-border/10 flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-5 w-5 text-rose-500" />
                        <span className="text-sm font-bold">
                          Patient Live Feed
                        </span>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-rose-500/10 px-2 py-0.5 text-xs font-medium text-rose-500">
                        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-rose-500" />
                        Queue Active
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-secondary/35 border-border/10 flex items-center justify-between rounded-xl border p-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-500">
                            V
                          </div>
                          <div>
                            <div className="text-xs font-bold">
                              Vitals Upload Sync
                            </div>
                            <div className="text-muted-foreground text-[10px]">
                              Blood Pressure: 120/80
                            </div>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] font-semibold text-emerald-500">
                          Sync Completed
                        </span>
                      </div>
                      <div className="bg-secondary/35 border-border/10 flex items-center justify-between rounded-xl border p-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-xs font-bold text-violet-500">
                            E
                          </div>
                          <div>
                            <div className="text-xs font-bold">
                              ECG Telemetry Feed
                            </div>
                            <div className="text-muted-foreground text-[10px]">
                              Normal Sinus Rhythm
                            </div>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] font-semibold text-emerald-500">
                          Verified
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* Preventive Tab Content */}
              <TabsContent value="preventive">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div className="space-y-6 text-left">
                    <Badge variant="violet">PREDICTIVE ANALYTICS</Badge>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      Mitigate medical risks before they escalate.
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Leverage advanced biometric anomaly detection pipelines.
                      Monitor trend fluctuations in blood glucose, sleep
                      quality, and cardiovascular stress indexes.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Continuous heart-rate variance (HRV) classification",
                        "Personalized metabolic wellness goals powered by AI models",
                        "Instant alert tunnels sent to physicians upon warning signs",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                          <span className="text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="premium" className="gap-2" asChild>
                      <Link href="/solutions">
                        View Analytics Platform
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Mockup Card */}
                  <Card glass className="space-y-6 p-8">
                    <div className="border-border/10 flex items-center justify-between border-b pb-4">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-emerald-500" />
                        <span className="text-sm font-bold">
                          Biometric Trend Tracker
                        </span>
                      </div>
                      <span className="text-muted-foreground font-mono text-xs">
                        Weekly View
                      </span>
                    </div>
                    <div className="flex h-40 items-end justify-between gap-2 pt-4">
                      {[65, 80, 55, 95, 75, 85, 90].map((val, idx) => (
                        <div
                          key={idx}
                          className="flex flex-1 flex-col items-center gap-2"
                        >
                          <div className="bg-border/20 relative flex h-28 w-full items-end overflow-hidden rounded-md">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${val}%` }}
                              transition={{ duration: 1, delay: idx * 0.05 }}
                              className="w-full rounded-md bg-gradient-to-t from-violet-600 to-indigo-500"
                            />
                          </div>
                          <span className="text-muted-foreground font-mono text-[9px]">
                            {"MTWTFSS"[idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Workflow Visualizer Timeline */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-20 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">THE CLINICAL PIPELINE</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                How patients move through care.
              </h2>
              <p className="text-muted-foreground">
                A streamlined workflow designed to verify diagnostic markers,
                consult physicians, and dispatch prescriptions in minutes.
              </p>
            </div>

            {/* Steps Timeline Grid */}
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Connecting line on desktop */}
              <div className="bg-border/40 absolute top-12 right-8 left-8 z-0 hidden h-0.5 md:block" />

              {workflowSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative z-10 flex flex-col items-start space-y-4 text-left"
                  >
                    {/* Circle Node */}
                    <div
                      className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-md",
                        step.bg
                      )}
                    >
                      <IconComponent className={cn("h-7 w-7", step.color)} />
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <span
                        className={cn(
                          "font-mono text-xs font-bold tracking-wider",
                          step.color
                        )}
                      >
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
