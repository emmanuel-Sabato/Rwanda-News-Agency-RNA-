'use client';

import { Check, X, MessageSquare, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const comments = [
    { id: 1, user: 'Reader123', content: 'This article was very insightful. I especially liked the part about local development.', article: 'The response has been huge', status: 'Pending', date: '10 mins ago' },
    { id: 2, user: 'SpamBot99', content: 'Win $1000 today! Click here: http://fake-link.com', article: 'New agricultural policies', status: 'Spam', date: '25 mins ago' },
    { id: 3, user: 'ConcernedCitizen', content: 'Why are we not discussing the budget impact?', article: 'Infrastructure projects', status: 'Approved', date: '1 hour ago' },
    { id: 4, user: 'RwandaLover', content: 'Great photos! Kigali looks beautiful.', article: 'Kigali skyline', status: 'Pending', date: '2 hours ago' },
];

export default function CommentsPage() {
    const [filter, setFilter] = useState('Pending');

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-serif font-bold text-white">Comments</h1>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-[#2a2a2a]">
                {['Pending', 'Approved', 'Spam', 'All'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setFilter(tab)}
                        className={`pb-3 px-1 text-sm font-medium transition-colors relative ${filter === tab
                                ? 'text-[var(--color-gold)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[var(--color-gold)]'
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                    >
                        {tab} {tab === 'Pending' && <span className="ml-2 bg-[var(--color-gold)] text-black text-[10px] px-1.5 py-0.5 rounded-full font-bold">2</span>}
                    </button>
                ))}
            </div>

            {/* Comments List */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-4 flex gap-4 transition-all hover:border-gray-700">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-[#2a2a2a] rounded-full flex items-center justify-center text-gray-400">
                                <MessageSquare size={20} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-sm font-bold text-white">{comment.user} <span className="text-gray-500 font-normal">on {comment.article}</span></h4>
                                    <p className="text-gray-300 mt-1 text-sm">{comment.content}</p>
                                </div>
                                <span className="text-xs text-gray-500">{comment.date}</span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 mt-3">
                                <button className="flex items-center gap-1 bg-green-500/10 text-green-500 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-green-500/20 transition-colors">
                                    <Check size={14} /> Approve
                                </button>
                                <button className="flex items-center gap-1 bg-red-500/10 text-red-500 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-500/20 transition-colors">
                                    <X size={14} /> Reject
                                </button>
                                <button className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-yellow-500/20 transition-colors">
                                    <AlertTriangle size={14} /> Spam
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
