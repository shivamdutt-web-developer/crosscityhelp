import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, Globe, Zap, ShieldCheck, Award, Code, Cpu, Rocket, BarChart, Shield, Stethoscope, ShoppingCart, Mail, PhoneCall } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import TestimonialSlider from "@/components/TestimonialSlider";
import { testimonialsData } from "@/data/testimonials";

export default function Home() {
  // Take top 6 services for the homepage
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden bg-slate-900 border-b border-gray-800 flex items-center pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/90 via-[#1e3a8a]/80 to-[#15803d]/80 z-0" />
        <div className="absolute inset-0 bg-[url('/images/software-development.jpg')] bg-cover bg-center mix-blend-overlay z-0 scale-105 animate-pulse-slow" />

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-3xl bg-black/40 p-8 md:p-14 lg:p-20 rounded-2xl border-l-[6px] border-[#1e40af] backdrop-blur-xl shadow-2xl">
                <h2 className="text-[#3b82f6] text-lg md:text-xl font-bold tracking-[0.3em] mb-6 uppercase drop-shadow-lg">
                  The Zenith of Tech Engineering
                </h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                  ARCHITECTING THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">DIGITAL FUTURE</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
                  Cross City delivers elite-tier software engineering, AI-driven digital transformations, and high-availability cloud ecosystems. We empower global enterprises to outpace competition through radical innovation and technical precision.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/services"
                    className="bg-[#1e40af] hover:bg-blue-600 text-white px-10 py-4 font-black tracking-widest text-sm transition-all text-center rounded-sm shadow-[0_0_20px_rgba(30,64,175,0.4)] hover:shadow-[0_0_30px_rgba(30,64,175,0.6)]"
                  >
                    EXPLORE SOLUTIONS
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-4 font-black tracking-widest text-sm transition-all text-center rounded-sm"
                  >
                    CONSULT AN EXPERT
                  </Link>
                </div>
              </div>

              {/* Right Side Phone Badge */}
              <div className="hidden lg:block animate-fade-in-right">
                <a 
                  href="tel:+12263191708" 
                  className="group flex flex-col items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[3rem] hover:bg-white/20 transition-all shadow-3xl hover:scale-105"
                >
                  <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-transform">
                    <PhoneCall size={40} />
                  </div>
                  <div className="text-center">
                    <span className="block text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-2">Priority Helpline</span>
                    <span className="text-3xl font-black text-white tracking-tighter whitespace-nowrap">+1 (226) 319-1708</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision Section - Deep Content */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-50 border-l-4 border-blue-600">
                <span className="text-blue-700 font-black tracking-widest uppercase text-xs">Unmatched Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                Pioneering Software Integrity & Enterprise Scale
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p className="font-medium text-gray-800 italic border-l-2 border-emerald-500 pl-4">
                  "At Cross City, we don't just write code; we engineer the vascular system of modern commerce. Our mission is to eliminate technical debt and bridge the gap between human ambition and digital reality."
                </p>
                <p>
                  As a leading force in the global tech landscape, Cross City operates at the bleeding edge of software development, digital marketing, and system automation. We facilitate a seamless convergence of high-level strategy and low-level execution, ensuring that every deployment is a benchmark in reliability. Our methodology is rooted in the "Zero-Constraint" philosophy—where your business goals dictate the tech stack, not the other way around.
                </p>
                <p>
                  From building high-concurrency SaaS platforms to automating global HR operations, our technical depth allows us to navigate the most complex architectural hurdles. We deploy elite development squads trained in advanced Agile methodologies, providing your organization with the velocity of a startup and the stability of a fortune-500 backend.
                </p>
                <p>
                  We understand that in the modern economy, software is either an asset or a liability. Our rigorous vetting processes and Tier-1 engineering standards guarantee that every line of code we push is optimized for performance, security, and effortless scalability. Partner with a team that views your technical success as its primary corporate metric.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                    <h4 className="text-3xl font-black text-[#1e40af]">99.9%</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Uptime Reliability</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-3xl font-black text-[#15803d]">500+</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Engineers Deployed</p>
                </div>
              </div>
            </div>

            {/* Right Image with Stats */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src="/images/digital-marketing.jpg"
                  alt="Tech Strategy"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                    <p className="text-white text-xl font-bold mb-2">Global Digital Authority</p>
                    <p className="text-gray-300 text-sm">Empowering over 500+ brands with advanced conversion-centric architectures and high-performance stacks.</p>
                </div>
              </div>
              {/* Floating accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/30 to-[#15803d]/30 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-blue-400 text-sm font-black tracking-[0.4em] uppercase mb-4">Core Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">Elite Tech Services for the Modern Era</h3>
            </div>
            <Link href="/services" className="text-white font-bold flex items-center gap-3 hover:text-blue-400 transition-colors group mb-2">
              VIEW OUR FULL CATALOG
              <ArrowRight className="transition-transform group-hover:translate-x-2" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals Section - NEW CONTENT */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
            <h2 className="text-[#1e40af] text-sm font-black tracking-widest uppercase mb-4">Vertical Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Industries We Revolutionize</h3>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                Our technology isn't generic. We build deep, domain-specific solutions that solve the unique logistical and security hurdles of every major industrial sector.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
                {
                    title: "FinTech & Banking",
                    desc: "Ultra-secure transaction engines, blockchain integration, and high-frequency ledger management systems compliant with global financial regulations.",
                    icon: ShieldCheck,
                    color: "border-blue-500"
                },
                {
                    title: "Medical & HealthTech",
                    desc: "HIPAA-compliant patient portals, AI diagnostic interfaces, and real-time healthcare data orchestration with absolute privacy standards.",
                    icon: Stethoscope,
                    color: "border-emerald-500"
                },
                {
                    title: "Global E-commerce",
                    desc: "Headless commerce architectures, global supply chain tracking, and conversion-optimized checkout funnels handling millions of requests per second.",
                    icon: ShoppingCart,
                    color: "border-purple-500"
                }
            ].map((industry, i) => (
                <div key={i} className={`bg-white p-10 rounded-2xl shadow-sm border-t-8 ${industry.color} hover:shadow-xl transition-all duration-300 group`}>
                    <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-gray-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <industry.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 mb-4">{industry.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{industry.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Engineering Culture Section - NEW CONTENT */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="aspect-square bg-slate-100 rounded-[4rem] rotate-3 absolute inset-0 -z-10 group-hover:rotate-6 transition-transform"></div>
                    <img 
                        src="/images/web-development.jpg" 
                        alt="Engineering Standards" 
                        className="rounded-[4rem] shadow-2xl w-full h-full object-cover -rotate-3 hover:rotate-0 transition-all duration-700"
                    />
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                    <h2 className="text-[#1e40af] text-sm font-black tracking-widest uppercase mb-2">Our Engineering Ethos</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Built on the Principles of Clean Code & High-Performance</h3>
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            We believe that software engineering is a craft that requires equal parts mathematical precision and creative problem-solving. Our global developer squads operate under a unified "Code of Excellence," ensuring that every module we build is standardized, modular, and extensively documented.
                        </p>
                        <p>
                            Our internal protocols mandate rigorous Test-Driven Development (TDD) and peer-review cycles for 100% of our production commits. This ensures that technical debt is mitigated before it can influence your business logic, resulting in systems that are significantly cheaper to maintain and easier to scale over decades.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                "Atomic Component Design",
                                "Zero-Trust Security API Layer",
                                "Serverless Auto-Scaling Architecture",
                                "CI/CD Deployment Perfection",
                                "Full-Stack TypeScript Safety",
                                "Proprietary Data Auditing Tools"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-emerald-500" size={20} />
                                    <span className="font-bold text-gray-800 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Trust Statistics Bar */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hrms.jpg')] bg-cover bg-fixed"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
                { label: "Precision Builds", value: "850+" },
                { label: "Global Presence", value: "24/7" },
                { label: "Vetted Staff", value: "100%" },
                { label: "Code Quality", value: "A++" }
            ].map((stat, i) => (
                <div key={i} className="space-y-2">
                    <div className="text-5xl md:text-6xl font-black text-emerald-400 mb-1">{stat.value}</div>
                    <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">{stat.label}</h4>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center">
            <h2 className="text-[#1e40af] text-sm font-black tracking-widest uppercase mb-4">Strategic Proof</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">What Global Leaders Say</h3>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialSlider testimonials={testimonialsData} />
        </div>
      </section>

      {/* Final Call to Action - Intense Premium Design */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-emerald-900 mix-blend-multiply opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto group">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl transition-transform group-hover:scale-105 duration-700"> Ready to Engineer Your Competitive Advantage?</h3>
            <p className="text-white/80 text-xl md:text-2xl mb-12 font-light leading-relaxed">
                Connect with our senior technical partners to discuss your project blueprint. We provide immediate technical feasibility audits and custom engineering roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-emerald-400 hover:text-white w-full sm:w-auto px-12 py-5 font-black tracking-widest text-sm transition-all rounded shadow-2xl uppercase">
                START YOUR BLUEPRINT
                </Link>
                <div className="flex items-center gap-4 text-white text-lg font-bold">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <Mail size={20} />
                    </div>
                    <span>support@crosscityhelp.com</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
