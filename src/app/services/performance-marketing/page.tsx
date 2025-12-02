"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import hero from "../../../../Assets/Services hero/PPC-1.jpg";
import ppc from "../../../../Assets/services/7.jpg";
// import ppc from "../../assets/Services hero/PPC.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaSearchDollar,
  FaPhotoVideo,
  FaFacebookF,
  FaRetweet,
  FaMobileAlt,
  FaShoppingCart,
} from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";

const ppcBenefits = [
  {
    title: "Achieve Business Goals Faster",
    content:
      "Unlike traditional marketing, PPC advertising delivers instant results. With one click, you can reach thousands of potential customers through Google Ads and social media campaigns. Whether your goal is more leads, sales, video views, or app downloads, PPC helps you achieve it quickly.",
  },
  {
    title: "Fast & Measurable Results",
    content:
      "PPC campaigns bring immediate traffic to your website by targeting users on Google, YouTube, Gmail, apps, and social media platforms. With BigWig Media Digital, every ad is trackable — from clicks and visits to leads and sales. This transparency allows you to measure ROI and improve campaigns for maximum results.",
  },
  {
    title: "Reach a Targeted Audience",
    content:
      "Our PPC services in India ensure your ads are shown to the right people at the right time. You can target users based on their location, age, interests, and online behavior. Whether it’s travel, fashion, food, or technology, PPC ensures your business reaches the audience most likely to convert.",
  },
  {
    title: "Build Strong Brand Recognition",
    content:
      "By using high-intent keywords and smart ad placements, PPC ads keep your brand visible at the top of search results. This not only boosts sales but also increases brand awareness among your target customers. Social media ads further strengthen your online presence.",
  },
  {
    title: "Budget-Friendly PPC Campaigns",
    content:
      "With BigWig Media Digital, a top PPC company in India, you have complete control over your ad spend. You decide how much to invest, and campaigns can be scaled up or down depending on performance. This flexibility makes PPC a cost-effective way to grow your business.",
  },
  {
    title: " Increased Website Traffic",
    content:
      "Well-optimized PPC ads attract quality visitors who are actively searching for your products or services. By targeting relevant keywords, our PPC experts in India help your business gain more clicks, boost visibility, and increase website traffic significantly.",
  },
  {
    title: "  Generate More Leads ",
    content:
      "Through strategic keyword research, engaging ad copy, and retargeting campaigns, PPC helps you generate high-quality leads. Our PPC agency in India ensures your campaigns are designed to reach users who are most likely to take action.",
  },
  {
    title: "Drive More Sales and Conversions",
    content:
      "PPC advertising doesn’t just bring traffic; it brings buyers. By optimizing landing pages and using persuasive call-to-actions, PPC campaigns guide users through the sales funnel, helping you increase conversions and sales effectively.",
  },
  {
    title: "Boost In-Store Visits",
    content:
      "If you run a physical store, PPC ads with location-based targeting can drive nearby customers directly to your business. Adding a “Visit Us Today” call-to-action motivates users to walk into your store.",
  },
  {
    title: "Get More Phone Calls",
    content:
      "With call-only ads and click-to-call extensions, PPC makes it easier for customers to connect with your business instantly. Our PPC services in India also include call tracking, so you know exactly which ads bring the most valuable leads.",
  },
  {
    title: "Better Brand Awareness ",
    content:
      "PPC not only drives sales but also builds long-term recognition for your brand. By running display ads, video ads, and remarketing campaigns, our PPC agency in India helps your business stay in front of your audience - making your brand stronger and more trusted.",
  },
];

const features = [
  {
    title: "Top PPC Services Provider",
    text: "With Google Ads-certified experts, BigWig Digital is a top PPC provider that serves customers worldwide.",
  },
  {
    title: "Instant Lead Generation with Cost-Efficiency",
    text: "With the help of our PPC services, you can swiftly and affordably draw in targeted customers with clever sponsored advertising campaigns.",
  },
  {
    title: "Expert Management of Google & Social Media Ads",
    text: "We oversee effective PPC campaigns on social media and Google Ads to immediately increase your visibility and traffic.",
  },
  {
    title: "Affordable PPC Campaigns That Deliver Results",
    text: "Our digital marketing services are at competitive prices while maintaining high quality, unlike many other agencies",
  },
  {
    title: "Guaranteed Top Search Placement",
    text: "With high-intent keywords, our SEO team gets your website on the front page of search results when it matters most.",
  },
  {
    title: "Transparent & Scalable PPC Strategy",
    text: "With BigWig Digital, you maintain budgetary control while we assist in growing your company with ROI-focused, data-driven campaigns.",
  },
];
const faqs = [
  {
    q: "Why choose BigWig Digital for PPC services?",
    a: " BigWig Digital is a trusted name for PPC services in India, known for delivering ROI-driven campaigns. Our experts focus on targeting the right audience, optimizing ad spend, and ensuring maximum returns for your business.",
  },
  {
    q: "How do PPC services help my business?",
    a: "With professional PPC advertising services, your business gets instant visibility, high-quality leads, and measurable growth. Unlike traditional marketing, PPC ensures you reach the right customers at the right time.",
  },
  {
    q: "  Do you offer affordable PPC packages?",
    a: "Yes, we provide affordable PPC services customized for every budget. Whether you’re a startup or an established brand, our packages are designed to maximize ROI without overspending.",
  },
  {
    q: "Which platforms do you cover in PPC?",
    a: "Our PPC management services cover Google Ads, Bing, Facebook, Instagram, and LinkedIn campaigns. This multi-platform approach ensures your business captures leads across different online channels.",
  },
  {
    q: " How fast can I see results with PPC?",
    a: " The best part of PPC marketing services is that you start seeing traffic and leads within a few days of campaign launch. With proper optimization, conversions and ROI improve consistently over time.",
  },
  {
    q: "  Is PPC better than SEO?",
    a: "  PPC services provide quick results with instant traffic and leads, while SEO builds long-term organic growth. For the best results, both PPC and SEO should work together as part of your digital strategy.",
  },
  {
    q: " Do you provide PPC reports?",
    a: " Yes, we share detailed PPC reports highlighting clicks, conversions, cost per lead, and ROI. This transparency ensures you know exactly how your ad budget is being utilized.",
  },
];

const sliderSettings = {
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

const featureSettings = {
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

function PerformanceMarketing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)]">
      <title>ROI-Driven Performance Marketing</title>
      <meta
        name="description"
        content="Maximize your ROI with data-driven performance marketing services tailored for your business goals."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/performance-marketing"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Top PPC Company in India
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              Be&nbsp;
              <TypeAnimation
                sequence={["Seen", 2000, "Clicked", 2000, "Remembered", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Turn Clicks into Customers with Our ROI-Focused PPC Campaigns
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

      <section className=" text-white  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-20">
          {/* Intro */}

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
                Best PPC Company in India
              </h2>
              <p className="text-lg leading-relaxed text-justify md:text-left">
                At{" "}
                <strong>
                  <a href="https://www.bigwigdigital.in/">BigWig Digital</a>
                </strong>
                , we are recognized as one of the best PPC companies in India,
                trusted by startups, SMEs, and enterprises for delivering
                measurable growth. As a leading PPC agency in India, our
                certified experts design and manage high-performance campaigns
                that ensure maximum ROI with complete transparency.
              </p>
              <p className="text-lg leading-relaxed text-justify md:text-left">
                We combine data-driven insights with innovative strategies to
                create impactful PPC services in India that help brands achieve
                higher visibility, quality leads, and stronger conversions. Our
                approach focuses on understanding your business goals,
                optimizing ad spends, and maximizing every click’s value.
              </p>
              <p className="text-lg leading-relaxed text-justify md:text-left">
                With years of proven experience, our passionate team of PPC
                professionals helps businesses stay ahead of the competition. At
                BigWig Digital, we believe true success comes from smart
                strategies that drive real impact—not just hard work. That’s why
                we encourage our clients to focus on their core business while
                we accelerate their online growth with tailored PPC campaigns in
                India.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={ppc}
                alt="Top PPC Company"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center">
              Why Choose BigWig Media Digital – The Best PPC Company in India
              for Your Business?
            </h3>

            {/* Mobile Slider */}
            <div className="block lg:hidden">
              <Slider {...featureSettings}>
                {features.map((item, i) => (
                  <div key={i}>
                    <div className="bg-white  border-l-4 border-[var(--color5)] p-6 rounded-xl shadow">
                      <h4 className="text-lg font-semibold mb-2 text-[var(--color5)]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700 ">{item.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="
        relative p-6 rounded-xl
        backdrop-blur-xl bg-white/5 
        border border-white/10 
        shadow-[0_0_20px_rgba(0,255,255,0.15)]
        hover:shadow-[0_0_25px_var(--color5)]
        hover:border-[var(--color5)]
        transition-all duration-300
        overflow-hidden group
      "
                >
                  {/* Neon scan lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanLine
            "
                        style={{
                          top: `${20 + idx * 35}px`,
                          animationDelay: `${idx * 0.25}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold mb-2 text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Glow border */}
                  <div
                    className="
        absolute inset-0 rounded-xl 
        border border-transparent 
        group-hover:border-[var(--color5)]
        transition-all duration-300
      "
                  ></div>
                </div>
              ))}

              {/* Neon animation */}
              <style>{`
    @keyframes scanLine {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanLine {
      animation: scanLine 3s linear infinite;
    }
  `}</style>
            </div>
          </div>

          {/* Our Team */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[var(--color5)]">
                Dedicated PPC Experts for Your Business Growth
              </h3>
              <p className="text-lg leading-relaxed">
                At BigWig Media Digital, we have a team of highly skilled PPC
                consultants who specialize in running performance-driven
                campaigns. From keyword research, ad copywriting, audience
                targeting, and landing page optimization to conversion tracking,
                every aspect of your campaign is handled with precision and
                expertise.
              </p>
              <p className="text-lg leading-relaxed">
                Many businesses approach us after facing challenges with other
                agencies - seeking better leads, improved ROI, and lower ad
                spend. With our data-driven PPC strategies, we’ve helped them
                achieve measurable growth, and most of them continue to stay
                with us for the long term
              </p>
              <p className="text-lg leading-relaxed">
                Our PPC experts manage campaigns across Google Ads, Facebook
                Ads, Bing Ads, and other platforms, ensuring maximum visibility
                for your brand. Every campaign is carefully planned and
                customized to align with your unique business objectives. Get in
                touch today to explore a PPC package designed exclusively for
                your business success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: <FaSearchDollar />, label: "Search Advertising" },
                {
                  icon: <FaPhotoVideo />,
                  label: "Display & Video Advertising",
                },
                { icon: <FaFacebookF />, label: "Social Media Advertising" },
                { icon: <FaRetweet />, label: "Remarketing" },
                { icon: <FaMobileAlt />, label: "Mobile Advertising" },
                { icon: <FaShoppingCart />, label: "Shopping Advertising" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
        relative p-6 rounded-xl
        backdrop-blur-xl bg-white/5
        border border-white/10 
        shadow-[0_0_20px_rgba(0,255,255,0.15)]
        hover:shadow-[0_0_25px_var(--color5)]
        hover:border-[var(--color5)]
        transition-all duration-300 
        flex flex-col items-center justify-center gap-3
        text-gray-200 overflow-hidden group
      "
                >
                  {/* Floating neon scan lines */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanLine
            "
                        style={{
                          top: `${25 + i * 35}px`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Icon */}
                  <div className="text-[var(--color5)] text-4xl drop-shadow-[0_0_10px_var(--color5)] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Label */}
                  <span className="text-lg font-medium group-hover:text-[var(--color5)] transition-colors duration-300">
                    {item.label}
                  </span>

                  {/* Glow border */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--color5)] transition-all duration-300"></div>
                </div>
              ))}

              {/* Scan Line Animation */}
              <style>{`
    @keyframes scanLine {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanLine {
      animation: scanLine 3.5s linear infinite;
    }
  `}</style>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[var(--color5)]">
            Benefits of PPC Services in India for Your Business
          </h2>
          {/* Mobile View: Slider */}
          <div className="block lg:hidden">
            <Slider {...sliderSettings}>
              {ppcBenefits.map((benefit, index) => (
                <div key={index}>
                  <div className="bg-white h-[300px] rounded-2xl gap-5 shadow-lg border-l-4 border-[var(--color5)] p-6 flex flex-col">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--color5)]">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700  text-sm leading-relaxed">
                      {benefit.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* Desktop View: Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcBenefits.map((benefit, index) => (
              <div
                key={index}
                className="
        relative 
        rounded-2xl p-6
        backdrop-blur-xl bg-white/5
        border border-white/10 
        shadow-[0_0_25px_rgba(0,255,255,0.15)]
        hover:border-[var(--color5)]
        hover:shadow-[0_0_25px_var(--color5)]
        transition-all duration-300 
        overflow-hidden group
      "
              >
                {/* Neon scanning lines */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanBenefit
            "
                      style={{
                        top: `${25 + i * 35}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)] relative z-10">
                  {benefit.title}
                </h3>

                <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                  {benefit.content}
                </p>

                {/* Glow border */}
                <div
                  className="
        absolute inset-0 
        rounded-2xl 
        border border-transparent 
        group-hover:border-[var(--color5)]
        transition-all duration-300
      "
                ></div>
              </div>
            ))}

            {/* Animation */}
            <style>{`
    @keyframes scanBenefit {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanBenefit {
      animation: scanBenefit 3.2s linear infinite;
    }
  `}</style>
          </div>
        </div>
      </section>
      <section className="py-16 relative overflow-hidden">
        {/* Matrix / Cyber Glow Background */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-10 relative z-10">
          {/* Title Capsule */}
          <div
            className="
        w-fit mx-auto px-8 py-3 rounded-full 
        backdrop-blur-xl bg-white/10 
        border border-white/20
        shadow-[0_0_20px_rgba(0,255,255,0.25)]
      "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color5)] tracking-wide drop-shadow-[0_0_10px_var(--color5)]">
              How is PPC Service Helpful for New Business?
            </h2>
          </div>

          {/* Main Content Container */}
          <div
            className="
        relative p-8 md:p-10 rounded-2xl 
        backdrop-blur-xl bg-white/5 
        border border-white/10
        shadow-[0_0_30px_rgba(0,255,255,0.15)]
        overflow-hidden
      "
          >
            {/* Neon scan lines inside content */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-scanSlow
            "
                  style={{
                    top: `${50 + i * 45}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                PPC advertising gives businesses{" "}
                <span className="text-[var(--color5)] font-semibold drop-shadow-[0_0_8px_var(--color5)]">
                  instant visibility and immediate results
                </span>
                . Unlike SEO or SMO, PPC delivers targeted visitors within
                minutes of launching a campaign. Since it is a paid strategy,
                every click counts and contributes to measurable outcomes such
                as clicks, impressions, leads, sales, app installs, and more.
              </p>

              <p>
                The PPC domain is competitive and requires deep expertise.
                Successful PPC involves{" "}
                <span className="text-[var(--color5)]  font-semibold">
                  campaign structure, keyword research, bidding strategy,
                  audience design, landing page optimization, creative testing
                </span>{" "}
                and continuous performance adjustments. Partnering with a
                dedicated PPC agency ensures every component is correctly
                optimized to maximize ROI and prevent wasted spend.
              </p>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
    @keyframes scanSlow {
      0% { transform: translateX(-100%); opacity: 0; }
      60% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-scanSlow {
      animation: scanSlow 4.5s linear infinite;
    }
  `}</style>
      </section>

      {/* FAQ Section */}
      <section className=" py-12">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-10">
          <h2 className="text-3xl md:text-3xl font-bold text-[var(--color5)] text-center">
            Frequently Asked Questions (FAQs) – Social Media Marketing Agency in
            India
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
      {/* Services Table Section */}
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
      <OurProcess />

      <WhyBigwig />

      <Footer />
    </div>
  );
}

export default PerformanceMarketing;
