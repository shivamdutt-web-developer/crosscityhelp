"use client";
import { useState } from "react";
import Link from "next/link";
import { PhoneCall, Maximize2, Mail } from "lucide-react";
import HeroPhoneBadge from "@/components/HeroPhoneBadge";

export default function Gallery() {
    // Gallery State for filtering
    const [activeFilter, setActiveFilter] = useState("All");

    const categories = ["All", "Cleaning", "Facility", "Security", "Events"];

    const galleryItems = [
        { id: 1, category: "Cleaning", src: "/images/img-1581578731548-c64695cc6952.jpg", title: "Commercial Cleaning" },
        { id: 2, category: "Events", src: "/images/img-1542361345-89e58247f2d5.jpg", title: "Corporate Event Setup" },
        { id: 3, category: "Facility", src: "/images/img-1600880292203-757bb62b4baf.jpg", title: "Office Maintenance" },
        { id: 4, category: "Security", src: "/images/img-1504307651254-35680f356ba4.jpg", title: "Security Personnel" },
        { id: 5, category: "Facility", src: "/images/img-1556761175-5973dc0f32b7.jpg", title: "Workspace Optimization" },
        { id: 6, category: "Cleaning", src: "/images/img-1589939705384-5185137a7f0f.jpg", title: "Industrial Cleaning" },
    ];

    const filteredItems = activeFilter === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <>
            {/* Page Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-32">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1497366216548-37526070297c.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Our Gallery</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-sm md:text-base font-medium tracking-widest uppercase text-shadow-sm">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Gallery</span>
                        </div>
                    </div>

                    <HeroPhoneBadge />
                </div>
            </section>

            {/* Gallery Grid Section */}
            <section className="py-20 md:py-28 pt-28 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">Project Showcase</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Glimpses of Our Work</h3>
                        <p className="mt-4 text-gray-600 text-lg">
                            Witness the Cross City standard in action. Browse our portfolio of premium facility management, specialized security, and precision commercial cleaning deployments across top corporate sectors.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 border-b border-gray-100 pb-8">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-2 rounded-sm font-bold tracking-wide text-sm transition-all duration-300 ${activeFilter === cat
                                    ? "bg-[#1e40af] text-white shadow-md shadow-[#1e40af]/30"
                                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative h-72 md:h-80 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-100"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h4 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                                    <span className="text-[#1e40af] font-medium tracking-wider uppercase text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>

                                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <Maximize2 size={18} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact / Statistics Section */}
            <section className="py-20 md:py-28 pt-28 bg-slate-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                        <div className="p-6">
                            <div className="text-6xl font-black text-[#1e40af] mb-4">500+</div>
                            <h4 className="text-xl font-bold text-gray-900">Projects Completed</h4>
                            <p className="text-gray-500 mt-2">Across various industries nationwide.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-6xl font-black text-[#1e40af] mb-4">10+</div>
                            <h4 className="text-xl font-bold text-gray-900">Years of Excellence</h4>
                            <p className="text-gray-500 mt-2">Providing unmatched service quality.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-6xl font-black text-[#1e40af] mb-4">50+</div>
                            <h4 className="text-xl font-bold text-gray-900">Expert Staff</h4>
                            <p className="text-gray-500 mt-2">Highly trained and verified professionals.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-6xl font-black text-[#1e40af] mb-4">100%</div>
                            <h4 className="text-xl font-bold text-gray-900">Client Satisfaction</h4>
                            <p className="text-gray-500 mt-2">Our ultimate goal in every project.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Bar Section */}
            <section className="bg-[#1e40af] py-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">Ready to Upgrade Your Facility?</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xl font-medium">
                            <Mail size={24} />
                            <span>support@crosscityhelp.com</span>
                        </div>
                    </div>
                    <Link href="/contact" className="bg-white text-[#1e40af] hover:bg-gray-100 px-8 py-4 font-bold tracking-wider text-sm whitespace-nowrap transition-colors rounded-sm shadow-lg border border-transparent">
                        REQUEST A QUOTE
                    </Link>
                </div>
            </section>
        </>
    );
}
