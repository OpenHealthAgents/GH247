import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Reveal } from "@/components/effects/Reveal";
import {
  Radio,
  Mic,
  Receipt,
  Boxes,
  Zap,
  ArrowRight,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Mic,
    title: "12+ Indian Language Voice NLP",
    desc: "Understand natural spoken commands in Hindi, Tamil, Telugu, Kannada, Marathi, Gujarati, English, and more with sub-500ms response latency.",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Receipt,
    title: "Automated Khata & Udhar Ledger",
    desc: "Simply speak transaction entries. Vyapaar AI records credits, debits, customer balances, and sends automated SMS payment reminders.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Radio,
    title: "Voice UPI & Soundbox Settlement",
    desc: "Accept QR and UPI payments with instant, loud audio confirmations in your local language—eliminating payment fraud at billing counters.",
    color: "text-violet-500",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Boxes,
    title: "Hands-Free Inventory Telemetry",
    desc: "Manage stock levels without barcode scanners. Speak new shipments or daily sales to maintain accurate real-time inventory counts.",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "Screen-Free Standalone Hardware",
    desc: "Built with a rugged pocketable chassis, embedded 4G eSIM connectivity, and 3-day battery backup—requiring no smartphone or PC.",
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  {
    icon: Zap,
    title: "Instant Business Analytics",
    desc: "Ask questions like 'What is today's net profit?' or 'Which stock is running low?' and get immediate, intelligent voice summaries.",
    color: "text-teal-500",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
];

const specs = [
  {
    label: "Hardware Form Factor",
    value: "Pocketable Ergonomic Alloy Chassis",
  },
  {
    label: "Display Technology",
    value: "Screen-Free Voice & Haptic Audio Feedback",
  },
  { label: "Connectivity", value: "Dual-SIM 4G LTE + Wi-Fi 6 + Bluetooth 5.3" },
  { label: "Battery Life", value: "4800mAh Li-Po (72 Hours Active Runtime)" },
  {
    label: "Audio Output",
    value: "3W High-Output Counter Noise-Canceling Speaker",
  },
  {
    label: "Security & Encryption",
    value: "Hardware Secure Element + AES-256 Cloud Sync",
  },
];

export const metadata = {
  title: "Vyapaar AI - Screen-Free Business AI Hardware | Good Health 247",
  description:
    "Vyapaar AI is a pocketable, screen-free AI device acting as a real-time business assistant for shop owners, distributors, and SMEs in India.",
};

export default function VyapaarAIPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="teal" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-5xl space-y-8 px-4 text-center md:px-8">
            <Reveal variant="fade">
              <Badge variant="violet" className="mb-4">
                POCKETABLE SCREEN-FREE AI HARDWARE
              </Badge>
            </Reveal>

            <Reveal variant="slide-up" delay={0.1}>
              <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
                Vyapaar AI: Screen-Free Business Assistant
              </h1>
            </Reveal>

            <Reveal variant="slide-up" delay={0.2}>
              <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed font-semibold md:text-2xl">
                A pocketable, screen-free AI device that acts as a real-time
                business assistant for shop owners, distributors, and SMEs in
                India.
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.25}>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed">
                It listens, understands, and acts—helping manage stock, record
                transactions, reconcile accounts, and process voice payments
                without needing a PC or smartphone screen.
              </p>
            </Reveal>

            <Reveal variant="slide-up" delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button variant="premium" size="lg" className="gap-2" asChild>
                  <Link href="/contact?product=vyapaar-ai">
                    Order Hardware DevKit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Enterprise Pilot</Link>
                </Button>
              </div>
            </Reveal>

            {/* Quick Stats Grid */}
            <Reveal variant="fade" delay={0.4}>
              <div className="grid grid-cols-2 gap-4 pt-12 text-left md:grid-cols-4">
                <Card glass className="border-amber-500/20 p-4">
                  <div className="text-2xl font-extrabold text-amber-500">
                    100%
                  </div>
                  <div className="text-muted-foreground text-xs font-medium">
                    Screen-Free Operation
                  </div>
                </Card>
                <Card glass className="border-amber-500/20 p-4">
                  <div className="text-2xl font-extrabold text-amber-500">
                    12+
                  </div>
                  <div className="text-muted-foreground text-xs font-medium">
                    Indian Languages
                  </div>
                </Card>
                <Card glass className="border-amber-500/20 p-4">
                  <div className="text-2xl font-extrabold text-amber-500">
                    72 Hrs
                  </div>
                  <div className="text-muted-foreground text-xs font-medium">
                    Continuous Battery
                  </div>
                </Card>
                <Card glass className="border-amber-500/20 p-4">
                  <div className="text-2xl font-extrabold text-amber-500">
                    Sub-500ms
                  </div>
                  <div className="text-muted-foreground text-xs font-medium">
                    Voice Response Latency
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">CORE CAPABILITIES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Engineered for the reality of Indian commerce.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From bustling Kirana shops to regional wholesale distribution
                centers, Vyapaar AI simplifies operations through natural voice
                interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <Reveal
                    key={feat.title}
                    variant="slide-up"
                    delay={idx * 0.05}
                  >
                    <Card
                      glass
                      className="border-border/80 flex h-full flex-col justify-between space-y-4 p-6 text-left transition-colors duration-300 hover:border-amber-500/40"
                    >
                      <div className="space-y-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${feat.bg}`}
                        >
                          <Icon className={`h-6 w-6 ${feat.color}`} />
                        </div>
                        <h3 className="text-xl font-bold">{feat.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">HARDWARE SPECIFICATIONS</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Industrial-grade device architecture.
              </h2>
            </div>

            <Card glass className="border-amber-500/20 p-6 md:p-10">
              <div className="divide-border/40 divide-y">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col justify-between py-4 sm:flex-row sm:items-center"
                  >
                    <span className="text-muted-foreground text-sm font-semibold">
                      {spec.label}
                    </span>
                    <span className="text-foreground mt-1 text-sm font-bold sm:mt-0">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-amber-500/30 p-8 text-center shadow-2xl md:p-14"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[80px]" />
              <div className="relative z-10 space-y-6">
                <Badge variant="violet">TRANSFORM YOUR RETAIL OPERATIONS</Badge>
                <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                  Ready to deploy Vyapaar AI in your business?
                </h2>
                <p className="text-muted-foreground mx-auto max-w-xl text-base leading-relaxed">
                  Join hundreds of forward-thinking distributors, retailers, and
                  SME networks automating daily transactions with voice AI.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button variant="premium" size="lg" className="gap-2" asChild>
                    <Link href="/contact?product=vyapaar-ai">
                      Contact Sales & Pre-Orders
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
