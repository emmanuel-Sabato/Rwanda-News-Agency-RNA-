import Link from 'next/link';

interface HeroProps {
    title: string;
    excerpt: string;
    category: string;
    imageUrl: string;
    timestamp: string;
    slug: string;
}

export default function Hero({ title, excerpt, category, imageUrl, timestamp, slug }: HeroProps) {
    return (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end">
                <div className="container-custom pb-12 md:pb-16">
                    <div className="max-w-3xl animate-slide-up">
                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide">
                                {category}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            {title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-neutral-200 text-lg md:text-xl mb-6 line-clamp-2">
                            {excerpt}
                        </p>

                        {/* Meta & CTA */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-neutral-300 text-sm">{timestamp}</span>
                            <Link
                                href={`/news/${slug}`}
                                className="btn-secondary inline-flex items-center gap-2"
                            >
                                Read Full Story
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
