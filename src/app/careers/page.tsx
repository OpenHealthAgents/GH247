"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Reveal } from "@/components/effects/Reveal";
import {
  Megaphone,
  TrendingUp,
  Target,
  Video,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";
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
    id: "actor-content-creator-glp1",
    title: "Actor & Video Creator (GLP-1 Weight Loss Skits)",
    department: "Creative & Content",
    location: "Chennai, Tamil Nadu",
    type: "Contract / Part-Time",
    desc: "Seeking expressive actors and video creators to film engaging, relatable, and humorous short-form skits for social media promoting our AI-native GLP-1 weight loss coaching product.",
    icon: Video,
    color: "text-rose-500",
    bg: "bg-rose-500/10 border-rose-500/20",
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRole, setActiveRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    coverNote: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    "All",
    "Marketing & Growth",
    "Creative & Content",
    "Business Operations",
    "Sales & Partnerships",
  ];

  const filteredRoles =
    selectedDept === "All"
      ? roles
      : roles.filter((r) => r.department === selectedDept);

  const handleOpenApplication = (roleTitle: string) => {
    setActiveRole(roleTitle);
    setSubmitted(false);
    setErrors({});
    setIsModalOpen(true);
  };

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
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.linkedin.trim())
      newErrors.linkedin = "LinkedIn / Portfolio link is required.";
    if (!formData.coverNote.trim())
      newErrors.coverNote = "Cover note or background description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      try {
        const response = await fetch("/api/careers/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            role: activeRole,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            linkedin: "",
            coverNote: "",
          });
        }
      } catch (err) {
        console.error("Failed to submit candidate application:", err);
      } finally {
        setSubmitting(false);
      }
    }
  };

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
              We offer hands-on mentorship, competitive stipends, learning
              stipends, and real-world project exposure.
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                          className="w-full cursor-pointer gap-1.5"
                          onClick={() => handleOpenApplication(role.title)}
                        >
                          Apply for this Position
                          <ChevronRight className="h-4 w-4" />
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
                    researchers, and growth interns. Submit a general
                    application.
                  </p>
                </div>

                <div className="w-full shrink-0 md:w-auto">
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full cursor-pointer gap-2"
                    onClick={() =>
                      handleOpenApplication("General Internship Application")
                    }
                  >
                    Submit General Application
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Candidate Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
              <FileText className="h-5 w-5 text-violet-500" />
              Apply for {activeRole}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs">
              Fill out the form below. Your application will be sent directly to
              contact@goodhealth247.com.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="flex flex-col items-center space-y-4 py-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Application Received!</h3>
              <p className="text-muted-foreground max-w-md text-xs">
                Thank you for applying for the <strong>{activeRole}</strong>{" "}
                position. Our recruiting team will review your application and
                contact you soon.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsModalOpen(false)}
                className="mt-2"
              >
                Close Window
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 text-left">
              <div className="space-y-1.5">
                <Label htmlFor="role" className="text-xs font-semibold">
                  Position Applied For
                </Label>
                <Input
                  id="role"
                  value={activeRole}
                  readOnly
                  className="bg-secondary/40 text-xs font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Alex Vance"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={
                      errors.name ? "border-destructive text-xs" : "text-xs"
                    }
                  />
                  {errors.name && (
                    <p className="text-destructive flex items-center gap-1 text-[11px]">
                      <AlertCircle className="h-3 w-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@university.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={
                      errors.email ? "border-destructive text-xs" : "text-xs"
                    }
                  />
                  {errors.email && (
                    <p className="text-destructive flex items-center gap-1 text-[11px]">
                      <AlertCircle className="h-3 w-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+91 9346317790"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="linkedin" className="text-xs font-semibold">
                    LinkedIn / Portfolio URL *
                  </Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className={
                      errors.linkedin ? "border-destructive text-xs" : "text-xs"
                    }
                  />
                  {errors.linkedin && (
                    <p className="text-destructive flex items-center gap-1 text-[11px]">
                      <AlertCircle className="h-3 w-3" /> {errors.linkedin}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="coverNote" className="text-xs font-semibold">
                  Background / Why Good Health 247? *
                </Label>
                <Textarea
                  id="coverNote"
                  name="coverNote"
                  rows={4}
                  placeholder="Share a brief overview of your background, experience, and why you are excited about this internship..."
                  value={formData.coverNote}
                  onChange={handleInputChange}
                  className={
                    errors.coverNote ? "border-destructive text-xs" : "text-xs"
                  }
                />
                {errors.coverNote && (
                  <p className="text-destructive flex items-center gap-1 text-[11px]">
                    <AlertCircle className="h-3 w-3" /> {errors.coverNote}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={submitting}
                  className="w-full cursor-pointer gap-2"
                >
                  {submitting
                    ? "Submitting Application..."
                    : "Submit Application"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
