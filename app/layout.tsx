import type { Metadata } from "next";
import "./globals.css";
import { ChatAssistant } from "@/components/ChatAssistant";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Wellora",
  description: "Wellora health and wellness platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
