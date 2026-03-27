import Link from 'next/link';
import HeroPhoneBadge from '@/components/HeroPhoneBadge';

export const metadata = {
    title: "Terms & Conditions | Cross City",
    description: "Terms and Conditions for Cross City.",
};

export default function TermsConditions() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative min-h-[280px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-28 pb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1497366216548-37526070297c.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
                    <div className="text-center lg:text-left flex-1 lg:max-w-xl xl:max-w-2xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Terms & Conditions</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Terms & Conditions</span>
                        </div>
                    </div>

                    <HeroPhoneBadge />
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8 text-gray-600 leading-relaxed text-base md:text-lg">

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                            <p>
                                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Cross City ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Representations</h2>
                            <p className="mb-4">
                                By using the Site, you represent and warrant that:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Services and Agreements</h2>
                            <p>
                                Any specific facility management or manpower supply services requested through this website will be subject to a separate, formal Service Level Agreement (SLA) or contract. The information on this website constitutes an overview of our capabilities and does not serve as a binding contract for physical services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and defined following the applicable corporate laws. Cross City and yourself irrevocably consent that relevant courts shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
