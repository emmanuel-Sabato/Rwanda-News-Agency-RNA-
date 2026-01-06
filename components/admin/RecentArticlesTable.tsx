'use client';

import { Edit, Trash2, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const recentArticles = [
    {
        id: 1,
        title: 'The response has been huge says Jenna',
        author: 'John Mueller',
        category: 'Politics',
        status: 'Published',
        views: '12.5K',
        date: '2 hours ago',
        image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=100&h=100&fit=crop',
    },
    {
        id: 2,
        title: 'New agricultural policies boost farmer income',
        author: 'Sarah Johnson',
        category: 'Economy',
        status: 'Pending',
        views: '-',
        date: '4 hours ago',
        image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=100&h=100&fit=crop',
    },
    {
        id: 3,
        title: 'National parks see record tourist arrivals',
        author: 'David Kim',
        category: 'Travel',
        status: 'Published',
        views: '8.2K',
        date: '1 day ago',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100&h=100&fit=crop',
    },
    {
        id: 4,
        title: 'Tech innovation summit draws global investors',
        author: 'Amanda Lee',
        category: 'Technology',
        status: 'Draft',
        views: '-',
        date: '2 days ago',
        image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=100&h=100&fit=crop',
    },
];

export default function RecentArticlesTable() {
    return (
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden">
            <div className="p-6 border-b border-[#2a2a2a] flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-white">Recent Articles</h3>
                <button className="text-sm text-[var(--color-gold)] hover:text-white transition-colors">View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#2a2a2a] text-sm text-gray-500 uppercase tracking-wider">
                            <th className="px-6 py-4 font-medium">Article</th>
                            <th className="px-6 py-4 font-medium">Category</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium">Views</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2a2a2a]">
                        {recentArticles.map((article) => (
                            <tr key={article.id} className="group hover:bg-[#1a1a1a] transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden relative flex-shrink-0">
                                            <Image src={article.image} alt={article.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-white line-clamp-1 group-hover:text-[var(--color-gold)] transition-colors">
                                                {article.title}
                                            </p>
                                            <p className="text-xs text-gray-500">{article.author} • {article.date}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-400 bg-white/5 px-2 py-1 rounded">
                                        {article.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full border ${article.status === 'Published'
                                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                            : article.status === 'Pending'
                                                ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                                : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                                        }`}>
                                        {article.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-400">
                                    {article.views}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
