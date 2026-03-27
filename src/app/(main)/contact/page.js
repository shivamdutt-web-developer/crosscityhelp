"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, Globe, Zap, CheckCircle2, Headphones, ShieldAlert, Database, FileText, LifeBuoy, PhoneCall } from "lucide-react";
import HeroPhoneBadge from "@/components/HeroPhoneBadge";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "Full-Stack Web Development",
        message: ""
    });
    
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ submitting: false, info: { error: false, msg: "" } });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: "" }));
        }
        if (status.info.msg) {
            setStatus(prev => ({ ...prev, info: { error: false, msg: "" } }));
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Legal Name is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) newErrors.email = "Corporate Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid corporate email format";
        if (!formData.message.trim()) newErrors.message = "Project blueprint is required";
        else if (formData.message.length < 20) newErrors.message = "Please provide more technical detail (min 20 chars)";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus({ submitting: true, info: { error: false, msg: "" } });

        try {
            const response = await fetch("/contact.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.status === "success") {
                setStatus({ submitting: false, info: { error: false, msg: data.message } });
                setFormData({ name: "", email: "", phone: "", subject: "Full-Stack Web Development", message: "" });
            } else {
                setStatus({ submitting: false, info: { error: true, msg: data.message || "Transmission failure. Please use direct email support." } });
            }
        } catch (err) {
            setStatus({ submitting: false, info: { error: true, msg: "Transmission failure. Please check your connection." } });
        }
    };

    return (
        <div className="bg-white">
            {/* Page Hero Section */}
            <section className="relative min-h-[320px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-28 pb-10 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/95 via-[#1e3a8a]/90 to-[#15803d]/90 z-0" />
                <div className="absolute inset-0 bg-[url('/images/digital-marketing.jpg')] bg-cover bg-center mix-blend-overlay z-0 scale-110 opacity-30" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
                    <div className="text-center lg:text-left flex-1 lg:max-w-xl xl:max-w-2xl">
                        <h2 className="text-blue-400 text-xs sm:text-sm font-black tracking-[0.4em] uppercase mb-3 sm:mb-5 drop-shadow-lg">Global Intake</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight drop-shadow-2xl uppercase">Initialize Consultation</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 text-xs sm:text-sm font-bold tracking-widest uppercase bg-black/20 backdrop-blur-md w-fit mx-auto lg:mx-0 px-5 py-2 rounded-full border border-white/10">
                            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                            <span className="text-white/30">•</span>
                            <span className="text-white">Contact Tier-1 Support</span>
                        </div>
                    </div>

                    <HeroPhoneBadge />
                </div>
            </section>

            {/* Main Contact Infrastructure */}
            <section className="py-24 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        
                        {/* Left Column: Intelligence & Support Details */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-[#1e40af] text-sm font-black tracking-widest uppercase mb-4">Strategic Access</h2>
                                <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Connect with Our Engineering Partners</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    At Cross City, we do not employ generic sales agents. Every initial contact is triaged by a senior technical project manager or lead architect. We believe that your digital transformation deserves technical precision from the very first conversation. Whether you're scaling a SaaS platform or deploying a enterprise-wide HRMS, our partners are ready to provide a deep-dive feasibility audit.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Mail, title: "Direct Intake", sub: "24/7 Monitoring", val: "support@crosscityhelp.com" },
                                    { icon: Phone, title: "Technical Line", sub: "Mon-Sat Execution", val: "+1 (226) 319-1708" },
                                    { icon: MapPin, title: "HQ Hub", sub: "New Delhi, India", val: "Silicon-Tier Tech Center" },
                                    { icon: Clock, title: "SLA Response", sub: "Guaranteed Feedback", val: "Within 120 Minutes" }
                                ].map((item, i) => (
                                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#1e40af] group-hover:bg-[#1e40af] group-hover:text-white transition-all transform group-hover:scale-110">
                                            <item.icon size={24} />
                                        </div>
                                        <h4 className="font-black text-gray-900 text-lg mb-1">{item.title}</h4>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{item.sub}</p>
                                        <p className="text-gray-600 text-sm font-bold">{item.val}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Support Tiers */}
                            <div className="p-10 bg-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                                    <Headphones className="text-blue-400" />
                                    Post-Deployment Support Architecture
                                </h4>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-1.5 h-12 bg-blue-500 rounded-full shrink-0"></div>
                                        <div>
                                            <h5 className="text-white font-bold text-lg">Tier 1: Global Response Desk</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">Immediate incident triage and automated diagnostic reporting for baseline system issues.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-1.5 h-12 bg-emerald-500 rounded-full shrink-0"></div>
                                        <div>
                                            <h5 className="text-white font-bold text-lg">Tier 2: Engineering Escalation</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">Direct interaction with senior full-stack developers for logic remediation and API adjustments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-1.5 h-12 bg-purple-500 rounded-full shrink-0"></div>
                                        <div>
                                            <h5 className="text-white font-bold text-lg">Tier 3: Strategic CTO Consult</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">High-level architectural pivoting and roadmap expansion led by our executive tech leadership.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Transmission Form */}
                        <div className="relative">
                            <div className="sticky top-32 bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_45px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100">
                                <div className="mb-10">
                                    <h3 className="text-3xl font-black text-gray-900 mb-2">Request Blueprint Review</h3>
                                    <p className="text-gray-500 font-medium">Transmit your technical requirements for an immediate peer review by our senior engineers.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Legal Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full bg-slate-50 border-2 ${errors.name ? 'border-red-100' : 'border-transparent'} rounded-2xl px-6 py-4 text-gray-900 focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all font-bold placeholder-gray-300`}
                                                placeholder="Enter legal name"
                                       />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Corporate Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full bg-slate-50 border-2 ${errors.email ? 'border-red-100' : 'border-transparent'} rounded-2xl px-6 py-4 text-gray-900 focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all font-bold placeholder-gray-300`}
                                                placeholder="Enter corporate email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-900 focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all font-bold placeholder-gray-300"
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Service Category</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-gray-900 focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all font-bold appearance-none"
                                        >
                                            <option>Full-Stack Web Development</option>
                                            <option>SaaS Architectural Design</option>
                                            <option>Enterprise HRMS Implementation</option>
                                            <option>AI-Led Digital Marketing</option>
                                            <option>Custom Software Engineering</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Technical Requirements / Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`w-full bg-slate-50 border-2 ${errors.message ? 'border-red-100' : 'border-transparent'} rounded-2xl px-6 py-4 text-gray-900 focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all font-bold placeholder-gray-300 resize-none`}
                                            placeholder="Detail your technology stack, project scope, and business objectives..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className={`w-full py-5 rounded-2xl font-black tracking-[0.2em] text-sm uppercase transition-all flex items-center justify-center gap-3 shadow-2xl ${
                                            status.submitting 
                                            ? "bg-gray-400 cursor-not-allowed" 
                                            : "bg-blue-600 hover:bg-slate-900 text-white shadow-blue-500/30"
                                        }`}
                                    >
                                        {status.submitting ? "TRANSMITTING..." : (
                                            <>DEPLOY REQUEST <Send size={18} /></>
                                        )}
                                    </button>

                                    {status.info.msg && (
                                        <div className={`p-4 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 ${status.info.error ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"}`}>
                                            {status.info.error ? <ShieldAlert size={18} /> : <CheckCircle2 size={18} />}
                                            {status.info.msg}
                                        </div>
                                    )}
                                </form>

                                {/* Data Governance Footer */}
                                <div className="mt-12 pt-10 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-[#1e40af] mb-4">
                                        <Database size={16} />
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Governance & Privacy</span>
                                    </div>
                                    <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
                                        All transmissions are protected via AES-256 encryption. Your technical blueprints are handled under strict NDA protocols as part of our GDPR-compliant data governance framework. We prioritize your intellectual property security above all else.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Infrastructure Section */}
            <section className="py-24 bg-slate-50 border-y border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-[#1e40af] text-sm font-black tracking-widest uppercase mb-4">World-Class Footprint</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Global Engineering Hubs</h3>
                        <p className="text-gray-500 mt-6 max-w-3xl mx-auto text-lg italic leading-relaxed">
                            "Cross City maintains a distributed network of high-security development centers, ensuring that your projects benefit from 24/7 technical oversight and the world's most elite developer talent."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { hub: "South Asia Hub", role: "Core Development & QA", stats: "250+ Engineers • ISO Certified" },
                            { hub: "North America Hub", role: "Strategic Architecture", stats: "Consultants • Lead Architects" },
                            { hub: "Cloud Infrastructure", role: "Distributed Operations", stats: "Automated Deployments • 99.9% Uptime" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group text-center">
                                <div className="w-20 h-20 bg-slate-50 text-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#15803d] group-hover:text-white transition-all transform group-hover:rotate-12">
                                    <Globe size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-2">{item.hub}</h4>
                                <p className="text-[#1e40af] font-bold text-xs uppercase tracking-widest mb-4">{item.role}</p>
                                <p className="text-gray-400 text-sm font-medium">{item.stats}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
