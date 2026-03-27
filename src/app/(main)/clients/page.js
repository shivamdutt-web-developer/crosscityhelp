import Link from "next/link";
import { PhoneCall, Shield, Clock, TrendingUp, Mail, Building, Factory, Stethoscope, GraduationCap, CheckCircle2 } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import { testimonialsData } from "@/data/testimonials";
import HeroPhoneBadge from "@/components/HeroPhoneBadge";

export const metadata = {
    title: "Our Clients | Cross City",
    description: "Discover the organizations and industries that trust Cross City.",
};

export default function Clients() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative min-h-[280px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-28 pb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1556761175-5973dc0f32b7.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
                    <div className="text-center lg:text-left flex-1 lg:max-w-xl xl:max-w-2xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Our Clients</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Clients</span>
                        </div>
                    </div>

                    <HeroPhoneBadge />
                </div>
            </section>

            {/* Our Client Ecosystem Section */}
            <section className="py-20 md:py-28 pt-28 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">Client Ecosystem</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">Partnering for Operational Excellence</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                At Cross City, we don't just supply manpower; we integrate seamlessly into your operations to become an indispensable extension of your team. Our client portfolio spans across highly demanding sectors that require precision, reliability, and absolute compliance.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Instead of focusing on transactional relationships, we build long-term strategic partnerships. We understand that every industry operates on unique rhythms and strict regulatory frameworks, which is why our deployment strategies are uniquely tailored to each client's environment.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-slate-50 p-6 rounded-sm border-l-4 border-[#1e40af] flex-1">
                                    <h4 className="font-bold text-gray-900 text-2xl mb-1">95%</h4>
                                    <p className="text-sm text-gray-500 font-medium tracking-wide">Client Retention Rate</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-sm border-l-4 border-[#15803d] flex-1">
                                    <h4 className="font-bold text-gray-900 text-2xl mb-1">10+</h4>
                                    <p className="text-sm text-gray-500 font-medium tracking-wide">Years of Trust</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {/* Decorative background blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                            <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-t border-gray-100">
                                <Building className="text-[#1e40af] mb-4" size={32} />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Corporate Parks</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Providing elite soft services, front-desk management, and automated security for Grade-A tech parks and corporate headquarters.</p>
                            </div>
                            <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-t border-gray-100 sm:translate-y-8">
                                <Factory className="text-[#15803d] mb-4" size={32} />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Industrial Units</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Supplying robust technical labor, strict perimeter security, and heavy-duty industrial cleaning for manufacturing plants.</p>
                            </div>
                            <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-t border-gray-100">
                                <Stethoscope className="text-[#1e40af] mb-4" size={32} />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Delivering highly specialized hygiene management, biomedical waste handling, and 24/7 patient-safe environment maintenance.</p>
                            </div>
                            <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-t border-gray-100 sm:translate-y-8">
                                <GraduationCap className="text-[#15803d] mb-4" size={32} />
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Educational Campuses</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Maintaining expansive campuses with dedicated housekeeping, secure ingress/egress protocols, and landscape maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why They Trust Us Section */}
            <section className="py-20 pt-28 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">The Cross City Advantage</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Why They Trust Us</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#1e40af]">
                            <Shield className="text-[#15803d] mb-6" size={40} />
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Reliability & Security</h4>
                            <p className="text-gray-600 leading-relaxed">Our rigorous vetting process ensures that every professional deployed meets the highest standards of integrity and competence.</p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#1e40af]">
                            <TrendingUp className="text-[#15803d] mb-6" size={40} />
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h4>
                            <p className="text-gray-600 leading-relaxed">Whether you need manpower for a small retail space or a massive industrial facility, our solutions scale dynamically with your needs.</p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow border-t-4 border-[#1e40af]">
                            <Clock className="text-[#15803d] mb-6" size={40} />
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Rapid Deployment</h4>
                            <p className="text-gray-600 leading-relaxed">We understand time is money. Our rapid onboarding and deployment strategies minimize downtime and maximize productivity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid Section */}
            <section className="py-20 md:py-28 pt-28 bg-slate-900 block relative">
                <div className="absolute inset-0 bg-[url('/images/img-1497366216548-37526070297c.jpg')] bg-cover bg-fixed bg-center mix-blend-overlay opacity-20 z-0"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">Testimonials</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">What Our Clients Say</h3>
                    </div>

                    <TestimonialSlider testimonials={testimonialsData} />
                </div>
            </section>

            {/* Service Guarantee Section - Adds detailed length to the page */}
            <section className="py-20 md:py-28 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="/images/img-1600880292203-757bb62b4baf.jpg"
                                alt="Service Guarantee"
                                className="w-full rounded-sm shadow-lg object-cover aspect-[4/3]"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-[#15803d] text-lg font-bold tracking-wide uppercase">Our Commitment</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                The Cross City Service Guarantee
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our reputation is built on delivering exactly what we promise. We enforce strict Service Level Agreements (SLAs) with every client, ensuring that productivity is maximized and operational disruptions are eliminated.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    { title: "Zero Downtime Deployments", desc: "Our massive bench-strength ensures instant replacements and unbroken service continuity." },
                                    { title: "Transparent Auditing", desc: "Regular, digitally logged quality audits available on-demand for our clients' review." },
                                    { title: "Dedicated Site Managers", desc: "Every major contract includes a dedicated project manager serving as a single-point-of-contact." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="mt-1 bg-white rounded-full p-1 shrink-0 text-[#1e40af] shadow-sm">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Bar Section */}
            <section className="bg-[#1e40af] py-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">Join Our List of Satisfied Clients</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-medium">
                            <Mail size={24} />
                            <span>support@crosscityhelp.com</span>
                        </div>
                    </div>
                    <Link href="/contact" className="bg-white text-[#1e40af] hover:bg-gray-100 px-8 py-4 font-bold tracking-wider text-sm whitespace-nowrap transition-colors rounded-sm shadow-lg border border-transparent">
                        PARTNER WITH US
                    </Link>
                </div>
            </section>
        </>
    );
}
