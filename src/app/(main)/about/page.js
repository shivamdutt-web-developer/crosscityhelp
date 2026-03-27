import Link from "next/link";
import { CheckCircle2, PhoneCall, Target, Eye, Building2, Briefcase, Factory, Coffee, HeartPulse, ShoppingCart, Truck, Wifi, Mail, ShieldCheck, Award, Zap, Scale, FileCheck, Globe, Code2, Lightbulb, Users2, Rocket } from "lucide-react";
import HeroPhoneBadge from "@/components/HeroPhoneBadge";

export const metadata = {
    title: "About Us | Cross City",
    description: "Learn more about Cross City, our mission, vision, and the core team behind our success.",
};

export default function About() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative h-[45vh] min-h-[400px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-32 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/95 via-[#1e3a8a]/90 to-[#15803d]/90 z-0" />
                <div className="absolute inset-0 bg-[url('/images/saas.jpg')] bg-cover bg-center mix-blend-overlay z-0 scale-110 opacity-40" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left flex-1">
                        <h2 className="text-blue-400 text-sm font-black tracking-[0.5em] uppercase mb-6 drop-shadow-lg">Corporate Profile</h2>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">OUR TECHNICAL HERITAGE</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 text-sm md:text-base font-bold tracking-widest uppercase bg-black/20 backdrop-blur-md w-fit mx-auto lg:mx-0 px-6 py-2 rounded-full border border-white/10">
                            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                            <span className="text-white/30">•</span>
                            <span className="text-white">About Cross City</span>
                        </div>
                    </div>

                    <HeroPhoneBadge />
                </div>
            </section>

            {/* In-depth Narrative Section */}
            <section className="py-24 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Side: The Narrative */}
                        <div className="space-y-8">
                            <h2 className="text-[#1e40af] text-lg font-black tracking-widest uppercase">The Cross City Genesis</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Decades of Engineering Excellence, Architected for Tomorrow.
                            </h3>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    Cross City was founded at the intersection of high-frequency engineering and strategic business logic. We recognized early on that the global economy was shifting toward a "Software-First" paradigm, where the quality of an organization's digital infrastructure would become its primary competitive moat.
                                </p>
                                <p>
                                    Originally established as a technical consultancy, we have evolved into a multi-disciplinary powerhouse specializing in full-stack development, cloud orchestration, and AI-driven digital ecosystems. Our journey has been defined by a relentless pursuit of "System Purity"—the belief that software should be beautiful, unbreakable, and infinitely scalable.
                                </p>
                                <p>
                                    Today, Cross City serves as the invisible engine behind some of the world's most resilient brands. We maintain an elite Tier-1 developer workforce that is distributed globally but united by a single "Engineering Manifesto." This ensures that whether we are deploying a local HRMS portal or a global SaaS platform, the code quality remaining consistent, secure, and future-proof.
                                </p>
                                <p>
                                    We don't just provide services; we provide assurance. Assurance that your systems will scale, your data will remain protected, and your digital transformation will deliver actual, measurable business equity.
                                </p>
                            </div>
                            
                            {/* Feature Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900">SOC2 Compliant</h4>
                                        <p className="text-sm text-gray-500">Highest standards of data security and operational privacy.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900">Sprint Managed</h4>
                                        <p className="text-sm text-gray-500">Rapid deployment cycles with zero architectural compromise.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Visual Proof */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 relative z-10">
                                <img
                                    src="/images/software-development.jpg"
                                    alt="Cross City Headquarters"
                                    className="w-full h-full object-cover grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e40af]/60 to-transparent mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-[#15803d] p-10 rounded-[2rem] shadow-2xl z-20 max-w-xs border-8 border-white">
                                <div className="text-white text-5xl font-black mb-2">10+</div>
                                <div className="text-white/80 font-bold uppercase tracking-widest text-xs">Years of Innovation</div>
                                <p className="text-white/70 text-sm mt-4 font-medium">Delivering state-of-the-art tech solutions to 500+ happy clients globally.</p>
                            </div>
                            {/* Decorative blur */}
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] -z-0 opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values - Expanded */}
            <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/digital-marketing.jpg')] bg-cover bg-fixed opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8 p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-20 h-20 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                <Target size={40} />
                            </div>
                            <h3 className="text-4xl font-black text-white">Our Strategic Mission</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To democratize elite-level software engineering by providing scalable, high-integrity technical solutions that empower businesses of all sizes to navigate the complexities of the digital-first economy. We are committed to radical transparency, security by design, and engineering excellence that transcends industry standards.
                            </p>
                        </div>
                        <div className="space-y-8 p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="w-20 h-20 bg-emerald-600/20 text-emerald-400 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-4xl font-black text-white">Our Engineering Vision</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To set the definitive global benchmark for technological integrity and developer deployment. We envision a world where every digital intersection is optimized by Cross City engineering, creating a seamlessly connected, secure, and high-performance global infrastructure for commerce and communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section - NEW CONTENT */}
            <section className="py-24 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
                    <h2 className="text-[#1e40af] text-sm font-black tracking-widest uppercase mb-4">Elite Methodology</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900">How We Build Better</h3>
                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
                        Software is only as good as the process that created it. Our proprietary delivery framework ensures speed without sacrificing system stability.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: "Architectural Audit", icon: Lightbulb, desc: "Deep technical interrogation of requirements to ensure a zero-defect blueprint." },
                        { title: "Agile Sprinting", icon: Users2, desc: "Distributed developer squads working in high-velocity, bi-weekly feature sprints." },
                        { title: "Rigorous CI/CD", icon: Rocket, desc: "Automated pipelines ensuring continuous testing and seamless multi-region deployment." },
                        { title: "SLA-Backed Ops", icon: ShieldCheck, desc: "Post-launch monitoring with guaranteed response times and performance metrics." }
                    ].map((step, i) => (
                        <div key={i} className="text-center group p-8 rounded-2xl hover:bg-slate-50 transition-colors">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-700 group-hover:bg-[#1e40af] group-hover:text-white transition-all transform group-hover:scale-110">
                                <step.icon size={32} />
                            </div>
                            <h4 className="text-xl font-black text-gray-900 mb-3">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Compliance & Standards Section - Expanded */}
            <section className="py-24 bg-[#0f172a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-blue-400 text-sm font-black tracking-widest uppercase">Global Standards</h2>
                            <h3 className="text-4xl font-black text-white leading-tight">Uncompromising Regulatory & Technical Compliance</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                At Cross City, compliance is more than just a legal checkbox—it is a core pillar of our technical architecture. We operate at the intersection of international safety standards and domestic labor laws, providing a risk-free environment for our enterprise partners.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <FileCheck className="text-emerald-500 shrink-0" size={32} />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">100% Statutory Adherence</h4>
                                        <p className="text-gray-400 text-sm">Full transparency in PF, ESI, Minimum Wages acts, and corporate taxation records across all deployment regions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                                    <Globe className="text-blue-400 shrink-0" size={32} />
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Global Security Protocols</h4>
                                        <p className="text-gray-400 text-sm">Implementing ISO/IEC 27001 standards for information security management across our internal and client systems.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { val: "100%", label: "Vetted Staff" },
                                { val: "SOC2", label: "Ready" },
                                { val: "24/7", label: "Global Support" },
                                { val: "Zero", label: "Incidents" }
                            ].map((stat, i) => (
                                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl text-center group hover:bg-blue-600 transition-colors duration-500">
                                    <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
                                    <div className="text-blue-400 group-hover:text-white font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Bar */}
            <section className="bg-emerald-600 py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-3xl md:text-4xl font-black mb-4">Partner with the Leaders in Tech Transformation</h3>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-xl font-bold">
                            <Mail size={24} className="text-emerald-200" />
                            <span>support@crosscityhelp.com</span>
                        </div>
                    </div>
                    <Link href="/contact" className="bg-white text-emerald-700 hover:bg-slate-900 hover:text-white px-12 py-5 font-black tracking-widest text-sm transition-all rounded shadow-2xl shrink-0 uppercase">
                        SCHEDULE A CONSULTATION
                    </Link>
                </div>
            </section>
        </>
    );
}
