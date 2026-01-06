import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rwanda News Agency (RNA) - Latest News from Rwanda",
  description:
    "Rwanda News Agency - Your trusted source for breaking news, politics, business, sports, entertainment, and more from Rwanda and around the world.",
  keywords: [
    "Rwanda news",
    "RNA",
    "Rwanda News Agency",
    "breaking news",
    "politics",
    "business",
    "sports",
  ],
  authors: [{ name: "Rwanda News Agency" }],
  openGraph: {
    title: "Rwanda News Agency (RNA)",
    description: "Latest news and updates from Rwanda",
    type: "website",
    locale: "en_RW",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rwanda News Agency (RNA)",
    description: "Latest news and updates from Rwanda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-[var(--color-bg-dark)] text-[var(--color-text-primary)]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
