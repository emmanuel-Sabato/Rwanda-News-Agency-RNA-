'use client';

import { Users, Eye, FileText, DollarSign } from 'lucide-react';
import StatsCard from './StatsCard';

export default function DashboardOverview() {
    const stats = [
        {
            label: 'Total Views',
            value: '2.4M',
            trend: '12.5%',
            trendUp: true,
            icon: Eye,
        },
        {
            label: 'Active Users',
            value: '45.2K',
            trend: '8.2%',
            trendUp: true,
            icon: Users,
        },
        {
            label: 'Articles Published',
            value: '1,203',
            trend: '3.1%',
            trendUp: false,
            icon: FileText,
        },
        {
            label: 'Total Revenue',
            value: '$84.2K',
            trend: '15.3%',
            trendUp: true,
            icon: DollarSign,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
            ))}
        </div>
    );
}
