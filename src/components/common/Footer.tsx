"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const productsLinks = [
  { name: "DrGodly", href: "/products/drgodly" },
  { name: "ClaimPulse AI", href: "/products/claims-rcm" },
  { name: "Steady AI", href: "/products/fitness-coach" },
  { name: "AI-RxOS", href: "/products/medication-intelligence" },
  { name: "MedPilot", href: "/products/medication-intelligence" },
  { name: "WorkPilot AI", href: "/products/marketing-platform" },
];

const companyLinks = [
  { name: "Technology", href: "/technology" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const logoSrc = !mounted
    ? "/logo-dark.jpg"
    : resolvedTheme === "dark"
      ? "/logo-dark.jpg"
      : "/logo-light.jpg";

  return (
    <footer className="border-border/40 bg-background/50 border-t backdrop-blur-md">
      <div className="container mx-auto px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 text-left md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <Link href="/" className="flex shrink-0 items-center space-x-2">
              <Image
                src={logoSrc}
                alt="Good Health 247 Inc."
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-muted-foreground max-w-xs text-xs leading-relaxed md:text-sm">
              Pioneering clinical infrastructure through AI-driven preventative
              care, secure diagnostic pipelines, and virtual medical
              environments.
            </p>

            {/* Direct Contact info */}
            <div className="text-muted-foreground space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0 text-violet-500" />
                <a
                  href="mailto:contact@goodhealth247.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@goodhealth247.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 shrink-0 text-emerald-500" />
                <a
                  href="tel:+919346317790"
                  className="hover:text-primary font-mono transition-colors"
                >
                  +91 9346317790
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/80 bg-secondary/40 flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:border-violet-500 hover:text-violet-500"
                aria-label="Twitter"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/80 bg-secondary/40 flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:border-blue-500 hover:text-blue-500"
                aria-label="LinkedIn"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/80 bg-secondary/40 flex h-8 w-8 items-center justify-center rounded-full border transition-colors hover:border-emerald-500 hover:text-emerald-500"
                aria-label="GitHub"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-3">
            <h3 className="text-foreground text-xs font-bold tracking-wider uppercase">
              Products
            </h3>
            <ul className="space-y-2.5 text-xs">
              {productsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-3">
            <h3 className="text-foreground text-xs font-bold tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3 lg:col-span-2">
            <h3 className="text-foreground text-xs font-bold tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Subscribe to receiving clinical research papers and platform
              release updates.
            </p>

            {submitted ? (
              <div className="flex items-center space-x-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-xs font-semibold text-emerald-500">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/80 h-9 text-xs"
                  required
                />
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  className="h-9 shrink-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-border/20 text-muted-foreground mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-xs sm:flex-row sm:space-y-0">
          <p>© 2026 Good Health 247 Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/security"
              className="hover:text-foreground transition-colors"
            >
              HIPAA & Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
