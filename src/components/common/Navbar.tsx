"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Products", href: "/solutions" },
  { name: "Technology", href: "/technology" },
  { name: "Company", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Listen to window scroll to trigger glass filter
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Determine logo source based on active theme
  const logoSrc = !mounted
    ? "/logo-dark.jpg"
    : resolvedTheme === "dark"
      ? "/logo-dark.jpg"
      : "/logo-light.jpg";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-350",
        scrolled
          ? "bg-background/85 border-border/40 border-b shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center space-x-2">
          <Image
            src={logoSrc}
            alt="Good Health 247"
            width={190}
            height={55}
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-foreground/80 relative py-1.5 text-sm font-medium transition-colors duration-205",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="bg-primary absolute right-0 bottom-0 left-0 h-0.5 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden items-center space-x-4 md:flex">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-secondary rounded-full"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-950 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button variant="primary" size="sm" asChild>
            <Link href="/contact">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-950" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-panel"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel"
            role="region"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-border/40 bg-background/95 border-t backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "border-border/10 border-b py-2 text-base font-medium transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Button
                variant="primary"
                className="w-full justify-center"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/contact">Book Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
