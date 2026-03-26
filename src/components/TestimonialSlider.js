"use client";

import { useRef, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider({ testimonials }) {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

                // Add a small buffer (10px) to handle fractional pixel scrolling issues
                if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
                    // Reached end, go back to start
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
                }
            }
        }, 5000); // Scrolls every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full group">
            {/* Prev Button */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-20 bg-white text-[#1e40af] p-2 sm:p-3 rounded-full shadow-xl hover:bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:opacity-100 hidden sm:flex items-center justify-center border border-gray-100"
                aria-label="Previous Testimonial"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 lg:gap-8 pb-8 pt-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((testi, i) => (
                    <div
                        key={i}
                        className="snap-center shrink-0 w-[full] sm:w-[calc(100%-24px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)]"
                    >
                        <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow relative h-full flex flex-col">
                            <Quote className="absolute top-6 right-6 text-slate-100" size={60} />
                            <div className="flex gap-1 text-[#1e40af] mb-6 relative z-10">
                                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic flex-grow">
                                "{testi.quote}"
                            </p>
                            <div className="border-t border-gray-100 pt-4 relative z-10 mt-auto">
                                <h4 className="font-bold text-gray-900">{testi.name}</h4>
                                {testi.role && <p className="text-sm text-gray-500">{testi.role}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-20 bg-white text-[#1e40af] p-2 sm:p-3 rounded-full shadow-xl hover:bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:opacity-100 hidden sm:flex items-center justify-center border border-gray-100"
                aria-label="Next Testimonial"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
}
