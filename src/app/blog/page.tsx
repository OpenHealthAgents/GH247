"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GridPattern } from "@/components/effects/GridPattern";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { Reveal } from "@/components/effects/Reveal";
import { blogPosts } from "@/lib/blogData";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const categories = [
  "All",
  "Healthcare AI",
  "Drug Discovery",
  "Fitness",
  "Medication Intelligence",
  "Engineering",
  "Company News",
] as const;

export default function BlogHome() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="border-border/40 relative flex items-center justify-center overflow-hidden border-b py-24 md:py-32">
          <GridPattern className="opacity-45" strokeDasharray="3 3" />
          <GlowEffect color="violet" size="lg" className="-top-40 left-1/4" />

          <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-8">
            <Badge variant="violet">PUBLICATIONS & INSIGHTS</Badge>
            <h1 className="from-foreground via-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
              Good Health 247 Blog
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed font-semibold md:text-2xl">
              Research, technical breakdowns, and product updates from our
              engineering teams.
            </p>

            {/* Search Input */}
            <div className="relative mx-auto max-w-md">
              <Search className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background/80 border-border/80 h-11 pl-10 shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            {/* Category Filter Pills */}
            <div className="border-border/20 mb-12 flex items-center gap-2 overflow-x-auto border-b pb-6">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className="shrink-0 cursor-pointer text-xs font-semibold"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Articles Grid */}
            {filteredPosts.length === 0 ? (
              <div className="space-y-3 py-16 text-center">
                <BookOpen className="text-muted-foreground mx-auto h-8 w-8" />
                <p className="text-muted-foreground text-sm">
                  No publications matching your filter parameters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, idx) => (
                  <Reveal key={post.slug} variant="slide-up" delay={idx * 0.05}>
                    <Card
                      glass
                      className="border-border/80 flex h-full flex-col justify-between space-y-6 p-6 transition-colors duration-300 hover:border-violet-500/40"
                    >
                      <CardHeader className="space-y-4 p-0">
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="violet"
                            className="px-2 py-0.5 text-[11px]"
                          >
                            {post.category}
                          </Badge>
                          <span className="text-muted-foreground flex items-center gap-1 text-xs">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <CardTitle className="hover:text-primary text-xl leading-snug font-bold transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </CardTitle>
                          <div className="text-muted-foreground text-xs">
                            {post.date} • {post.author.name}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-grow p-0">
                        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>

                      <div className="border-border/10 border-t pt-4">
                        <Button
                          variant="ghost"
                          className="hover:text-primary shrink-0 cursor-pointer gap-1.5 p-0 text-sm font-semibold hover:bg-transparent"
                          asChild
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Read Article
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
