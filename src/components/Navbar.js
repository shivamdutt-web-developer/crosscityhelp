"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      subLinks: [
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Web Developer", href: "/services/web-development" },
        { name: "Software Developer", href: "/services/software-development" },
        { name: "SAAS", href: "/services/saas" },
        { name: "HRMS", href: "/services/hrms" }
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Clients", href: "/clients" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`w-full z-40 transition-all duration-300 bg-white border-b border-gray-100 ${isScrolled ? "fixed top-0 shadow-md py-3" : "relative py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Crosscity-logo.png"
              alt="Cross City Manpower"
              width={140}
              height={30}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm md:text-base font-bold text-gray-900 hover:text-[#1e40af] transition-colors py-4 inline-flex items-center gap-1"
                >
                  {link.name}
                  {link.subLinks && (
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1e40af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-md overflow-hidden z-50">
                    <ul className="py-2">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            href={subLink.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-[#1e40af] hover:bg-slate-50 hover:pl-5 transition-all"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Call to Action - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/catalog"
              className="bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-6 py-3 font-bold text-sm tracking-wider transition-colors"
            >
              OUR CATALOGUE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none transition-colors text-gray-900"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full max-h-[75vh] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex flex-col items-center py-6 shadow-xl border-t border-slate-200 dark:border-slate-800">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full text-center">
              <Link
                href={link.href}
                className="block w-full py-3 text-lg font-bold text-gray-900 hover:text-[#1e40af] hover:bg-gray-50 transition-colors"
                onClick={() => {
                  if (!link.subLinks) setIsMobileMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="bg-slate-50 w-full py-2 flex flex-col border-y border-gray-100">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className="block w-full py-2.5 text-base font-medium text-gray-700 hover:text-[#1e40af] hover:bg-gray-200 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/catalog"
            className="mt-6 bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-8 py-3 font-bold text-sm tracking-wider transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
           OUR CATALOGUE
          </Link>
        </div>
      )}
    </header>
  );
}
