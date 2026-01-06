'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function NewsletterCTA() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <section className="py-16">
            <div className="newsletter-cta p-8 sm:p-12 lg:p-16 relative">
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 text-[var(--color-gold)] opacity-20">
                    <Sparkles className="w-12 h-12 animate-float" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-gold)]/10 rounded-full text-[var(--color-gold)] text-sm font-medium mb-6">
                        <Mail className="w-4 h-4" />
                        <span>Stay Informed</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                        Get the Latest News <span className="text-gradient">Delivered</span>
                    </h2>

                    <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-xl mx-auto">
                        Subscribe to our newsletter and never miss important stories. Join over 50,000 readers who trust RNA for their daily news.
                    </p>

                    {isSubmitted ? (
                        <div className="animate-fade-in bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                            <p className="text-green-400 font-medium">
                                Thank you for subscribing! Check your inbox for confirmation.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="input-field flex-1"
                                required
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span>Subscribing...</span>
                                ) : (
                                    <>
                                        <span>Subscribe</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <p className="text-[var(--color-text-muted)] text-sm mt-4">
                        No spam, unsubscribe anytime. Read our{' '}
                        <a href="#" className="text-[var(--color-gold)] hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
