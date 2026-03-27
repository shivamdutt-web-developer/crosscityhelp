"use client";
import { PhoneCall, Phone } from "lucide-react";

export default function HeroPhoneBadge() {
  return (
    <>
      {/* Desktop badge - right side of hero */}
      <div className="hidden lg:block animate-fade-in-right shrink-0">
        <a 
          href="tel:+12263191708" 
          className="group flex items-center gap-8 bg-white/10 backdrop-blur-xl border border-white/30 p-6 pl-6 pr-12 rounded-[2.5rem] hover:bg-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95 border-b-4 border-white/20"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
            <PhoneCall size={36} />
          </div>
          <div className="flex flex-col">
            <span className="text-blue-100/60 text-xs font-black uppercase tracking-[0.3em] mb-1">Expert Helpline</span>
            <span className="text-3xl md:text-4xl font-black text-white tracking-tighter whitespace-nowrap drop-shadow-lg">+1 (226) 319-1708</span>
          </div>
        </a>
      </div>

      {/* Mobile/Tablet phone button - shows inline below hero text */}
      <div className="lg:hidden w-full mt-4">
        <a 
          href="tel:+12263191708" 
          className="flex items-center justify-center gap-3 bg-blue-600/80 backdrop-blur-md border border-blue-400/40 text-white px-5 py-3 rounded-2xl shadow-lg hover:bg-blue-600 transition-all active:scale-95 w-full max-w-xs mx-auto"
        >
          <Phone size={20} />
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Expert Helpline</span>
            <span className="text-lg font-black tracking-tight">+1 (226) 319-1708</span>
          </div>
        </a>
      </div>
    </>
  );
}
