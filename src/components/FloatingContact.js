"use client";
import { Phone, PhoneCall } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      {/* Left Sidebar - Sticky/Fixed */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] hidden lg:block">
        <a 
          href="tel:+12263191708" 
          className="bg-[#1e40af] text-white flex items-center gap-3 px-4 py-6 rounded-r-2xl shadow-2xl hover:bg-blue-700 transition-all hover:pl-6 group"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <span className="font-black tracking-[0.2em] text-sm whitespace-nowrap">
            +1 (226) 319-1708
          </span>
          <Phone className="rotate-90 group-hover:scale-110 transition-transform" size={20} />
        </a>
      </div>

      {/* Mobile Bottom Bar (Optional but good for UX) */}
      <div className="fixed bottom-6 left-6 z-[60] lg:hidden">
        <a 
          href="tel:+12263191708" 
          className="w-14 h-14 bg-[#1e40af] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <PhoneCall size={24} />
        </a>
      </div>
    </>
  );
}
