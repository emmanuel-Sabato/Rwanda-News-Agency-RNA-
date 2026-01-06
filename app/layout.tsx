import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NewsHeader from "@/components/news/NewsHeader";
import Footer from "@/components/Footer";

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
          <div className="min-h-screen flex flex-col">
            <NewsHeader />
            <main className="relative flex-1">
              {/* Desktop-only ad rails on left and right */}
              <div className="pointer-events-none hidden 2xl:flex fixed top-50 bottom-32 left-6">
                <div className="h-full flex items-center">
                  <div className="h-180 border border-dashed border-[var(--color-border-light)] bg-[var(--color-bg-card)]/80 px-3 py-6 rounded-xl text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] flex items-center justify-center">
                    Desktop Ads here!
                  </div>
                </div>
              </div>
              <div className="pointer-events-none hidden 2xl:flex fixed top-50 bottom-32 right-6">
                <div className="h-full flex items-center">
                  <div className="h-180 border border-dashed border-[var(--color-border-light)] bg-[var(--color-bg-card)]/80 px-3 py-6 rounded-xl text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] text-right flex items-center justify-center">
                    Desktop Ads here!
                  </div>
                </div>
              </div>

              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
