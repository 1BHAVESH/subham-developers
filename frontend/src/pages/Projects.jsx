import CommomImg from "@/components/CommonBackgroundImg";
import ProjectsImgAndPdf from "@/components/ProjectsImgAndPdf";
import React from "react";

const Projects = () => {
  return (
   <>
   <CommomImg page="Projects"/>
    <section className="w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Top Text */}
        <p className="text-[#D2AB48] text-[20px] md:text-[24px] font-medium">
          About Properties at Subham Developers
        </p>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] font-semibold mt-2">
          List of Available Properties
        </h2>
      </div>
    </section>
    <section className="max-w-[1070px] mx-auto mb-10">
       {
        [1,2,3].map((id) => ( <ProjectsImgAndPdf key={id}/>))
       }
    </section>
   </>
  );
};

export default Projects;
