"use client";

import Image from "next/image";
import { useState } from "react";

// Lucide Icons
import { Star, Heart, Target, Magnet, TrendingUp } from "lucide-react";

import rainbowImg from "../Assets/bg01.png";

type StepItem = {
  num: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  numberPos: { left: string; top: string }; // <-- Number position
  popupPos: { left: string; top: string }; // <-- Popup custom position
};

export default function RainbowSteps() {
  const [active, setActive] = useState<number | null>(null);

  const data: StepItem[] = [
    {
      num: "01",
      title: "Brand Awareness",
      desc: "Let’s spread the word!",
      Icon: Star,
      numberPos: { left: "22%", top: "63%" },
      popupPos: { left: "-450%", top: "-100%" }, // 🌟 YOU CONTROL THIS
    },
    {
      num: "02",
      title: "Traffic & Engagement",
      desc: "Make your audience fall in love with your product",
      Icon: Heart,
      numberPos: { left: "33%", top: "25%" },
      popupPos: { left: "-480%", top: "-280%" },
    },
    {
      num: "03",
      title: "Advertise & Retarget",
      desc: "Chase your customers across the internet",
      Icon: Target,
      numberPos: { left: "48%", top: "18%" },
      popupPos: { left: "-35%", top: "-500%" },
    },
    {
      num: "04",
      title: "Retention",
      desc: "Keep making your customers come back to you",
      Icon: Magnet,
      numberPos: { left: "62%", top: "18%" },
      popupPos: { left: "60%", top: "-480%" },
    },
    {
      num: "05",
      title: "Consistent Business Growth",
      desc: "Get busy collecting revenue 365 days",
      Icon: TrendingUp,
      numberPos: { left: "68%", top: "63%" },
      popupPos: { left: "200%", top: "-200%" },
    },
  ];

  return (
    <section className="py-20 flex flex-col items-center relative overflow-visible">
      <div className="relative w-[780px] max-w-full mx-auto">
        {/* MAIN IMAGE */}
        <Image src={rainbowImg} alt="Rainbow Arc" className="w-full" />

        {/* INTERACTIVE LAYER */}
        <div className="absolute inset-0 pointer-events-none">
          {data.map((item, i) => {
            const Icon = item.Icon;

            return (
              <div
                key={i}
                className="absolute pointer-events-auto cursor-pointer select-none"
                style={item.numberPos} // 🎯 number position
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* NUMBER */}
                <span className="font-extrabold text-4xl text-white drop-shadow-xl">
                  {item.num}
                </span>

                {/* POPUP */}
                {active === i && (
                  <div
                    className="absolute z-50 animate-bounceIn flex flex-col items-center text-center"
                    style={item.popupPos} // 🎯 popup exact placement
                  >
                    <Icon size={38} className="text-blue-600 drop-shadow-lg" />
                    <h4 className="font-bold text-lg mt-2">{item.title}</h4>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.4); }
          60% { opacity: 1; transform: scale(1.1); }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-bounceIn {
          animation: bounceIn 0.35s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
