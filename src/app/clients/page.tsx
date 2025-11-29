"use client";
import { useEffect } from "react";
import "./Clients.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Image from "next/image";

const clients = [
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1762152048/logo_npwakv.webp",
    link: "https://khalsapropertydealers.com/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493003/Granth_logo_6_kyrd5s.png",
    link: "https://granthdreamhomes.co.in/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493217/logo-01-C0F3dP5k_y93g4q.svg",
    link: "https://www.closefriendstraders.info/",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759494155/WhatsApp_Image_2025-10-03_at_17.51.27_4308166d_d3ll1m.jpg",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759494916/Gear_Tek_Logo-removebg-preview_j5p3wc.png",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759495461/Pearls_light_logo_m623gc.png",
    link: "https://pearlsindia.co.in",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493348/Screenshot_2025-10-03_173836_egmouo.png",
    link: "https://www.billiondollarfx.com",
  },
  {
    img: "https://res.cloudinary.com/dcq2oziz4/image/upload/v1759493451/Screenshot_2025-10-03_174033_n9gbp7.png",
    link: "https://mondus.vercel.app",
  },
  {
    img: "https://www.stellarbinge.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.3fb31e53.png&w=384&q=75&dpl=dpl_55KVEMQgqTHhJzShfN5EefE2pTXK",
    link: "https://www.stellarbinge.com",
  },
  {
    img: "https://www.integratedlognet.com/assets/ILN%20Logo%20v2-E6ypUoII.png",
    link: "https://www.integratedlognet.com/",
  },
  {
    img: "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
    link: "https://riverfront.vercel.app/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112478/DBN_logo_x7wjzx.webp",
    link: "https://www.destinybynumberrs.com/",
  },
  {
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1763112443/logo_1_tnncgd.webp",
    link: "https://www.ethicalinfrastructures.com/",
  },
  {
    img: "https://www.homesandlandgoa.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b166d281.png&w=640&q=75&dpl=dpl_CAHgoDqvf7txY4ReKMyGa6ZD9Ti4",
    link: "https://homesandlandgoa.com",
  },
];

const stylePairs = [
  {
    bg: "bg-red-100",
    border: "border-red-500",
    hoverBg: "group-hover:bg-red-100",
    hoverBorder: "group-hover:border-red-500",
  },
  {
    bg: "bg-green-100",
    border: "border-green-500",
    hoverBg: "group-hover:bg-green-100",
    hoverBorder: "group-hover:border-green-500",
  },
  {
    bg: "bg-blue-100",
    border: "border-blue-500",
    hoverBg: "group-hover:bg-blue-100",
    hoverBorder: "group-hover:border-blue-500",
  },
  {
    bg: "bg-yellow-100",
    border: "border-yellow-500",
    hoverBg: "group-hover:bg-yellow-100",
    hoverBorder: "group-hover:border-yellow-500",
  },
  {
    bg: "bg-purple-100",
    border: "border-purple-500",
    hoverBg: "group-hover:bg-purple-100",
    hoverBorder: "group-hover:border-purple-500",
  },
  {
    bg: "bg-pink-100",
    border: "border-pink-500",
    hoverBg: "group-hover:bg-pink-100",
    hoverBorder: "group-hover:border-pink-500",
  },
];

function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    AOS.refresh(); // Ensures animations re-initialize correctly
  }, []);

  return (
    <div className="bg-[var(--color1)]">
      <Nav />

      <title>Our Clients</title>
      <meta
        name="description"
        content="Discover the brands and businesses we’ve proudly partnered with for digital transformation."
      />
      <link rel="canonical" href="https://www.bigwigmediadigital.com/clients" />

      <div className=" py-12 mt-7 w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => {
            const { img, link } = client;
            const { hoverBg, hoverBorder } =
              stylePairs[index % stylePairs.length];

            return (
              <div
                className="group aspect-square w-full"
                data-aos="zoom-in"
                key={index}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div
                    className={`bg-gray-200 border-gray-300 border-8 rounded-sm 
          flex items-center justify-center w-full h-full 
          transition duration-300 
          ${hoverBg} ${hoverBorder}`}
                  >
                    <Image
                      src={img}
                      alt={`Client ${index + 1}`}
                      className="w-4/5 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                      width={200}
                      height={200}
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clients;
