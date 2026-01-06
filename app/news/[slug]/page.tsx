import SocialShare from "@/components/SocialShare";
import ArticleCard from "@/components/news/ArticleCard";

const mockArticle = {
  title: "Rwanda's digital future: How innovation is reshaping the nation",
  category: "TECHNOLOGY",
  readTime: "8 MIN READ",
  author: "Imanzi Grace",
  date: "January 6, 2026",
  location: "Kigali, Rwanda",
  heroImage:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
  lead:
    "As Rwanda continues its rapid transformation into a regional innovation hub, new policies and investments are redefining what is possible for citizens and businesses alike.",
  body: [
    "Over the past decade, Rwanda has emerged as one of Africa's most forward-looking digital economies. Strategic investments in connectivity, skills and infrastructure have positioned the country as a laboratory for bold new ideas.",
    "From smart city initiatives in Kigali to cutting-edge fintech solutions reaching rural communities, technology is no longer a side story — it is at the heart of Rwanda's development model.",
    "Officials say the next phase will focus on deepening digital inclusion, ensuring that innovation reaches classrooms, clinics and cooperatives in every province.",
  ],
  tags: ["Innovation", "Digital Economy", "Kigali", "Startups"],
};

const relatedArticles = [
  {
    title: "Kigali Innovation City attracts record investment in 2025",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    readTime: "6 MIN READ",
    category: "BUSINESS",
    size: "large" as const,
  },
  {
    title: "New coding curriculum launches in secondary schools nationwide",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop",
    readTime: "5 MIN READ",
    category: "EDUCATION",
    size: "large" as const,
  },
  {
    title: "Fintech startups expand access to digital payments in rural areas",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=400&fit=crop",
    readTime: "7 MIN READ",
    category: "FINANCE",
    size: "large" as const,
  },
];

export default function ArticlePage() {
  const article = mockArticle;

  return (
    <article className="bg-[var(--color-bg-dark)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Category + Meta */}
        <header className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge">{article.category}</span>
            <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.2em]">
              Analysis
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            <span className="text-gradient">{article.title}</span>
          </h1>

          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
            {article.lead}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <span className="w-px h-4 bg-[var(--color-border)]" />
            <span>{article.location}</span>
            <span className="w-px h-4 bg-[var(--color-border)]" />
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mt-8 mb-10 rounded-2xl overflow-hidden border border-[var(--color-border)]">
          <div
            className="relative aspect-[16/9] bg-cover bg-center"
            style={{ backgroundImage: `url(${article.heroImage})` }}
          />
        </div>

        {/* Layout: Main content + sidebar */}
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 lg:gap-16">
          {/* Main content */}
          <div>
            {/* Social share (uses light/dark aware styles but works in dark theme) */}
            <SocialShare url="/news/example-slug" title={article.title} />

            <div className="prose prose-invert prose-lg max-w-none mt-8 space-y-6">
              {article.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="section-divider" />
            <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-[0.2em]">
              Related Stories
            </h2>
            <div className="space-y-4">
              {relatedArticles.map((item, index) => (
                <ArticleCard key={index} {...item} />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

