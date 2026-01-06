import CategoryNav from '@/components/news/CategoryNav';
import BreakingNewsTicker from '@/components/news/BreakingNewsTicker';
import HeroArticle from '@/components/news/HeroArticle';
import ArticleCard from '@/components/news/ArticleCard';
import TrendingArticles from '@/components/news/TrendingArticles';
import NewsletterCTA from '@/components/news/NewsletterCTA';
import Pagination from '@/components/news/Pagination';

// Mock data with placeholder images
const heroArticle = {
  category: 'POLITICS',
  title: 'The response has been huge',
  titleHighlight: 'says Jenna.',
  excerpt:
    'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. In this new chapter, Rwanda continues to lead the way in sustainable development and innovation.',
  author: 'John Mueller',
  authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  readTime: '10 MIN READ',
  image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=1000&fit=crop',
};

const featuredArticles = [
  {
    title: 'Tech innovation summit draws global investors to Kigali',
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&h=400&fit=crop',
    readTime: '10 MIN READ',
    excerpt:
      'International investors gather in Rwanda to explore emerging opportunities in the technology sector.',
    category: 'TECHNOLOGY',
    size: 'featured' as const,
  },
  {
    title: 'New agricultural policies boost farmer income by 35%',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=300&h=200&fit=crop',
    readTime: '8 MIN READ',
    category: 'ECONOMY',
    size: 'large' as const,
  },
  {
    title: 'National parks see record tourist arrivals this quarter',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=200&fit=crop',
    readTime: '5 MIN READ',
    category: 'TRAVEL',
    size: 'large' as const,
  },
];

const latestArticles = [
  {
    title: 'Education reforms show promising results in national examinations',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop',
    readTime: '6 MIN READ',
    category: 'EDUCATION',
    size: 'large' as const,
  },
  {
    title: 'Parliament approves new education reform bill with overwhelming majority',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=300&h=200&fit=crop',
    readTime: '8 MIN READ',
    category: 'POLITICS',
    size: 'large' as const,
  },
  {
    title: 'Technology sector shows record growth in Q4 earnings report',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
    readTime: '6 MIN READ',
    category: 'TECHNOLOGY',
    size: 'large' as const,
  },
  {
    title: 'National basketball team prepares for continental championship',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop',
    readTime: '5 MIN READ',
    category: 'SPORTS',
    size: 'large' as const,
  },
];

const moreArticles = [
  {
    title: 'Healthcare initiative reaches one million beneficiaries milestone',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop',
    readTime: '7 MIN READ',
    category: 'HEALTH',
    size: 'medium' as const,
  },
  {
    title: 'Infrastructure development accelerates in Northern Province',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=300&h=200&fit=crop',
    readTime: '6 MIN READ',
    category: 'DEVELOPMENT',
    size: 'medium' as const,
  },
  {
    title: 'Cultural festival celebrates Rwandan heritage and traditions',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
    readTime: '4 MIN READ',
    category: 'CULTURE',
    size: 'medium' as const,
  },
  {
    title: 'Environmental initiative plants five million trees this year',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    readTime: '5 MIN READ',
    category: 'ENVIRONMENT',
    size: 'medium' as const,
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--color-bg-dark)]">
      {/* Breaking News Ticker */}
      <BreakingNewsTicker />

      {/* Category Navigation */}
      <CategoryNav />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-10 pb-16 lg:pt-12 lg:pb-20">
          <HeroArticle {...heroArticle} />
        </section>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Featured Articles Grid */}
        <section className="pt-10 pb-16 lg:pt-12 lg:pb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wider">
              Featured Stories
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-light)] to-transparent" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large Featured Card */}
            <div className="lg:col-span-2">
              <ArticleCard {...featuredArticles[0]} />
            </div>

            {/* Side Cards */}
            <div className="grid gap-6 auto-rows-fr">
              {featuredArticles.slice(1).map((article, index) => (
                <div key={index} className="h-full">
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Trending Articles */}
        <TrendingArticles />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Latest News Grid */}
        <section className="pt-10 pb-16 lg:pt-12 lg:pb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wider">
                Latest News
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-light)] to-transparent w-24" />
            </div>
            <a
              href="#"
              className="text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors uppercase tracking-wider"
            >
              View All →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <NewsletterCTA />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* More Articles */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wider">
              More Stories
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-light)] to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {moreArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="border-t border-[var(--color-border)]">
          <Pagination />
        </section>
      </div>
    </div>
  );
}
