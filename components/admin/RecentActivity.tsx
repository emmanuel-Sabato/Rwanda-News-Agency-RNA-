'use client';

import { Activity, UserPlus, FileText, CheckCircle } from 'lucide-react';

const activities = [
    {
        id: 1,
        user: 'John Mueller',
        action: 'published a new article',
        target: 'The response has been huge',
        time: '2 hours ago',
        icon: FileText,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
    },
    {
        id: 2,
        user: 'Sarah Johnson',
        action: 'registered as a new editor',
        target: '',
        time: '4 hours ago',
        icon: UserPlus,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
    },
    {
        id: 3,
        user: 'System',
        action: 'backup completed successfully',
        target: 'Daily Backup',
        time: '6 hours ago',
        icon: CheckCircle,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
    },
    {
        id: 4,
        user: 'David Kim',
        action: 'updated category settings',
        target: 'Politics',
        time: '8 hours ago',
        icon: Activity,
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
    },
];

export default function RecentActivity() {
    return (
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 h-full">
            <h3 className="font-serif text-lg font-bold text-white mb-6">Recent Activity</h3>

            <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-[#2a2a2a]">
                {activities.map((activity) => (
                    <div key={activity.id} className="relative pl-12">
                        {/* Timeline Dot */}
                        <div className={`absolute left-2.5 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#141414] ${activity.bg} ${activity.color} flex items-center justify-center`}>
                            <activity.icon size={10} />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-300">
                                <span className="font-medium text-white">{activity.user}</span>{' '}
                                {activity.action}{' '}
                                {activity.target && <span className="text-[var(--color-gold)]">{activity.target}</span>}
                            </p>
                            <span className="text-xs text-gray-500 mt-1">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
