import React, { useState } from "react";
import fortVideo from "../assets/LUXURY REAL ESTATE VIDEO.mp4";
import OverviewImg from "../assets/image 2.png"; // your image here
import Animities from "@/components/Animities";
import masterImg from "../assets/Screenshot_6.png"; // change filename
import floorImg from "../assets/image 14.png"; // optional future
import buildingImg from "../assets/image 27.png";
import arrowImg from "../assets/Frame 48.png"
import subhamLogo from "../assets/Subham Paradise 2.png"
import img1 from "../assets/Screenshot_8.png";
import img2 from "../assets/Screenshot_8.png";
import img3 from "../assets/Screenshot_8.png";


const ShubhamParadise = () => {
  const tabs = [
    "Overview",
    "Amenities",
    "Layout Plans",
    "Location",
    "Image Gallery",
  ];

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

  const plan = ["Master Plan", "Floor Plan"];

  const galleryImages = [
  img1,
  img2,
  img3,
  img1,
  img2,
  img3,
]; // Add more images easily!


  const [activeTab, setActiveTab] = useState("Master Plan");

  return (
    <>
      {/* VIDEO SECTION */}
      <section className="relative w-full h-[450px] md:h-[520px] overflow-visible">
        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={fortVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* HEADING */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-[40px] font-extrabold">
            Shubham Paradise
          </h1>
        </div>

        {/* YELLOW NAVBAR (OVERLAP) */}
        <div className="absolute bottom-0 translate-y-1/2 w-full flex justify-center z-20">
          <div
            className="bg-[#D1A84F] max-w-[1140px] w-[90%] h-[72px] 
     text-white flex items-center justify-between px-[67px]
     rounded-2xl shadow-lg text-sm md:text-base"
          >
            {tabs.map((tab, index) => (
              <div key={index} className="flex flex-row gap-6">
                <button
                key={index}
                className="hover:opacity-80 texr-[20px] font-medium transition-all duration-300"
              >
                {tab}
              </button>
              <div className="h-8 w-[1px] bg-white"></div>
                
                </div>
              
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------
          OVERVIEW SECTION
      ------------------------- */}
      <section className="max-w-[1140px] mx-auto px-4 md:px-6 mt-[50px]">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">Overview</h2>
          <div className="flex items-center justify-center">
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
            <div className="w-[208px] h-[3px] bg-[#D2AB48]"></div>
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
          </div>
          <p className=" text-[20px] mt-[10px] font-medium">
            The address of royal living
          </p>
        </div>

        {/* TEXT + IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT TEXT */}
          <div>
            <p className="text-[16px] font-normal leading-6 text-justify">
              At Shubham Paradise, our constant dedication to provide unmatched
              experiences has led us to revolutionise the art of living. Our
              magnificent apartments are more than just rooms. They are a
              representation of luxury, created to enhance your way of life.
              Everything about your home is carefully chosen to give it a
              unique, beautiful appeal from well designed interiors to
              spectacular views that take in the entire scenery. Shubham
              Paradise is the pinnacle of opulent existence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-[100px] mt-12 text-center">
              <div className="flex flex-col items-start leading-tight w-[100px]">
                <p className="font-semibold text-[14px]">2 & 3 BHK</p>
                <p className="text-[13px] text-gray-600">Apartments</p>
              </div>

              <div className="flex flex-col items-start leading-tight w-[100px]">
                <p className="font-semibold text-[14px]">Well Equipped</p>
                <p className="text-[13px] text-gray-600">Modern Gym</p>
              </div>

              <div className="flex flex-col items-start leading-tight w-[100px]">
                <p className="font-semibold text-[14px]">Exelusive</p>
                <p className="text-[13px] text-gray-600">Terrace Garden</p>
              </div>

              <div className="flex flex-col items-start leading-tight w-[100px]">
                <p className="font-semibold text-[14px]">Refreshing</p>
                <p className="text-[13px] text-gray-600">Terrace Pool</p>
              </div>

            
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={OverviewImg}
            alt="Overview Project"
            className="w-full h-[350px] rounded-xl object-cover"
          />
        </div>

        {/* STATS GRID */}
      </section>
      <section className="w-full  mt-[30px]">
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">
            Amenities
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
            <div className="w-[208px] h-[3px] bg-[#D2AB48]"></div>
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
          </div>
          <p className=" text-[20px] mt-[10px] font-medium">
            The beauty lies in little detail
          </p>
        </div>
        <Animities />
      </section>
      <section className="w-full  mt-[30px]">
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">
            Layout Plans
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
            <div className="w-[208px] h-[3px] bg-[#D2AB48]"></div>
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
          </div>
          <div className="flex items-center  justify-center mt-1 gap-6">
            {plan.map((item, index) => (
              <p
                key={index}
                onClick={() => setActiveTab(item)} // set active tab
                className={`font-bold text-[20.06px] cursor-pointer  
        ${
          activeTab === item
            ? "text-[#D2AB48] underline underline-offset-4"
            : "text-black"
        }
        hover:text-[#D2AB48]`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* MAIN IMAGE SECTION  */}
        <div className="w-full py-12 bg-[#FFF9EA]">
          <div className="max-w-[1140px] mx-auto px-4">
            <img
              src={activeTab === "Master Plan" ? masterImg : floorImg}
              alt="Layout Plan"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full h-[350px] md:h-[420px] flex items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={buildingImg} // apni image yahan
          alt="Lease or Sale"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY (for text visibility) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* TEXT + BUTTON */}
        <div className="relative text-center ">
          <p className="uppercase text-white tracking-wide text-[22px] font-medium md:text-base">
            FOR LEASE OR SALE QUERIES
          </p>

          <button className="mt-4 bg-[#D2AB48] px-2 text-black py-2 w-[125px] rounded-md font-semibold hover:bg-[#b89434] ">
            Contact Now
          </button>
        </div>
      </section>
      <section className="w-full mt-10">
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">Location</h2>
          <div className="flex items-center justify-center">
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
            <div className="w-[208px] h-[3px] bg-[#D2AB48]"></div>
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
          </div>
          <p className=" text-[20px] mt-[10px] font-medium">
            LOCATION BENEFITS & TOP REASONS TO INVEST
          </p>
        </div>
        <section className="w-full bg-white py-16">
          <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT BOX */}
            <div className="bg-[#FFF7E6]  rounded-2xl p-8 shadow-md">
              <div className="max-w-[400px] mx-10">
                <img
                  src={subhamLogo} // apna logo yahan daalo
                  alt="Subham Developers"
                  className="w-[132px] h-[56px] mb-4"
                />

                <p className="text-gray-700 leading-6">
                  "The Fort, Basni, Opp. HDFC Bank, Near AIIMS Hospital,
                  Jodhpur(Raj.) - 342013"
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Near By Locations
                </h3>

                {/* NEARBY LIST */}
                <ul className="space-y-2">
                  {nearbyLocations.map((place, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <img src={arrowImg} size={18} /> {place}
                      </div>
                      <p>3.5 KM</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE GOOGLE MAP */}
            <div className="w-[554px] h-[536px] rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.590551232806!2d73.000374!3d26.279652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d232aaaab%3A0xabcdef!2sJodhpur!5e0!3m2!1sen!2sin!4v1686210000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="text-center mb-10">
          <h2 className="text-[32px] text-[#D2AB48] font-semibold">
            Image Gallery
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
            <div className="w-[208px] h-[3px] bg-[#D2AB48]"></div>
            <div className="w-3 h-[10px] bg-[#D2AB48] rotate-45"></div>
          </div>
          <p className=" text-[20px] mt-[10px] font-medium">
            The address of royal living
          </p>
        </div>
        <section className="max-w-[1140px] mx-auto px-4 md:px-6 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`gallery-${index}`}
                className="rounded-xl shadow-md object-cover w-full h-[220px] 
                   hover:scale-105 transition duration-300 cursor-pointer"
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ShubhamParadise;
