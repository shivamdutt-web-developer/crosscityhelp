import Link from "next/link";
import { PhoneCall, ClipboardCheck, Users, Wrench, ThumbsUp, ShieldCheck, Clock, Award, Leaf, Mail } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import HeroPhoneBadge from '@/components/HeroPhoneBadge';

export const metadata = {
    title: "Our Services | Cross City",
    description: "Explore the wide range of software development and IT services offered by Cross City.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-32">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1581578731548-c64695cc6952.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Our Services</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-sm md:text-base font-medium tracking-widest uppercase text-shadow-sm">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Services</span>
                        </div>
                    </div>

                    {/* Right Side Phone Badge */}
                    <HeroPhoneBadge />
                </div>
            </section>

            {/* How We Work Section (New) */}
            <section className="py-20 pt-28 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">Working Process</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">How We Deliver Excellence</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Strategic Consultation", desc: "We conduct deep-dive technical audits of your system architecture to identify critical operational gaps and inefficiencies.", icon: ClipboardCheck },
                            { step: "02", title: "Custom Architecture", desc: "Our analysts architect a highly tailored, SLA-driven software engineering strategy.", icon: Wrench },
                            { step: "03", title: "Precision Deployment", desc: "Background-verified, rigorously trained developers are deployed with crystal-clear agile protocols.", icon: Users },
                            { step: "04", title: "Continuous QA", desc: "24/7 monitoring and strict QA testing protocols guarantee zero-downtime performance.", icon: ThumbsUp }
                        ].map((item, index) => (
                            <div key={index} className="relative p-6 text-center group">
                                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-[2px] bg-gradient-to-r from-[#1e40af]/20 to-transparent -z-10 transform translate-x-1/2"></div>
                                <div className="w-20 h-20 mx-auto bg-slate-50 border-4 border-white shadow-lg rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                    <item.icon size={32} className="text-[#15803d]" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {item.step}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 md:py-28 pt-28 bg-slate-50 relative overflow-hidden">
                {/* Subtle dot pattern background */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">What We Offer</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Comprehensive Solutions</h3>
                        <p className="mt-4 text-gray-600 text-lg">
                            Witness the Cross City standard in action. Browse our portfolio of premium digital marketing, complex SAAS platforms, and scalable web solutions deployed across top corporate sectors, built specifically to handle your complex operational requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                image={service.image}
                                slug={service.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Excellence / Guarantees Section (New) */}
            <section className="py-20 pt-28 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/img-1542744173-8e7e53415bb0.jpg')] bg-cover bg-center mix-blend-overlay opacity-20 z-0" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-white bg-[#1e40af]/30 px-4 py-1 rounded-sm inline-block text-lg font-bold tracking-wide uppercase mb-3">The Cross City Advantage</h2>
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">Setting the Gold Standard for Tech Innovation</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                At Cross City, we do not merely execute code; we assume full ownership of your digital product's health. By integrating cutting-edge technology, scalable architectures, and rigorous code reviews, we guarantee an ecosystem that is uncompromisingly secure, efficient, and perfectly optimized for your business success.
                            </p>
                            <Link href="/about" className="bg-[#15803d] hover:bg-[#16a34a] w-fit text-white px-8 py-3 lg:px-10 lg:py-4 font-bold tracking-wider text-sm transition-colors text-center inline-block">
                                LEARN MORE ABOUT US
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Verified Professionals", desc: "All staff undergo rigorous background checks.", icon: ShieldCheck },
                                { title: "24/7 Support", desc: "Round-the-clock emergency response services.", icon: Clock },
                                { title: "Certified Quality", desc: "Industry-standard compliance and ISO certified.", icon: Award },
                                { title: "Eco-Friendly", desc: "Sustainable practices and green cleaning products.", icon: Leaf }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-sm hover:-translate-y-1 transition-transform">
                                    <feature.icon className="text-[#15803d] mb-4" size={36} />
                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Bar Section - Match Homepage & About */}
            <section className="bg-[#1e40af] py-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">Need a Customized Service Plan?</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-medium">
                            <Mail size={24} />
                            <span>support@crosscityhelp.com</span>
                        </div>
                    </div>
                    <Link href="/contact" className="bg-white text-[#1e40af] hover:bg-gray-100 px-8 py-4 font-bold tracking-wider text-sm whitespace-nowrap transition-colors rounded-sm shadow-lg border border-transparent">
                        CONTACT US TODAY
                    </Link>
                </div>
            </section>
        </>
    );
}
