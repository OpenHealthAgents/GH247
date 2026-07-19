"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { StatsDashboard } from "@/components/sections/StatsDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Bento Grid Feature List */}
        <BentoGrid />

        {/* Metrics/Stats Dashboard */}
        <StatsDashboard />

        {/* Premium CTA Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="relative z-10 container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card
                glass
                hoverEffect={false}
                className="relative overflow-hidden border border-violet-500/20 shadow-2xl dark:shadow-violet-900/10"
              >
                {/* Background glowing effects inside the card */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[80px]" />
                <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-[80px]" />

                <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-16">
                  <div className="max-w-xl space-y-4 text-left">
                    <Badge variant="violet" className="gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      HIPAA Protected & Fully Secured
                    </Badge>
                    <h2 className="text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
                      Ready to standardize employee health?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Deliver instant board-certified physician consultation
                      layers, AI-assisted diagnostics, and preventative wellness
                      portals directly to your staff.
                    </p>
                  </div>

                  <div className="flex w-full shrink-0 flex-col items-center gap-4 sm:flex-row md:w-auto">
                    <Button
                      variant="premium"
                      size="lg"
                      className="w-full gap-2 sm:w-auto"
                      asChild
                    >
                      <Link href="/contact">
                        Get Started Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:bg-secondary/40 w-full sm:w-auto"
                      asChild
                    >
                      <Link href="/solutions">View Clinical Suite</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
