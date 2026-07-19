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
import { TiltCard } from "@/components/effects/TiltCard";
import {
  Info,
  RefreshCw,
  LayoutTemplate,
  Palette,
  Type,
  Move,
  ToggleLeft,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignSystem() {
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [activeRevealVariant, setActiveRevealVariant] = useState<
    "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right"
  >("slide-up");

  const colors = {
    primary: [
      {
        name: "Blue Primary (Light)",
        hsl: "221.2 83.2% 53.3%",
        hex: "#2563eb",
        desc: "Main brand CTA theme",
      },
      {
        name: "Blue Primary (Dark)",
        hsl: "217.2 91.2% 59.8%",
        hex: "#3b82f6",
        desc: "Contrast theme for dark screens",
      },
    ],
    secondary: [
      {
        name: "Purple Secondary (Light)",
        hsl: "262.1 83.3% 57.8%",
        hex: "#7c3aed",
        desc: "Features and hover alerts",
      },
      {
        name: "Purple Secondary (Dark)",
        hsl: "263.4 70% 50.4%",
        hex: "#8b5cf6",
        desc: "Contrast secondary dark accent",
      },
    ],
    accent: [
      {
        name: "Emerald Accent (Light)",
        hsl: "142.1 76.2% 36.3%",
        hex: "#10b981",
        desc: "Status, trust metrics and indicators",
      },
      {
        name: "Emerald Accent (Dark)",
        hsl: "142.1 70.6% 45.3%",
        hex: "#059669",
        desc: "Dark mode status labels",
      },
    ],
    neutral: [
      {
        name: "Background (Light)",
        hsl: "0 0% 100%",
        hex: "#ffffff",
        desc: "White paper style light mode",
      },
      {
        name: "Background (Dark)",
        hsl: "230 40% 4.5%",
        hex: "#090a0f",
        desc: "Obsidian deep-slate dark mode",
      },
      {
        name: "Border (Light)",
        hsl: "220 13% 91%",
        hex: "#e2e8f0",
        desc: "Divider line light mode",
      },
      {
        name: "Border (Dark)",
        hsl: "217.2 32.6% 17.5%",
        hex: "#1e293b",
        desc: "Divider line dark mode",
      },
    ],
  };

  const spacingScale = [
    { name: "Space 1", rem: "0.25rem", px: "4px", tailwind: "p-1 / w-1" },
    { name: "Space 2", rem: "0.5rem", px: "8px", tailwind: "p-2 / w-2" },
    { name: "Space 4", rem: "1rem", px: "16px", tailwind: "p-4 / w-4" },
    { name: "Space 6", rem: "1.5rem", px: "24px", tailwind: "p-6 / w-6" },
    { name: "Space 8", rem: "2rem", px: "32px", tailwind: "p-8 / w-8" },
    { name: "Space 12", rem: "3rem", px: "48px", tailwind: "p-12 / w-12" },
    { name: "Space 16", rem: "4rem", px: "64px", tailwind: "p-16 / w-16" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative overflow-hidden border-b py-20">
          <GridPattern className="opacity-40" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-3xl space-y-6 px-4 text-center md:px-8">
            <Badge variant="violet">DESIGN SYSTEM SPECIFICATION</Badge>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
              Good Health 247 Design Language.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              Our complete catalog of colors, typography scales, spacing tokens,
              button variations, cards, and interactive motions.
            </p>
          </div>
        </section>

        {/* Section 1: Color Swatches */}
        <section className="border-border/20 border-b py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-10 flex items-center space-x-3 text-left">
              <Palette className="text-primary h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                1. Color Palette Swatches
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Primary & Secondary */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-left text-lg font-bold">
                    Primary (Deep Blue) & Secondary (Purple)
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[...colors.primary, ...colors.secondary].map(
                      (color, idx) => (
                        <Card
                          key={idx}
                          glass
                          className="flex flex-col justify-between space-y-4 p-4"
                        >
                          <div
                            className="h-16 w-full rounded-lg border border-white/10 shadow-inner"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="space-y-1 text-left">
                            <div className="text-sm font-bold">
                              {color.name}
                            </div>
                            <div className="text-muted-foreground font-mono text-xs">
                              {color.hex} / HSL: {color.hsl}
                            </div>
                            <p className="text-muted-foreground pt-1 text-[11px] leading-snug">
                              {color.desc}
                            </p>
                          </div>
                        </Card>
                      )
                    )}
                  </div>
                </div>

                {/* Accent */}
                <div>
                  <h3 className="mb-4 text-left text-lg font-bold">
                    Accent (Emerald)
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {colors.accent.map((color, idx) => (
                      <Card
                        key={idx}
                        glass
                        className="flex flex-col justify-between space-y-4 p-4"
                      >
                        <div
                          className="h-16 w-full rounded-lg border border-white/10 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="space-y-1 text-left">
                          <div className="text-sm font-bold">{color.name}</div>
                          <div className="text-muted-foreground font-mono text-xs">
                            {color.hex} / HSL: {color.hsl}
                          </div>
                          <p className="text-muted-foreground pt-1 text-[11px] leading-snug">
                            {color.desc}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backgrounds & Neutrals */}
              <div>
                <h3 className="mb-4 text-left text-lg font-bold">
                  Background & Neutral Systems
                </h3>
                <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
                  {colors.neutral.map((color, idx) => (
                    <Card
                      key={idx}
                      glass
                      className="flex flex-col justify-between space-y-4 p-4"
                    >
                      <div
                        className="h-16 w-full rounded-lg border border-white/15 shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="space-y-1 text-left">
                        <div className="text-sm font-bold">{color.name}</div>
                        <div className="text-muted-foreground font-mono text-xs">
                          {color.hex} / HSL: {color.hsl}
                        </div>
                        <p className="text-muted-foreground pt-1 text-[11px] leading-snug">
                          {color.desc}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Typography */}
        <section className="border-border/20 bg-secondary/10 border-b py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-10 flex items-center space-x-3 text-left">
              <Type className="text-primary h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                2. Typography Hierarchy
              </h2>
            </div>

            <Card
              glass
              className="divide-border/20 space-y-8 divide-y p-6 text-left md:p-8"
            >
              {/* Display */}
              <div className="space-y-3 pt-0">
                <span className="font-mono text-xs font-bold text-violet-500">
                  DISPLAY (text-display) - clamp(3rem, 8vw, 5.5rem)
                </span>
                <div className="text-display">Display Title</div>
                <p className="text-muted-foreground text-xs">
                  Used exclusively for Hero headers and massive landing screens.
                </p>
              </div>

              {/* Heading XL */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  HEADING XL (text-heading-xl) - clamp(2rem, 5vw, 3rem)
                </span>
                <div className="text-heading-xl">
                  Extra Large Section Heading
                </div>
                <p className="text-muted-foreground text-xs">
                  Used for major section starts and core page layouts.
                </p>
              </div>

              {/* Heading LG */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  HEADING LG (text-heading-lg) - 1.75rem / 28px
                </span>
                <div className="text-heading-lg">Large Component Heading</div>
                <p className="text-muted-foreground text-xs">
                  Used inside cards, modals, and workflow subsections.
                </p>
              </div>

              {/* Heading MD */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  HEADING MD (text-heading-md) - 1.35rem / 21px
                </span>
                <div className="text-heading-md">Medium Subheading Title</div>
                <p className="text-muted-foreground text-xs">
                  Used for list labels and settings labels.
                </p>
              </div>

              {/* Body LG */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  BODY LG (text-body-lg) - 1.125rem / 18px
                </span>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  This is a large reading block paragraph. Excellent for summary
                  descriptors directly below main display headers.
                </p>
              </div>

              {/* Body MD */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  BODY MD (text-body-md) - 1rem / 16px
                </span>
                <p className="text-body-md text-muted-foreground leading-relaxed">
                  This is the standard corporate body reading text size. Muted
                  default shades are standard to maintain visual breathing space
                  while remaining fully readable.
                </p>
              </div>

              {/* Caption */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  CAPTION (text-caption) - 0.875rem / 14px
                </span>
                <div className="text-caption text-muted-foreground">
                  Footnotes, subheaders, placeholder labels, and form helper
                  validations utilize caption weights.
                </div>
              </div>

              {/* Micro */}
              <div className="space-y-3 pt-6">
                <span className="font-mono text-xs font-bold text-violet-500">
                  MICRO (text-micro) - 0.75rem / 12px
                </span>
                <div className="text-micro text-muted-foreground font-semibold">
                  TAG ACCENTS, TIMESTAMPS, PIPELINE LABELS
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 3: Spacing */}
        <section className="border-border/20 border-b py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-10 flex items-center space-x-3 text-left">
              <Move className="text-primary h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                3. Modular Spacing Tokens
              </h2>
            </div>

            <Card glass className="space-y-6 p-6 text-left md:p-8">
              <div className="space-y-4">
                {spacingScale.map((space) => (
                  <div
                    key={space.name}
                    className="border-border/10 flex flex-col justify-between gap-2 border-b pb-3 last:border-0 sm:flex-row sm:items-center"
                  >
                    <div className="w-40 text-sm font-bold">
                      {space.name}{" "}
                      <span className="font-mono text-xs text-violet-500">
                        ({space.rem})
                      </span>
                    </div>
                    <div className="bg-secondary/30 border-border/25 relative h-6 max-w-xl flex-grow overflow-hidden rounded-md border">
                      <div
                        className="bg-primary/75 h-full rounded-md"
                        style={{ width: `calc(${space.rem} * 4)` }}
                      />
                    </div>
                    <span className="text-muted-foreground w-24 text-right font-mono text-[10px]">
                      {space.px} / {space.tailwind}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Section 4: Buttons & Reusable Catalogs */}
        <section className="border-border/20 bg-secondary/10 border-b py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-10 flex items-center space-x-3 text-left">
              <ToggleLeft className="text-primary h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                4. Reusable Button Catalog
              </h2>
            </div>

            <Card glass className="space-y-8 p-6 text-left md:p-8">
              {/* Button Variants */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary (Blue)</Button>
                  <Button variant="secondary">Secondary (Purple)</Button>
                  <Button variant="emerald">Accent (Emerald)</Button>
                  <Button variant="premium">Premium Gradient</Button>
                  <Button variant="glass">Glass Button</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div className="border-border/15 space-y-4 border-t pt-6">
                <h3 className="text-lg font-bold">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">
                    Small Size (sm)
                  </Button>
                  <Button variant="primary" size="default">
                    Default Size
                  </Button>
                  <Button variant="primary" size="lg">
                    Large Size (lg)
                  </Button>
                </div>
              </div>

              {/* Interactive states */}
              <div className="border-border/15 space-y-4 border-t pt-6">
                <h3 className="text-lg font-bold">State Visualizers</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" disabled>
                    Disabled State
                  </Button>
                  <Button
                    variant="outline"
                    className="pointer-events-none gap-2"
                  >
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Loading State
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 5: Cards & Hover Animations */}
        <section className="border-border/20 border-b py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-10 flex items-center space-x-3 text-left">
              <LayoutTemplate className="text-primary h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                5. Card showroom & Glass Panels
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
              {/* Standard Card */}
              <Card className="relative overflow-hidden p-6">
                <CardHeader className="mb-4 p-0">
                  <Badge variant="violet" className="mb-2 w-fit">
                    STANDARD CARD
                  </Badge>
                  <CardTitle className="text-xl">
                    Regular Design System Card
                  </CardTitle>
                  <CardDescription>
                    Hover over this container to preview translate offset
                    transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-muted-foreground p-0 text-sm leading-relaxed">
                  This card uses our design system standard styling: soft
                  borders (`border-border/80`), slightly rounded corners
                  (`rounded-2xl`), and a clean CSS translate-up and shadow
                  transition when hovered.
                </CardContent>
              </Card>

              {/* Glass Card with 3D Perspective Tilt */}
              <TiltCard>
                <Card glass className="relative overflow-hidden p-6">
                  {/* Visual glow backdrop specifically for the glass card */}
                  <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[50px]" />

                  <CardHeader className="mb-4 p-0">
                    <Badge variant="emerald" className="mb-2 w-fit">
                      GLASS PANEL
                    </Badge>
                    <CardTitle className="text-xl">
                      Premium Glassmorphic Card
                    </CardTitle>
                    <CardDescription>
                      Features backdropped blur filters and glowing borders.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground relative z-10 p-0 text-sm leading-relaxed">
                    This uses the `.glass-panel` utility with `backdrop-filter:
                    blur(16px)` and subtle alpha-white borders
                    (`border-white/10`). Hovering reveals a violet border glow
                    overlay that adapts to dark and light mode themes.
                  </CardContent>
                </Card>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Section 6: Motion Laboratory */}
        <section className="bg-secondary/10 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl px-4 md:px-8">
            <div className="mb-10 flex items-center space-x-3 text-left">
              <RefreshCw className="text-primary h-6 w-6 animate-spin" />
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                6. Motion Laboratory
              </h2>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 text-left lg:grid-cols-12">
              {/* Control Panel (Span-5) */}
              <div className="space-y-6 lg:col-span-5">
                <Card glass className="p-6">
                  <h3 className="mb-4 text-lg font-bold">Reveal Controls</h3>
                  <p className="text-muted-foreground mb-6 text-xs leading-relaxed">
                    Test our reusable &lt;Reveal&gt; scroll animations. Select a
                    variant direction below and hit &quot;Trigger
                    Animation&quot; to watch the preview block reload.
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <label className="text-muted-foreground text-xs font-semibold">
                        Animation Variant
                      </label>
                      <select
                        value={activeRevealVariant}
                        onChange={(e) =>
                          setActiveRevealVariant(
                            e.target.value as
                              | "fade"
                              | "slide-up"
                              | "slide-down"
                              | "slide-left"
                              | "slide-right"
                          )
                        }
                        className="bg-secondary/50 border-border/80 w-full rounded-lg border p-2.5 text-sm focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                      >
                        <option value="fade">Fade Only</option>
                        <option value="slide-up">Slide Up (Standard)</option>
                        <option value="slide-down">Slide Down</option>
                        <option value="slide-left">Slide Left</option>
                        <option value="slide-right">Slide Right</option>
                      </select>
                    </div>

                    <Button
                      variant="primary"
                      onClick={() => setAnimationTrigger((prev) => prev + 1)}
                      className="mt-4 w-full gap-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Trigger Animation
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Animation Arena (Span-7) */}
              <div className="h-full lg:col-span-7">
                <Card
                  glass
                  className="bg-background/40 relative flex min-h-[300px] items-center justify-center overflow-hidden border-violet-500/25 p-12"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={animationTrigger}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full"
                    >
                      <Reveal
                        variant={activeRevealVariant}
                        key={`${activeRevealVariant}-${animationTrigger}`}
                        once={false}
                      >
                        <div className="mx-auto flex max-w-sm flex-col items-center space-y-4 rounded-2xl border border-violet-500/35 bg-violet-500/10 p-8 text-center shadow-lg">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20">
                            <Info className="h-6 w-6 text-violet-500" />
                          </div>
                          <div>
                            <h4 className="font-bold">Animating Target</h4>
                            <p className="text-muted-foreground mt-1 text-xs">
                              Framer Motion trigger state: &quot;
                              {activeRevealVariant}&quot;
                            </p>
                          </div>
                          <Badge variant="violet" className="px-2 py-0.5">
                            Triggered
                          </Badge>
                        </div>
                      </Reveal>
                    </motion.div>
                  </AnimatePresence>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
