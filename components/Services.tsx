"use client";

import Link from "next/link";
import {
  Search,
  Globe,
  MonitorSmartphone,
  Mail,
  Cpu,
  PenTool,
  Users,
  ThumbsUp,
  Megaphone,
} from "lucide-react";
import ButtonFill from "./Button";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    slug: "services/search-engine-optimization",
    desc: "Rank higher on search engines with smart SEO strategies that deliver consistent organic traffic.",
    icon: Search,
  },
  {
    title: "Social Media Marketing (SMM)",
    slug: "/services/social-media-marketing",
    desc: "Grow your brand presence through impactful social media campaigns across all platforms.",
    icon: Globe,
  },
  {
    title: "Performance Marketing",
    slug: "/services/performance-marketing",
    desc: "Scale your business with ROI-focused ads and revenue-driven marketing.",
    icon: MonitorSmartphone,
  },
  {
    title: "Content Marketing",
    slug: "/services/content-marketing",
    desc: "Powerful storytelling through blogs, creatives, and high-quality content.",
    icon: PenTool,
  },
  {
    title: "Website Designing & Development",
    slug: "/services/website-design-development",
    desc: "Modern, fast, conversion-ready websites built with clean UX.",
    icon: Cpu,
  },
  {
    title: "Email Marketing",
    slug: "/services/email-marketing",
    desc: "Smart automation workflows that nurture, convert, and retain customers.",
    icon: Mail,
  },
  // Full list continues... (but only first 6 will show)
];

export default function ServicesPage() {
  return (
    <section className="relative py-12 bg-[var(--color1)]">
      {/* Background Blobs */}
      <div className="absolute -top-10 -left-24 w-50 h-50 bg-[var(--color5)]/50 blur-[70px] rounded-full z-20"></div>
      <div className="absolute -bottom-10 -right-24 w-50 h-50 bg-[var(--color5)]/50 blur-[70px] rounded-full z-20"></div>

      <div className="w-11/12 md:w-5/6 mx-auto relative z-10">
        {/* Heading + Button */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="text-[var(--color5)] text-lg font-semibold border-b w-fit mb-3 tracking-widest">
              OUR SERVICES
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--color4)] drop-shadow-lg">
              Transforming Brands with Modern Digital Solutions
            </h1>
          </div>

          {/* 👉 View All Services Button */}
          <Link href="/services">
            <ButtonFill text="View All Services " />
          </Link>
        </div>

        {/* Cards — ONLY FIRST 6 SHOW */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={`/${service.slug}`}
                className="group flex items-start gap-6 p-6 rounded-3xl  
  border border-white/20 hover:border-[var(--color3)]/50
  hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Left Gradient Bar with Icon */}
                <div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-b 
      from-[var(--color3)] to-[var(--color1)] 
      flex items-center justify-center text-white shadow-md 
      group-hover:scale-105 transition-all duration-500"
                >
                  <Icon size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="text-xl font-semibold text-[var(--color5)] group-hover:text-[var(--color4)] 
        transition-all"
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Small gradient underline */}
                  <div
                    className="mt-4 w-24 h-[3px] rounded-full bg-gradient-to-r 
        from-[var(--color4)] to-[var(--color5)] opacity-50 group-hover:opacity-90 
        transition-all"
                  ></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
