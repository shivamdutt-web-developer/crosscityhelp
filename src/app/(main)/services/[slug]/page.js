import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Link from "next/link";
import { 
    ArrowLeft, CheckCircle2, PhoneCall, Mail, Megaphone, Monitor, Code, Cloud, Users, Workflow, Cpu, 
    HelpCircle, ChevronRight, Sparkles, Zap, ShieldCheck, Globe, BarChart, Search, Database, 
    Smartphone, Layout, Layers, Shield, Repeat, Settings, Headphones, Users2, FileCheck, 
    LineChart, SmartphoneNfc, Settings2 
} from "lucide-react";
import HeroPhoneBadge from "@/components/HeroPhoneBadge";

const IconMap = {
    "Megaphone": Megaphone,
    "Monitor": Monitor,
    "Code": Code,
    "Cloud": Cloud,
    "Users": Users,
    "Zap": Zap,
    "BarChart": BarChart,
    "Globe": Globe,
    "Search": Search,
    "Cpu": Cpu,
    "Database": Database,
    "Smartphone": Smartphone,
    "Layout": Layout,
    "Layers": Layers,
    "Shield": Shield,
    "Workflow": Workflow,
    "Repeat": Repeat,
    "Settings": Settings,
    "Headphones": Headphones,
    "Users2": Users2,
    "FileCheck": FileCheck,
    "LineChart": LineChart,
    "SmartphoneNfc": SmartphoneNfc,
    "Settings2": Settings2
};

// Generate static params so these pages are pre-rendered at build time
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }) {
    // Await the entire params object before destructuring its properties
    const resolvedParams = await params;
    const service = services.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        return {
            title: "Service Not Found | Cross City",
        };
    }

    return {
        title: `${service.title} | Cross City`,
        description: service.description,
    };
}

export default async function ServiceDetail({ params }) {
    // Await the entire params object before destructuring its properties
    const resolvedParams = await params;
    const service = services.find((s) => s.slug === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    const IconComponent = IconMap[service.icon];

    return (
        <div className="bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            {/* Premium Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900">
                {/* Dynamic Background */}
                <div className="absolute inset-0">
                    <img
                        src={service.image || "/images/img-1581578731548-c64695cc6952.jpg"}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-950/80 to-slate-900/60" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(30,64,175,0.4),transparent)]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
                            <Link 
                                href="/services" 
                                className="group mb-12 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="font-bold tracking-wide text-sm">Explore All Solutions</span>
                            </Link>

                            {/* Glassmorphism Title Card */}
                            <div className="relative p-10 md:p-16 rounded-[3rem] bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-1000">
                                <div className="absolute -top-12 left-1/2 lg:left-16 -translate-x-1/2 lg:translate-x-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1e40af] to-[#15803d] shadow-2xl flex items-center justify-center text-white p-5 animate-bounce-slow">
                                    {IconComponent && <IconComponent className="w-full h-full" />}
                                </div>
                                
                                <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                                    {service.title}
                                </h1>
                                <div className="w-32 h-1.5 bg-gradient-to-r from-[#1e40af] to-[#15803d] mx-auto lg:mx-0 rounded-full mb-8 shadow-glow" />
                                <p className="max-w-2xl text-lg md:text-xl text-blue-100/80 font-medium leading-relaxed mx-auto lg:mx-0">
                                    {service.description}
                                </p>
                            </div>
                        </div>

                         {/* Right Side Phone Badge */}
                         <HeroPhoneBadge />
                    </div>
                </div>
            </section>

            {/* Strategic Content Layout */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Main Stream Content */}
                        <div className="lg:col-span-8 space-y-20">
                            
                            {/* Visual Overview */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden active:shadow-2xl transition-all">
                                    <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1e40af]">
                                            <Zap size={24} />
                                        </div>
                                        Strategic Intelligence
                                    </h2>
                                    <div className="space-y-6">
                                        <p className="text-xl md:text-2xl text-[#1e40af] font-black leading-tight">
                                            Empowering your infrastructure with {service.title} architecture engineered for hyperscale.
                                        </p>
                                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                            {service.extendedDescription}
                                        </p>
                                        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                                <ShieldCheck className="text-green-600 mb-4" size={32} />
                                                <h4 className="font-bold text-slate-900 mb-2">Bulletproof Security</h4>
                                                <p className="text-sm text-gray-500 font-medium leading-relaxed">End-to-end encryption and zero-trust protocols on every deployment layer.</p>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                                <Globe className="text-[#1e40af] mb-4" size={32} />
                                                <h4 className="font-bold text-slate-900 mb-2">Global Scalability</h4>
                                                <p className="text-sm text-gray-500 font-medium leading-relaxed">Infrastructure designed to expand seamlessly across multi-region architectures.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Advanced Capabilities - Modern Grid */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 flex items-center gap-4 uppercase tracking-wider cursor-pointer brand-card-trigger">
                                    Core Ecosystem Components
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer brand-card-trigger">
                                    {service.details.map((detail, index) => (
                                        <div key={index} className="flex items-center gap-5 p-6 rounded-3xl bg-white border border-gray-100 hover:border-[#1e40af] hover:translate-x-2 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer brand-card-trigger">
                                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1e40af] group-hover:bg-[#1e40af] group-hover:text-white transition-all transform group-hover:rotate-12">
                                                <Sparkles size={24} />
                                            </div>
                                            <p className="font-black text-slate-700 text-lg">{detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Implementation Pipeline */}
                            <div className="relative py-12 rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-blue-950 p-8 md:p-12 text-white overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <h3 className="relative z-10 text-2xl md:text-3xl font-black mb-12 flex items-center gap-4">
                                     <Workflow className="text-[#3b82f6]" size={36} />
                                     Elite Execution Pipeline
                                </h3>
                                <div className="relative z-10 space-y-12 before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-[#3b82f6] before:to-transparent">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="relative pl-20 group">
                                            <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl bg-white text-slate-900 font-black text-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:bg-[#3b82f6] group-hover:text-white transition-all">
                                                {index + 1}
                                            </div>
                                            <h4 className="text-xl font-black text-blue-400 mb-3 uppercase tracking-widest">{step.title}</h4>
                                            <p className="text-lg text-slate-300 font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technology DNA */}
                            <div className="text-center pt-8">
                                <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center justify-center gap-4 uppercase tracking-widest cursor-pointer brand-card-trigger">
                                    <Cpu size={28} className="text-[#1e40af]" />
                                    Technology Stack DNA
                                </h3>
                                <div className="flex flex-wrap justify-center gap-4 cursor-pointer brand-card-trigger">
                                    {service.technologies.map((tech, index) => (
                                        <div key={index} className="px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl font-black text-slate-700 hover:border-[#1e40af] hover:text-[#1e40af] transition-all cursor-pointer brand-card-trigger shadow-md hover:shadow-glow-sm hover:-translate-y-1">
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sticky Info Center */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8 animate-in slide-in-from-right-10 duration-1000">
                                
                                {/* CTA Card */}
                                <div className="bg-[#1e40af] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                                    <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight">Ignite Your Transformation</h3>
                                    <p className="text-blue-100/70 mb-10 text-lg font-medium relative z-10 leading-relaxed">
                                        Partner with elite developers to reconstruct your {service.title} workspace.
                                    </p>
                                    <Link href="/contact" className="w-full bg-white text-[#1e40af] hover:bg-slate-50 py-5 rounded-2xl font-black text-center text-lg block transition-all hover:scale-[1.03] active:scale-95 shadow-xl relative z-10">
                                        Launch Project
                                    </Link>
                                    
                                    <div className="mt-10 pt-10 border-t border-white/10 space-y-6 relative z-10">
                                        <div className="flex items-center gap-5 group/item cursor-pointer">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover/item:bg-white group-hover/item:text-[#1e40af] transition-all">
                                                <Mail size={22} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200/60 font-black uppercase tracking-[0.2em]">Email Us</p>
                                                <p className="text-base font-black text-white">support@crosscityhelp.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5 group/item cursor-pointer">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover/item:bg-[#15803d] transition-all">
                                                <PhoneCall size={22} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-blue-200/60 font-black uppercase tracking-[0.2em]">Contact Direct</p>
                                                <p className="text-base font-black text-white">+1 (226) 319-1708</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section - Compact Premium */}
                                <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl">
                                    <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                        <HelpCircle className="text-[#1e40af]" size={24} />
                                        Knowledge Base
                                    </h3>
                                    <div className="space-y-4">
                                        {service.faqs.map((faq, index) => (
                                            <details key={index} className="group overflow-hidden border border-slate-50 rounded-2xl bg-slate-50/50 hover:bg-white hover:border-blue-100 transition-all duration-300">
                                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                                    <span className="font-black text-sm text-slate-800 leading-tight pr-4">{faq.question}</span>
                                                    <ChevronRight className="text-slate-400 group-open:rotate-90 transition-transform shrink-0" size={18} />
                                                </summary>
                                                <div className="px-5 pb-5 text-sm font-medium text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
