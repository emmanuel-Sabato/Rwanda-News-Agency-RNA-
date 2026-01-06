'use client';

import DashboardOverview from '@/components/admin/DashboardOverview';
import RecentArticlesTable from '@/components/admin/RecentArticlesTable';
import RecentActivity from '@/components/admin/RecentActivity';
import { Plus } from 'lucide-react';

export default function AdminDashboard() {
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

    return (
        <>
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-white mb-1">
                        {greeting}, <span className="text-[var(--color-gold)]">Admin</span>
                    </h1>
                    <p className="text-gray-400">Here's what's happening with your news portal today.</p>
                </div>
                <button className="flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-black font-semibold px-4 py-2.5 rounded-lg transition-colors">
                    <Plus size={18} />
                    <span>New Article</span>
                </button>
            </div>

            {/* Overview Stats */}
            <DashboardOverview />

            {/* Main Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column (2/3) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Traffic Chart (Mock) */}
                    <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-serif text-lg font-bold text-white">Traffic Overview</h3>
                            <select className="bg-[#1a1a1a] border border-[#2a2a2a] text-sm text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-[var(--color-gold)]">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>Last 3 Months</option>
                            </select>
                        </div>

                        {/* Simple CSS Chart Mock */}
                        <div className="h-64 flex items-end justify-between gap-2 pt-4 px-2">
                            {[45, 60, 55, 70, 65, 80, 75, 85, 95, 90, 100, 85, 75, 65].map((height, i) => (
                                <div key={i} className="w-full bg-[var(--color-gold)]/20 rounded-t-sm relative group hover:bg-[var(--color-gold)] transition-colors" style={{ height: `${height}%` }}>
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {height * 100} Views
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-gray-500 uppercase">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                    </div>

                    {/* Recent Articles */}
                    <RecentArticlesTable />
                </div>

                {/* Right Column (1/3) */}
                <div className="space-y-8">
                    <RecentActivity />

                    {/* Quick Stats or Promo */}
                    <div className="bg-gradient-to-br from-[var(--color-gold)] to-[#b8860b] rounded-xl p-6 text-black">
                        <h3 className="font-serif text-xl font-bold mb-2">Premium Plan</h3>
                        <p className="text-black/80 text-sm mb-4">Your subscription expires in 12 days. Renew now to keep advanced analytics.</p>
                        <button className="w-full bg-black/10 hover:bg-black/20 text-black font-semibold py-2 rounded-lg transition-colors">
                            Manage Billing
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
