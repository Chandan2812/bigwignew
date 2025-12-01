"use client";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import { TypeAnimation } from "react-type-animation";
import hero from "../../../../Assets/Services hero/seo.jpg";
import seo from "../../../../Assets/services/3.jpg";
import Footer from "../../../../components/Footer";
import {
  BarChart2,
  PieChart,
  Search,
  Globe,
  LineChart,
  Smartphone,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import ContactForm from "../../../../components/ContactForm";
import { useState } from "react";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";

const stats = [
  {
    icon: <Search size={32} className="text-[var(--primary-color)]" />,
    text: "Of all site visits, 53% are the result of organic search engine discovery.",
  },
  {
    icon: <BarChart2 size={32} className="text-[var(--primary-color)]" />,
    text: "By 2028, the SEO market is expected to expand by $122.11 billion.",
  },
  {
    icon: <PieChart size={32} className="text-[var(--primary-color)]" />,
    text: "68% of user interactions on the internet are started by search engines.",
  },
  {
    icon: <Globe size={32} className="text-[var(--primary-color)]" />,
    text: "Google accounts for 92.96% of all traffic worldwide (Search, Images, Google Maps).",
  },
  {
    icon: <LineChart size={32} className="text-[var(--primary-color)]" />,
    text: "Within a year of publication, just five to six pages out of 100 will appear in the top ten search results.",
  },
  {
    icon: <Smartphone size={32} className="text-[var(--primary-color)]" />,
    text: "Mobile devices account for over 60% of organic search engine visits.",
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
    a: "Affiliate marketing is a performance-based model where businesses pay affiliates only when they generate results - like sales, leads, or app installs. This makes it a low-risk, high-reward marketing channel.",
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

function Seo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)]">
      <title>SEO Services for Higher Ranking</title>
      <meta
        name="description"
        content="Boost your online visibility and rank higher on search engines with our expert SEO services."
      />
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/search-engine-optimization"
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 "
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="bg-black/40 absolute inset-0 z-0" />

        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Best SEO Company in India
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)", // softer but effective
                letterSpacing: "0.5px",
              }}
            >
              More
              <TypeAnimation
                sequence={["Traffic", 2000, "Leads", 2000, "Sales", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              We help businesses grow their online presence with tailored SEO
              strategies in India. Connect with us and see the difference.
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

      <section className="  py-12">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
              What is SEO & Why is it Important for Your business?
            </h2>
          </div>

          {/* Main content layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed text-justify">
                Many people mistakenly believe that SEO is merely a business
                etiquette. The process of increasing a website&#39;s or online
                content&#39;s visibility in search engine results pages (SERPs),
                mostly on sites like Google, Yahoo, and Bing, is known as search
                engine optimization. Thus, the likelihood of showing up in
                search queries increases with visibility. Usually, an SEO
                strategy focuses on four important areas
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-100 ">
                <li>Analysis of Keywords</li>
                <li>Establishing Backlinks</li>
                <li>Production of Content</li>
                <li>Upkeep of technical systems</li>
              </ul>

              <p className="text-white  text-lg leading-relaxed">
                These elements form the foundation of the approaches used by
                different <strong>SEO agencies</strong>, regardless of the kind
                of SEO.
              </p>
            </div>

            {/* Right image */}
            <div className="w-full">
              <Image
                src={seo}
                alt="Best SEO Company in India"
                className="w-full h-[60vh] rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row items-center gap-8 py-12">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
            Drive Organic Traffic with the Best SEO Agency in India
          </h2>
          <p className="text-lg text-white  text-justify">
            <a href="https://www.bigwigmediadigital.com/">
              <strong className="text-[var(--color4)]">BigWig Digital</strong>
            </a>{" "}
            is recognized as a leading SEO Agency in India, delivering powerful
            and result-driven SEO solutions for businesses worldwide. With more
            than 10 years of proven expertise, we have successfully managed over
            10,000 SEO campaigns and helped global brands achieve higher search
            engine rankings, organic visibility, and measurable growth. Our 95%
            client retention rate reflects the trust and results we deliver.
          </p>
        </div>

        {/* Right stats with icons */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(167,235,242,0.3)] hover:shadow-[0_0_35px_rgba(167,235,242,0.6)] transition-all duration-300
               "
              >
                {/* Glow gradient line */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#A7EBF260] to-transparent"></div>

                {/* Icon */}
                <div className="relative z-10 mb-4 text-[#A7EBF2] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <p className="relative z-10 text-white text-sm font-light tracking-wide">
                  {item.text}
                </p>

                {/* Neon border animation */}
                <span className="absolute top-0 left-0 w-full h-full border border-[#A7EBF2] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="w-11/12 md:w-5/6 mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color5)]">
            All in One SEO Services Under One Roof
          </h2>
          <p className="text-lg text-white  text-justify">
            As a trusted SEO Agency in India, we combine advanced SEO
            strategies, in-depth keyword research, and white-hat techniques to
            drive sustainable organic traffic, improve rankings, and boost ROI.
            Whether you are a startup or an enterprise, our tailored SEO
            services ensure your brand stays ahead of the competition.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Local search engine optimization",
                points: [
                  `We assist your company in showing up in "near me" searches, which generates local leads and foot traffic.`,
                  `Your Google Business Profile is optimized by our expertise to improve visibility on maps and local packs.`,
                  `To increase your local online authority, we create local citations.`,
                  `We control your ratings and reviews to boost click-through rates and trust.`,
                  `We use location-based sites as part of our content strategy to draw in local searchers.`,
                ],
              },
              {
                title: "App Store Optimization (ASO)",
                points: [
                  `We raise your app's visibility and ranking on the Apple App Store and Google Play.`,
                  `The purpose of our content and creatives is to increase engagement and app downloads.`,
                  `Utilizing competitive insights and keyword research, we improve discoverability.`,
                  `We help you get good app reviews so you may succeed in the long run.`,
                  `Our ASO tactics provide your app a competitive edge in a saturated market.`,
                ],
              },
              {
                title: "Answer Engine Optimization (AEO)",
                points: [
                  `We arrange your material to appear inside Google's "People Also Ask" and featured snippets.`,
                  `Your chances of ranking as the top voice search answer improve with our strategies.`,
                  `We produce structured conversational content aligned with human query patterns.`,
                  `Schema markup increases your content’s visibility and authority.`,
                  `AEO boosts trust and dramatically increases click-through rates.`,
                ],
              },
              {
                title: "Geotargeted SEO (GEO)",
                points: [
                  `We develop region-specific SEO strategies for multi-city or multi-state ranking.`,
                  `Local landing pages create hyper-targeted traffic for each service area.`,
                  `We optimize for geo-focused keywords to dominate local SERPs.`,
                  `Localized content & backlinks strengthen authority.`,
                  `Perfect for brands aiming to rank in multiple locations.`,
                ],
              },
              {
                title: "E-commerce SEO",
                points: [
                  `We optimize your online store for higher organic sales and visibility.`,
                  `Search engine rankings for products are improved with our SEO methods.`,
                  `We fix technical issues and enhance UX to maximize conversions.`,
                  `SEO-friendly product descriptions & URLs attract buyers.`,
                  `Achieve long-term ROI without relying heavily on paid ads.`,
                ],
              },
              {
                title: "International SEO",
                points: [
                  `We help your website rank globally across different languages & countries.`,
                  `Proper hreflang setup ensures accurate geo-content delivery.`,
                  `We localize strategy & content for each region’s culture.`,
                  `We optimize for regional search engines like Baidu & Yandex.`,
                  `Your brand becomes globally visible & competitive.`,
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                relative p-6 rounded-xl overflow-hidden
                bg-[#0a0f14]/80 border border-[#1e293b]
                shadow-[0_0_25px_rgba(0,0,0,0.4)]
                hover:border-[var(--primary-color)]
                hover:shadow-[0_0_30px_rgba(167,235,242,0.35)]
                transition-all duration-300
      "
              >
                {/* Matrix background overlay */}
                <div className="absolute inset-0 opacity-[0.20] pointer-events-none bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen"></div>

                {/* Content Layer */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-[var(--color5)] mb-4 tracking-wide">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                    {item.points.map((point, i) => (
                      <li key={i} className="list-disc ml-4">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow border animation */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--primary-color)] transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden bg-[#06090f]/80 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-[0_0_30px_rgba(0,255,255,0.12)]">
            {/* HOLOGRAPHIC SCAN LINE */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent animate-scan"></div>
            </div>

            {/* MATRIX PARTICLE BACKGROUND */}
            <div className="absolute inset-0 opacity-[0.20] mix-blend-screen bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center pointer-events-none"></div>

            {/* HOLOGRAPHIC GLOW BORDER */}
            <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[var(--primary-color)] transition-all duration-500 shadow-[inset_0_0_40px_rgba(167,235,242,0.15)]"></div>

            <div className="relative z-10 space-y-10">
              {/* PREMIUM HEADING WITH ANIMATED CAPSULE */}
              <div className="w-fit mx-auto px-8 py-3 rounded-full bg-white/5 backdrop-blur-2xl border border-[var(--primary-color)] shadow-[0_0_20px_rgba(167,235,242,0.35)] animate-pulseGlow">
                <h3 className="text-3xl md:text-4xl font-bold text-center text-[var(--color5)] tracking-wide">
                  The Best SEO Agency for SEO Services in India and Beyond!
                </h3>
              </div>

              {/* LEAD PARAGRAPH */}
              <p className="text-lg text-white/90 tracking-wide leading-relaxed text-justify">
                Choosing the right partner for your digital growth is not just
                about rankings — it’s about trust, transparency, and real
                business impact. At BigWig Media Digital, we elevate SEO
                services in India with strategies that push genuine growth.
              </p>

              {/* SUBTITLE WITH HOLOGRAPHIC UNDERLINE */}
              <div className="relative inline-block">
                <h3 className="text-xl font-semibold text-[var(--primary-color)] tracking-wide">
                  Here’s what makes us different:
                </h3>

                <div className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-[var(--primary-color)]/80 via-cyan-400 to-transparent rounded-full animate-lineGlow"></div>
              </div>

              {/* FUTURISTIC BULLET LIST */}
              <ul className="space-y-6 text-gray-300 text-base leading-relaxed">
                {[
                  `<strong class="text-[var(--primary-color)]">Tailored for You, Not Templates</strong> – Every business is unique, so our SEO strategies are fully customized.`,
                  `<strong class="text-[var(--primary-color)]">SEO That Builds Brands</strong> – We don’t chase rankings… we build long-term brand authority.`,
                  `<strong class="text-[var(--primary-color)]">Local + Global SEO Expertise</strong> – Scale within your city or dominate international markets.`,
                  `<strong class="text-[var(--primary-color)]">Transparent Growth Tracking</strong> – Clean, crystal-clear reporting with zero jargon.`,
                  `<strong class="text-[var(--primary-color)]">Ahead of Algorithm Updates</strong> – We future-proof your SEO strategy through trend intelligence.`,
                  `<strong class="text-[var(--primary-color)]">More Than Visibility — True Impact</strong> – Gain authority, trust, and conversions that last.`,
                ].map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-6 group"
                    dangerouslySetInnerHTML={{
                      __html: `
            <span class='absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)] group-hover:shadow-[0_0_18px_var(--primary-color)] transition-all duration-300'></span>
            ${point}
          `,
                    }}
                  />
                ))}
              </ul>

              {/* FOOTER PARAGRAPH */}
              <p className="text-lg text-gray-300 text-justify pt-6 border-t border-white/10">
                BigWig Media Digital isn’t just another SEO company — we’re your
                long-term growth partner. We help you earn visibility,
                credibility, and sustained business impact that powers your
                future.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            {/* <button className="mt-8 px-6 py-3 bg-[var(--primary-color)]  text-white rounded-full font-semibold hover:bg-opacity-80 transition">
                
              </button> */}
            <ButtonFill
              onClick={() => setIsPopupOpen(true)}
              text="Let’s Connect"
            />
          </div>
        </div>
      </section>

      <OurProcess />
      <WhyBigwig />
      {/* Services Table Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Matrix glow background */}
        <div className="absolute inset-0 opacity-[0.20] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto space-y-14 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center tracking-wider drop-shadow-[0_0_10px_var(--primary-color)]">
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
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent animate-scan"></div>

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
                        hover:text-[var(--primary-color)]
                      "
                          >
                            {/* Neon card effect */}
                            <span
                              className="
                          absolute inset-0 
                          rounded-xl 
                          border border-transparent
                          group-hover:border-[var(--primary-color)]
                          group-hover:shadow-[0_0_20px_var(--primary-color)]
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
export default Seo;
<style>
  {`
  @keyframes scan {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 0.7; }
    100% { transform: translateY(100%); opacity: 0; }
  }
  .animate-scan {
    animation: scan 5s linear infinite;
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 25px rgba(167,235,242,0.25); }
    50% { box-shadow: 0 0 40px rgba(167,235,242,0.55); }
  }
  .animate-pulseGlow {
    animation: pulseGlow 3s ease-in-out infinite;
  }

  @keyframes lineGlow {
    0% { opacity: 0.4; width: 70%; }
    50% { opacity: 1; width: 100%; }
    100% { opacity: 0.4; width: 70%; }
  }
  .animate-lineGlow {
    animation: lineGlow 4s ease-in-out infinite;
  }
`}
</style>;
