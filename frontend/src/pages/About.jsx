import React from "react";
import Abtimg1 from "../assets/figma_about_img.png"; // big img
import Abtimg2 from "../assets/figma_about_img.png"; // small img
import CommomImg from "@/components/CommonBackgroundImg";
import StatsSection from "@/components/StartSection";
import AboutCard from "@/components/AboutCard";

const About = () => {
  return (
    <>
  {/* TOP BG IMAGE SECTION */}
  <CommomImg />

  {/* MAIN CONTENT SECTION */}
  <section className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
      {/* LEFT TEXT SECTION */}
      <div className="max-w-lg lg:max-w-[535px] order-2 lg:order-1">
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight mb-3">
          The creative force
        </h2>
        <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed  text-justify">
          At Subham Developers, we are committed to offer the best full-service Real Estate 
          and Infrastructure Development. We aim at fulfilling one's dream into reality with 
          our professional approach, timely delivery and commitment to excellent service.
          Since its inception, we have focused on creating unmatched luxury spaces with 
          top-notch quality for our clients that surpasses our customer's aspirations. 
          The house of Subham Developers is a blend of experience and a dedicated team 
          to create spaces that offer natural light, air and aesthetically pleasing designs.
           Our work doesn't end with building a home, quality check-points are installed 
          at every level to ensure the best results. The company is setting new standards 
          in the real estate industry by creating quality-driven projects through our 
          client's trusts.
        </p>
        <br />
        
        <p className="text-sm sm:text-base lg:text-[16px] leading-[24px]  text-justify">
          At Subham Developers, we are committed to offer the best full-service Real Estate 
          and Infrastructure Development. We aim at fulfilling one's dream into reality with 
          our professional approach, timely delivery and commitment to excellent service.
          Since its inception, we have focused on creating unmatched luxury spaces with 
          top-notch quality for our clients that surpasses our customer's aspirations. 
          The house of Subham Developers is a blend of experience and a dedicated team 
          to create spaces that offer natural light, air and aesthetically pleasing designs.
           Our work doesn't end with building a home, quality check-points are installed 
          at every level to ensure the best results. The company is setting new standards 
          in the real estate industry by creating quality-driven projects through our 
          client's trusts.
        </p>
        
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="order-1 lg:order-2 flex flex-col gap-4 sm:gap-6">
        {/* BIG IMAGE */}
        <div className="w-full aspect-[3/2] sm:aspect-[547/366] rounded-2xl overflow-hidden">
          <img
            src={Abtimg1}
            className="w-full h-full object-cover"
            alt="Subham Developers project"
          />
        </div>

        {/* SMALL IMAGES IN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="w-full aspect-[1/1] sm:aspect-video rounded-2xl overflow-hidden">
            <img
              src={Abtimg2}
              className="w-full h-full object-cover"
              alt="Subham Developers project detail"
            />
          </div>
          <div className="w-full aspect-[1/1] sm:aspect-video rounded-2xl overflow-hidden">
            <img
              src={Abtimg2}
              className="w-full h-full object-cover"
              alt="Subham Developers project detail"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <StatsSection />
  <AboutCard />
</>

  );
};

export default About;
