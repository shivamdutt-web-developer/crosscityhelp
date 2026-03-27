"use client";

import React, { useState } from "react";
// Metadata cannot be exported from a client component, so I'll move it to a separate layout if needed,
// but for now, I'll just use document.title if it's a client component, or change it to a server component if possible.
// Wait, I can't export metadata from 'use client'.
// I'll create src/app/printers/setup/layout.js for the metadata.
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Settings, 
  Download, 
  ShieldCheck, 
  Headphones, 
  ChevronRight, 
  Printer, 
  CheckCircle2,
  Clock,
  MessageSquare,
  PhoneCall
} from "lucide-react";

const printerBrands = [
  { name: "HP", icon: "/images/printer-setup/hp.png", color: "from-blue-600 to-blue-400" },
  { name: "Canon", icon: "/images/printer-setup/canon.png", color: "from-red-600 to-red-400" },
  { name: "Epson", icon: "/images/printer-setup/epson.png", color: "from-blue-800 to-blue-500" },
  { name: "Brother", icon: "/images/printer-setup/brother.png", color: "from-slate-800 to-slate-600" },
  { name: "Other", icon: null, fallbackIcon: <Settings className="w-8 h-8" />, color: "from-emerald-600 to-emerald-400" },
];

const setupSteps = [
  {
    title: "Connect Device",
    description: "Plug in your printer and connect it to your computer or Wi-Fi network.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Find Model",
    description: "Enter your model number to find the exact drivers for your machine.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Download Drivers",
    description: "Get the latest, secure software directly from our verified servers.",
    icon: <Download className="w-6 h-6" />,
  },
  {
    title: "Ready to Print",
    description: "Follow the easy installer and you're ready to print in seconds.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

export default function PrinterSetupPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
             <Image
               src="/images/Crosscity-logo.png"
               alt="Cross City"
               width={150}
               height={40}
               className="object-contain"
             />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
            <Link href="#brands" className="hover:text-blue-600 transition-colors">Brands</Link>
            <Link href="#how-to" className="hover:text-blue-600 transition-colors">Setup Guide</Link>
            <Link href="#support" className="hover:text-blue-600 transition-colors text-blue-600 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">Live Support</Link>
          </div>
          <a href="tel:+12263191708" className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all hover:shadow-lg active:scale-95">
            <PhoneCall size={18} />
            <span className="hidden sm:inline">+1 (226) 319-1708</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[url('/images/printer-setup/hero-bg.png')] bg-cover bg-center opacity-10 blur-[100px]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[150px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 text-blue-700 text-sm font-bold mb-8 animate-bounce">
              <ShieldCheck size={16} />
              <span>Secure Official Drivers & Software</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Setup Your Printer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">In T-Minus 2 Minutes</span>
            </h1>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-xl text-slate-600 mb-12 leading-relaxed">
              Download professional drivers, software, and firmware for all major brands. Get your printer running smoothly with our expert-verified setup guide.
            </p>

            <div className="max-w-2xl mx-auto lg:mx-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-2 flex items-center shadow-xl border border-slate-100">
                <Search className="ml-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Enter printer model number" 
                  className="w-full px-4 py-4 focus:outline-none text-lg text-slate-700 bg-transparent font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 whitespace-nowrap">
                  Start Setup
                </button>
              </div>
              <p className="mt-4 text-sm text-slate-500 font-medium">
                Model number is usually located on the front or back of your device.
              </p>
            </div>
          </div>

          {/* Right Side Prominent Phone Badge */}
          <div className="hidden lg:block animate-fade-in-right">
            <a 
              href="tel:+12263191708" 
              className="group flex items-center gap-6 bg-white/10 backdrop-blur-xl border border-white/30 p-4 pl-4 pr-12 rounded-[2.5rem] hover:bg-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95 border-b-4 border-blue-500/50"
            >
              <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
                <PhoneCall size={32} />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-100/60 text-xs font-black uppercase tracking-[0.2em] mb-1">Expert Helpline</span>
                <span className="text-3xl xl:text-4xl font-black text-white tracking-tighter">+1 (226) 319-1708</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1M+", label: "Success Setups", icon: <CheckCircle2 className="text-emerald-500" /> },
            { value: "24/7", label: "Expert Support", icon: <Headphones className="text-blue-500" /> },
            { value: "100%", label: "Secure Download", icon: <ShieldCheck className="text-purple-500" /> },
            { value: "< 2m", label: "Avg. Setup Time", icon: <Clock className="text-orange-500" /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-2 p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Grid Section */}
      <section id="brands" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Select Your Brand</h2>
            <p className="text-slate-600 max-w-xl mx-auto font-medium">Choose your printer manufacturer to find the specific drivers and setup instructions for your model.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {printerBrands.map((brand, i) => (
              <div 
                key={i} 
                className="group relative bg-white p-12 rounded-[2.5rem] border border-slate-200 hover:border-blue-500/50 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden cursor-pointer brand-card-trigger"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="h-32 flex items-center justify-center mb-8">
                  {brand.icon ? (
                    <Image 
                      src={brand.icon} 
                      alt={brand.name} 
                      width={120} 
                      height={120} 
                      className="object-contain group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white shadow-lg`}>
                      {brand.fallbackIcon}
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-3 tracking-tight">{brand.name}</h3>
                <div className="flex items-center justify-center gap-1 text-blue-600 font-bold text-sm uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  Setup Brand <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-to" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] -z-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Get Connected In <br />
                <span className="text-blue-400">4 Simple Steps</span>
              </h2>
              <div className="space-y-12">
                {setupSteps.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="relative">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-white/10">
                        {step.icon}
                      </div>
                      {i < setupSteps.length - 1 && (
                        <div className="absolute top-14 left-7 w-px h-12 bg-white/20"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-slate-400 font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 bg-slate-800 rounded-3xl p-8 border border-white/10 shadow-3xl overflow-hidden">
                  <div className="flex items-center gap-2 mb-6 text-blue-400 font-bold uppercase tracking-widest text-sm">
                    <Clock size={16} /> Live Setup Preview
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl group/preview">
                    <Image 
                      src="/images/printer-setup/wizard-preview.png" 
                      alt="Setup Wizard" 
                      fill 
                      className="object-cover group-hover/preview:scale-105 transition-transform duration-1000 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                       <span className="text-xs font-bold text-white tracking-widest uppercase opacity-80">Connecting...</span>
                    </div>
                  </div>
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-600 rounded-full blur-[100px] opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section id="support" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-12 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <div className="inline-flex p-4 bg-white/10 rounded-3xl border border-white/20 mb-8">
                <Headphones size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Stuck In Setup?</h2>
              <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium">
                Our expert technicians are online and ready to assist you. 
                Whether it's Wi-Fi issues, offline status, or driver installation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  data-chat="true"
                  className="w-full sm:w-auto bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-50 transition-all hover:scale-105 shadow-xl active:scale-95"
                >
                  <MessageSquare size={22} /> Live Chat Now
                </button>
                <a href="tel:+12263191708" className="w-full sm:w-auto bg-blue-500/20 text-white border border-white/30 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm">
                  <PhoneCall size={22} /> +1 (226) 319-1708
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/Crosscity-logo.png" 
              alt="Cross City" 
              width={120} 
              height={30} 
              className="object-contain opacity-80"
            />
          </div>
          
          <div className="flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
          </div>
          
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Cross City. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
