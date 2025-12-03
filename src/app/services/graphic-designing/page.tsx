"use client";
import { TypeAnimation } from "react-type-animation";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import OurProcess from "../../../../components/OurProcess";
import WhyBigwig from "../../../../components/WhyBigwig";
import Hero from "../../../../Assets/Services hero/Graphic_Design.jpg";
import design from "../../../../Assets/services/9.jpg";
import ContactForm from "../../../../components/ContactForm";
import Image from "next/image";
import ButtonFill from "../../../../components/Button";
import PopupForm from "../../../../components/PopupForm";
import GetInTouch from "../../../../components/GetInTouch";
import { useState } from "react";
function GraphicDesigning() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-[var(--color1)]">
      <title>Professional Graphic Designing</title>
      <link
        rel="canonical"
        href="https://www.bigwigmediadigital.com/services/graphic-designing"
      />
      <meta
        name="description"
        content="Stand out with unique, creative, and impactful graphic design solutions for digital and print."
      />

      <Nav />
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-4"
        style={{ backgroundImage: `url(${Hero.src})` }}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
              Transform Your Ideas With The Best Graphic Design Agency
            </h1>

            <p
              className="text-3xl md:text-4xl font-semibold flex items-center gap-2 text-[var(--color5)]"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              Design That&nbsp;
              <TypeAnimation
                sequence={[
                  "Connects",
                  2000,
                  "Communicates ",
                  2000,
                  "Converts",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>

            <p className="text-base md:text-lg max-w-md text-white/90">
              we craft bold visuals and crazy concepts every second to keep your
              brand always trending.
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
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl md:font-bold font-semibold text-[var(--color5)]">
              A Creative Graphic Design Agency, NCR
            </h2>

            <p className="text-lg text-white text-justify py-5">
              At
              <strong>
                <a href="https://www.bigwigdigital.in/"> BigWig Digital </a>
              </strong>{" "}
              we believe in the potency of using images and graphics to express
              stories. home to many vibrant enterprises, and in order to
              transform their concepts into eye-catching visual experiences,
              they want a graphic design firm that is very imaginative,
              committed, and hardworking. It has established itself as one of{" "}
              World&#39;s top graphic design firms thanks to Creative Orion.
              Whether you are from a local business or the fashion sector, or
              you are a start-up or established brand, we offer graphic design
              services to everyone. All sectors can benefit from our highly
              innovative and customized solutions.
            </p>

            <p className="text-lg text-white text-justify py-5">
              <span className="italic">
                <a href="https://www.bigwigdigital.in/">BigWig Digital&#39;s</a>
              </span>{" "}
              graphics department provides 360° graphic design support to help
              you advance your business endeavors. Adhering to the maxim that
              &#34;great design leads to great businesses,&#34; our team of
              expert graphic designers provides top-notch design support for all
              of your needs, including packaging, adverts, logos, and more. As a{" "}
              Graphic Design Company , we offer the best possible design
              services by utilizing the newest, most advanced software, the
              creative abilities of our designers, and our knowledge of every
              industry with essential resources. BigWig Digital provides web
              design services to customers all over the world.
            </p>

            {/* New Replaced Third Paragraph as Icon List */}
            <div className="grid md:grid-cols-2 gap-10 items-center py-10">
              {/* Left: Features Grid */}
              <div className="grid grid-cols-1 gap-6 text-left">
                {[
                  {
                    icon: "🧩",
                    title: "Complete Design Solutions for Every Industry",
                    description:
                      "From startups to established enterprises, we offer a wide range of graphic design services tailored to suit all business verticals.",
                  },
                  {
                    icon: "💡",
                    title: "Creative Experts with Proven Experience",
                    description:
                      "Our seasoned design professionals understand what works best for your brand and create visuals that leave a lasting impression.",
                  },
                  {
                    icon: "🎯",
                    title: "Impactful Designs That Drive Results",
                    description:
                      "We craft eye-catching, functional designs that help you communicate effectively with your audience and promote your offerings globally.",
                  },
                  {
                    icon: "🛠",
                    title: "Latest Tools, Limitless Innovation",
                    description:
                      "Using cutting-edge graphic design tools and techniques, our passionate team delivers high-quality, trend-forward designs every time.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--color5)]">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Image */}
              <div>
                <Image
                  src={design}
                  alt="The Best Graphic Design Agency"
                  className="w-full h-[60vh] rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl md:font-bold font-semibold text-[var(--color5)] text-center">
              We use advanced graphic designing tools to create impressive ideas
              for you
            </h2>

            <p className="text-lg text-white text-justify">
              <strong>Creative Visual Impact:</strong> BigWig Digital, the
              leading graphic design company, delivers visually compelling
              designs using text, symbols, logos, colors, and images to create
              instant impact. Our work helps clients effectively promote their
              brands, products, and services.
            </p>

            <p className="text-lg text-white  text-justify">
              <strong>Expert Team & Innovative Approach:</strong> Our skilled
              and imaginative design team transforms ideas into artistic
              marvels, blending creativity with client input to deliver
              tailored, high-quality visual solutions that exceed expectations.
            </p>
          </div>

          <div className="relative bg-[var(--color5)]/5 p-10 rounded-2xl backdrop-blur-xl overflow-hidden">
            {/* Hologram Lines Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="
          absolute left-0 w-full h-[2px]
          bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
          animate-gfxScan
        "
                  style={{
                    top: `${40 + i * 50}px`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                />
              ))}
            </div>

            {/* Title */}
            <h3
              className="
      text-2xl md:text-3xl font-bold 
      text-[var(--color5)] 
      mb-10 text-center md:text-left 
      inline-block px-8 py-3 rounded-full
      border border-[var(--color5)]
      shadow-[0_0_20px_var(--color5)]
      bg-white/5 backdrop-blur-xl
    "
            >
              Graphic Design Services We Offer :-
            </h3>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { title: "Package design", icon: "📦" },
                { title: "Logo designs", icon: "🎨" },
                { title: "Illustrations", icon: "🖌️" },
                { title: "Stationeries", icon: "🗂️" },
                { title: "Business cards", icon: "💼" },
                { title: "Banner designs", icon: "🖼️" },
                { title: "Brochure design", icon: "📘" },
                { title: "Animated designs", icon: "🎞️" },
                { title: "Leaflet designs", icon: "📄" },
                { title: "Catalogue designs", icon: "📚" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
          group relative flex items-center gap-4 p-5 
          rounded-2xl backdrop-blur-xl bg-white/10 
          border border-[var(--color3)] 
          hover:border-[var(--color5)] 
          hover:shadow-[0_0_20px_var(--color5)]
          transition-all duration-300 
          min-h-[100px]
          overflow-hidden
        "
                >
                  {/* Inner holo scan lines */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="
                absolute left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                animate-gfxScan
              "
                        style={{
                          top: `${30 + i * 35}px`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Icon */}
                  <div
                    className="
            text-3xl p-3 rounded-full
            bg-white/10 backdrop-blur-lg 
            border border-white/20
            group-hover:shadow-[0_0_15px_var(--color5)]
            transition-all
          "
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <div className="text-[var(--color5)] font-medium text-sm md:text-base">
                    {item.title}
                  </div>

                  {/* Hover neon border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--color5)] transition-all"></div>
                </div>
              ))}
            </div>

            {/* Animations */}
            <style>{`
    @keyframes gfxScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-gfxScan {
      animation: gfxScan 4s linear infinite;
    }
  `}</style>
          </div>

          <div className="mt-10">
            <p className="text-white text-lg leading-relaxed">
              Through our designs, we have assisted numerous well-known clients
              in achieving exceptional brand and commercial visibility. The best
              and most well-known type of advertising is branding, and our
              design makes a strong statement. Any kind of design can be created
              and curated by
              <strong>
                <a href="https://www.bigwigdigital.in/"> BigWig Digital</a>
              </strong>
              , A Top Graphic Design Firm , United Arab Emirates, New Zealand,
              and Australia. All you have to do is present us with your idea,
              and we will do everything in our power to meet your expectations
              by providing unmatched graphic design services in a predetermined
              amount of time.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 relative overflow-hidden">
        {/* MATRIX CYBER BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://res.cloudinary.com/dcq2oziz4/image/upload/v1764569855/5079835_mfzfld.jpg')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>

        <div className="w-11/12 md:w-5/6 mx-auto relative z-10 space-y-12">
          {/* ====================== HEADING ====================== */}
          <div className="flex justify-center">
            <h2
              className="
          text-2xl md:text-4xl font-bold text-[var(--color5)]
          px-10 py-3 rounded-full
          border border-[var(--color5)]
          shadow-[0_0_25px_var(--color5)]
          backdrop-blur-xl bg-white/5
          text-center
        "
            >
              Why Is Professional Graphic Design Essential for Your Business?
            </h2>
          </div>

          {/* INTRO TEXT */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Excellent graphic design is essential for long-term success your
            visual identity is the face of your brand. Just like your health, it
            needs consistent care and investment.
            <br />
            <br />
            With a skilled graphic design agency, you can craft a recognizable,
            trustworthy, and visually impactful brand.
          </p>

          {/* ====================== GRID BOXES ====================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "It makes a powerful initial impression",
                content:
                  "The user encounters your goods or service initially. It's the images of your brand. Customers' perceptions of your brand are shaped by the images they see. Visual appeal is important in today's aesthetic-driven economy, despite its apparent superficiality.",
                border: "border-l-4",
              },
              {
                title: "Increases Recognition of the Brand",
                content:
                  "A strong brand identity is built through consistent and creative design. Thankfully, our talented graphic designers are prepared to use their exceptional abilities to increase brand recognition.",
                border: "border-r-4",
              },
              {
                title: "Promotes Credibility & Trust",
                content:
                  "A polished and professional appearance inspires confidence in your audience. When consumers see your brand for the first time, they are drawn to it by its visuals, which increases credibility and trust.",
                border: "border-l-4",
              },
              {
                title: "Boosts Engagement and Conversions",
                content:
                  "Our graphic design firm uses visuals to highlight interactions and conversions, ensuring that it draws in more customers and boosts sales.",
                border: "border-r-4",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
            relative p-6 rounded-2xl 
            backdrop-blur-xl bg-white/10 
            ${item.border} border-[var(--color5)] 
            shadow-[0_0_20px_rgba(0,255,255,0.15)]
            hover:shadow-[0_0_30px_var(--color5)]
            transition-all duration-300
            overflow-hidden min-h-[200px]
          `}
              >
                {/* HOLOGRAM SCAN LINES */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="
                          absolute left-0 w-full h-[2px]
                          bg-gradient-to-r from-transparent via-[var(--color5)] to-transparent
                          animate-gdScan
                "
                      style={{
                        top: `${50 + j * 40}px`,
                        animationDelay: `${j * 0.25}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* TITLE */}
                <h4 className="font-semibold text-xl mb-3 text-[var(--color5)] ">
                  {item.title}
                </h4>

                {/* CONTENT */}
                <p className="text-sm md:text-base text-gray-200 leading-relaxed text-justify">
                  {item.content}
                </p>

                {/* HOVER NEON BORDER */}
                <div className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-[var(--color5)] transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
    @keyframes gdScan {
      0% { transform: translateX(-100%); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(100%); opacity: 0; }
    }
    .animate-gdScan {
      animation: gdScan 4s linear infinite;
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

export default GraphicDesigning;
