"use client";

import { Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-[#1e40af] text-white py-2 text-xs md:text-sm font-medium z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">

                {/* Contact Info */}
                <div className="flex items-center gap-6">
                    <a href="mailto:support@crosscityhelp.com" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                        <Mail size={16} />
                        <span className="hidden sm:inline">support@crosscityhelp.com</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="hidden md:inline">10:00 Am to 6:00 Pm Monday to Saturday</span>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                    <a href="#" className="w-6 h-6 rounded-full bg-white text-[#1e40af] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Facebook size={12} fill="currentColor" />
                    </a>
                    <a href="#" className="w-6 h-6 rounded-full bg-white text-[#1e40af] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Twitter size={12} fill="currentColor" />
                    </a>
                    <a href="#" className="w-6 h-6 rounded-full bg-white text-[#1e40af] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Instagram size={12} />
                    </a>
                    <a href="#" className="w-6 h-6 rounded-full bg-white text-[#1e40af] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Linkedin size={12} fill="currentColor" />
                    </a>
                    <a href="#" className="w-6 h-6 rounded-full bg-white text-[#1e40af] flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Youtube size={12} />
                    </a>
                </div>
            </div>
        </div>
    );
}
