import { Suspense } from "react";
import ArticleCard from "@/components/news/ArticleCard";

const mockResults = [
  {
    title: "Rwanda launches new national innovation strategy",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&h=400&fit=crop",
    readTime: "7 MIN READ",
    category: "POLICY",
    size: "large" as const,
  },
  {
    title: "How Kigali became a model for smart African cities",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop",
    readTime: "5 MIN READ",
    category: "URBAN",
    size: "large" as const,
  },
  {
    title: "Startups driving Rwanda's green transition",
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&h=400&fit=crop",
    readTime: "6 MIN READ",
    category: "ENVIRONMENT",
    size: "large" as const,
  },
];

function SearchResults() {
  return (
    <div className="space-y-4">
      {mockResults.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="bg-[var(--color-bg-dark)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <header className="mb-8">
          <p className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.25em] mb-3">
            Search
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-3">
            Find stories from across <span className="text-gradient">RNA</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-2xl">
            Search the latest coverage across politics, business, sports,
            technology and more.
          </p>
        </header>

        {/* Search bar + filters */}
        <div className="glass rounded-xl p-4 sm:p-6 mb-8">
          <form className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center">
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
              <svg
                className="w-4 h-4 text-[var(--color-text-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search by keyword, topic or name"
                className="bg-transparent border-none outline-none text-sm text-white placeholder-[var(--color-text-muted)] w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              <button
                type="button"
                className="px-3 py-2 rounded-full text-xs font-medium bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white transition-colors"
              >
                Latest
              </button>
              <button
                type="button"
                className="px-3 py-2 rounded-full text-xs font-medium bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white transition-colors"
              >
                Most Read
              </button>
              <button
                type="submit"
                className="btn-primary text-xs sm:text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-text-muted)]">
              Showing <span className="text-white font-medium">3</span> results
              for <span className="italic">&quot;innovation&quot;</span>
            </p>
          </div>
          <Suspense fallback={<div className="skeleton h-40 w-full" />}>
            <SearchResults />
          </Suspense>
        </section>
      </div>
    </div>
  );
}

