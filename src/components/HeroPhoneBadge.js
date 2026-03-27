"use client";
import { PhoneCall } from "lucide-react";

export default function HeroPhoneBadge() {
  return (
    <div className="hidden lg:block animate-fade-in-right">
      <a 
        href="tel:+12263191708" 
        className="group flex items-center gap-6 bg-white/10 backdrop-blur-xl border border-white/30 p-4 pl-4 pr-10 rounded-[2rem] hover:bg-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95 border-b-2 border-white/20"
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
          <PhoneCall size={30} />
        </div>
        <div className="flex flex-col">
          <span className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Expert Helpline</span>
          <span className="text-2xl font-black text-white tracking-tighter whitespace-nowrap">+1 (226) 319-1708</span>
        </div>
      </a>
    </div>
  );
}
