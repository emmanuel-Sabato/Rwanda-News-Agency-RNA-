'use client';

import { Search, Filter, Eye, Edit, MoreHorizontal } from 'lucide-react';

const stories = [
    { id: 1, title: 'The impact of coffee exports on local economy', status: 'Draft', date: '2 hours ago', views: '-' },
    { id: 2, title: 'Exclusive interview with Minister of Technology', status: 'Revision', date: '5 hours ago', views: '-' },
    { id: 3, title: 'Top 10 destinations in Western Province', status: 'Published', date: 'Jan 4, 2026', views: '2.4K' },
    { id: 4, title: 'New startup hub opens in Nyarugenge', status: 'Published', date: 'Jan 2, 2026', views: '1.1K' },
    { id: 5, title: 'Cultural festival roundup: Best moments', status: 'Published', date: 'Dec 28, 2025', views: '3.8K' },
];

export default function MyStoriesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white">My Stories</h1>
                    <p className="text-gray-400">Track and manage your articles</p>
                </div>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-[#2a2a2a] flex items-center gap-4">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search stories..."
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-gold)]"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
                        <Filter size={16} /> Filter
                    </button>
                </div>

                {/* List */}
                <div className="divide-y divide-[#2a2a2a]">
                    {stories.map((story) => (
                        <div key={story.id} className="p-5 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors group">
                            <div className="flex-1 min-w-0 pr-8">
                                <h3 className="text-lg font-bold text-white truncate group-hover:text-[var(--color-gold)] transition-colors">{story.title}</h3>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                    <span>{story.date}</span>
                                    <span className="flex items-center gap-1"><Eye size={14} /> {story.views}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className={`text-xs px-2 py-1 rounded-full border ${story.status === 'Published'
                                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                        : story.status === 'Revision'
                                            ? 'bg-red-500/10 text-red-500 border-red-500/20'
                                            : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
                                    }`}>
                                    {story.status}
                                </span>
                                <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#2a2a2a]">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
