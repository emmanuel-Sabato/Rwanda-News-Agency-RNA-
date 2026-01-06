import Link from 'next/link';
import NewsHeader from "@/components/news/NewsHeader";
import Footer from "@/components/Footer";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <NewsHeader />
            <main className="relative flex-1">
                {/* Desktop-only ad rails on left and right */}
                <div className="pointer-events-none hidden 2xl:flex fixed top-50 bottom-32 left-6">
                    <div className="h-full flex items-center">
                        <div className="h-180 border border-dashed border-[var(--color-border-light)] bg-[var(--color-bg-card)]/80 px-3 py-6 rounded-xl text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] flex items-center justify-center">
                            Desktop Ads here!
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none hidden 2xl:flex fixed top-50 bottom-32 right-6">
                    <div className="h-full flex items-center">
                        <div className="h-180 border border-dashed border-[var(--color-border-light)] bg-[var(--color-bg-card)]/80 px-3 py-6 rounded-xl text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-text-muted)] text-right flex items-center justify-center">
                            Desktop Ads here!
                        </div>
                    </div>
                </div>

                {children}
            </main>
            <Footer />
        </div>
    );
}
