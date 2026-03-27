"use client";
import { PhoneCall } from "lucide-react";

export default function HeroPhoneBadge() {
  return (
    <div className="hidden lg:block animate-fade-in-right">
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
  );
}
