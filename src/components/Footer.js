import Link from "next/link";
import { Phone, Mail, ChevronRight, Facebook, Twitter, Linkedin, Instagram, Send, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#050b14] text-white pt-24 pb-6 border-t border-slate-800/60 overflow-hidden">
            {/* Background Texture & Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>
            <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-[#1e40af] rounded-full blur-[140px] opacity-20 pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#15803d] rounded-full blur-[160px] opacity-10 pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Company Info */}
                    <div className="md:col-span-2 lg:col-span-4 pr-0 lg:pr-8">
                        {/* Glassmorphic Logo Container */}
                        <div className="mb-8 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl inline-block shadow-2xl">
                            <div className="bg-white rounded-lg p-2">
                                <img
                                    src="/images/Crosscity-logo.png"
                                    alt="Cross City"
                                    className="h-16 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                            Redefining facility management by integrating advanced technology, highly personalized service, and sustainable practices globally to provide premium manpower and operational solutions.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1e40af] hover:text-white hover:border-[#1e40af] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick & Legal Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#15803d]"></span>
                                Useful Links
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Services', path: '/services' },
                                    { name: 'Catalog', path: '/catalog' },
                                    { name: 'Gallery', path: '/gallery' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm"
                                        >
                                            <ChevronRight size={14} className="text-[#15803d] opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0" />
                                            <span className="relative overflow-hidden">
                                                {link.name}
                                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#15803d] transform -translate-x-full transition-transform group-hover:translate-x-0"></span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#1e40af]"></span>
                                Support
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Contact Us', path: '/contact' },
                                    { name: 'Privacy Policy', path: '/privacy-policy' },
                                    { name: 'Terms of Service', path: '/terms-conditions' },
                                    { name: 'Disclaimer', path: '/disclaimer' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm"
                                        >
                                            <ChevronRight size={14} className="text-[#1e40af] opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0" />
                                            <span className="relative overflow-hidden">
                                                {link.name}
                                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1e40af] transform -translate-x-full transition-transform group-hover:translate-x-0"></span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="lg:col-span-4 lg:ml-auto w-full">
                        <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                            Get In Touch
                        </h4>

                        <div className="space-y-4 mb-8 bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-[#1e40af]/20 flex items-center justify-center shrink-0">
                                    <Phone className="text-blue-400" size={18} />
                                </div>
                                <div>
                                    <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Call Anytime</span>
                                    <a href="tel:+122631917078" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">+1 (226) 319-17078</a>
                                </div>
                            </div>
                            <div className="h-px w-full bg-white/10"></div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-[#15803d]/20 flex items-center justify-center shrink-0">
                                    <Mail className="text-green-400" size={18} />
                                </div>
                                <div>
                                    <span className="block text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Send Email</span>
                                    <a href="mailto:support@crosscityhelp.com" className="text-white hover:text-green-400 transition-colors text-sm font-medium">support@crosscityhelp.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Mini */}
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Subscribe to newsletter..."
                                className="w-full bg-[#0a1120] border border-slate-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#1e40af] focus:ring-1 focus:ring-[#1e40af] text-sm transition-all"
                            />
                            <button type="submit" className="absolute right-2 top-2 bg-[#1e40af] hover:bg-blue-600 text-white p-1.5 rounded-md transition-colors flex items-center justify-center">
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 pb-6 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide text-slate-500">
                    <p className="text-center md:text-left shadow-sm">
                        &copy; {currentYear} <span className="text-white/80">Cross City</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors relative after:absolute after:top-1/2 after:-right-3 after:w-1 after:h-1 after:bg-slate-700 after:rounded-full after:-translate-y-1/2 last:after:hidden">Privacy</Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors relative after:absolute after:top-1/2 after:-right-3 after:w-1 after:h-1 after:bg-slate-700 after:rounded-full after:-translate-y-1/2 last:after:hidden">Terms</Link>
                        <Link href="/disclaimer" className="hover:text-white transition-colors relative after:absolute after:top-1/2 after:-right-3 after:w-1 after:h-1 after:bg-slate-700 after:rounded-full after:-translate-y-1/2 last:after:hidden">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
