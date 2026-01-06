'use client';

import {
    ArrowLeft,
    Save,
    Image as ImageIcon,
    Bold,
    Italic,
    Link as LinkIcon,
    List,
    Quote,
    MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CreateStoryPage() {
    const [title, setTitle] = useState('');

    return (
        <div className="max-w-4xl mx-auto h-full flex flex-col">
            {/* Top Action Bar */}
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#0f0f0f]/90 backdrop-blur pb-4 z-20">
                <Link href="/publisher" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">Saved to draft</span>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg hover:bg-[#2a2a2a] transition-colors">
                        Preview
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-black bg-[var(--color-gold)] rounded-lg hover:bg-[#b8860b] transition-colors">
                        <Save size={16} />
                        Publish
                    </button>
                </div>
            </div>

            <div className="flex-1 space-y-8">
                {/* Title Input */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent text-5xl font-serif font-bold text-white placeholder-gray-700 outline-none"
                />

                {/* Formatting Toolbar */}
                <div className="flex items-center gap-2 border-y border-[#2a2a2a] py-3 sticky top-16 bg-[#0f0f0f] z-10">
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded"><Bold size={18} /></button>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded"><Italic size={18} /></button>
                    <div className="w-px h-4 bg-[#2a2a2a] mx-2" />
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded"><LinkIcon size={18} /></button>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded"><ImageIcon size={18} /></button>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded"><Quote size={18} /></button>
                    <div className="w-px h-4 bg-[#2a2a2a] mx-2" />
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded"><List size={18} /></button>
                </div>

                {/* Editor Area (Mock) */}
                <div className="min-h-[400px] text-lg text-gray-300 leading-relaxed space-y-6 outline-none font-serif">
                    <p>Tell your story...</p>
                </div>
            </div>
        </div>
    );
}
