'use client';

import { PenTool, Clock, Eye, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PublisherDashboard() {
    return (
        <div className="space-y-12">
            {/* Welcome Section */}
            <div>
                <h1 className="text-4xl font-serif font-bold text-white mb-2">
                    Good Morning, <span className="text-[var(--color-gold)]">John</span>
                </h1>
                <p className="text-gray-400 text-lg">Ready to share a new story with the world today?</p>

                <div className="mt-8 flex gap-4">
                    <Link
                        href="/publisher/create"
                        className="flex items-center gap-2 bg-[var(--color-gold)] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#b8860b] transition-colors"
                    >
                        <PenTool size={20} />
                        Write New Story
                    </Link>
                    <button className="flex items-center gap-2 bg-[#1a1a1a] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]">
                        View My Layout
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-gray-400">
                        <Eye size={18} />
                        <span className="text-sm uppercase tracking-wider">Reads This Week</span>
                    </div>
                    <p className="text-3xl font-serif font-bold text-white">42.5K</p>
                    <span className="text-xs text-green-500 font-medium">+12% vs last week</span>
                </div>
                <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-gray-400">
                        <FileText size={18} />
                        <span className="text-sm uppercase tracking-wider">Published Stories</span>
                    </div>
                    <p className="text-3xl font-serif font-bold text-white">128</p>
                    <span className="text-xs text-gray-500 font-medium">Lifetime total</span>
                </div>
                <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 text-gray-400">
                        <Clock size={18} />
                        <span className="text-sm uppercase tracking-wider">Avg. Read Time</span>
                    </div>
                    <p className="text-3xl font-serif font-bold text-white">4m 12s</p>
                    <span className="text-xs text-green-500 font-medium">+30s engagement</span>
                </div>
            </div>

            {/* Recent Drafts */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Recent Drafts</h3>
                    <Link href="/publisher/stories" className="text-sm text-[var(--color-gold)] hover:text-white flex items-center gap-1 transition-colors">
                        View All <ChevronRight size={14} />
                    </Link>
                </div>

                <div className="grid gap-4">
                    {[
                        { title: 'The impact of coffee exports on local economy', date: 'Edited 2 hours ago', status: 'Draft' },
                        { title: 'Exclusive interview with Minister of Technology', date: 'Edited 5 hours ago', status: 'Revision' },
                        { title: 'Top 10 destinations in Western Province', date: 'Edited yesterday', status: 'Draft' },
                    ].map((draft, i) => (
                        <div key={i} className="group bg-[#141414] border border-[#2a2a2a] p-5 rounded-xl flex items-center justify-between hover:border-[var(--color-gold)]/50 transition-colors cursor-pointer">
                            <div>
                                <h4 className="font-bold text-lg text-white group-hover:text-[var(--color-gold)] transition-colors">{draft.title}</h4>
                                <span className="text-sm text-gray-500">{draft.date}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`text-xs px-2 py-1 rounded-full border ${draft.status === 'Draft'
                                        ? 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                    }`}>
                                    {draft.status}
                                </span>
                                <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
