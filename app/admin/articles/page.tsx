'use client';

import { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    Edit,
    Trash2,
    Eye,
    FileText
} from 'lucide-react';
import Image from 'next/image';

const articles = [
    {
        id: 1,
        title: 'The response has been huge says Jenna',
        author: 'John Mueller',
        category: 'Politics',
        status: 'Published',
        views: '12.5K',
        date: 'Jan 6, 2026',
        image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=100&h=100&fit=crop',
    },
    {
        id: 2,
        title: 'New agricultural policies boost farmer income',
        author: 'Sarah Johnson',
        category: 'Economy',
        status: 'Pending',
        views: '-',
        date: 'Jan 6, 2026',
        image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=100&h=100&fit=crop',
    },
    {
        id: 3,
        title: 'National parks see record tourist arrivals',
        author: 'David Kim',
        category: 'Travel',
        status: 'Published',
        views: '8.2K',
        date: 'Jan 5, 2026',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100&h=100&fit=crop',
    },
    {
        id: 4,
        title: 'Tech innovation summit draws global investors',
        author: 'Amanda Lee',
        category: 'Technology',
        status: 'Draft',
        views: '-',
        date: 'Jan 4, 2026',
        image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=100&h=100&fit=crop',
    },
    {
        id: 5,
        title: 'Local artists featured in international exhibition',
        author: 'Michael Chen',
        category: 'Culture',
        status: 'Published',
        views: '5.1K',
        date: 'Jan 4, 2026',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=100&h=100&fit=crop',
    },
    {
        id: 6,
        title: 'Infrastructure projects on schedule for completion',
        author: 'John Mueller',
        category: 'Development',
        status: 'Review',
        views: '-',
        date: 'Jan 3, 2026',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    },
];

export default function ArticlesPage() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white">Articles</h1>
                    <p className="text-gray-400">Manage your news content and publications</p>
                </div>
                <button className="flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-black font-semibold px-4 py-2.5 rounded-lg transition-colors">
                    <Plus size={18} />
                    <span>Create Article</span>
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {['All', 'Published', 'Draft', 'Pending', 'Archived'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab
                                    ? 'bg-[var(--color-gold)] text-black'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-gold)]"
                        />
                    </div>
                    <button className="p-2 text-gray-400 hover:text-white border border-[#2a2a2a] rounded-lg hover:bg-white/5">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* Articles Table */}
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[#2a2a2a] text-sm text-gray-500 uppercase tracking-wider bg-[#1a1a1a]/50">
                                <th className="px-6 py-4 font-medium">Article</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Views</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#2a2a2a]">
                            {articles.map((article) => (
                                <tr key={article.id} className="group hover:bg-[#1a1a1a] transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg overflow-hidden relative flex-shrink-0 border border-[#2a2a2a]">
                                                <Image src={article.image} alt={article.title} fill className="object-cover" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-medium text-white truncate max-w-[200px] sm:max-w-xs group-hover:text-[var(--color-gold)] transition-colors">
                                                    {article.title}
                                                </p>
                                                <p className="text-xs text-gray-500">{article.author}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                                            {article.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${article.status === 'Published'
                                                ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                                : article.status === 'Pending' || article.status === 'Review'
                                                    ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                                    : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                                            }`}>
                                            {article.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400">
                                        {article.date}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-400 font-mono">
                                        {article.views}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors" title="View">
                                                <Eye size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-[var(--color-gold)] transition-colors" title="Edit">
                                                <Edit size={18} />
                                            </button>
                                            <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-[#2a2a2a] flex items-center justify-between text-sm text-gray-500">
                    <div>Showing 1-6 of 24 articles</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-[#1a1a1a] rounded hover:bg-[#2a2a2a] text-white disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 bg-[#1a1a1a] rounded hover:bg-[#2a2a2a] text-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
