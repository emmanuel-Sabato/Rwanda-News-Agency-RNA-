'use client';

import Image from 'next/image';
import { Clock, User, ArrowRight, Bookmark, Share2 } from 'lucide-react';

interface HeroArticleProps {
    category: string;
    title: string;
    titleHighlight?: string;
    excerpt: string;
    author: string;
    authorAvatar: string;
    readTime: string;
    image: string;
}

export default function HeroArticle({
    category,
    title,
    titleHighlight,
    excerpt,
    author,
    authorAvatar,
    readTime,
    image,
}: HeroArticleProps) {
    return (
        <article className="group cursor-pointer animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Content */}
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3">
                        <span className="badge">
                            {category}
                        </span>
                        <span className="text-xs text-[var(--color-text-muted)]">Featured Story</span>
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                        <span className="text-gradient">{title}</span>
                        {titleHighlight && (
                            <>
                                {' '}
                                <span className="text-white italic">{titleHighlight}</span>
                            </>
                        )}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                        {excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[var(--color-gold)]/30">
                                <Image src={authorAvatar} alt={author} fill className="object-cover" />
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-white">{author}</span>
                                <span className="block text-xs text-[var(--color-text-muted)]">Senior Correspondent</span>
                            </div>
                        </div>
                        <span className="w-px h-8 bg-[var(--color-border)]" />
                        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                            <Clock className="w-4 h-4" />
                            <span>{readTime}</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4 pt-4">
                        <button className="btn-primary flex items-center gap-2">
                            <span>Read Full Story</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2">
                            <button className="p-3 hover:bg-white/5 rounded-lg transition-colors group/btn" aria-label="Bookmark">
                                <Bookmark className="w-5 h-5 text-[var(--color-text-muted)] group-hover/btn:text-[var(--color-gold)]" />
                            </button>
                            <button className="p-3 hover:bg-white/5 rounded-lg transition-colors group/btn" aria-label="Share">
                                <Share2 className="w-5 h-5 text-[var(--color-text-muted)] group-hover/btn:text-[var(--color-gold)]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="relative order-1 lg:order-2">
                    <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden">
                        {/* Main Image */}
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Live Badge (optional decorative) */}
                        <div className="absolute top-4 left-4 badge-live">
                            LIVE
                        </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--color-gold)]/10 rounded-2xl blur-3xl pointer-events-none" />
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--color-gold)]/5 rounded-full blur-2xl pointer-events-none" />
                </div>
            </div>
        </article>
    );
}
