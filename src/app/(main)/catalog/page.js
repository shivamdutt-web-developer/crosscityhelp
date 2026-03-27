import Link from "next/link";
import { ArrowRight, Download, FileText, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import HeroPhoneBadge from "@/components/HeroPhoneBadge";

export default function Catalog() {
    return (
        <>
            {/* Page Hero Section */}
            <section className="relative min-h-[280px] overflow-hidden bg-slate-900 border-b border-gray-800 flex flex-col justify-center items-center pt-28 pb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/85 to-[#15803d]/85 z-0" />
                <div className="absolute inset-0 bg-[url('/images/img-1581578731548-c64695cc6952.jpg')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
                    <div className="text-center lg:text-left flex-1 lg:max-w-xl xl:max-w-2xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">Service Catalog</h1>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 text-xs sm:text-sm font-medium tracking-widest uppercase">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="text-white">/</span>
                            <span className="text-white">Catalog</span>
                        </div>
                    </div>

                    <HeroPhoneBadge />
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-20 pt-24 pb-8 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-[#1e40af] text-lg font-bold tracking-wide uppercase mb-3">Comprehensive Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                        Explore Our Complete Range of Facility Solutions
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Cross City offers a meticulously curated catalog of elite facility management and specialized manpower solutions.
                        From advanced deep-cleaning to mission-critical technical maintenance, our portfolio is architected to conquer every complex operational challenge your enterprise faces.
                    </p>
                </div>
            </section>

            {/* Catalog Grid Section */}
            <section className="pb-20 md:pb-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden">
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-800 z-10 opacity-20 group-hover:opacity-10 transition-opacity"></div>
                                    <img
                                        src={`https://images.unsplash.com/photo-${['1584622650111-993a426fbf0a', '1600880292203-757bb62b4baf', '1581578731548-c64695cc6952', '1621905252507-b35492cc74b4', '1504307651254-35680f356dfd', '1517646287270-a5a9ca602e5c', '1580828369019-ea5544b1c314', '1497366216548-37526070297c'][index % 8]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur text-[#1e40af] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                                        <service.icon size={24} />
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e40af] transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {/* Generate fake features based on title for the catalog view */}
                                        {['Professional Execution', 'Verified Staff', 'Quality Assured'].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                                <CheckCircle2 size={16} className="text-green-600" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="mt-auto inline-flex items-center gap-2 text-[#1e40af] font-bold tracking-wider text-sm uppercase hover:text-gray-900 transition-colors"
                                    >
                                        View Details
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Download PDF Catalog Banner */}
                    <div className="mt-20 bg-slate-900 rounded-sm p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border-l-4 border-[#1e40af]">
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e40af] rounded-full filter blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex items-start gap-6">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white shrink-0 mt-2">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Download Full Catalog (PDF)</h3>
                                <p className="text-gray-400 text-lg">Get complete offline access to all our services, pricing models, and service level agreements (SLAs).</p>
                            </div>
                        </div>

                        <button className="relative z-10 whitespace-nowrap bg-[#15803d] hover:bg-[#16a34a] text-white px-8 py-4 font-bold tracking-wider text-sm uppercase transition-all shadow-lg flex items-center gap-2 group shrink-0">
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                            Download PDF Brochure
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-white py-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a Custom Service Package?</h3>
                            <p className="text-gray-600">Contact our experts to tailor a solution exactly for your facility's needs.</p>
                        </div>
                        <Link href="/contact" className="bg-[#1e40af] text-white hover:bg-gray-900 px-8 py-4 font-bold tracking-wider text-sm whitespace-nowrap transition-colors rounded-sm shadow-md flex items-center gap-2 group">
                            Contact Us Today
                            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
