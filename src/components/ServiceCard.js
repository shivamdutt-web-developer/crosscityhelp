import Link from "next/link";
import {
    Building2, Brush, Wrench, Bug, Leaf,
    PaintBucket, Home, Shield, CalendarCheck,
    Megaphone, Monitor, Code, Cloud, Users
} from "lucide-react";

const IconMap = {
    "Brush": Brush,
    "Wrench": Wrench,
    "Bug": Bug,
    "Leaf": Leaf,
    "PaintBucket": PaintBucket,
    "Home": Home,
    "Shield": Shield,
    "CalendarCheck": CalendarCheck,
    "Building2": Building2,
    "Megaphone": Megaphone,
    "Monitor": Monitor,
    "Code": Code,
    "Cloud": Cloud,
    "Users": Users
};

export default function ServiceCard({ title, description, slug, icon, image }) {
    // Use a fallback image if none provided
    const bgImage = image || "/images/img-1581578731548-c64695cc6952.jpg";

    // Resolve the icon component, default to Building2
    const IconComponent = IconMap[icon] || Building2;

    return (
        <div className="bg-[#f8f9fa] shadow-md border border-gray-100 group flex flex-col items-center text-center overflow-visible mt-6 hover:-translate-y-2 transition-transform duration-300">

            {/* Top Image Box */}
            <div className="w-full h-48 sm:h-56 overflow-hidden relative">
                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Overlapping Icon */}
            <div className="w-16 h-16 bg-[#f8f9fa] rounded-full flex items-center justify-center -mt-8 relative z-10">
                <IconComponent size={28} className="text-[#15803d]" strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 pt-4 flex flex-col flex-grow w-full">
                <h3 className="text-[#1e40af] text-xl md:text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 flex-grow max-w-sm mx-auto">
                    {description}
                </p>
                <Link
                    href={`/services/${slug}`}
                    className="text-[#1e40af] font-bold text-sm hover:underline tracking-wide mt-auto brand-card-trigger"
                >
                    READ MORE
                </Link>
            </div>
        </div>
    );
}
