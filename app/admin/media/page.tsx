'use client';

import { useState } from 'react';
import { Upload, Image as ImageIcon, Film, File, MoreVertical, Trash2, Download, Search } from 'lucide-react';
import Image from 'next/image';

const activeAssets = [
    { id: 1, name: 'hero-banner-main.jpg', type: 'image', size: '2.4 MB', date: 'Jan 6, 2026', url: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&h=300&fit=crop' },
    { id: 2, name: 'economy-report-2025.pdf', type: 'document', size: '4.1 MB', date: 'Jan 6, 2026', url: null },
    { id: 3, name: 'president-speech-clip.mp4', type: 'video', size: '45.2 MB', date: 'Jan 5, 2026', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop' },
    { id: 4, name: 'kigali-skyline.jpg', type: 'image', size: '1.8 MB', date: 'Jan 5, 2026', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop' },
    { id: 5, name: 'sports-final.jpg', type: 'image', size: '3.2 MB', date: 'Jan 4, 2026', url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop' },
    { id: 6, name: 'tech-summit-logo.png', type: 'image', size: '0.4 MB', date: 'Jan 4, 2026', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop' },
    { id: 7, name: 'education-stats.png', type: 'image', size: '0.9 MB', date: 'Jan 3, 2026', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop' },
    { id: 8, name: 'press-conference.jpg', type: 'image', size: '5.6 MB', date: 'Jan 2, 2026', url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop' },
];

export default function MediaPage() {
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white">Media Library</h1>
                    <p className="text-gray-400">Manage images, videos, and documents</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search files..."
                            className="bg-[#141414] border border-[#2a2a2a] text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[var(--color-gold)] w-64 hidden sm:block"
                        />
                    </div>
                </div>
            </div>

            {/* Upload Zone */}
            <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${dragActive
                        ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5'
                        : 'border-[#2a2a2a] bg-[#141414] hover:border-gray-600'
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrag}
            >
                <div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-[var(--color-gold)]">
                        <Upload size={24} />
                    </div>
                    <h3 className="text-lg font-medium text-white">Click or Drag files to upload</h3>
                    <p className="text-sm text-gray-500">
                        Support for SVG, PNG, JPG, MP4, PDF. Max file size 50MB.
                    </p>
                    <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors mt-2">
                        Select Files
                    </button>
                </div>
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {activeAssets.map((asset) => (
                    <div key={asset.id} className="group bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#444] transition-all relative">
                        {/* Asset Preview */}
                        <div className="aspect-square relative bg-[#0a0a0a] flex items-center justify-center group-hover:opacity-75 transition-opacity cursor-pointer">
                            {asset.type === 'image' && asset.url ? (
                                <Image src={asset.url} alt={asset.name} fill className="object-cover" />
                            ) : asset.type === 'video' && asset.url ? (
                                <>
                                    <Image src={asset.url} alt={asset.name} fill className="object-cover opacity-50" />
                                    <Film size={32} className="relative z-10 text-white" />
                                </>
                            ) : (
                                <File size={32} className="text-gray-500" />
                            )}

                            {/* Overlay Actions */}
                            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <button className="p-2 bg-black/50 rounded-full text-white hover:bg-[var(--color-gold)] hover:text-black transition-colors">
                                    <Download size={16} />
                                </button>
                                <button className="p-2 bg-black/50 rounded-full text-white hover:bg-red-500 hover:text-white transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Asset Info */}
                        <div className="p-3">
                            <div className="flex items-start justify-between gap-2">
                                <p className="text-sm text-white font-medium truncate" title={asset.name}>{asset.name}</p>
                                <button className="text-gray-500 hover:text-white">
                                    <MoreVertical size={14} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-gray-500 uppercase">{asset.type}</span>
                                <span className="text-xs text-gray-500">{asset.size}</span>
                            </div>
                        </div>

                        {/* Selection Checkbox */}
                        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-[#1a1a1a] text-[var(--color-gold)] focus:ring-[var(--color-gold)]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
