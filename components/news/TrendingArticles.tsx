'use client';

import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

interface TrendingArticle {
    id: number;
    title: string;
    category: string;
    image: string;
    readTime: string;
}

const trendingArticles: TrendingArticle[] = [
    {
        id: 1,
        title: "Rwanda's digital transformation leads African innovation index",
        category: "TECHNOLOGY",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop",
        readTime: "5 MIN",
    },
    {
        id: 2,
        title: "New environmental policies set to reduce carbon emissions by 40%",
        category: "ENVIRONMENT",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop",
        readTime: "8 MIN",
    },
    {
        id: 3,
        title: "Kigali named among top 10 cleanest cities in the world",
        category: "LIFESTYLE",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=200&h=200&fit=crop",
        readTime: "4 MIN",
    },
    {
        id: 4,
        title: "Education reforms show promising results in national examinations",
        category: "EDUCATION",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop",
        readTime: "6 MIN",
    },
];

export default function TrendingArticles() {
    return (
        <section className="pt-10 pb-16 lg:pt-12 lg:pb-20">
            <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2 text-[var(--color-gold)]">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-bold tracking-wider uppercase">Trending Now</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-light)] to-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingArticles.map((article, index) => (
                    <article
                        key={article.id}
                        className="group cursor-pointer animate-slide-up opacity-0"
                        style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                    >
                        <div className="flex gap-4">
                            {/* Number */}
                            <span className="text-4xl font-serif text-[var(--color-gold)] opacity-50 group-hover:opacity-100 transition-opacity">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <span className="text-xs font-semibold text-[var(--color-gold)] tracking-wider">
                                    {article.category}
                                </span>
                                <h4 className="font-serif text-base text-white group-hover:text-[var(--color-gold)] transition-colors line-clamp-2 mt-1">
                                    {article.title}
                                </h4>
                                <span className="text-xs text-[var(--color-text-muted)] mt-2 block">
                                    {article.readTime} READ
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
