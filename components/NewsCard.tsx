import Link from 'next/link';

interface NewsCardProps {
    title: string;
    excerpt: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
    readTime: string;
    slug: string;
}

const categoryColors: { [key: string]: string } = {
    Politics: 'bg-blue-600',
    Business: 'bg-green-600',
    Sports: 'bg-orange-600',
    Entertainment: 'bg-purple-600',
    Technology: 'bg-cyan-600',
    Health: 'bg-pink-600',
    Breaking: 'bg-red-600',
};

export default function NewsCard({
    title,
    excerpt,
    category,
    imageUrl,
    author,
    date,
    readTime,
    slug,
}: NewsCardProps) {
    const categoryColor = categoryColors[category] || 'bg-neutral-600';

    return (
        <Link href={`/news/${slug}`} className="block group">
            <article className="bg-white rounded-xl overflow-hidden shadow-md card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-200">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                        <span className={`${categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}>
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-blue-900 transition-colors">
                        {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-neutral-600 mb-4 line-clamp-3 flex-1">
                        {excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-neutral-500 pt-4 border-t border-neutral-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                                {author.charAt(0)}
                            </div>
                            <span className="font-medium">{author}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>{date}</span>
                            <span className="text-neutral-400">•</span>
                            <span>{readTime}</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
