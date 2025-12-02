"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/affiliate_marketing.jpg";
import affiliate from "../../../../Assets/services/12.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import {
  FaShoppingBag,
  FaLaptopCode,
  FaGraduationCap,
  FaTshirt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import {
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaThumbsUp,
  FaSearch,
  FaClipboardCheck,
  FaPuzzlePiece,
} from "react-icons/fa";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "Performance-Based ROI",
    desc: "Pay only for results - whether it’s a sale, lead, or sign-up - ensuring maximum efficiency.",
    icon: <FaChartLine className="text-3xl text-blue-600" />,
  },
  {
    title: "Low-Risk, High Reward",
    desc: "With no upfront ad spend, you grow without wasting budget on non-converting traffic.",
    icon: <FaShieldAlt className="text-3xl text-green-600" />,
  },
  {
    title: "Wider Market Reach",
    desc: "Leverage affiliates, influencers, and bloggers who already have a trusted audience.",
    icon: <FaGlobe className="text-3xl text-indigo-600" />,
  },
  {
    title: "Boosts Brand Credibility",
    desc: "Authentic promotions from real people build third-party trust and brand validation.",
    icon: <FaThumbsUp className="text-3xl text-pink-600" />,
  },
  {
    title: "Improves SEO & Visibility",
    desc: "Affiliate links from authority sites indirectly support better organic rankings.",
    icon: <FaSearch className="text-3xl text-purple-600" />,
  },
  {
    title: "Transparent Performance Tracking",
    desc: "Real-time dashboards let you track every click, conversion, and payout.",
    icon: <FaClipboardCheck className="text-3xl text-yellow-600" />,
  },
  {
    title: "Strengthens Other Campaigns",
    desc: "Affiliate efforts complement SEO, paid ads, social media, and email marketing.",
    icon: <FaPuzzlePiece className="text-3xl text-red-600" />,
  },
];

const verticals = [
  {
    title: "E-commerce",
    icon: <FaShoppingBag className="text-3xl text-blue-600" />,
    desc: "Drive product sales through coupon platforms, review sites, and influencers who promote your store.",
  },
  {
    title: "SaaS and Tech",
    icon: <FaLaptopCode className="text-3xl text-green-600" />,
    desc: "Promote software tools and subscriptions through tech bloggers, demo creators, and comparison platforms.",
  },
  {
    title: "Education & Training",
    icon: <FaGraduationCap className="text-3xl text-purple-600" />,
    desc: "Partner with content creators and ed-tech influencers to increase enrollments and sign-ups.",
  },
  {
    title: "Fashion & Lifestyle",
    icon: <FaTshirt className="text-3xl text-pink-600" />,
    desc: "Leverage affiliate bloggers and social creators to expand your reach and grow your brand organically.",
  },
  {
    title: "Finance & Insurance",
    icon: <FaMoneyCheckAlt className="text-3xl text-yellow-600" />,
    desc: "Promote high-value services through review sites and affiliate publishers with high authority.",
  },
];

const faqs = [
  {
    q: "Is affiliate marketing only for eCommerce?",
    a: "Not at all. Affiliate marketing works across industries like SaaS, fintech, education, wellness, and lead generation. At BigWig Media Digital, we design strategies tailored to your niche and goals.",
  },
  {
    q: "Why should I hire an affiliate marketing agency?",
    a: (
      <>
        <p>
          Managing affiliates requires time, tools, and expertise. A trusted
          affiliate marketing agency in India like BigWig Digital helps you:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Save time and reduce costs with expert program management.</li>
          <li>
            Access a strong network of affiliates, influencers, and creators.
          </li>
          <li>
            Get transparent reports, compliance checks, and ROI-driven
            campaigns.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How does affiliate marketing actually work?",
    a: "Affiliate marketing is a performance-based model where businesses pay affiliates only when they generate results – like sales, leads, or app installs. This makes it a low-risk, high-reward marketing channel.",
  },
  {
    q: "What’s your pricing model?",
    a: "We offer flexible pricing options, including a one-time setup fee with a monthly retainer or performance-based commissions. This ensures you only pay for measurable growth.",
  },
  {
    q: "Can you manage affiliate programs on platforms like CJ, Impact, or PartnerStack?",
    a: "Yes. Our team has experience managing and scaling programs on all major affiliate platforms.",
  },
  {
    q: "How long before I see results?",
    a: "Most clients see early traction within 30–45 days. By Month 2 onward, results typically become consistent as affiliate partnerships mature.",
  },
  {
    q: "Will I get access to performance reports?",
    a: "Absolutely. We provide real-time dashboards and detailed reports so you can track every click, conversion, and payout.",
  },
  {
    q: "How can I maximize my ROI from affiliate marketing?",
    a: (
      <>
        <p>
          Maximizing ROI comes down to two things: quality traffic + strong
          conversion rates. Our team helps you by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Matching you with high-performing affiliates.</li>
          <li>Optimizing your funnels and offers.</li>
          <li>Ensuring campaigns run ethically and transparently.</li>
        </ul>
      </>
    ),
  },
];

function AffiliateMarketing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const sliderSettings = {
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
      <title>Affiliate Marketing Management</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/affiliate-marketing"
      />
      <meta
        name="description"
        content="Grow your business through powerful affiliate partnerships and expert campaign tracking."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Performance-Driven Affiliate Marketing Services in India to Grow
              Your Business
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">
                We grow your brand with commission-based mark
              </span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "affiliate-driven sales",
                    2000,
                    "commission-based marketing ",
                    2000,
                    "  scalable traffic sources ",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn partnerships into profits with affiliate marketing services
              in India that scales your business, strengthens your reach, and
              drives measurable results.
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

      <section className="py-20 relative overflow-hidden">
        {/* MATRIX / CYBER BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto relative z-10 space-y-16">
          {/* ====================== TITLE ====================== */}
          <div className="text-center space-y-6">
            <h2
              className="
          inline-block px-10 py-4 rounded-full
          text-3xl md:text-4xl font-bold
          text-[var(--color5)]
          border border-[var(--color5)]
          backdrop-blur-xl bg-white/5
          shadow-[0_0_25px_var(--color5)]
          drop-shadow-[0_0_10px_var(--color5)]
        "
            >
              Performance-Driven Affiliate Marketing Services in India
            </h2>

            <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
              Power your brand’s growth with strategic, risk-free affiliate
              marketing campaigns that convert.
            </p>
          </div>

          {/* ====================== GRID CONTENT ====================== */}
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* LEFT: STORY SECTION */}
            <div className="space-y-8">
              {[
                `Affiliate marketing is one of the most powerful and budget-friendly 
           ways to grow your business online. At BigWig Media Digital, we design strategic affiliate programs 
           that generate consistent sales, qualified leads, and high visibility — without heavy ad spend.`,

                `Whether you're a startup or an established eCommerce brand, 
           our tailored affiliate marketing services are built for scalable and measurable performance.`,

                `Through trusted affiliates & influencers, you reach new audiences, 
           drive high-quality traffic and pay only for actual results. 
           No wasted ad budget — only ROI-driven performance that powers long-term growth.`,
              ].map((text, i) => (
                <div
                  key={i}
                  className="
              relative p-6 rounded-2xl 
              backdrop-blur-xl bg-white/10
              border border-white/10
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_30px_var(--color5)]
              transition-all duration-300
              overflow-hidden
            "
                >
                  {/* Scanlines */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-affScan
                  "
                        style={{
                          top: `${50 + j * 45}px`,
                          animationDelay: `${j * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed">
                    {text}
                  </p>

                  <div className="absolute inset-0 border border-transparent rounded-2xl transition-all"></div>
                </div>
              ))}
            </div>

            {/* RIGHT: CALLOUT BOX */}
            <div
              className="
          relative p-10 rounded-2xl 
          backdrop-blur-xl bg-white/10
          border border-[var(--color5)]
          shadow-[0_0_25px_var(--color5)]
          transition-all duration-300
          overflow-hidden
          space-y-6
        "
            >
              {/* Scanlines */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                {[...Array(7)].map((_, j) => (
                  <div
                    key={j}
                    className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                animate-affScan
              "
                    style={{
                      top: `${40 + j * 40}px`,
                      animationDelay: `${j * 0.2}s`,
                    }}
                  ></div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                Why Your Brand Needs Affiliate Marketing
              </h3>

              <p className="text-gray-200 leading-relaxed">
                Paid ads are getting costlier and more competitive. Affiliate
                marketing gives you a safer, performance-only model — you pay
                only when results happen.
              </p>

              <p className="text-gray-200 leading-relaxed">
                This reduces risk, improves ROI, and ensures your budget
                supports real growth. Perfect for scaling brands without
                overspending.
              </p>

              <p className="text-gray-200 leading-relaxed">
                At BigWig Media Digital, we build profitable affiliate
                frameworks that integrate seamlessly with your marketing
                ecosystem — ensuring continuous and scalable conversions.
              </p>

              <p className="text-gray-200 leading-relaxed">
                Whether you want more leads, sales, or app installs, our
                affiliate partners deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* SCANLINE ANIMATION */}
        <style>{`
    @keyframes affScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-affScan {
      animation: affScan 4.5s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-20 relative overflow-hidden">
        {/* CYBER BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto relative z-10 space-y-24">
          {/* SECTION 1 — INDUSTRIES */}
          <div className="text-center space-y-12">
            <h2
              className="
        inline-block px-10 py-4 rounded-full 
        text-3xl md:text-4xl font-bold 
        text-[var(--color5)]
        border border-[var(--color5)]
        backdrop-blur-xl bg-white/5
        shadow-[0_0_25px_var(--color5)]
        drop-shadow-[0_0_10px_var(--color5)]
      "
            >
              Industries We Work With
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {verticals.map((item, idx) => (
                <div
                  key={idx}
                  className="
              group relative p-6 rounded-2xl 
              backdrop-blur-xl bg-white/10 
              border border-white/10
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_30px_var(--color5)]
              transition-all duration-300
              min-h-[240px]
              overflow-hidden
            "
                >
                  {/* Scan lines */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-scan
                  "
                        style={{
                          top: `${60 + i * 40}px`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div
                      className="
                  p-3 rounded-full 
                  bg-white/10 border border-white/20 
                  shadow-[0_0_10px_rgba(0,255,255,0.2)]
                "
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-base font-semibold text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-gray-200 text-sm relative z-10">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2 — SCALABLE & TRANSPARENT */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <h3
                className="
            inline-block px-8 py-3 rounded-full 
            text-2xl font-bold text-[var(--color5)]
            border border-[var(--color5)]
            bg-white/5 backdrop-blur-xl
            shadow-[0_0_25px_var(--color5)]
          "
              >
                Scalable, Transparent & Results-First
              </h3>

              {[
                `Affiliate marketing is not a one-size-fits-all approach. Every brand has a different audience, product, and price point - which is why our affiliate marketing services in India are built on personalization. At BigWig Media Digital, a trusted affiliate marketing agency in India, we design programs that fit your unique business needs while ensuring measurable growth.`,

                `From identifying the right partners to tracking every conversion, our process is transparent and performance-driven. We don’t just connect you with affiliates - we equip them with the right tools, insights, and strategies to promote your brand effectively.`,

                `Here’s how we ensure long-term success for your affiliate program:`,
              ].map((txt, i) => (
                <div
                  key={i}
                  className="
              p-6 rounded-2xl backdrop-blur-xl bg-white/10 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_30px_var(--color5)]
              transition-all duration-300 relative overflow-hidden
            "
                >
                  {/* SCANLINES */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-scan
                  "
                        style={{
                          top: `${50 + j * 45}px`,
                          animationDelay: `${j * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>

                  <p className="text-gray-200 text-lg relative z-10">{txt}</p>
                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <Image
                src={affiliate}
                alt="Affiliate Marketing Services"
                className="
            w-full h-[60vh] object-cover rounded-2xl 
            shadow-[0_0_30px_rgba(0,255,255,0.25)]
            border border-white/10 backdrop-blur-xl
          "
              />
            </div>
          </div>

          <div>
            {" "}
            {/* LIST */}
            <ul className="space-y-4 text-gray-200 text-lg">
              {[
                "Strategic Partner Selection – We connect you with affiliates who match your niche and audience.",
                "End-to-End Management – From campaign setup to tracking and payments, we handle it all.",
                "Data-Driven Insights – Detailed performance reports keep you in control.",
                "Trusted Relationships – We focus on quality affiliates who build brand reputation, not just traffic.",
                "Scalable Growth – As your program expands, we help you tap into new audiences globally.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)] mt-2"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-200 text-lg">
              With BigWig Media Digital, you’ll never have to worry about
              low-quality traffic or shady promotions. Instead, you gain a
              scalable affiliate model that strengthens your reputation, reach,
              and revenue through trusted digital voices.
            </p>
          </div>

          {/* SECTION 3 — WHY BIGWIG */}
          <div
            className="
        relative p-10 rounded-3xl text-center 
        backdrop-blur-xl bg-white/10 
        border border-[var(--color5)]
        shadow-[0_0_35px_var(--color5)]
        space-y-6
        overflow-hidden
      "
          >
            {/* SCANLINES */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              {[...Array(6)].map((_, j) => (
                <div
                  key={j}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scan
            "
                  style={{
                    top: `${50 + j * 50}px`,
                    animationDelay: `${j * 0.25}s`,
                  }}
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold text-[var(--color5)] drop-shadow-[0_0_15px_var(--color5)]">
              Why BigWig for Affiliate Marketing Services
            </h3>

            <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
              When you choose BigWig Digital, you partner with a strategic
              affiliate agency that blends performance-driven systems with deep
              industry understanding.
            </p>

            <p className="text-gray-200 text-lg max-w-4xl mx-auto leading-relaxed">
              We focus entirely on high-intent traffic, real conversions, and
              measurable ROI — not vanity metrics.
            </p>
          </div>
        </div>

        {/* SCANLINE ANIMATION */}
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

      <section className="py-20 relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

        <div className="w-11/12 md:w-5/6 mx-auto relative z-10 space-y-16">
          {/* ---------- Title Section ---------- */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2
              className="
          inline-block px-10 py-4 rounded-full
          text-3xl md:text-4xl font-bold 
          text-[var(--color5)]
          border border-[var(--color5)]
          backdrop-blur-xl bg-white/10
          shadow-[0_0_25px_var(--color5)]
          drop-shadow-[0_0_15px_var(--color5)]
        "
            >
              Benefits of Affiliate Marketing Services
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed">
              Affiliate marketing isn’t just cost-effective it’s one of the
              smartest ways to scale your digital reach while paying only for
              real results. As a top affiliate marketing agency in India, BigWig
              Media Digital helps you unlock unmatched growth advantages.
            </p>
          </div>

          {/* ---------- Mobile Slider View ---------- */}
          <div className="block sm:hidden">
            <Slider {...sliderSettings}>
              {benefits.map((item, idx) => (
                <div key={idx} className="px-3">
                  <div
                    className="
                p-6 rounded-2xl overflow-hidden relative
                min-h-[300px]
                backdrop-blur-xl bg-white/10
                border border-white/10
                shadow-[0_0_25px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_35px_var(--color5)]
                transition-all duration-300
                space-y-4
              "
                  >
                    {/* Scan lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="
                      absolute left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                      animate-scan
                    "
                          style={{
                            top: `${60 + i * 45}px`,
                            animationDelay: `${i * 0.25}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Icon */}
                    <div className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-[0_0_10px_var(--color5)] p-3 rounded-full w-fit mx-auto">
                      {item.icon}
                    </div>

                    <h4 className="text-lg font-semibold text-[var(--color5)] text-center drop-shadow-[0_0_10px_var(--color5)]">
                      {item.title}
                    </h4>

                    <p className="text-gray-200 text-sm text-center leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ---------- Desktop Grid View ---------- */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="
            group relative p-6 rounded-2xl overflow-hidden
            backdrop-blur-xl bg-white/10 
            border border-white/10
            shadow-[0_0_25px_rgba(0,255,255,0.18)]
            hover:shadow-[0_0_40px_var(--color5)]
            transition-all duration-300
            min-h-[220px] flex flex-col justify-between
          "
              >
                {/* Scan Lines */}
                <div className="absolute inset-0 pointer-events-none opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
                  absolute left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  animate-scan
                "
                      style={{
                        top: `${50 + i * 45}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className="
                bg-white/10 border border-[var(--color5)] p-3 rounded-full 
                shadow-[0_0_10px_var(--color5)]
              "
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--color5)] drop-shadow-[0_0_8px_var(--color5)]">
                    {item.title}
                  </h4>
                </div>

                <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scan Animation */}
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

      <OurProcess />
      <WhyBigwig />

      {/* Final Call-to-Action */}
      {/* ================= FINAL FUTURISTIC CTA ================= */}
      <section className="py-20 relative overflow-hidden">
        {/* Cyber Glow Background */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="relative z-10 w-5/6 mx-auto">
          <div
            className="
        relative rounded-3xl p-10 md:p-14 text-center 
        backdrop-blur-2xl bg-white/10 
        border border-white/10 
        shadow-[0_0_30px_rgba(0,255,255,0.25)]
        overflow-hidden
      "
          >
            {/* Hologram Scan Lines */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanline
            "
                  style={{
                    top: `${70 + i * 55}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)] leading-snug">
              Ready to Build a Performance-Driven Partner Network?
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 mt-6 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              <p>
                Whether you want to launch a new affiliate program from the
                ground up or scale an existing one, our tailored affiliate
                marketing services in India are designed to deliver consistent
                and measurable growth. At BigWig Media Digital, we work across
                multiple industries, platforms, and campaign types to ensure you
                get the maximum value from every partnership.
              </p>

              <p>
                By choosing us as your affiliate marketing agency in India, you
                gain access to a trusted partner network, transparent reporting,
                and strategies that align with your long-term business goals.
              </p>

              <p>
                Let’s start building your affiliate program today - and turn
                partnerships into a powe rful growth engine for your brand.
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 mt-6 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              <p>
                Whether you want to start an affiliate program from scratch or
                scale an existing one, our affiliate marketing services are
                tailored to deliver consistent, trackable growth. We work across
                industries, platforms, and campaign types to help you get the
                most from every partnership.
              </p>
            </div>

            {/* CTA Button */}

            <div className="flex justify-center mt-8">
              <ButtonFill
                onClick={() => setIsPopupOpen(true)}
                text="Contact Us"
              />
            </div>

            {/* Neon Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[var(--color5)] transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Scanline Animation */}
        <style>{`
    @keyframes scanline {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanline {
      animation: scanline 5s linear infinite;
    }
  `}</style>
      </section>

      {/* FAQ Section */}
      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider drop-shadow-[0_0_10px_var(--color5)]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm "
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left text-white font-medium focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span>{item.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-200" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-200">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 relative overflow-hidden">
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
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default AffiliateMarketing;
