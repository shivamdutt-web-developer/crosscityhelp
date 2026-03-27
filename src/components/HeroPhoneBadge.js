"use client";
import { PhoneCall, Phone } from "lucide-react";

export default function HeroPhoneBadge() {
  return (
    <>
      {/* Desktop badge - right side of hero */}
      <div className="hidden lg:block animate-fade-in-right shrink-0 ml-6 xl:ml-10 mr-6 xl:mr-10">
        <a 
          href="tel:+12263191708" 
          className="group flex items-center gap-6 xl:gap-8 2xl:gap-10 bg-white/10 backdrop-blur-xl border border-white/30 p-5 xl:p-7 2xl:p-10 pl-6 xl:pl-8 2xl:pl-10 pr-12 xl:pr-14 2xl:pr-20 rounded-[2.5rem] xl:rounded-[3rem] 2xl:rounded-[3.5rem] hover:bg-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95 border-b-4 xl:border-b-6 2xl:border-b-8 border-white/20"
        >
          <div className="w-14 h-14 xl:w-20 2xl:w-24 h-14 xl:h-20 2xl:h-24 rounded-2xl xl:rounded-[1.5rem] 2xl:rounded-[2rem] bg-blue-600 flex items-center justify-center text-white shadow-2xl group-hover:rotate-12 transition-transform">
            <PhoneCall className="w-8 h-8 xl:w-11 xl:h-11 2xl:w-14 2xl:h-14" />
          </div>
          <div className="flex flex-col">
            <span className="text-blue-200/80 text-[10px] xl:text-xs 2xl:text-sm font-black uppercase tracking-[0.3em] xl:tracking-[0.4em] mb-1 xl:mb-2 2xl:mb-3 drop-shadow-sm">Priority Helpline</span>
            <span className="text-3xl xl:text-4xl 2xl:text-6xl font-black text-white tracking-tighter whitespace-nowrap drop-shadow-2xl font-sans">+1 (226) 319-1708</span>
          </div>
        </a>
      </div>

      {/* Mobile/Tablet phone button - shows inline below hero text */}
      <div className="lg:hidden w-full mt-6">
        <a 
          href="tel:+12263191708" 
          className="flex items-center justify-center gap-4 bg-blue-600 border border-blue-400/40 text-white px-6 py-4 rounded-2xl shadow-2xl hover:bg-blue-700 transition-all active:scale-95 w-full max-w-sm mx-auto"
        >
          <Phone className="animate-pulse" size={24} />
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-black uppercase tracking-widest text-blue-100/80">Expert Support 24/7</span>
            <span className="text-2xl font-black tracking-tight">+1 (226) 319-1708</span>
          </div>
        </a>
      </div>
    </>
  );
}
