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
      <section className="max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT TEXT SECTION */}
          <div className="max-w-[535px]">
            <h2 className="text-[32px] md:text-[32px] font-semibold ">
              The creative force
            </h2>
            <p className="text-[16px] leading-6 text-gray-700  text-justify">
              At Subham Developers, we are committed to offer the best
              full-service Real Estate and Infrastructure Development. We aim at
              fulfilling one's dream into reality with our professional
              approach, timely delivery and commitment to excellent service.
              Since its inception, we have focused on creating unmatched luxury
              spaces with top-notch quality for our clients that surpasses our
              customer's aspirations. The house of Subham Developers is a blend
              of experience and a dedicated team to create spaces that offer
              natural light, air and aesthetically pleasing designs. Our work
              doesn't end with building a home, quality check-points are
              installed at every level to ensure the best results. The company
              is setting new standards in the real estate industry by creating
              quality-driven projects through our client's trusts.
              <br />
              <br />
              At Subham Developers, we are committed to offer the best
              full-service Real Estate and Infrastructure Development. We aim at
              fulfilling one's dream into reality with our professional
              approach, timely delivery and commitment to excellent service.
              Since its inception, we have focused on creating unmatched
              luxuryspaces with top-notch quality for our clients that surpasses
              our customer's aspirations. The house of Subham Developers is a
              blend of experience and a dedicated team to create spaces that
              offer natural light, air and aesthetically pleasing designs. Our
              work doesn't end with building a home,
            </p>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex flex-col gap-4">
            {/* BIG IMAGE */}
            <img
              src={Abtimg1}
              className="w-[547px] h-[366px] rounded-xl object-cover"
              alt="project"
            />

            {/* SMALL IMAGES IN GRID */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src={Abtimg2}
                className="w-full h-[188px] rounded-xl object-cover"
                alt="project"
              />
              <img
                src={Abtimg2}
                className="w-full h-[188px] rounded-xl object-cover"
                alt="project"
              />
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
