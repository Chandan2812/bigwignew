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
const ormServices = [
  {
    title: "Negative Review Handling",
    desc: "Address and minimize the impact of poor customer reviews across platforms like Google, Justdial, and industry-specific portals.",
  },
  {
    title: "Search Engine Cleanup",
    desc: "Push down outdated or irrelevant content and replace it with updated, positive content that supports your brand identity.",
  },
  {
    title: "Social Media Monitoring",
    desc: "Track conversations around your brand in real time and take control before small issues become public crises.",
  },
  {
    title: "Personal Branding Protection",
    desc: "Strengthen the online image of professionals, founders, and public figures with high-authority content and platform visibility.",
  },
  {
    title: "Crisis Reputation Management",
    desc: "Manage brand sentiment during critical times with fast, accurate, and strategic response frameworks.",
  },
  {
    title: "Business Listings Optimization",
    desc: "Ensure your brand details are accurate and consistent across local directories, maps, and review aggregators.",
  },
];

function OnlineReputationManagement() {
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
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Online Reputation Management Services to Safeguard Your Brand
              Image
            </h1>

            <p
              className="text-2xl md:text-4xl font-semibold text-[var(--color5)]"
              style={{
                letterSpacing: "0.5px",
              }}
            >
              <span className="inline">We protect your brand with&nbsp;</span>
              <span className="inline-block whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    "real-time reputation care",
                    2000,
                    "powerful online monitoring ",
                    2000,
                    " digital crisis control",
                    2000,
                    "trust-building content ",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              Your reputation is your brand’s most valuable asset. We manage,
              monitor, and improve it across every platform that matters.
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)]">
                Online Reputation Management That Protects What Matters
              </h2>
              <p className="text-lg leading-relaxed text-justify">
                Your brand&#39;s most significant asset in this digital age is
                its online reputation. One negative review or outdated article
                can cost you trust, traffic, and conversions. At{" "}
                <strong>
                  <a href="https://www.bigwigmediadigital.com/">
                    BigWig Digital
                  </a>
                </strong>
                , we offer reliable and strategic ORM services to help
                individuals, professionals, and brands monitor, manage, and
                improve their online presence across platforms.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                People search before they engage. What shows up on Google,
                review sites, or social media can shape the public perception of
                your brand. Our goal is to ensure that your brand is represented
                accurately, positively, and consistently across every digital
                touchpoint. From search engines to forums, we make sure your
                reputation stays strong where it matters most.
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

          {/* Highlighted Box Moved Below */}
          <div
            className="
    relative p-8 rounded-3xl 
    bg-white/10 backdrop-blur-2xl 
    border border-white/10 
    shadow-[0_0_25px_rgba(0,255,255,0.25)]
    hover:shadow-[0_0_40px_var(--color5)]
    transition-all duration-300
    overflow-hidden
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
          animate-ormScan
        "
                  style={{
                    top: `${60 + i * 50}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Title */}
            <h4
              className="
      text-xl font-semibold mb-4 
      text-[var(--color5)]
      drop-shadow-[0_0_8px_var(--color5)]
      relative z-10
    "
            >
              Why Online Reputation Management Is Non-Negotiable
            </h4>

            {/* Paragraphs */}
            <p className="text-gray-200 mb-4 leading-relaxed relative z-10">
              Every click, comment, or complaint can impact your credibility.
              Whether it&#39;s a negative customer review, outdated press
              coverage, or a competitor&#39;s smear campaign, online reputation
              issues can arise quickly and spread even faster.
            </p>

            <p className="text-gray-200 leading-relaxed relative z-10">
              Effective ORM is not just about fixing what’s broken — it&#39;s
              about building a trustworthy digital profile that reflects your
              true value. BigWig Digital helps you take charge of your
              reputation with proactive strategies that protect your name and
              restore confidence among your customers, partners, and investors.
            </p>

            {/* Neon Border Hover */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>

            {/* Animation */}
            <style>{`
    @keyframes ormScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-ormScan {
      animation: ormScan 5s linear infinite;
    }
  `}</style>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto space-y-12 z-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] drop-shadow-[0_0_12px_var(--color5)]">
              What Our ORM Services Can Help You With
            </h2>
          </div>

          {/* ---------------- MOBILE SLIDER ---------------- */}
          <div className="md:hidden">
            <Slider {...sliderSettings}>
              {ormServices.map((item, idx) => (
                <div key={idx} className="px-2">
                  <div
                    className="
              relative p-6 rounded-2xl
              backdrop-blur-xl bg-white/10
              border border-white/10
              shadow-[0_0_20px_rgba(0,255,255,0.15)]
              min-h-[260px]
              overflow-hidden group
            "
                  >
                    {/* Scanlines */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="
                    absolute left-0 w-full h-[2px]
                    bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                    animate-ormServiceScan
                  "
                          style={{
                            top: `${60 + i * 45}px`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>

                    <h4 className="text-xl font-semibold mb-2 text-[var(--color5)] drop-shadow-[0_0_8px_var(--color5)] relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                      {item.desc}
                    </p>

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ---------------- DESKTOP GRID ---------------- */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ormServices.map((item, idx) => (
              <div
                key={idx}
                className="
          group relative p-6 rounded-2xl
          backdrop-blur-xl bg-white/10
          border border-white/10
          shadow-[0_0_25px_rgba(0,255,255,0.2)]
          hover:shadow-[0_0_35px_var(--color5)]
          transition-all duration-300
          overflow-hidden flex flex-col 
        "
              >
                {/* Hologram Scan Lines */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                animate-ormServiceScan
              "
                      style={{
                        top: `${60 + i * 45}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold mb-2 text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)] relative z-10">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Scanline Animation */}
        <style>{`
    @keyframes ormServiceScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-ormServiceScan {
      animation: ormServiceScan 4.5s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-[0.16] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="relative z-10 w-11/12 md:w-5/6 mx-auto space-y-14">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] drop-shadow-[0_0_10px_var(--color5)]">
              Why Your Online Reputation Deserves Serious Attention
            </h2>
          </div>

          {/* GRID */}
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {[
              {
                title: "Reputation is Built Over Time",
                desc1:
                  "Trust is hard-earned but easily lost in the age of instant opinions and viral posts. That is why reputation management requires constant attention and long-term strategy. At BigWig Digital, our ORM team helps you build resilience into your brand identity. We work with you to create a digital reputation that earns trust, supports sales, and reinforces your brand value.",
                desc2:
                  "From small businesses to enterprise brands, our ORM services are tailored for proactive brand building and reactive damage control. As a dependable ORM Agency, we use powerful tools to monitor, repair, and elevate your digital reputation.",
              },
              {
                title: "ORM That Supports Growth",
                desc1:
                  "Online reputation management is not just about damage control. It plays a key role in long-term business development. A strong digital presence builds the kind of trust that attracts investors, partners, and top talent. Whether you're applying for a government tender, pitching to clients, or entering new markets, your online image can influence major decisions. At BigWig Digital , we help you shape a digital narrative that supports growth and opens doors to new opportunities. As a professional ORM Agency we ensure your reputation works as an asset, not a liability.",
              },
              {
                title: "Control the Conversation",
                desc1:
                  "You cannot control what people say, but you can control how your brand responds and what surfaces first. From search engine results to social mentions, every touchpoint influences your customer’s perception. By partnering with a leading ORM agency , you gain the tools and strategy to lead the conversation. BigWig Digital helps you respond with purpose, build authority, and maintain consistent brand messaging across all platforms. A strong reputation today ensures customer loyalty and business resilience tomorrow.",
              },
              {
                title: "Why BigWig for ORM Services",
                desc1:
                  "BigWig Digital understands the fast-paced nature of digital perception. We use proven strategies to build and protect your online reputation across platforms. As a growing ORM agency , we believe in transparency, consistent monitoring, and results that show in search rankings and sentiment shifts. With us, your brand earns more than just visibility. It earns credibility.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="
            relative p-8 rounded-3xl 
            bg-white/10 backdrop-blur-xl 
            border border-white/10 
            shadow-[0_0_25px_rgba(0,255,255,0.2)]
            hover:shadow-[0_0_35px_var(--color5)]
            transition-all duration-300 
            overflow-hidden min-h-[300px] flex flex-col gap-4
          "
              >
                {/* Scan Lines */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="
                  absolute left-0 w-full h-[2px]
                  bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                  animate-ormScanLine
                "
                      style={{
                        top: `${70 + i * 50}px`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[var(--color5)] drop-shadow-[0_0_8px_var(--color5)] relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                  {item.desc1}
                </p>
                <p className="text-gray-200 text-sm leading-relaxed relative z-10">
                  {item.desc2}
                </p>

                {/* Neon Hover Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Hologram Scanline Animation */}
        <style>{`
    @keyframes ormScanLine {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-ormScanLine {
      animation: ormScanLine 5s linear infinite;
    }
  `}</style>
      </section>

      <section className="py-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="relative w-11/12 md:w-5/6 mx-auto space-y-10 z-10">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color5)] text-center drop-shadow-[0_0_12px_var(--color5)]">
            Benefits of Strong Online Reputation Management
          </h2>

          {/* Grid Capsules */}
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Builds lasting customer trust",
              "Increases brand credibility across platforms",
              "Improves search engine visibility",
              "Protects against fake reviews or misinformation",
              "Attracts better business opportunities and partnerships",
              "Enhances personal branding for executives and founders",
              "Supports crisis recovery and public trust rebuilding",
            ].map((point, idx) => (
              <li
                key={idx}
                className="
            relative flex items-center gap-4
            p-4 rounded-full 
            backdrop-blur-xl bg-white/10 
            border border-white/10 
            shadow-[0_0_20px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_25px_var(--color5)]
            transition-all duration-300
            overflow-hidden group
          "
              >
                {/* Hologram Scan Line */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <div
                    className="
              absolute left-0 w-full h-[2px]
              bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
              animate-benefitScan
            "
                  ></div>
                </div>

                {/* Icon */}
                <span className="text-[var(--color5)] text-2xl drop-shadow-[0_0_10px_var(--color5)]">
                  ✔
                </span>

                {/* Text */}
                <span className="text-gray-200 text-lg">{point}</span>

                {/* Hover Outline Glow */}
                <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Scanline Animation */}
        <style>{`
    @keyframes benefitScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-benefitScan {
      animation: benefitScan 4s linear infinite;
      top: 50%;
    }
  `}</style>
      </section>

      <OurProcess />
      <WhyBigwig />
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
      <GetInTouch />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Footer />
    </div>
  );
}

export default OnlineReputationManagement;
