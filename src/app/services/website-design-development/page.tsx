"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import hero from "../../../../Assets/Services hero/website.jpg";
import web from "../../../../Assets/services/1.jpg";
import {
  BarChart3,
  Code2,
  Cpu,
  MonitorSmartphone,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import Slider from "react-slick";

import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import GetInTouch from "../../../../components/GetInTouch";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import { useState } from "react";
const sections = [
  {
    icon: <BarChart3 className="text-[var(--color5)]" size={36} />,
    title: "We Focus on Your Growth, Not Just Websites",
    content:
      "At BigWig Digital, we’re not just about making websites, we’re about building digital success stories. Whether it’s digital marketing, website design, or full-scale development, every service we deliver is rooted in excellence, backed by expertise, and focused on measurable outcomes. Our commitment to quality has made us a trusted web development partner for businesses across industries and regions.",
  },
  {
    icon: <Code2 className="text-[var(--color5)]" size={36} />,
    title: "Custom Web Development for Every Business Need",
    content:
      "We pay attention to every detail to ensure a smooth and flawless web development process. Our custom web development services include creating user-friendly, high-performance websites, eCommerce platforms, CMS-based sites, web apps, SaaS solutions, and enterprise portals. Everything is tailored to ensure your brand shines online.",
  },
  {
    icon: <Cpu className="text-[var(--color5)]" size={36} />,
    title: "Future-Ready Technologies for Scalable Solutions",
    content:
      "We build fast, scalable, and secure websites using modern technologies like React.js, Angular, Vue.js, Node.js, Progressive Web Apps (PWAs), and headless CMS systems. With AI-powered tools, intelligent automation, and seamless third-party integrations, we make sure your website is optimized for performance, security, and conversions.",
  },
  {
    icon: <MonitorSmartphone className="text-[var(--color5)]" size={36} />,
    title: "Designed for Experience and Engagement",
    content:
      "Our goal is to help you stand out and leave a lasting impression. That’s why we create visually appealing websites with smooth navigation and smart features like voice search, chatbots, and API integrations. Whether it's a business website, blog, or eCommerce platform, we ensure it delivers a seamless user experience across all devices.",
  },
  {
    icon: <PenTool className="text-[var(--color5)]" size={36} />,
    title: "Creative Design Backed by Strategy",
    content:
      "We believe in designing for purpose. Our responsive websites not only look good but are also strategically built for your target audience and market segment. Every element of our website design focuses on driving engagement, building credibility, and growing your brand’s online reputation.",
  },
  {
    icon: <ShieldCheck className="text-[var(--color5)]" size={36} />,
    title: "Trusted by Brands Worldwide",
    content:
      "From startups to established businesses, we’ve delivered over 900 successful web projects to clients across diverse industries and geographies. Whether it's a portal for a pharmaceutical brand, a hospital website, or an educational platform, we have the experience to deliver exactly what your business needs.",
  },
];

function Website() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  return (
    <div className="bg-[var(--color1)]">
      <Nav />

      <title>Website Design & Development</title>
      <meta
        name="description"
        content="Build user-friendly and high-converting websites with our expert design and development team."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/website-design-development"
      />

      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Best Website Designing & Development Company NCR
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              More&nbsp;
              <TypeAnimation
                sequence={["Designs", 2000, "Speed", 2000, "Conversions", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We are the Best website development company offering different
              Online Website Designing & Development services.
            </p>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Contact Us"
            />
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className=" py-12 px-4">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[var(--color5)] mb-6">
            Best Web Development Company to Build Your Online Presence
          </h2>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Text Block */}
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                Words like <strong>“web design”</strong> and{" "}
                <strong>“web development”</strong> might sound overwhelming, and
                that&#39;s completely okay! Not everyone is an expert in
                creating professional websites , that&#39;s where BigWig Digital
                steps in.
              </p>
              <p>
                <strong>
                  <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
                </strong>{" "}
                is your trusted partner for web design and development. With a
                strong track record and a results-oriented approach, we help
                businesses establish a powerful online presence. Backed by years
                of hands-on experience, we&#39;ve earned recognition as one of
                the leading web design and development companies.
              </p>
            </div>

            {/* Right Image Block */}
            <div>
              <Image
                src={web}
                alt="Best Web Development Company "
                className="w-full h-[50vh] rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Highlight Box Below */}
          <div
            className="
    relative p-8 md:p-10 rounded-2xl 
    backdrop-blur-xl bg-white/10 
    border border-white/10 
    shadow-[0_0_30px_rgba(0,255,255,0.2)]
    overflow-hidden
  "
          >
            {/* Neon Scan Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
          absolute left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
          animate-clientScan
        "
                  style={{
                    top: `${40 + i * 40}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Content */}
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)] mb-6 relative z-10">
              Why Clients Choose Us
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-200 text-base relative z-10">
              {[
                "High-quality, mobile-responsive websites.",
                "Cost-effective and easy-to-manage web solutions.",
                "Attractive, conversion-focused landing pages.",
                "SEO-friendly website structures.",
                "More than 900 successful projects delivered.",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group transition-all"
                >
                  {/* Neon bullet */}
                  <span
                    className="
          w-3 h-3 mt-1 rounded-full 
          bg-[var(--color5)] 
          shadow-[0_0_10px_var(--color5)]
          group-hover:shadow-[0_0_15px_var(--color5)]
          transition-all 
        "
                  ></span>

                  <span className="group-hover:text-[var(--color5)] transition-colors duration-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Glow Border */}
            <div
              className="
                absolute inset-0 rounded-2xl
                border border-transparent 
                hover:border-[var(--color5)]
                transition-all duration-300"
            ></div>

            {/* ANIMATION */}
            <style>{`
              @keyframes clientScan {
                0% { transform: translateX(-100%); opacity: 0; }
                60% { opacity: 1; }
                100% { transform: translateX(100%); opacity: 0; }
              }
              .animate-clientScan {
                animation: clientScan 4.5s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      <section className="py-16 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        <div className="relative z-10">
          {/* ================= MOBILE SLIDER ================= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {sections.map((section, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
                h-[470px] flex flex-col justify-between 
                p-6 rounded-2xl 
                backdrop-blur-xl bg-white/10 
                border border-white/10 
                shadow-[0_0_25px_rgba(0,255,255,0.15)]
                space-y-5 relative overflow-hidden group
              "
                  >
                    {/* Scan Lines */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="
                      absolute left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                      animate-cardScan
                    "
                          style={{
                            top: `${60 + i * 55}px`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center">
                      <div
                        className="
                    p-4 rounded-full 
                    bg-white/10 backdrop-blur-lg 
                    border border-white/20 shadow-[0_0_10px_rgba(0,255,255,0.3)]
                    group-hover:shadow-[0_0_20px_var(--color5)]
                    transition-all
                  "
                      >
                        {section.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-center text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                      {section.title}
                    </h3>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                      {section.content}
                    </p>

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ================= DESKTOP GRID ================= */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">
            {sections.map((section, index) => (
              <div
                key={index}
                className="
            group relative overflow-hidden rounded-2xl 
            transition-transform duration-300 
            hover:-translate-y-2 h-full
          "
              >
                <div
                  className="
              relative z-10 p-6 rounded-2xl 
              backdrop-blur-xl bg-white/10 
              border border-white/10 
              shadow-[0_0_25px_rgba(0,255,255,0.2)]
              flex flex-col justify-between 
              h-full space-y-5
            "
                >
                  {/* Hologram Scan Lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-cardScan
                  "
                        style={{
                          top: `${60 + i * 50}px`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
      p-4 rounded-full 
      bg-white/10 backdrop-blur-lg 
      border border-white/20 
      shadow-[0_0_10px_rgba(0,255,255,0.3)]
      group-hover:shadow-[0_0_20px_var(--color5)]
      transition-all
    "
                    >
                      {section.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify">
                    {section.content}
                  </p>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                </div>
              </div>
            ))}
          </div>

          {/* ANIMATIONS */}
          <style>{`
      @keyframes cardScan {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      .animate-cardScan {
        animation: cardScan 4s linear infinite;
      }
    `}</style>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <section className="py-12 relative overflow-hidden">
        {/* Matrix glow background */}
        <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider drop-shadow-[0_0_10px_var(--color5)]">
            Our Other Services
          </h2>

          {/* TABLE WRAPPER */}
          <div
            className="
        rounded-2xl 
        overflow-hidden 
        backdrop-blur-xl bg-white/5 
        border border-white/10 
        shadow-[0_0_30px_rgba(0,255,255,0.15)] 
        relative
      "
          >
            {/* Scan Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan"></div>

            <table className="min-w-full text-sm text-gray-200 relative z-10">
              <tbody>
                {[
                  [
                    "Search Engine Optimization",
                    "Social Media Marketing",
                    "Performance Marketing",
                  ],
                  [
                    "Content Marketing",
                    "Website Designing & Development",
                    "Email Marketing",
                  ],
                  [
                    "Social Media Optimization",
                    "Graphic Designing & Video Editing",
                    "Influencer Marketing",
                  ],
                  ["Online Reputation Management", "", "Affiliate Marketing"],
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="divide-x divide-white/10">
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className="
                    h-20 
                    border-b border-white/10 
                    relative group overflow-hidden
                  "
                      >
                        {cell && (
                          <a
                            href={`/services/${cell
                              .toLowerCase()
                              .replace(/ /g, "-")
                              .replace(/\&/g, "and")}`}
                            target="_blank"
                            className="
                        flex items-center justify-center 
                        w-full h-full px-4 text-center 
                        font-semibold
                        text-gray-200
                        transition-all duration-300
                        hover:text-[var(--color5)]
                      "
                          >
                            {/* Neon card effect */}
                            <span
                              className="
                          absolute inset-0 
                          rounded-xl 
                          border border-transparent
                          group-hover:border-[var(--color5)]
                          group-hover:shadow-[0_0_20px_var(--color5)]
                          transition-all duration-300
                        "
                            ></span>

                            <span className="relative z-10">{cell}</span>
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes scan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scan {
      animation: scan 4s linear infinite;
    }
  `}</style>
      </section>
      <GetInTouch />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <Footer />
    </div>
  );
}

export default Website;
