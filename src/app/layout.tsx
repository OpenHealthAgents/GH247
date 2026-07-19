import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goodhealth247.com"),
  title: {
    default: "Good Health 247 Inc. | AI-Native Healthcare Operating Systems",
    template: "%s | Good Health 247",
  },
  description:
    "Good Health 247 develops AI-native platforms transforming healthcare, life sciences, medication intelligence, fitness, and enterprise productivity.",
  keywords: [
    "AI Healthcare",
    "FHIR EMR",
    "DrGodly",
    "Drug Discovery OS",
    "Medication Intelligence",
    "AI Fitness Coach",
    "Clinical AI",
    "HL7 FHIR R4",
  ],
  authors: [{ name: "Good Health 247 Inc." }],
  creator: "Good Health 247 Inc.",
  publisher: "Good Health 247 Inc.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goodhealth247.com",
    siteName: "Good Health 247",
    title: "Good Health 247 Inc. | AI-Native Healthcare Operating Systems",
    description:
      "Good Health 247 develops AI-native platforms transforming healthcare, life sciences, medication intelligence, fitness, and enterprise productivity.",
    images: [
      {
        url: "/logo-dark.jpg",
        width: 1200,
        height: 630,
        alt: "Good Health 247 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Health 247 Inc. | AI-Native Healthcare Operating Systems",
    description:
      "Good Health 247 develops AI-native platforms transforming healthcare, life sciences, medication intelligence, fitness, and enterprise productivity.",
    images: ["/logo-dark.jpg"],
    creator: "@goodhealth247",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Good Health 247 Inc.",
  url: "https://goodhealth247.com",
  logo: "https://goodhealth247.com/logo-dark.jpg",
  sameAs: ["https://twitter.com", "https://linkedin.com", "https://github.com"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9346317790",
    contactType: "customer service",
    email: "contact@goodhealth247.com",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
