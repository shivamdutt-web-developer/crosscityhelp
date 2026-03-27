import Link from 'next/link';
import HeroPhoneBadge from '@/components/HeroPhoneBadge';

export const metadata = {
    title: "Privacy Policy | Cross City",
    description: "Privacy Policy for Cross City.",
};

export default function PrivacyPolicy() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative min-h-[280px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-28 pb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1497366216548-37526070297c.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Privacy Policy</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Privacy Policy</span>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Cross City. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. The Data We Collect About You</h2>
                            <p className="mb-4">
                                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
                                <li className="text-slate-300 leading-relaxed mb-4"><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, and time zone setting.</li>
                                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Personal Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <div className="mt-4 p-6 bg-slate-50 border border-gray-100 rounded-sm">
                                <p className="font-bold text-gray-900">Cross City</p>
                                <p>Email: <a href="mailto:support@crosscityhelp.com" className="text-[#1e40af] hover:underline">support@crosscityhelp.com</a></p>
                                <p>Phone: +1 (226) 319-1708</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
