'use client';

import { BarChart, PieChart, TrendingUp, Users, Smartphone, Globe } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white">Analytics</h1>
                    <p className="text-gray-400">Detailed performance insights</p>
                </div>
                <select className="bg-[#141414] border border-[#2a2a2a] text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-gold)]">
                    <option>Last 30 Days</option>
                    <option>Last 7 Days</option>
                    <option>This Year</option>
                </select>
            </div>

            {/* Main Chart Section */}
            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp size={20} className="text-[var(--color-gold)]" />
                    Visitor Growth
                </h3>
                <div className="h-64 w-full flex items-end justify-between gap-2">
                    {[30, 45, 35, 50, 60, 55, 70, 80, 75, 90, 85, 95].map((h, i) => (
                        <div key={i} className="group relative flex-1 flex flex-col justify-end h-full">
                            <div
                                className="w-full bg-gradient-to-t from-[var(--color-gold)]/20 to-[var(--color-gold)] rounded-t-sm transition-all duration-300 hover:opacity-80"
                                style={{ height: `${h}%` }}
                            ></div>

                            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none">
                                {h * 100}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500 uppercase">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Device Breakdown */}
                <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Smartphone size={20} className="text-blue-500" />
                        Device Usage
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 flex items-center gap-2"><Smartphone size={16} /> Mobile</span>
                            <span className="text-white font-mono">65%</span>
                        </div>
                        <div className="w-full bg-[#2a2a2a] h-2 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full w-[65%]"></div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 flex items-center gap-2"><BarChart size={16} /> Desktop</span>
                            <span className="text-white font-mono">30%</span>
                        </div>
                        <div className="w-full bg-[#2a2a2a] h-2 rounded-full overflow-hidden">
                            <div className="bg-purple-500 h-full w-[30%]"></div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 flex items-center gap-2"><PieChart size={16} /> Tablet</span>
                            <span className="text-white font-mono">5%</span>
                        </div>
                        <div className="w-full bg-[#2a2a2a] h-2 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-[5%]"></div>
                        </div>
                    </div>
                </div>

                {/* Geography */}
                <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Globe size={20} className="text-green-500" />
                        Top Locations
                    </h3>
                    <div className="space-y-3">
                        {[
                            { country: 'Rwanda', percent: '45%' },
                            { country: 'United States', percent: '20%' },
                            { country: 'United Kingdom', percent: '10%' },
                            { country: 'Kenya', percent: '8%' },
                            { country: 'France', percent: '5%' },
                        ].map((loc) => (
                            <div key={loc.country} className="flex items-center justify-between py-2 border-b border-[#2a2a2a] last:border-0">
                                <span className="text-gray-300">{loc.country}</span>
                                <span className="font-mono text-[var(--color-gold)]">{loc.percent}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
