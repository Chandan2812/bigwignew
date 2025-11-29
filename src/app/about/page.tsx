"use client";

import Image from "next/image";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

import heroImg from "../../../Assets/Grow_your_business-removebg-preview.webp"; // replace with your hero image
import aboutImg from "../../../Assets/Handleey-SMS-New-removebg-preview.webp"; // replace with your image
import { useState } from "react";
import PopupForm from "../../../components/PopupForm";
import ButtonFill from "../../../components/Button";
import {
  BarChart3,
  Cog,
  Facebook,
  FileText,
  Linkedin,
  ListChecks,
  Send,
  TrendingUp,
  Twitter,
} from "lucide-react";
import why from "../../../Assets/Handleey-Social-Media-Post.webp";
import owner from "../../../Assets/owner.webp";
import GetInTouch from "../../../components/GetInTouch";

export default function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="bg-[var(--color1)] text-gray-200">
      <Nav />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroImg}
          alt="Agency Hero Image"
          fill
          priority
          className="object-cover brightness-50"
        />

        {/* Text Overlay */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Strategic Digital Marketing Agency
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dictum leo nec sem facilisis, id faucibus velit elementum.
          </p>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="w-11/12 md:w-5/6 mx-auto py-12 flex flex-col md:flex-row items-center gap-14">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2">
          <p className="text-[var(--color5)] text-lg font-semibold border-b mb-3 w-fit tracking-widest">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color4)] mb-6">
            We Help Brands Grow With Strategy, Creativity & Digital Innovation
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Bigwig Media Digital is a full-funnel digital marketing agency
            helping brands scale through performance-driven strategies, stunning
            creatives, and a data-first approach.
            <br />
            <br />
            Whether you&#39;re a startup looking for visibility or an
            established brand aiming for aggressive growth—our team blends
            content, design, paid media, and technology to deliver consistent
            results across platforms like Google, Meta, YouTube & more.
          </p>

          {/* STATS BOXES */}
          <div className="grid grid-cols-2 gap-5 mt-6">
            {/* Box 1 */}
            <div className="bg-[#1E293B]/60 border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center mb-3">
                <BarChart3 className="text-[#38BDF8] w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white">94%</h3>
              <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#1E293B]/60 border border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center mb-3">
                <TrendingUp className="text-[#38BDF8] w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white">65%</h3>
              <p className="text-gray-400 text-sm mt-1">Average Growth</p>
            </div>
          </div>

          {/* BUTTON */}
          <ButtonFill
            onClick={() => setIsPopupOpen(true)}
            text="Get in Touch"
            className="mt-6"
          />
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2">
          <Image
            src={aboutImg}
            alt="About Bigwig Digital"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </section>

      {/* ================= OUR WORKING PROCESS SECTION ================= */}
      <section className=" py-12 relative bg-gradient-to-b from-[var(--color1)] via-[var(--color2)] to-[var(--color1)]">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* Title */}
          <div className="text-center mb-5">
            <p className="text-[var(--color5)] text-lg font-semibold mb-3 tracking-widest inline-block border-b-2 border-[var(--color5)]">
              OUR PROCESS
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color4)] mb-6">
              Our Working Process
            </h2>
          </div>

          <div className="relative w-full mx-auto px-4">
            {/* ZIGZAG LINE (DESKTOP ONLY) */}
            <div className="absolute inset-0 hidden md:block pointer-events-none">
              <svg
                width="100%"
                height="260"
                viewBox="0 0 1600 260"
                className="opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="10"
                    refY="5"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L10,5 L0,10 L2,5 Z" fill="#38BDF8" />
                  </marker>
                </defs>

                <path
                  d="M 150 80 L 500 200 L 850 80 L 1200 200 L 1550 80"
                  stroke="#38BDF8"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  marker-end="url(#arrow)"
                />
              </svg>
            </div>

            {/* DESKTOP — ABSOLUTE POSITION STEPS */}
            <div className="hidden md:block relative h-[300px] ">
              {/* STEP 1 — Top Left */}
              <div className="absolute left-[20px] top-[35px] text-center">
                <div
                  className="bg-[#0d223c] border border-white/10 rounded-full w-24 h-24 
          flex items-center justify-center shadow-lg mx-auto"
                >
                  <ListChecks size={38} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-lg font-semibold text-white mt-4">
                  Choose a Service
                </h4>
                <p className="text-gray-400 text-sm max-w-[220px] mt-2">
                  Select the service that fits your brand.
                </p>
              </div>

              {/* STEP 2 — Bottom */}
              <div className="absolute left-[280px] top-[120px] text-center">
                <div
                  className="bg-[#0d223c] border border-white/10 rounded-full w-24 h-24
          flex items-center justify-center shadow-lg mx-auto"
                >
                  <FileText size={38} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-lg font-semibold text-white mt-4">
                  Define Requirements
                </h4>
                <p className="text-gray-400 text-sm max-w-[220px] mt-2">
                  Share your goals, vision & brand details.
                </p>
              </div>

              {/* STEP 3 — Top */}
              <div className="absolute left-[560px] top-[35px] text-center">
                <div
                  className="bg-[#0d223c] border border-white/10 rounded-full w-24 h-24
          flex items-center justify-center shadow-lg mx-auto"
                >
                  <Cog size={38} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-lg font-semibold text-white mt-4">
                  Development & Planning
                </h4>
                <p className="text-gray-400 text-sm max-w-[220px] mt-2">
                  We plan, design & start execution.
                </p>
              </div>

              {/* STEP 4 — Bottom */}
              <div className="absolute left-[840px] top-[120px] text-center">
                <div
                  className="bg-[#0d223c] border border-white/10 rounded-full w-24 h-24
          flex items-center justify-center shadow-lg mx-auto"
                >
                  <Send size={38} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-lg font-semibold text-white mt-4">
                  Final Delivery
                </h4>
                <p className="text-gray-400 text-sm max-w-[220px] mt-2">
                  Final delivery with optimization.
                </p>
              </div>
            </div>

            {/* MOBILE — BOX CARDS */}
            <div className="grid md:hidden grid-cols-1 gap-6 mt-10">
              {/* Card */}
              <div className="bg-[#0d223c] border border-white/10 p-6 rounded-xl text-center">
                <div className="bg-[#112a45] rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <ListChecks size={34} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Choose a Service
                </h4>
                <p className="text-gray-400 text-sm mt-2">
                  Select a service for your brand.
                </p>
              </div>

              <div className="bg-[#0d223c] border border-white/10 p-6 rounded-xl text-center">
                <div className="bg-[#112a45] rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <FileText size={34} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Define Requirements
                </h4>
                <p className="text-gray-400 text-sm mt-2">
                  Share your goals & details.
                </p>
              </div>

              <div className="bg-[#0d223c] border border-white/10 p-6 rounded-xl text-center">
                <div className="bg-[#112a45] rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <Cog size={34} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Development & Planning
                </h4>
                <p className="text-gray-400 text-sm mt-2">
                  We start the development process.
                </p>
              </div>

              <div className="bg-[#0d223c] border border-white/10 p-6 rounded-xl text-center">
                <div className="bg-[#112a45] rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <Send size={34} className="text-[#38BDF8]" />
                </div>
                <h4 className="text-xl font-semibold text-white">
                  Final Delivery
                </h4>
                <p className="text-gray-400 text-sm mt-2">
                  We deliver and optimize results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color1)]">
        <div className="w-11/12 md:w-5/6 mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text Side */}
          <div className="md:w-1/2">
            <p className="text-[var(--color5)] text-lg font-semibold border-b mb-3 w-fit tracking-widest">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color4)] mb-6">
              We Deliver Excellence
            </h2>
            <p className="text-gray-200 mb-8">
              Our team provides innovative solutions tailored to your business.
              We focus on delivering quality, efficiency, and reliability in
              every project.
            </p>

            {/* Small Box Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  Expert Team
                </h3>
                <p className="text-gray-200 text-sm">
                  Skilled professionals delivering top-quality results.
                </p>
              </div>
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  Innovative Solutions
                </h3>
                <p className="text-gray-200 text-sm">
                  Creative strategies to solve complex challenges.
                </p>
              </div>
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  24/7 Support
                </h3>
                <p className="text-gray-200 text-sm">
                  Always available to assist you whenever needed.
                </p>
              </div>
              <div className="bg-[var(--color2)] p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-1 text-[var(--color4)]">
                  Proven Results
                </h3>
                <p className="text-gray-200 text-sm">
                  Delivering measurable outcomes for every client.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="md:w-1/2">
            <Image
              src={why}
              alt="Why Choose Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="w-11/12 md:w-5/6 mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={owner} // replace with your founder image
              alt="Amandeep Singh"
              className="w-72 rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[var(--color5)] font-semibold mb-2 tracking-widest inline-block border-b-2 border-[var(--color5)]">
              FOUNDER’S NOTE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color4)] mb-6">
              A Message from Our Founder
            </h2>
            <p className="text-gray-200 mb-6">
              “Our mission has always been to deliver exceptional digital
              solutions that help our clients grow and succeed. We focus on
              innovation, quality, and building lasting relationships with every
              project we take on.”
            </p>
            <h3 className="text-xl font-semibold text-gray-100 mb-1">
              Amandeep Singh
            </h3>
            <p className="text-gray-300">Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}

      <GetInTouch />

      <Footer />
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
