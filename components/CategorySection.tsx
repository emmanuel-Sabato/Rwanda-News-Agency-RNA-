import Link from 'next/link';
import NewsCard from './NewsCard';

interface Article {
    title: string;
    excerpt: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
    readTime: string;
    slug: string;
}

interface CategorySectionProps {
    title: string;
    articles: Article[];
    viewAllLink?: string;
}

export default function CategorySection({ title, articles, viewAllLink }: CategorySectionProps) {
    return (
        <section className="py-12">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 border-l-4 border-blue-900 pl-4">
                        {title}
                    </h2>
                    {viewAllLink && (
                        <Link
                            href={viewAllLink}
                            className="text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
                        >
                            View All
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    )}
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <NewsCard key={index} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
