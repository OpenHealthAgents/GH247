"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Good Health 247 HIPAA compliant?",
    answer:
      "Absolutely. We complete annual SOC-2 Type II audit sweeps and maintain strict data-separation practices. Patient medical diagnostics and identity logs are isolated in highly encrypted databases and never disclosed to third parties.",
  },
  {
    question: "How fast can we deploy DrGodly EMR or Drug Discovery OS?",
    answer:
      "Sandbox deployment takes under 2 hours. Enterprise VPC provisioning and SAML 2.0 / Okta single sign-on setup can be completed within 24 hours.",
  },
  {
    question: "What is your clinical response SLA?",
    answer:
      "Virtual physician routing is available within 3 minutes on average. Enterprise tiers include dedicated clinical concierge teams guaranteeing consultation setups under 60 seconds, 24/7/365.",
  },
  {
    question: "How do we contact your engineering and support team directly?",
    answer:
      "You can email contact@goodhealth247.com or call our international clinical line at +91 9346317790 for 24/7 assistance.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Corporate email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please input a valid corporate email.";
    }

    if (!formData.company.trim())
      newErrors.company = "Company name is required.";
    if (!formData.message.trim())
      newErrors.message = "Message details are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="border-border/40 relative overflow-hidden border-b py-24 text-center md:py-32">
          <GridPattern className="opacity-40" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 right-1/3" />

          <div className="relative z-10 container mx-auto max-w-3xl space-y-6 px-4 md:px-8">
            <Badge variant="emerald">GET IN TOUCH</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              Contact our clinical advisors.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              Have questions about security, platform integrations, or
              enterprise setups? Connect with our team today.
            </p>
          </div>
        </section>

        {/* Contact Info Cards & Form Grid */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-12 text-left lg:grid-cols-12">
              {/* Left Column: Contact Cards, Socials & Map Placeholder (Span-5) */}
              <div className="space-y-8 lg:col-span-5">
                <div className="space-y-6">
                  {/* Email Card */}
                  <Card
                    glass
                    className="border-border/80 flex items-start space-x-4 p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10">
                      <Mail className="h-5.5 w-5.5 text-violet-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold">Direct Email</h3>
                      <a
                        href="mailto:contact@goodhealth247.com"
                        className="block text-sm font-medium text-violet-500 hover:underline"
                      >
                        contact@goodhealth247.com
                      </a>
                      <p className="text-muted-foreground text-xs">
                        General inquiries and technical support
                      </p>
                    </div>
                  </Card>

                  {/* Phone Card */}
                  <Card
                    glass
                    className="border-border/80 flex items-start space-x-4 p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10">
                      <Phone className="h-5.5 w-5.5 text-emerald-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold">Direct Phone</h3>
                      <a
                        href="tel:+919346317790"
                        className="block font-mono text-sm font-medium text-emerald-500 hover:underline"
                      >
                        +91 9346317790
                      </a>
                      <p className="text-muted-foreground text-xs">
                        24/7 Clinical & Enterprise Advisory Line
                      </p>
                    </div>
                  </Card>

                  {/* HQ Address Card */}
                  <Card
                    glass
                    className="border-border/80 flex items-start space-x-4 p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10">
                      <MapPin className="h-5.5 w-5.5 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold">Global Headquarters</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Good Health 247 Inc.
                        <br />
                        Market Street, Suite 800
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </Card>

                  {/* Social Icons */}
                  <Card glass className="space-y-3 p-6">
                    <h3 className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                      Connect With Us
                    </h3>
                    <div className="flex items-center space-x-3">
                      {/* Twitter / X */}
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border/80 bg-secondary/40 flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-violet-500 hover:text-violet-500"
                        aria-label="Twitter"
                      >
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border/80 bg-secondary/40 flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-blue-500 hover:text-blue-500"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      {/* GitHub */}
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border/80 bg-secondary/40 flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-emerald-500 hover:text-emerald-500"
                        aria-label="GitHub"
                      >
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </Card>
                </div>

                {/* Google Map Placeholder */}
                <Card
                  glass
                  className="border-border/80 relative space-y-3 overflow-hidden p-4"
                >
                  <div className="text-muted-foreground flex items-center justify-between font-mono text-xs">
                    <span>HQ LOCATION MAP</span>
                    <span>37.7749° N, 122.4194° W</span>
                  </div>
                  {/* Map Mock Graphic */}
                  <div className="bg-secondary/40 border-border/40 relative flex h-48 w-full flex-col items-center justify-center overflow-hidden rounded-xl border p-4 text-center">
                    <GridPattern className="opacity-30" strokeDasharray="2 2" />
                    <MapPin className="relative z-10 mb-2 h-8 w-8 animate-bounce text-violet-500" />
                    <span className="relative z-10 text-xs font-bold">
                      San Francisco Tech Hub
                    </span>
                    <span className="text-muted-foreground relative z-10 text-[11px]">
                      Market Street Campus
                    </span>
                  </div>
                </Card>
              </div>

              {/* Right Column: Contact Form (Span-7) */}
              <div className="lg:col-span-7">
                <Card glass className="relative p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center space-y-4 py-12 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">Inquiry Received!</h3>
                      <p className="text-muted-foreground max-w-md text-sm">
                        Thank you for reaching out to Good Health 247. A
                        clinical advisor will contact you within 2 business
                        hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                        className="mt-4"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="mb-1 text-2xl font-bold">
                          Send an Advisor Message
                        </h2>
                        <p className="text-muted-foreground text-xs">
                          Fill out the form below and our integration team will
                          prepare a sandbox demo.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-xs font-semibold"
                          >
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Dr. Alex Vance"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-destructive flex items-center gap-1 text-[11px]">
                              <AlertCircle className="h-3 w-3" /> {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="text-xs font-semibold"
                          >
                            Corporate Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="alex@enterprise.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-destructive flex items-center gap-1 text-[11px]">
                              <AlertCircle className="h-3 w-3" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-xs font-semibold"
                          >
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+91 9346317790"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="company"
                            className="text-xs font-semibold"
                          >
                            Company / Hospital Name *
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="HealthCorp Inc."
                            value={formData.company}
                            onChange={handleInputChange}
                            className={
                              errors.company ? "border-destructive" : ""
                            }
                          />
                          {errors.company && (
                            <p className="text-destructive flex items-center gap-1 text-[11px]">
                              <AlertCircle className="h-3 w-3" />{" "}
                              {errors.company}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-xs font-semibold"
                        >
                          Project Requirements / Inquiries *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell us about your expected user volume, FHIR integrations, or EMR setup timeline..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-destructive flex items-center gap-1 text-[11px]">
                            <AlertCircle className="h-3 w-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        variant="primary"
                        type="submit"
                        size="lg"
                        className="w-full cursor-pointer gap-2"
                      >
                        Submit Message
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="bg-secondary/15 border-border/40 border-t py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center space-y-4 text-center">
              <Badge variant="violet">FREQUENTLY ASKED QUESTIONS</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Got questions? We have answers.
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="glass-panel border-border/40 rounded-xl px-6 py-2 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-base font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA banner */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <Card
              glass
              className="relative overflow-hidden border border-emerald-500/20 shadow-2xl"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[20rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/5 blur-[80px]" />

              <CardContent className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 text-left md:flex-row md:p-14">
                <div className="max-w-lg space-y-4">
                  <Badge variant="emerald" className="gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    SOC-2 Type II Certified
                  </Badge>
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    Schedule a live sandbox demonstration.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Connect directly with our engineering team to review FHIR
                    database endpoints and HIPAA isolation pipelines.
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full gap-2"
                    asChild
                  >
                    <a href="mailto:contact@goodhealth247.com">
                      Email Advisors
                      <ArrowRight className="h-4 w-4" />
                    </a>
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
