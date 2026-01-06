'use client';

import Image from 'next/image';
import { Clock, Bookmark, ArrowUpRight } from 'lucide-react';

interface ArticleCardProps {
    title: string;
    image: string;
    readTime: string;
    excerpt?: string;
    category?: string;
    size?: 'small' | 'medium' | 'large' | 'featured';
}

export default function ArticleCard({
    title,
    image,
    readTime,
    excerpt,
    category,
    size = 'medium',
}: ArticleCardProps) {
    // Featured Card - Full image background with overlay text
    if (size === 'featured') {
        return (
            <article className="card group cursor-pointer relative aspect-[16/10] overflow-hidden">
                <div className="card-image absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {category && (
                        <span className="badge w-fit mb-3">{category}</span>
                    )}
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-[var(--color-gold)] transition-colors line-clamp-2 mb-2">
                        {title}
                    </h3>
                    {excerpt && (
                        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-4">
                            {excerpt}
                        </p>
                    )}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{readTime}</span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </article>
        );
    }

    // Large Card - Vertical with image on top
    if (size === 'large') {
        return (
            <article className="card group cursor-pointer h-full">
                <div className="card-image relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    {category && (
                        <span className="absolute top-3 left-3 badge z-10">{category}</span>
                    )}
                </div>
                <div className="p-5 space-y-3">
                    <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-[var(--color-gold)] transition-colors line-clamp-2">
                        {title}
                    </h3>
                    {excerpt && (
                        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                            {excerpt}
                        </p>
                    )}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{readTime}</span>
                        </div>
                        <button
                            className="p-1.5 hover:bg-white/10 rounded transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Bookmark"
                        >
                            <Bookmark className="w-4 h-4 text-[var(--color-text-muted)]" />
                        </button>
                    </div>
                </div>
            </article>
        );
    }

    // Medium Card - Horizontal layout
    if (size === 'medium') {
        return (
            <article className="card group cursor-pointer">
                <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-4 p-4">
                    <div className="card-image relative aspect-square rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center min-w-0 py-1">
                        {category && (
                            <span className="text-[10px] font-semibold text-[var(--color-gold)] tracking-wider uppercase mb-1">
                                {category}
                            </span>
                        )}
                        <h3 className="font-serif text-base sm:text-lg text-white group-hover:text-[var(--color-gold)] transition-colors line-clamp-2 mb-2">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{readTime}</span>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    // Small Card - Compact horizontal
    return (
        <article className="card group cursor-pointer">
            <div className="grid grid-cols-[80px_1fr] gap-3 p-3">
                <div className="card-image relative aspect-square rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                    <h4 className="font-serif text-sm text-white group-hover:text-[var(--color-gold)] transition-colors line-clamp-2 mb-1">
                        {title}
                    </h4>
                    <span className="text-[10px] text-[var(--color-text-muted)]">
                        {readTime}
                    </span>
                </div>
            </div>
        </article>
    );
}
