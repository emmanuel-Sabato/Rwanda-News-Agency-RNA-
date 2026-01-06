'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Stay Informed, Stay Ahead
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Subscribe to our newsletter and get the latest news delivered straight to your inbox.
                    </p>

                    {/* Form */}
                    {!subscribed ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className="flex-1 px-6 py-4 rounded-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <button
                                type="submit"
                                className="bg-amber-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    ) : (
                        <div className="bg-green-500 text-white px-6 py-4 rounded-lg max-w-xl mx-auto animate-fade-in">
                            ✓ Thank you for subscribing! Check your email to confirm.
                        </div>
                    )}

                    {/* Privacy Note */}
                    <p className="text-blue-200 text-sm mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}
