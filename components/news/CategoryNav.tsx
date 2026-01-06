'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    'HOME',
    'POLITICS',
    'ECONOMY',
    'SPORTS',
    'ENTERTAINMENT',
    'HEALTH',
    'TECHNOLOGY',
    'OPINION',
    'RWANDA',
    'AFRICA',
    'WORLD',
    'TRAVEL',
    'STYLE',
];

export default function CategoryNav() {
    const [activeCategory, setActiveCategory] = useState('HOME');
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftFade(container.scrollLeft > 0);
            setShowRightFade(
                container.scrollLeft < container.scrollWidth - container.clientWidth - 10
            );
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 200;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="bg-[var(--color-bg-dark)] border-b border-[var(--color-border)] sticky top-16 lg:top-20 z-40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center">
                    {/* Left Scroll Button */}
                    {showLeftFade && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 z-20 p-1.5 bg-[var(--color-bg-dark)] hover:bg-[var(--color-bg-elevated)] rounded-full shadow-lg transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-4 h-4 text-white" />
                        </button>
                    )}

                    {/* Left Fade */}
                    {showLeftFade && (
                        <div className="absolute left-8 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg-dark)] to-transparent pointer-events-none z-10" />
                    )}

                    {/* Categories */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-1 py-3 overflow-x-auto scrollbar-hide scroll-smooth"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`category-pill ${activeCategory === category ? 'category-pill-active' : ''
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Right Fade */}
                    {showRightFade && (
                        <div className="absolute right-8 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg-dark)] to-transparent pointer-events-none z-10" />
                    )}

                    {/* Right Scroll Button */}
                    {showRightFade && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 z-20 p-1.5 bg-[var(--color-bg-dark)] hover:bg-[var(--color-bg-elevated)] rounded-full shadow-lg transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
