// components/About.jsx

import hero from "../assets/Screenshot.png";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* 🟢 TEXT FIRST FOR MOBILE, SECOND FOR DESKTOP */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-[2px] bg-[#d4af37]"></div> {/* Left line */}
            <p className="font-serif text-[18px] font-bold tracking-wide">
              About us
            </p>
          </div>

          <p className="text-[25px] font-medium text-gray-800 mt-1 mb-4">
            Welcome to Subham Developers
          </p>

          <p className=" text-[15px] font-normal leading-[1.5] font-sans text-justify">
            Subham Developers is Jodhpur’s trusted name in real estate,
            delivering premium residential projects including modern flats,
            luxury villas and gated communities. We are committed to quality
            construction, transparency and on-time delivery, ensuring every home
            reflects comfort and trust. With years of experience and a dedicated
            team, we focus on creating well-planned, beautifully designed and
            naturally lit living spaces that turn dreams into reality. Our
            projects are crafted with top-notch materials, thoughtful layouts
            and meticulous attention to detail, offering long-lasting value and
            a superior lifestyle. At Subham Developers, we aim to build more
            than just homes—we build relationships based on reliability,
            innovation and excellence, creating spaces that truly feel like
            home.
          </p>
        </div>

        {/* 🟢 IMAGE SECOND FOR MOBILE, FIRST FOR DESKTOP */}
        <div className="w-full h-full order-2 lg:order-1">
          <img
            src={hero}
            alt="Subham Developers"
            className="rounded-xl h-[190px] shadow-md w-full lg:h-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
