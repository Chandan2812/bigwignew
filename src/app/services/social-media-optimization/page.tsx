"use client";

import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/SMO.jpg";
import smo from "../../../../Assets/services/4.jpg";
import { TypeAnimation } from "react-type-animation";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
  FaPalette,
  FaIndustry,
  FaComments,
  FaChartLine,
} from "react-icons/fa6";
import { FaSearch, FaSnapchatGhost } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { useState } from "react";
const features = [
  {
    title: "Strategy Meets Creativity",
    content:
      "We combine brand strategy, content planning, and storytelling to build profiles that not only look great but perform even better.",
    icon: <FaPalette className="text-3xl text-[var(--color5)]" />,
  },
  {
    title: "Industry-Focused Optimization",
    content:
      "From fashion and beauty to SaaS and healthcare, we create social content that speaks your industry’s language and tone.",
    icon: <FaIndustry className="text-3xl text-[var(--color5)]" />,
  },
  {
    title: "SEO-Driven Social Content",
    content:
      "We use keywords, hashtags, and trending topics to enhance discoverability across both social platforms and search engines.",
    icon: <FaSearch className="text-3xl text-[var(--color5)]" />,
  },
  {
    title: "Real Engagement",
    content:
      "It’s not just about numbers. We help you create meaningful engagement and build a loyal follower base that interacts and converts.",
    icon: <FaComments className="text-3xl text-[var(--color5)]" />,
  },
  {
    title: "Weekly Reporting & Insights",
    content:
      "We track profile visits, reach, engagement, and growth, giving you actionable insights into your brand’s organic progress.",
    icon: <FaChartLine className="text-3xl text-[var(--color5)]" />,
  },
];

function SocialMediaOptimization() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)]">
      <title>Social Media Optimization (SMO)</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-optimization"
      />
      <meta
        name="description"
        content="Improve your social visibility and engagement with strategic SMO services tailored to your brand."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content - 2/3 */}
          <div className="w-full md:w-2/3 text-white space-y-6 pr-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Social Media Optimization Services That Build Brand Presence
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline"> We Optimize&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "Your Reach Daily",
                    2000,
                    "Your Online Presence",
                    2000,
                    "For Better Engagement",
                    2000,
                    "Every Social Second",
                    2000,
                    " For Viral Visibility",
                    2000,
                    " To Boost Followers",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We’re here to help you grow, scale, and stand out, across every
              major social media platform.
            </p>

            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Contact Us"
            />
          </div>

          {/* Right Form - 1/3 */}
          <ContactForm />
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto py-12 text-gray-900 space-y-10">
        {/* Section 1 - Full Width */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center">
            Smart social media strategies that connect your brand with the right
            audience.
          </h2>
          <p className="text-lg text-white  mx-auto md:mx-0">
            Your social media profiles are more than just digital pages,
            they&#39;re your brand’s voice, vibe, and visibility. At
            <strong>
              <a href="https://www.bigwigdigital.in/"> BigWig Digital </a>
            </strong>
            , a leading Social Media Optimization agency , we help businesses
            grow organically across platforms like Instagram, Facebook,
            LinkedIn, Twitter, and more with strategic Social Media Optimization
            services.
          </p>
        </div>

        {/* Section 2 - Highlighted Statement */}
        <div className="bg-[var(--color5)]/10 border border-[var(--color5)] rounded-full p-6 md:p-8 text-center space-y-4">
          <p className="text-lg text-[var(--color5)] font-medium">
            We don’t just post, we create, optimize, engage, and build
            communities. If you&#39;re looking to establish authority, connect
            with your audience, and grow consistently online, our SMO services
            are built just for you.
          </p>
        </div>

        {/* Section 3 - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[var(--color5)]">
              Build a Powerful Organic Presence That Lasts
            </h3>
            <p className="text-gray-200 text-base">
              In today’s crowded digital space, a strong organic presence isn’t
              optional; it’s essential. Social Media Optimization ensures your
              brand makes a lasting impression by keeping your profiles
              consistent, discoverable, and audience-friendly.
            </p>

            <h3 className="text-xl font-semibold text-[var(--color5)]">
              Optimized Profiles = Searchable Brands
            </h3>
            <p className="text-gray-200 text-base">
              As social platforms increasingly function like search engines, a
              well-optimized profile not only enhances visibility but also
              builds long-term credibility. It’s not just about being present,
              it’s about being noticed, followed, and remembered.
            </p>
          </div>

          {/* Right */}
          <div>
            <Image
              src={smo}
              alt="Social Media Optimization Services "
              className="w-full h-[40vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-5/6 mx-auto py-16 space-y-24 relative text-gray-200">
        {/* MATRIX BACKGROUND */}
        {/* <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div> */}

        <div className="relative z-10 space-y-24">
          {/* ===================================================== */}
          {/* 1. OUR SMO SERVICES */}

          <div className="space-y-10">
            {/* Neon Capsule Heading */}
            <div className="text-center">
              <h2
                className="
          inline-block px-10 py-3 rounded-full 
          border border-[var(--color5)]
          shadow-[0_0_20px_var(--color5)]
          backdrop-blur-xl bg-white/5 
          text-3xl md:text-4xl font-bold
          text-[var(--color5)]
        "
              >
                Our Social Media Optimization Services
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Profile Optimization",
                  content:
                    "We optimize your bio, username, links, highlights, and keywords on platforms like Instagram, Facebook, LinkedIn, and Twitter for maximum discoverability.",
                },
                {
                  title: "Content Planning & Posting",
                  content:
                    "From carousel posts to reels, infographics, and quotes, we create and manage content calendars that are platform-specific and audience-focused.",
                },
                {
                  title: "Hashtag Strategy",
                  content:
                    "Custom hashtag research for each industry and platform to boost organic reach and content visibility.",
                },
                {
                  title: "Audience Engagement",
                  content:
                    "We engage with your followers through DMs, comments, shares, and reactions to keep your community active and loyal.",
                },
                {
                  title: "Competitor & Trend Analysis",
                  content:
                    "Stay ahead of the curve with regular competitor audits and trending content ideas that position your brand as a leader.",
                },
                {
                  title: "Story & Highlight Management",
                  content:
                    "Strategically designed stories and highlight covers that reflect your brand’s personality and key services.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              relative p-6 rounded-2xl 
              backdrop-blur-xl bg-white/10 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_25px_var(--color5)]
              transition-all duration-300
              space-y-3 min-h-[240px]
              overflow-hidden
            "
                >
                  {/* Hologram Scan Lines */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-smoScan
                  "
                        style={{
                          top: `${50 + i * 40}px`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--color5)] ">
                    {item.title}
                  </h3>

                  <p className="text-gray-200">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================== */}
          {/* 2. PLATFORMS WE OPTIMIZE */}

          <div className="space-y-10">
            <div className="text-center">
              <h3
                className="
          inline-block px-10 py-3 rounded-full 
          border border-[var(--color5)]
          shadow-[0_0_20px_var(--color5)]
          backdrop-blur-xl bg-white/5 
          text-3xl md:text-4xl font-bold
          text-[var(--color5)]
        "
              >
                Platforms We Optimize
              </h3>
            </div>

            <div className="grid grid-cols-4 lg:flex lg:justify-between gap-8 text-center">
              {[
                {
                  icon: (
                    <FaInstagram size={40} className="text-pink-500 mx-auto" />
                  ),
                  label: "Instagram",
                },
                {
                  icon: (
                    <FaFacebookF size={40} className="text-blue-600 mx-auto" />
                  ),
                  label: "Facebook",
                },
                {
                  icon: (
                    <FaLinkedinIn size={40} className="text-blue-700 mx-auto" />
                  ),
                  label: "LinkedIn",
                },
                {
                  icon: <FaXTwitter size={40} className="text-white mx-auto" />,
                  label: "Twitter (X)",
                },
                {
                  icon: (
                    <FaYoutube size={40} className="text-red-600 mx-auto" />
                  ),
                  label: "YouTube",
                },
                {
                  icon: (
                    <FaPinterestP size={40} className="text-red-500 mx-auto" />
                  ),
                  label: "Pinterest",
                },
                {
                  icon: (
                    <FaSnapchatGhost
                      size={40}
                      className="text-yellow-400 mx-auto"
                    />
                  ),
                  label: "Snapchat",
                },
                {
                  icon: <FaTiktok size={40} className="text-white mx-auto" />,
                  label: "TikTok",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="space-y-2 hover:scale-110 transition-all"
                >
                  {item.icon}
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================== */}
          {/* 3. WHY CHOOSE BIGWIG FOR SMO */}

          <div className="space-y-10">
            <div className="text-center">
              <h3
                className="
          inline-block px-10 py-3 rounded-full 
          border border-[var(--color5)]
          shadow-[0_0_20px_var(--color5)]
          backdrop-blur-xl bg-white/5 
          text-3xl md:text-4xl font-bold
          text-[var(--color5)]
        "
              >
                Why Choose BigWig Digital for SMO Services?
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
              relative p-6 rounded-xl text-center
              backdrop-blur-xl bg-white/10 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_25px_var(--color5)]
              transition-all duration-300
              min-h-[260px]
              overflow-hidden
              space-y-4
            "
                >
                  {/* Scanlines */}
                  <div className="absolute inset-0 opacity-25 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-smoScan
                  "
                        style={{ top: `${60 + i * 45}px` }}
                      ></div>
                    ))}
                  </div>

                  <div className="flex justify-center ">{item.icon}</div>

                  <h4 className="text-lg font-semibold text-[var(--color5)] ">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-200">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SCANLINE ANIMATION */}
        <style>{`
    @keyframes smoScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-smoScan {
      animation: smoScan 4s linear infinite;
    }
  `}</style>
      </div>

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

export default SocialMediaOptimization;
