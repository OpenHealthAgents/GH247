"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Check, Minus, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    description: "Essential care for growing remote and local teams.",
    priceMonthly: 19,
    priceAnnually: 15,
    features: [
      "24/7 Virtual clinic appointments",
      "Standard physician routing",
      "Employee self-onboarding portal",
      "Standard email & chat support",
      "Basic diagnostic reports",
    ],
    cta: "Start Starter Plan",
    href: "/contact",
    popular: false,
    color: "border-border/60",
  },
  {
    name: "Growth",
    description: "Comprehensive health coverage with active pre-screenings.",
    priceMonthly: 49,
    priceAnnually: 39,
    features: [
      "Priority physician routing (< 3 mins)",
      "Standard AI pre-screening scans",
      "Biometric tracking analytics",
      "SSO integration (SAML/Okta)",
      "Dedicated account health manager",
      "HIPAA compliance log reports",
    ],
    cta: "Start Growth Plan",
    href: "/contact",
    popular: true,
    color:
      "border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.1)] dark:shadow-[0_0_30px_rgba(139,92,246,0.05)]",
  },
  {
    name: "Enterprise",
    description: "Bespoke clinical architectures for global corporations.",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    features: [
      "Unlimited custom AI screening pipelines",
      "Dedicated medical concierge staff",
      "Direct EHR software sync integrations",
      "Custom compliance audit logging",
      "Unlimited users & staff roster sync",
      "24/7 Dedicated phone support",
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
    color: "border-border/60",
  },
];

const featureMatrix = [
  {
    category: "Clinical Access",
    name: "24/7 Virtual Appointments",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    category: "Clinical Access",
    name: "Physician Response SLA",
    starter: "Standard",
    growth: "< 3 mins",
    enterprise: "Instant",
  },
  {
    category: "Clinical Access",
    name: "Dedicated Doctor Teams",
    starter: false,
    growth: false,
    enterprise: true,
  },
  {
    category: "Technology & AI",
    name: "AI Intake Diagnostics",
    starter: "Basic",
    growth: "Standard",
    enterprise: "Custom Pipelines",
  },
  {
    category: "Technology & AI",
    name: "Biometric Data Feeds",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    category: "Technology & AI",
    name: "REST API & Webhooks",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    category: "Security & Integrations",
    name: "SSO (Okta/SAML)",
    starter: false,
    growth: true,
    enterprise: true,
  },
  {
    category: "Security & Integrations",
    name: "Roster Database Sync",
    starter: false,
    growth: "Daily",
    enterprise: "Real-time Tunnel",
  },
  {
    category: "Security & Integrations",
    name: "HIPAA Audit Exports",
    starter: false,
    growth: true,
    enterprise: true,
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">(
    "annually"
  );

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="relative overflow-hidden py-20 text-center md:py-28">
          <GridPattern className="opacity-40" strokeDasharray="3 3" />
          <GlowEffect color="emerald" size="lg" className="-top-40 right-1/4" />

          <div className="relative z-10 container mx-auto max-w-3xl space-y-6 px-4 md:px-8">
            <Badge variant="violet">PRICING PLANS</Badge>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              Transparent, scalable pricing.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              No hidden fees. Provide your staff with the highest standard of
              corporate virtual medical care.
            </p>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <span
                className={`text-sm ${billingPeriod === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingPeriod(
                    billingPeriod === "monthly" ? "annually" : "monthly"
                  )
                }
                className="bg-secondary/80 border-border relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border transition-colors"
              >
                <span
                  className={`bg-foreground inline-block h-4 w-4 transform rounded-full transition-transform ${
                    billingPeriod === "annually"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-sm ${billingPeriod === "annually" ? "text-foreground font-semibold" : "text-muted-foreground"}`}
                >
                  Annually
                </span>
                <Badge
                  variant="emerald"
                  className="px-2 py-0.5 text-[10px] font-bold"
                >
                  Save 20%
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => {
                const isCustom = typeof tier.priceMonthly === "string";
                const activePrice =
                  billingPeriod === "annually"
                    ? tier.priceAnnually
                    : tier.priceMonthly;

                return (
                  <Card
                    key={tier.name}
                    glass
                    hoverEffect={!tier.popular}
                    className={`relative flex flex-col justify-between border ${tier.color}`}
                  >
                    {tier.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="violet"
                          className="px-2.5 py-0.5 font-bold"
                        >
                          RECOMMENDED
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="space-y-4">
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {tier.name}
                        </CardTitle>
                        <CardDescription className="min-h-[40px] pt-1">
                          {tier.description}
                        </CardDescription>
                      </div>
                      <div className="flex items-baseline gap-1 pt-2">
                        <span className="text-4xl font-extrabold tracking-tight md:text-5xl">
                          {isCustom ? activePrice : `$${activePrice}`}
                        </span>
                        {!isCustom && (
                          <span className="text-muted-foreground text-sm font-medium">
                            / user / month
                          </span>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow">
                      <div className="border-border/20 space-y-4 border-t pt-6">
                        <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                          What&apos;s Included
                        </span>
                        <ul className="space-y-3">
                          {tier.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 text-sm"
                            >
                              <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-500" />
                              <span className="text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-6">
                      <Button
                        variant={tier.popular ? "premium" : "outline"}
                        className="w-full gap-2"
                        asChild
                      >
                        <Link href={tier.href}>
                          {tier.cta}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            {/* Header */}
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="emerald">COMPARE FEATURES</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Detailed capabilities.
              </h2>
            </div>

            {/* Matrix Table */}
            <div className="border-border/40 bg-background/50 overflow-x-auto rounded-xl border backdrop-blur-md">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-border/40 bg-secondary/30 border-b">
                    <th className="text-muted-foreground w-2/5 p-4 text-xs font-bold tracking-wider uppercase">
                      Features
                    </th>
                    <th className="text-muted-foreground p-4 text-center text-xs font-bold tracking-wider uppercase">
                      Starter
                    </th>
                    <th className="text-muted-foreground p-4 text-center text-xs font-bold tracking-wider uppercase">
                      Growth
                    </th>
                    <th className="text-muted-foreground p-4 text-center text-xs font-bold tracking-wider uppercase">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((feature, idx) => (
                    <tr
                      key={idx}
                      className="border-border/20 hover:bg-secondary/10 border-b transition-colors last:border-0"
                    >
                      <td className="p-4 text-sm font-medium">
                        <div>{feature.name}</div>
                        <span className="text-muted-foreground text-[10px] font-normal">
                          {feature.category}
                        </span>
                      </td>

                      {/* Starter Value */}
                      <td className="p-4 text-center text-sm">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <Check className="mx-auto h-5 w-5 text-emerald-500" />
                          ) : (
                            <Minus className="text-muted-foreground/30 mx-auto h-5 w-5" />
                          )
                        ) : (
                          <span className="text-muted-foreground font-semibold">
                            {feature.starter}
                          </span>
                        )}
                      </td>

                      {/* Growth Value */}
                      <td className="text-foreground p-4 text-center text-sm font-semibold">
                        {typeof feature.growth === "boolean" ? (
                          feature.growth ? (
                            <Check className="mx-auto h-5 w-5 text-emerald-500" />
                          ) : (
                            <Minus className="text-muted-foreground/30 mx-auto h-5 w-5" />
                          )
                        ) : (
                          <span className="font-bold text-violet-500">
                            {feature.growth}
                          </span>
                        )}
                      </td>

                      {/* Enterprise Value */}
                      <td className="p-4 text-center text-sm">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <Check className="mx-auto h-5 w-5 text-emerald-500" />
                          ) : (
                            <Minus className="text-muted-foreground/30 mx-auto h-5 w-5" />
                          )
                        ) : (
                          <span className="text-foreground font-bold">
                            {feature.enterprise}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
