import Link from 'next/link';
import HeroPhoneBadge from '@/components/HeroPhoneBadge';

export const metadata = {
    title: "Disclaimer | Cross City",
    description: "Disclaimer for Cross City.",
};

export default function Disclaimer() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative min-h-[280px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-28 pb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1497366216548-37526070297c.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Disclaimer</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Disclaimer</span>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
                            <p className="mb-4">
                                The information provided by Cross City ("we," "us," or "our") on our website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                            </p>
                            <p>
                                UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links Disclaimer</h2>
                            <p>
                                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Disclaimer</h2>
                            <p>
                                The Site cannot and does not contain professional legal, financial, or specific operational advice. The facility management and manpower supply information is provided for general informational and educational purposes only and is not a substitute for professional advice.
                            </p>
                            <p className="mt-4">
                                Before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice directly through this website. The use or reliance of any information contained on this site is solely at your own risk.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
