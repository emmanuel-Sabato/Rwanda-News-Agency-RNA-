'use client';

import { Flame } from 'lucide-react';

const breakingNews = [
    "President announces new infrastructure development plan for Eastern Province",
    "Rwanda national team qualifies for continental championship finals",
    "Kigali Innovation City welcomes three new tech companies",
    "Agriculture sector reports record harvest for 2025",
    "Tourism revenue surpasses pre-pandemic levels",
];

export default function BreakingNewsTicker() {
    return (
        <div className="ticker py-2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <div className="flex items-center gap-2 pr-4 border-r border-[#B8960C] mr-4 flex-shrink-0">
                        <Flame className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-wider uppercase">Breaking</span>
                    </div>
                    <div className="overflow-hidden relative flex-1">
                        <div className="ticker-content">
                            {/* Duplicate for seamless loop */}
                            {[...breakingNews, ...breakingNews].map((news, index) => (
                                <span
                                    key={index}
                                    className="inline-block px-8 text-sm font-medium whitespace-nowrap"
                                >
                                    {news}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
