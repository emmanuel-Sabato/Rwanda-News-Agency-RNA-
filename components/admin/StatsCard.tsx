'use client';

import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';

interface StatsCardProps {
    label: string;
    value: string;
    trend: string;
    trendUp: boolean;
    icon: LucideIcon;
}

export default function StatsCard({ label, value, trend, trendUp, icon: Icon }: StatsCardProps) {
    return (
        <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl hover:border-[var(--color-gold)]/30 transition-all duration-300 group">
            <div className="flex items-start justify-between">
                <div className="p-3 bg-[var(--color-gold)]/10 rounded-lg group-hover:bg-[var(--color-gold)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--color-gold)]" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${trendUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                    {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {trend}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-3xl font-bold text-white font-serif">{value}</h3>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
        </div>
    );
}
