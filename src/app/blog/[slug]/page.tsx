"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { MDXContent } from "@/components/blog/MDXContent";
import { blogPosts } from "@/lib/blogData";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogPostDetail() {
  const params = useParams();
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);

  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  // Monitor scroll height to update reading progress meter
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[70vh] flex-grow flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="destructive">POST NOT FOUND</Badge>
          <h1 className="text-3xl font-bold">Publication not found</h1>
          <Button variant="primary" onClick={() => router.push("/blog")}>
            Return to Blog
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Reading Progress Bar */}
      <div
        className="bg-primary fixed top-20 left-0 z-50 h-1 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="flex-grow">
        {/* Post Header Hero */}
        <section className="border-border/40 relative border-b py-16 md:py-24">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-6 px-4 text-left md:px-8">
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary mb-4 shrink-0 cursor-pointer gap-1.5 pl-0 hover:bg-transparent"
              asChild
            >
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="violet">{post.category}</Badge>
              <span className="text-muted-foreground flex items-center gap-1 text-xs">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="text-muted-foreground flex items-center gap-1 text-xs">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-transparent sm:text-5xl">
              {post.title}
            </h1>

            <div className="flex items-center space-x-3 pt-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white shadow-md">
                {post.author.avatar}
              </div>
              <div>
                <div className="text-foreground text-sm font-semibold">
                  {post.author.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {post.author.role}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content & Table of Contents */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
              {/* Left Column: Post Content (Span-8) */}
              <div className="space-y-8 lg:col-span-8">
                <MDXContent content={post.content} />
              </div>

              {/* Right Column: Table of Contents Sidebar (Span-4) */}
              <div className="space-y-6 text-left lg:sticky lg:top-28 lg:col-span-4">
                <Card glass className="p-6">
                  <h3 className="text-foreground mb-4 text-sm font-bold tracking-wider uppercase">
                    Table of Contents
                  </h3>
                  <div className="border-border/80 space-y-3 border-l pl-4">
                    {post.toc.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="text-muted-foreground hover:text-primary block text-xs transition-colors"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Related Product CTA */}
                <Card
                  glass
                  className="relative overflow-hidden border-violet-500/25 bg-violet-500/5 p-6"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600/5 to-transparent opacity-50" />
                  <div className="relative z-10 space-y-4">
                    <Badge variant="violet">DrGodly EMR</Badge>
                    <h4 className="text-base leading-snug font-bold">
                      Ready to build your AI-native medical records?
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Deploy structured HL7 FHIR databases with integrated
                      pre-screening agents.
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full gap-1.5"
                      asChild
                    >
                      <Link href="/products/drgodly">
                        Visit DrGodly
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
