import React, { useState, useEffect } from "react";
import fortVideo from "../assets/LUXURY REAL ESTATE VIDEO.mp4";
import OverviewImg from "../assets/Screenshot_5.png";
import Animities from "@/components/Animities";
import masterImg from "../assets/image 14.png";
import floorImg from "../assets/image 14.png";
import buildingImg from "../assets/image 27.png";
import arrowImg from "../assets/Frame 48.png";
import subhamLogo from "../assets/Subham Paradise 2.png";
import img1 from "../assets/image 16.png";
import img2 from "../assets/image 17.png";
import img3 from "../assets/image 18.png";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";

const TheFortJodhpur = () => {
  const tabs = ["Overview", "Amenities", "Layout Plans", "Location", "Image Gallery"];
  const plan = ["Master Plan", "Floor Plan"];
  const galleryImages = [img1, img2, img3, img1, img2, img3];
  const nearbyLocations = [
    "AIIMS",
    "National Highway",
    "Medipluse Hospital",
    "Indiabulls Mega Mall",
    "Jodhpur Railway Station",
    "Jodhpur Airport",
    "DPS School",
    "Lucky International School",
    "The New High Court",
  ];

  const [activeTab, setActiveTab] = useState("Master Plan");

  // Swiper Lightbox States
  const [swiperOpen, setSwiperOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Open image in fullscreen swiper
  const openSwiper = (index) => {
    setStartIndex(index);
    setSwiperOpen(true);
  };

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSwiperOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* ================= VIDEO SECTION ================= */}
      <section className="relative w-full h-[450px] md:h-[520px] overflow-visible">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={fortVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-[40px] font-extrabold">The Fort Jodhpur</h1>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="max-w-[1140px] mx-auto px-4 md:px-6 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">Overview</h2>
          <p className="text-[20px] mt-2 font-medium">The address of royal living</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-[16px] leading-6 text-justify">
            Created to perfection, The Fort is a blend of modern luxuries...
          </p>
          <img src={OverviewImg} className="w-full h-[350px] rounded-xl object-cover" />
        </div>
      </section>

      {/* ================= LAYOUT ================= */}
      <section className="w-full mt-10">
        <div className="text-center">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">Layout Plans</h2>
          <div className="flex items-center justify-center gap-6 mt-4">
            {plan.map((item, i) => (
              <p
                key={i}
                onClick={() => setActiveTab(item)}
                className={`font-bold text-[20px] cursor-pointer ${
                  activeTab === item ? "text-[#D2AB48] underline" : "text-black"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full py-12 bg-[#FFF9EA]">
          <div className="max-w-[1140px] mx-auto px-4">
            <img
              src={activeTab === "Master Plan" ? masterImg : floorImg}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= IMAGE GALLERY + SWIPER ================= */}
      <section className="max-w-[1140px] mx-auto px-4 md:px-6 my-16">
        <div className="text-center mb-6">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">Image Gallery</h2>
        </div>

        {/* gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() => openSwiper(index)}
              className="rounded-xl shadow-md w-full h-[220px] object-cover cursor-pointer hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* FULLSCREEN SWIPER (LIGHTBOX MODE) */}
  {swiperOpen && (
  <div className="fixed h-10 mt-90 inset-0 bg-black/90 z-50 flex justify-center items-center p-0" onClick={() => setSwiperOpen(false)}>

    <div className="relative bg-black rounded-xl shadow-xl 
                    w-[90vw] h-[50vh] flex items-center justify-center p-2">

      {/* CLOSE BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSwiperOpen(false);
        }}
        className="cursor-pointer hover:border-2 hover:border-yellow-300 absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full z-[100] text-lg"
      >
        ✕
      </button>

      {/* SWIPER */}
      <div className="w-full h-full pointer-events-none
        [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden
        sm:[&_.swiper-button-next]:block sm:[&_.swiper-button-prev]:block
        [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white
      ">
        <Swiper
          initialSlide={startIndex}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center w-full h-full pointer-events-auto p-4 sm:p-12">
                <img
                  src={img}
                  className="max-w-full max-h-full object-contain"
                  alt={`Gallery image ${i + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
)}



    </>
  );
};

export default TheFortJodhpur;
