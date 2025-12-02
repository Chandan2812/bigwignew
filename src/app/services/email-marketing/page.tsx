"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/Email_Marketing.jpg";
import image from "../../../../Assets/Services hero/Email Marketing.jpg";

import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import { BarChart4, Inbox, Mail, Rocket } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { useState } from "react";
const services = [
  {
    title: "Email Campaign Strategy",
    description:
      "We build custom campaign flows aligned with your business goals, whether it's for awareness, conversion, or retention.",
  },
  {
    title: "Email Design & Development",
    description:
      "Responsive, visually appealing, and on-brand email templates designed to perform on all devices and platforms.",
  },
  {
    title: "Copywriting That Converts",
    description:
      "We write subject lines that get opened and body content that gets clicked. Our emails are concise, compelling, and action-oriented.",
  },
  {
    title: "Marketing Automation",
    description:
      "Automate customer journeys with smart sequences: welcome emails, cart abandonment flows, re-engagement campaigns, and more.",
  },
  {
    title: "A/B Testing & Optimization",
    description:
      "We test everything, from subject lines to CTAs, to continually improve open rates, click-through rates, and conversions.",
  },
  {
    title: "Email List Management",
    description:
      "We help you grow, segment, and clean your email lists for better targeting and deliverability.",
  },
];

function EmailMarketing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const settings = {
    dots: false,
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
      <title>Result-Driven Email Marketing</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/email-marketing"
      />
      <meta
        name="description"
        content="Reach your audience with customized email campaigns that drive conversions and brand loyalty."
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
              Proven Email Marketing services
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We send emails that&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "get opened",
                    2000,
                    "drive action",
                    2000,
                    "build loyalty",
                    2000,
                    "convert leads",
                    2000,
                    "spark engagement",
                    2000,
                    "deliver results",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We craft emails that not only get opened but also deliver
              meaningful messages that drive real results for your business.
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

      <section className=" py-12 ">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
            Power Your Brand with Email Marketing That Works
          </h2>

          <p className="text-lg text-white  max-w-3xl mx-auto">
            Want to stand out and make it to your customer’s inbox, not their
            spam folder?
            <br />
            Email isn’t outdated; ineffective emails are. Let’s fix that.
          </p>

          <div className="border text-white p-6 rounded-2xl text-lg font-medium">
            Whether you&#39;re a startup, a growing D2C brand, or an enterprise
            business, or from any country our{" "}
            <span className="italic">Email Marketing Services </span>
            are crafted to help you deliver strategically, sell more, advertise
            more and build relationships that actually stays.
          </div>

          <div className="pt-10 relative">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl text-[var(--color5)] font-bold mb-8 drop-shadow-[0_0_10px_var(--primary-color)]">
              Why Email Marketing Still Wins
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 relative z-10">
              {[
                {
                  icon: <Mail size={32} />,
                  title: "Direct & Personal",
                  text: "Engage your audience in conversation, don’t just broadcast.",
                },
                {
                  icon: <Inbox size={32} />,
                  title: "Cost-Effective",
                  text: "High ROI, low spend, especially compared to paid ads.",
                },
                {
                  icon: <Rocket size={32} />,
                  title: "Automated & Scalable",
                  text: "Set it, personalize it, and scale effortlessly.",
                },
                {
                  icon: <BarChart4 size={32} />,
                  title: "Measurable",
                  text: "Track performance in real time and optimize what works.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
          relative p-6 rounded-2xl 
          backdrop-blur-xl bg-white/10 
          border border-white/10 
          shadow-[0_0_30px_rgba(0,255,255,0.18)] 
          hover:shadow-[0_0_40px_var(--primary-color)]
          transition-all duration-300 
          overflow-hidden group 
          min-h-[240px] flex flex-col justify-between
        "
                >
                  {/* Neon Scan Lines */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent
                animate-emailScan
              "
                        style={{
                          top: `${40 + i * 35}px`,
                          animationDelay: `${i * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Icon Capsule */}
                  <div
                    className="w-fit mx-auto p-4 rounded-full 
          border border-white/20 
          shadow-[0_0_12px_rgba(0,255,255,0.3)]
          group-hover:shadow-[0_0_20px_var(--primary-color)]
          transition-all"
                  >
                    <span className="text-[var(--color5)] drop-shadow-[0_0_6px_var(--primary-color)]">
                      {item.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-lg text-center text-[var(--color5)] drop-shadow-[0_0_10px_var(--primary-color)] mt-4">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-200 text-sm text-center leading-relaxed">
                    {item.text}
                  </p>

                  {/* Hover Neon Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--primary-color)] transition-all"></div>
                </div>
              ))}
            </div>

            {/* ANIMATIONS */}
            <style>{`
    @keyframes emailScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-emailScan {
      animation: emailScan 4.8s linear infinite;
    }
  `}</style>
          </div>
        </div>
      </section>

      <section className="py-16 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Section Title */}
        <h2
          className="
    text-3xl md:text-4xl font-bold text-center 
    text-[var(--color5)]
    drop-shadow-[0_0_10px_var(--primary-color)]
    mb-12
  "
        >
          Our Email Marketing Services
        </h2>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((item, index) => (
            <div
              key={index}
              className="
          relative p-6 rounded-2xl 
          backdrop-blur-xl bg-white/10 
          border border-white/10 
          shadow-[0_0_25px_rgba(0,255,255,0.15)]
          hover:shadow-[0_0_35px_var(--primary-color)]
          transition-all duration-300 
          space-y-3 overflow-hidden 
          flex flex-col h-full
        "
            >
              {/* Scanlines */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent
                animate-emailServiceScan
              "
                    style={{
                      top: `${40 + i * 35}px`,
                      animationDelay: `${i * 0.25}s`,
                    }}
                  ></div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-[var(--color5)] drop-shadow-[0_0_6px_var(--primary-color)] relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>

              {/* Glow Border */}
              <div
                className="
          absolute inset-0 rounded-2xl 
          border border-transparent 
          group-hover:border-[var(--primary-color)] 
          transition-all
        "
              ></div>
            </div>
          ))}
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden">
          <Slider {...settings}>
            {services.map((item, index) => (
              <div key={index} className="px-3">
                <div
                  className="
              relative p-6 rounded-2xl 
              backdrop-blur-xl bg-white/10 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_30px_var(--primary-color)]
              transition-all duration-300 
              space-y-3 h-[300px] overflow-hidden 
              flex flex-col justify-between
            "
                >
                  {/* Scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent
                    animate-emailServiceScan
                  "
                        style={{
                          top: `${40 + i * 40}px`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--primary-color)] drop-shadow-[0_0_6px_var(--primary-color)] relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
              absolute inset-0 rounded-2xl 
              border border-transparent 
              group-hover:border-[var(--primary-color)] 
              transition-all
            "
                  ></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Animation */}
        <style>{`
    @keyframes emailServiceScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-emailServiceScan {
      animation: emailServiceScan 5s linear infinite;
    }
  `}</style>
      </section>

      <section className="relative text-gray-100 overflow-hidden">
        {/* Cyber Background */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

        <div className="relative z-10">
          {/* =========================== */}
          {/* 1. HERO / INTRO */}
          {/* =========================== */}
          <div className="py-16 text-center w-11/12 md:w-5/6 mx-auto space-y-6">
            {/* Capsule Heading */}
            <div className="inline-block px-8 py-3 rounded-full border border-[var(--primary-color)] shadow-[0_0_20px_var(--primary-color)] backdrop-blur-xl bg-white/5">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--primary-color)]">
                Why Brands Trust Email Marketing Services
              </h2>
            </div>

            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Email delivers high ROI, direct reach, and measurable results. It
              remains one of the strongest digital marketing channels — across
              industries.
            </p>

            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              At{" "}
              <strong>
                <a
                  href="https://www.bigwigdigital.in/"
                  className="text-[var(--primary-color)]"
                >
                  BigWig Digital
                </a>
              </strong>
              , we build strategic, personalized email campaigns that build
              trust and drive conversions.
            </p>
          </div>

          {/* =========================== */}
          {/* 2. TRUST SECTION */}
          {/* =========================== */}
          <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT */}
            <div className="space-y-6">
              {/* Capsule Heading */}
              <div className="inline-block px-6 py-2 rounded-full border border-[var(--primary-color)] shadow-[0_0_15px_var(--primary-color)] backdrop-blur-xl bg-white/5">
                <h3 className="text-3xl font-semibold text-[var(--color5)] drop-shadow-[0_0_10px_var(--primary-color)]">
                  Work With a Smart Email Marketing Agency
                </h3>
              </div>

              <p className="text-gray-200">
                We're not just sending emails — we’re engineering RESULTS. A
                top-tier email agency like ours provides:
              </p>

              <ul className="space-y-3 text-gray-200">
                {[
                  "Hands-free automated campaign systems.",
                  "Content + design that speaks in your brand’s voice.",
                  "Compliance with global email regulations.",
                  "CRM, CMS & e-commerce integrations.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-3 h-3 mt-2 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--primary-color)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <Image
                src={image}
                alt="Email Marketing"
                className="w-full rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.2)]"
              />

              {/* Neon Glow Border */}
              <div className="absolute inset-0 rounded-xl border border-[var(--primary-color)] opacity-30 pointer-events-none"></div>
            </div>
          </div>

          {/* =========================== */}
          {/* 3. NEW BUSINESS BENEFITS */}
          {/* =========================== */}
          <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 shadow-inner mt-16 py-16">
            <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT TEXT */}
              <div className="space-y-6">
                {/* Capsule Heading */}
                <div className="inline-block px-6 py-2 rounded-full border border-[var(--primary-color)] shadow-[0_0_15px_var(--primary-color)] backdrop-blur-xl bg-white/5">
                  <h3 className="text-3xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--primary-color)]">
                    Why Email Marketing Helps New Businesses
                  </h3>
                </div>

                <p className="text-lg text-gray-200">
                  For new businesses, email marketing is a perfect mix of
                  low-cost, high-impact communication.
                </p>
                <p className="text-lg text-gray-200">
                  We help startups build trust, nurture leads, and create
                  scalable revenue-driven campaigns from day one.
                </p>
              </div>

              {/* RIGHT GRID CARDS */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Cost-Effective Growth",
                    desc: "Reach thousands affordably. Perfect for startups.",
                  },
                  {
                    title: "Builds Brand Awareness",
                    desc: "Personalized inbox communication builds recognition.",
                  },
                  {
                    title: "Drives Early Engagement",
                    desc: "Boost interaction via updates, offers & launches.",
                  },
                  {
                    title: "Creates Loyal Communities",
                    desc: "Consistent value turns leads into lifetime buyers.",
                  },
                ].map((box, i) => (
                  <div
                    key={i}
                    className="
                relative bg-white/10 backdrop-blur-xl 
                border border-white/10 p-6 rounded-2xl 
                shadow-[0_0_20px_rgba(0,255,255,0.15)] 
                hover:shadow-[0_0_30px_var(--primary-color)]
                transition-all duration-300 
                overflow-hidden
                h-full
              "
                  >
                    {/* Scanlines */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className="
                      absolute left-0 w-full h-[2px]
                      bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent
                      animate-emailCapsuleScan
                    "
                          style={{
                            top: `${40 + j * 35}px`,
                            animationDelay: `${j * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-[var(--color5)] drop-shadow-[0_0_8px_var(--primary-color)] mb-2 relative z-10">
                      {box.title}
                    </h4>

                    <p className="text-gray-200 text-sm relative z-10">
                      {box.desc}
                    </p>

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-[var(--primary-color)] transition-all"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================== */}
          {/* 4. GLOBAL COVERAGE */}
          {/* =========================== */}
          <div className="w-11/12 md:w-5/6 mx-auto py-16 text-center space-y-6">
            {/* Capsule Heading */}
            <div className="inline-block px-8 py-2 rounded-full border border-[var(--primary-color)] shadow-[0_0_18px_var(--primary-color)] backdrop-blur-xl bg-white/5">
              <h3 className="text-3xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--primary-color)]">
                Wherever You Are — We've Got You Covered
              </h3>
            </div>

            <p className="max-w-3xl mx-auto text-lg text-gray-200">
              As a top-tier email agency, we understand local AND global
              behavior — delivering tailored campaigns for every region.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {[
                "Hyper-local targeted audiences.",
                "Industry-specific email campaigns.",
                "Smart B2B & B2C strategies.",
                "Bulk + automated workflow deployments.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
              bg-white/10 text-gray-100 rounded-xl p-5 
              border border-white/10 
              shadow-[0_0_15px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_25px_var(--primary-color)]
              backdrop-blur-xl
              transition-all
            "
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-100 font-semibold">
              If you want real, scalable email marketing — we’re here to build
              it with you.
            </p>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
    @keyframes emailCapsuleScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-emailCapsuleScan {
      animation: emailCapsuleScan 5s linear infinite;
    }
  `}</style>
      </section>

      <OurProcess />
      <WhyBigwig />

      <GetInTouch />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      <Footer />
    </div>
  );
}

export default EmailMarketing;
