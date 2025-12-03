"use client";
import Nav from "../../../../components/Nav";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../../Assets/Services hero/smm.jpg";
import smm from "../../../../Assets/services/5.jpg";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Footer from "../../../../components/Footer";
import {
  FaLinkedinIn,
  FaMeta,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import ContactForm from "../../../../components/ContactForm";
import { JSX, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import GetInTouch from "../../../../components/GetInTouch";

const icons: Record<string, JSX.Element> = {
  "Meta Ads": (
    <div className="flex items-center gap-2">
      <FaMeta className="text-[#1877F2]" />
    </div>
  ),
  "LinkedIn Ads": <FaLinkedinIn className="text-[#0077B5]" />,
  "TikTok Ads": <FaTiktok className="text-black" />,
  "Snapchat Ads": <FaSnapchatGhost className="text-[#FFFC00]" />,
  "Twitter (X) Ads": <FaXTwitter className="text-black" />,
  "YouTube Ads": <FaYoutube className="text-[#FF0000]" />,
};
const faqs = [
  {
    q: "Why is BigWig Media Digital considered one of the best social media marketing agencies in India?",
    a: "At BigWig Media Digital, we combine creativity with data-driven strategies. Our team specializes in designing high-performing campaigns that not only boost brand visibility but also deliver measurable ROI. We focus on results, not vanity metrics.",
  },
  {
    q: "Can small or local businesses also benefit from social media marketing?",
    a: "Absolutely! Whether you run a retail shop, startup, clinic, or educational institute, our social media marketing services in India help you reach the right audience, build awareness, and generate more leads at affordable costs.",
  },
  {
    q: " How long does it take to see results from social media marketing?",
    a: "You can start seeing engagement like likes, shares, and comments within the first few weeks. For stronger results—such as lead generation, brand authority, and consistent conversions—it usually takes 2–3 months of strategic campaigns.",
  },
  {
    q: "Do you manage paid ads on social media platforms?",
    a: "Yes, we specialize in paid ad campaigns across Facebook, Instagram, YouTube, and LinkedIn. Our experts use advanced targeting techniques to maximize your ad budget and drive high-quality leads.",
  },
  {
    q: "What services are included in your social media marketing packages?",
    a: "Our social media marketing services in India include content creation, ad campaign management, audience targeting, influencer collaborations, community management, and detailed monthly performance reports.",
  },
];

const adPlatforms = [
  {
    title: "Meta Ads",
    text: "We create compelling ad campaigns that grab attention and drive action across Facebook and Instagram.",
  },
  {
    title: "LinkedIn Ads",
    text: "B2B targeting done right. Reach decision-makers with sponsored content & lead-gen forms.",
  },
  {
    title: "TikTok Ads",
    text: "Engage Gen Z with viral short-form video ads driven by trends and creativity.",
  },
  {
    title: "Snapchat Ads",
    text: "Target mobile-first audiences with immersive story ads and high-engagement formats.",
  },
  {
    title: "Twitter (X) Ads",
    text: "Run trending campaigns with precise hashtag, keyword, and interest-based targeting.",
  },
  {
    title: "YouTube Ads",
    text: "Build brand awareness through skippable, non-skippable, and in-feed video ads.",
  },
];

function SocialMediaMarketing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    tiltRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 18,
          speed: 300,
          glare: true,
          "max-glare": 0.25,
          scale: 1.04,
        });
      }
    });
  }, []);
  return (
    <div className="bg-[var(--color1)]">
      <title>Social Media Marketing Experts</title>
      <meta
        name="description"
        content="Drive engagement & growth with targeted social media marketing strategies tailored for your brand."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/social-media-marketing"
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
              Social Media Marketing Services in India that drive real ROI
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline"> Social ads that Delhi </span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    " Stop the Scroll",
                    2000,
                    " Generate Leads",
                    2000,
                    " Target the Right",
                    2000,
                    " Build Recall",
                    2000,
                    " Capture Attention",
                    2000,
                    " Deliver ROI",
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

          {/* Right Form */}
          <ContactForm />
        </div>
      </section>

      <section className="py-12 space-y-10 text-white ">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color5)]">
          Social Media Marketing Agency in India
        </h2>

        {/* Two-column Layout */}
        <div className="w-11/12 md:w-5/6 mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-6 text-md leading-relaxed text-justify">
            <p>
              Social media marketing is the process of leveraging platforms like
              Facebook, Instagram, LinkedIn, and YouTube to build brand
              awareness, engage audiences, and generate measurable business
              results. Looking for a social media marketing agency in India that
              understands performance marketing? At BigWig Digital, we deliver
              paid ad campaigns that actually convert, not just drive traffic.
              We’re here to help you grow, scale, and stand out across every
              major social media platform.
            </p>

            <p>
              At
              <strong>
                {" "}
                <a href="https://www.bigwigdigital.in/"> BigWig Digital</a>
              </strong>
              , we create performance-driven ad campaigns designed to get your
              brand seen, clicked, and remembered. As a trusted social media
              marketing agency in India, we specialize in high-converting paid
              campaigns across today’s most powerful platforms. Whether your
              goal is brand awareness, lead generation, website traffic, app
              installs, or video views, our expert team crafts data-backed
              strategies that deliver measurable growth. If you’re searching for
              result-oriented <strong>social media marketing</strong> services
              in India,{" "}
              <strong>
                <a href="https://www.bigwigdigital.in/">BigWig Media Digital</a>
              </strong>{" "}
              is your go-to partner for scalable ad solutions.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={smm}
              alt="Social Media Marketing Agency "
              className="w-full h-[60vh] rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Box goes below */}
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div
            className=" relative p-6 rounded-xl overflow-hidden
        bg-[#0a0f14]/80 border border-[#1e293b]
        shadow-[0_0_25px_rgba(0,0,0,0.4)]
        hover:border-[var(--color5)]
        hover:shadow-[0_0_30px_rgba(167,235,242,0.35)]
        transition-all duration-300"
          >
            {/* Matrix background overlay */}
            <div className="absolute inset-0 opacity-[0.20] pointer-events-none bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen"></div>
            <h3 className="text-2xl font-semibold">
              Why Hiring a Social Media Marketing Agency in India is Essential
              for Business Growth
            </h3>

            <ul className="list-disc space-y-3 text-base">
              <li>
                Organic reach is insufficient in 2025. Paid advertisements give
                you the advantage you need to reach the right audience at the
                right time in the face of changing algorithms and an abundance
                of content.
              </li>
              <li>
                Our strategy for social media advertising is based on accuracy,
                originality, and output. We create effective, focused campaigns
                that are suited to your objectives rather than promoting
                arbitrary posts.
              </li>
              <li>
                To get the most out of every rupee you spend, our results-driven
                segmentation, ad creatives, copywriting, analytics, and A/B
                testing.
              </li>
            </ul>
          </div>

          {/* Intro above the table */}
          <div
            className="mt-10  relative p-6 rounded-xl overflow-hidden
        bg-[#0a0f14]/80 border border-[#1e293b]
        shadow-[0_0_25px_rgba(0,0,0,0.4)]
        hover:border-[var(--color5)]
        hover:shadow-[0_0_30px_rgba(167,235,242,0.35)]
        transition-all duration-300"
          >
            {/* Matrix background overlay */}
            <div className="absolute inset-0 opacity-[0.20] pointer-events-none bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen"></div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Benefits of Hiring a Social Media Marketing Agency in India
            </h3>
            <p className="text-gray-300">
              While many businesses consider building an in-house marketing
              team, partnering with a social media marketing agency in India
              often proves more effective and cost-efficient. The table below
              highlights the key differences to help you make the right choice.
            </p>
          </div>

          {/* ✅ Beautiful Comparison Table */}
          <div className="mt-10 rounded-2xl overflow-hidden relative shadow-[0_0_25px_rgba(0,255,255,0.15)]">
            {/* Matrix hologram background */}
            <div className="absolute inset-0 opacity-[0.06] bg-[url('https://i.imgur.com/2JYwQ7U.gif')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

            {/* Outer glow border */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-[var(--color5)] transition-all duration-500 pointer-events-none"></div>

            <table className="min-w-full text-sm relative z-10 backdrop-blur-xl">
              {/* HEADER */}
              <thead className="bg-gradient-to-r from-[#0d1120] via-[#122033] to-[#0d1120] text-white shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                <tr className="uppercase tracking-wide text-[var(--color5)]">
                  <th className="px-6 py-4 font-semibold border-r border-cyan-900/40 text-[var(--color5)]">
                    Factor
                  </th>
                  <th className="px-6 py-4 font-semibold border-r border-cyan-900/40 text-[var(--color5)]">
                    In-House Marketing Team
                  </th>
                  <th className="px-6 py-4 font-semibold text-[var(--color5)]">
                    Social Media Marketing Agency in India
                  </th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y divide-cyan-900/30 text-gray-200">
                {[
                  [
                    "Expertise",
                    "Limited to team’s knowledge and experience",
                    "Access to specialists with deep multi-platform expertise",
                  ],
                  [
                    "Tools & Technology",
                    "Often rely on basic or free tools",
                    "Advanced paid tools for analytics, automation, & targeting",
                  ],
                  [
                    "Scalability",
                    "Hard to scale without hiring",
                    "Instant scale-up aligned with business goals",
                  ],
                  [
                    "Cost Efficiency",
                    "High long-term costs (salary, training, tools)",
                    "Cost-efficient bundled services",
                  ],
                  [
                    "Creativity & Innovation",
                    "Internal creative limitations",
                    "Fresh innovative strategies tailored to your brand",
                  ],
                  [
                    "Time Management",
                    "Team juggles multiple roles",
                    "Agency focused on performance & ROI",
                  ],
                  [
                    "Performance Tracking",
                    "Basic KPIs, limited insights",
                    "Data-driven insights, A/B tests & measurable results",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
                  >
                    <td className="px-6 py-4 font-semibold text-[var(--color5)] border-r border-cyan-900/20">
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 border-r border-cyan-900/20">
                      {row[1]}
                    </td>
                    <td className="px-6 py-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* SCAN LINE ANIMATION */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent animate-scan pointer-events-none"></div>
          </div>
        </div>
      </section>

      <section className="py-12  text-black ">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color5)] mb-12">
          Our main social media advertising services in India
        </h2>

        <div className="w-11/12 md:w-5/6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto relative">
          {/* MATRIX BACKGROUND */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764576928/23148_rqpqvq.jpg')] bg-cover bg-center pointer-events-none mix-blend-screen"></div>

          {adPlatforms.map((item, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                tiltRefs.current[i] = el;
              }}
              className="
            relative group p-6 rounded-xl
            backdrop-blur-xl bg-white/5
            border border-white/10 shadow-xl
            hover:shadow-[0_0_25px_var(--color5)]
            transition-all duration-300 cursor-pointer
          "
            >
              {/* Outer Neon Border Glow */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--color5)] transition-all duration-300"></div>

              {/* Inner Glow Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color5)]/0 via-[var(--color5)] to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* MATRIX HOLOGRAM OVERLAY */}
              <div className="absolute inset-0 opacity-[0.22] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764576928/23148_rqpqvq.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-[var(--color5)] tracking-wide group-hover:drop-shadow-[0_0_6px_var(--color5)] transition">
                    {item.title}
                  </h4>

                  <div className="text-3xl text-[var(--color5)] group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_6px_var(--color5)]">
                    {icons[item.title]}
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-11/12 md:w-5/6 mx-auto py-16 space-y-14 relative">
        {/* Matrix Cyber Background */}
        <div className="absolute inset-0 opacity-[0.16]  mix-blend-screen pointer-events-none"></div>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 space-y-8">
          {/* Title + Paragraph (inside capsule) */}
          <div
            className="
      rounded-full 
      bg-white/5 
      backdrop-blur-xl  
      border border-white/10 
      shadow-[0_0_25px_rgba(0,255,255,0.15)] 
      p-8 md:p-10
      space-y-6
    "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] ">
              Why choose BigWig Media Digital for social media marketing in
              India
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed">
              Choosing the right social media marketing agency in India can make
              all the difference in your brand’s growth. At BigWig Media
              Digital, we don’t just run campaigns—we craft data-driven
              strategies designed for conversions.
            </p>

            {/* FUTURISTIC BULLET LIST */}
            <ul className="space-y-4 text-gray-200 text-base md:text-lg">
              {[
                [
                  "Platform-Specific Expertise:",
                  "Custom campaigns based on platform algorithms, ad types & rules.",
                ],
                [
                  "Creative + Strategy:",
                  "Eye-catching visuals + persuasive copy + data-backed targeting.",
                ],
                [
                  "Conversion-Focused Funnels:",
                  "Full-funnel strategy from awareness to purchase.",
                ],
                [
                  "Transparent Reporting & Optimization:",
                  "Track CPC, CTR, ROAS, CPL with weekly optimization.",
                ],
                [
                  "Budget-Friendly Scaling:",
                  "Scale from ₹5,000 to ₹5,00,000 with maximum performance.",
                ],
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-3 h-3 mt-2 rounded-full bg-[var(--color5)] shadow-[0_0_10px_var(--color5)]"></div>
                  <span>
                    <span className="text-[var(--color5)] font-semibold">
                      {item[0]}
                    </span>{" "}
                    {item[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT YOU GET SECTION */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-[var(--color5)] tracking-wide drop-shadow-[0_0_10px_var(--color5)]">
              What You Get with Our Social Media Ad Management
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Campaign strategy and funnel design",
                "Audience research and targeting setup",
                "Ad creative (copy + visuals)",
                "A/B testing of creatives and copy",
                "Pixel and conversion tracking",
                "Weekly reporting and performance analysis",
                "Ongoing optimization and scaling",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
              group flex items-center gap-3 
              p-4 rounded-full 
              bg-white/5 backdrop-blur-xl 
              border border-white/10 
              hover:border-[var(--color5)] 
              shadow-md hover:shadow-[0_0_20px_var(--color5)]
              transition-all duration-300
            "
                >
                  <svg
                    className="w-6 h-6 text-[var(--color5)] group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider ">
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
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default SocialMediaMarketing;

{
  /* Animations */
}
<style>
  {`
@keyframes scan {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}
.animate-scan {
  animation: scan 5s linear infinite;
}
`}
</style>;
