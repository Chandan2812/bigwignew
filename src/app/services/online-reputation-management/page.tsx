"use client";
import { TypeAnimation } from "react-type-animation";
import Nav from "../../../../components/Nav";
import hero from "../../../../Assets/Services hero/orm.jpg";
import orm from "../../../../Assets/services/16.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import Slider from "react-slick";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { useState } from "react";
const data = [
  {
    title: "Online Reputation Audit",
    content:
      "We review your digital footprint to pinpoint strengths, weaknesses, and areas that require immediate attention.",
  },
  {
    title: "Reputation Management",
    content:
      "Our tailored ORM strategies help reduce the impact of negative content while elevating positive brand perception.",
  },
  {
    title: "Brand Monitoring",
    content:
      "We track brand mentions across all platforms and respond promptly to any negativity to safeguard your reputation.",
  },
  {
    title: "Social Media Management",
    content:
      "Our team manages your social profiles, ensuring consistent branding, strong engagement, and a trustworthy online presence.",
  },
  {
    title: "Review Management",
    content:
      "Positive reviews influence customer decisions. We help enhance and maintain review quality across major platforms.",
  },
];

const ormData = [
  {
    title: "Developing a Positive Brand Image",
    content:
      "A strong digital reputation is vital in today’s competitive environment. Our team builds a credible and engaging brand presence through tailored content strategies, review enhancement, and multi-platform reputation management.\n\nThis results in higher visibility, stronger customer trust, and a more positive online impression.",
  },
  {
    title: "Brand Monitoring",
    content:
      "Understanding what people say about your brand is essential. Our comprehensive brand monitoring services track mentions across social media, blogs, review sites, and search engines.\n\nWe identify potential issues early, address them promptly, and maintain a consistent brand narrative.",
  },
  {
    title: "Responding to Negative Reviews",
    content:
      "Negative feedback can harm your business if not handled correctly. Our team responds professionally, addresses customer concerns, and aims to turn dissatisfaction into positive experiences.\n\nEffective review management helps restore trust and strengthen your brand reputation.",
  },
  {
    title: "Positive Content Promotion",
    content:
      "Positive content supports long-term reputation growth. We promote reviews, testimonials, case studies, and valuable brand stories across relevant digital platforms.\n\nThis helps your brand gain visibility, credibility, and customer confidence.",
  },
  {
    title: "Strengthening Your Social Media Presence",
    content:
      "A reliable social media presence contributes directly to your reputation. We create tailored content, engage with followers, and ensure your platforms reflect authenticity and professionalism.\n\nThis leads to improved brand recognition and customer loyalty.",
  },
];

function OnlineReputationManagement() {
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
      <title>Online Reputation Management</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/online-reputation-management"
      />
      <meta
        name="description"
        content="Monitor, manage, and enhance your brand's online image with strategic ORM services."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-[var(--color1)]/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              ORM Services in Delhi – Improve Your Brand Image with Us
            </h1>

            <p className=" max-w-xl text-white/90 text-justify">
              In today’s world, your online reputation is often the first
              impression people have of you - and at Bigwig Media Digital, we
              make sure that impression is a great one.
            </p>
            <p className=" max-w-xl text-white/90 text-justify">
              We understand that every brand has a story, and sometimes, the
              digital space doesn’t reflect it the way it should. That’s where
              we step in. Our team works behind the scenes to protect your
              image, build trust with your audience, and highlight what truly
              makes your brand special.
            </p>
            <p className=" max-w-xl text-white/90 text-justify">
              Whether you’re looking to strengthen your online presence, handle
              negative feedback with care, or simply ensure your brand shines
              across the web, we’re here to support you every step of the way.
            </p>
            <p className=" max-w-xl text-white/90 text-justify">
              With Bigwig Media Digital’s ORM services in Delhi, you don’t just
              manage your reputation, you shape it with confidence.
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

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          {/* Grid Content - Text left, image right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Content */}
            <div className="space-y-6 text-white">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
                ORM Services in Delhi – Improve Your Brand Image with Us
              </h2>
              <p className=" leading-relaxed text-justify">
                Are you looking for a trusted Online Reputation Management
                Company in Delhi NCR to strengthen your brand image? Bigwig
                Media Digital provides strategic and effective ORM Services in
                Delhi to help brands build credibility and maintain a positive
                presence online.
              </p>
              <p className=" leading-relaxed text-justify">
                In today’s digital world, a single negative comment can
                influence purchasing decisions. This makes Online Reputation
                Management Delhi essential for businesses aiming to stay
                competitive and maintain customer trust.
              </p>
              <p>
                At Bigwig Media Digital, our ORM experts monitor, manage, and
                enhance your brand’s online reputation using advanced tools and
                real-time tracking methods.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={orm}
                alt="Online Reputation Management Services"
                className="w-full h-[60vh] rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
            Our ORM Services in Delhi
          </h2>
        </div>

        {/* CONTAINER */}
        <div className="relative z-10">
          {/* ========= MOBILE SLIDER ========= */}
          <div className="block lg:hidden">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} className="px-2">
                  <div
                    className="
                relative flex flex-col p-6 rounded-2xl
                backdrop-blur-xl bg-white/5 
                border border-white/10
                shadow-[0_0_25px_rgba(0,255,255,0.1)]
                hover:shadow-[0_0_40px_var(--color5)]
                space-y-5 overflow-hidden group
                transition-all duration-500
                hover:-translate-y-2
              "
                  >
                    {/* Shine Line */}
                    <div
                      className="
                  absolute -top-full left-0 w-full h-full
                  bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                  rotate-45 group-hover:animate-shineLine
                "
                    />

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                      {item.content}
                    </p>

                    {/* Glow Border */}
                    <div
                      className="
                  absolute inset-0 rounded-2xl border border-transparent
                  group-hover:border-[var(--color5)] transition-all duration-500
                "
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ========= DESKTOP GRID ========= */}
          <div
            className="
        hidden lg:grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-10 auto-rows-fr
      "
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="
            group relative overflow-hidden rounded-2xl 
            transition-transform duration-500 
            hover:-translate-y-3 h-full
          "
              >
                <div
                  className="
              relative z-10 p-6 rounded-2xl 
              backdrop-blur-xl bg-white/5
              border border-white/10
              shadow-[0_0_25px_rgba(0,255,255,0.15)]
              hover:shadow-[0_0_45px_var(--color5)]
              flex flex-col h-full space-y-5
              transition-all duration-500
            "
                >
                  {/* Shine Line */}
                  <div
                    className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/25 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] tracking-wide relative z-10">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify relative z-10">
                    {item.content}
                  </p>

                  {/* Glow Border */}
                  <div
                    className="
                absolute inset-0 rounded-2xl border border-transparent 
                group-hover:border-[var(--color5)] transition-all duration-500
              "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Animations */}
          <style>{`
      @keyframes shineLine {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
      .animate-shineLine {
        animation: shineLine 1.5s ease-in-out forwards;
      }
    `}</style>
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Outer Container */}
        <div
          className="
      relative rounded-3xl p-8 md:p-12
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_35px_rgba(0,255,255,0.15)]
      hover:shadow-[0_0_25px_var(--color5)]
      transition-all duration-700
      overflow-hidden
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineMove_4s_ease-in-out_infinite]
      "
          ></div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Why Choose Bigwig Media Digital as Your ORM Agency in Delhi?
          </h2>

          {/* Content */}
          <div className="space-y-5 text-gray-200 leading-relaxed text-justify">
            <p>
              Partnering with an experienced team like Bigwig Media Digital,
              recognized as one of the Best ORM Companies in Delhi, ensures
              measurable and long-lasting results.
            </p>

            <p className="font-semibold text-[var(--color5)]">
              What you can expect:
            </p>

            <ul
              className="
    list-disc pl-6 space-y-2
    grid grid-cols-1 md:grid-cols-2 
    gap-x-10
  "
            >
              <li>Advanced tools for monitoring and analysis</li>
              <li>Customized ORM strategies</li>
              <li>Timely responses to negative reviews</li>
              <li>Transparent progress reports</li>
              <li>Stronger brand credibility and online visibility</li>
            </ul>

            <p>
              Choosing us means protecting your digital identity and building a
              brand people trust.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <ButtonFill
                text="Get In Touch"
                onClick={() => setIsPopupOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineMove {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto relative overflow-hidden">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
            How Our ORM Services Strengthen Your Brand
          </h2>
        </div>

        {/* MOBILE SLIDER */}
        <div className="block lg:hidden">
          <Slider {...settings}>
            {ormData.map((item, index) => (
              <div key={index} className="px-2">
                <div
                  className="
            relative flex flex-col p-6 rounded-2xl
            backdrop-blur-xl bg-white/5 
            border border-white/10
            shadow-[0_0_25px_rgba(0,255,255,0.12)]
            hover:shadow-[0_0_40px_var(--color5)]
            transition-all duration-500
            overflow-hidden group
            space-y-4
          "
                >
                  {/* Shine Line */}
                  <div
                    className="
              absolute -top-full left-0 w-full h-full
              bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
              rotate-45 group-hover:animate-shineLine
            "
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color5)] z-10">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify z-10 whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* DESKTOP GRID */}
        <div
          className="
    hidden lg:grid 
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    gap-10 auto-rows-fr
  "
        >
          {ormData.map((item, index) => (
            <div
              key={index}
              className="
        group relative overflow-hidden rounded-2xl 
        hover:-translate-y-2 transition-all duration-500
      "
            >
              <div
                className="
          relative z-10 p-6 rounded-2xl
          backdrop-blur-xl bg-white/5 
          border border-white/10
          shadow-[0_0_25px_rgba(0,255,255,0.12)]
          hover:shadow-[0_0_45px_var(--color5)]
          space-y-4 h-full
        "
              >
                {/* Shine Line */}
                <div
                  className="
            absolute -top-full left-0 w-full h-full
            bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
            rotate-45 group-hover:animate-shineLine
          "
                />

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color5)] z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-base leading-relaxed text-justify z-10 whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shine Animation */}
        <style>{`
    @keyframes shineLine {
      0% { transform: translateY(-150%); }
      100% { transform: translateY(150%); }
    }
    .animate-shineLine {
      animation: shineLine 1.5s ease-in-out forwards;
    }
  `}</style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-8">
          Industries We Support
        </h2>

        <div
          className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-6
    "
        >
          {[
            "Brand Reputation Management",
            "Corporate Reputation Management",
            "Celebrity Reputation Management",
            "Hotel ORM Services",
            "Hospital ORM Services",
            "Restaurant ORM Services",
          ].map((item, index) => (
            <div
              key={index}
              className="
          rounded-2xl p-6
          backdrop-blur-xl bg-white/5
          border border-[var(--color5)]/20
          shadow-[0_0_25px_rgba(0,255,255,0.1)]
          hover:shadow-[0_0_25px_var(--color5)]
          transition-all duration-500
          text-gray-200
        "
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Single Outer Container */}
        <div
          className="
      relative rounded-3xl p-8 md:p-12
      backdrop-blur-2xl bg-white/5
      border border-[var(--color5)]/30
      shadow-[0_0_45px_rgba(0,255,255,0.18)]
      hover:shadow-[0_0_30px_var(--color5)]
      transition-all duration-700
      overflow-hidden
    "
        >
          {/* Shine Line */}
          <div
            className="
        absolute -top-full left-0 w-full h-full 
        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent 
        rotate-45 opacity-70
        animate-[shineMove_4s_ease-in-out_infinite]
      "
          />

          {/* Heading 1 */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Benefits of Strong Online Reputation Management
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200 leading-relaxed mb-12">
            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Increase Sales
              </h3>
              <p>
                Customers check online reviews before purchasing. A positive
                reputation increases conversions and customer trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Build Credibility
              </h3>
              <p>
                Addressing negative reviews promptly helps maintain transparency
                and trust.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Greater ROI
              </h3>
              <p>
                Investors and partners research brands online. A positive image
                opens new business opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Stronger Brand Image
              </h3>
              <p>
                Negative material can harm trust quickly. Effective ORM protects
                your brand’s credibility.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Attract Top Talent
              </h3>
              <p>
                Potential employees review your company online. A strong
                reputation helps you attract skilled applicants.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-[var(--color5)]/30 my-10" />

          {/* Heading 2 */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-6">
            Our Transparent ORM Process
          </h2>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Understanding Your Brand
              </h3>
              <p>
                We begin with a detailed audit to analyze your current digital
                reputation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Creating a Customized ORM Plan
              </h3>
              <p>
                We design a strategy aligned with your goals and brand
                personality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Execution and Active Monitoring
              </h3>
              <p>
                Using SEO, content marketing, social listening, and engagement
                tactics, we manage your reputation continuously.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[var(--color5)] mb-2">
                Optimization and Reporting
              </h3>
              <p>
                We adjust strategies as needed and keep you updated with clear
                reports.
              </p>
            </div>
          </div>
        </div>

        {/* Shine Animation */}
        <style>
          {`
      @keyframes shineMove {
        0% { transform: translateY(-150%); }
        100% { transform: translateY(150%); }
      }
    `}
        </style>
      </section>

      <section className="py-12 w-11/12 md:w-5/6 mx-auto">
        {/* Section Wrapper */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)]">
            Why Online Reputation Management Matters
          </h2>
        </div>

        {/* Center Highlight Box */}
        <div
          className="
      relative mx-auto max-w-3xl p-8 md:p-10
      rounded-2xl bg-white/5 backdrop-blur-xl
      border border-white/10
      shadow-[0_0_20px_rgba(0,255,255,0.15)]
      transition-all duration-500
    "
        >
          {/* Top Icon */}
          <div className="flex justify-center mb-4">
            <div
              className="
          w-14 h-14 rounded-full flex items-center justify-center
          bg-[var(--color5)]/15 border border-[var(--color5)]/40
          shadow-[0_0_15px_var(--color5)]
          text-[var(--color5)] text-2xl
        "
            >
              ⭐
            </div>
          </div>

          {/* Content */}
          <div className="text-gray-200 space-y-5 leading-relaxed text-justify">
            <p>
              Today’s consumers, especially those aged 18–34, rely heavily on
              online reviews before making decisions. A single negative comment
              can push potential customers toward competitors.
            </p>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color5)]/40 to-transparent"></div>

            <p>
              Effective ORM protects your brand, supports sales, and ensures
              long-term trust.
            </p>

            <p>
              Bigwig Media Digital helps you maintain a positive image and
              succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      <section className="py-20 relative overflow-hidden">
        {/* Matrix glow background */}
        <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider">
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

export default OnlineReputationManagement;
