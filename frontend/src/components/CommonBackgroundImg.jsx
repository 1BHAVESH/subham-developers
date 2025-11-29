import bgImg from "../assets/pngwing.com _4.png"; // correct image import

const CommomImg = ({page, arrowSize}) => {
  console.log(arrowSize)
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="
        relative
        w-full h-[200px] md:h-[276px]  /* figma height */
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
      "
    >
      {/* Figma Gradient Overlay */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-r 
          from-[#C2932D] 
          via-[#d49e17] 
          to-[#6b5311]
          opacity-70
        "
      ></div>

      <div className={`${arrowSize ? 'w-[500px]' : 'w-[264px]'} relative z-10 text-center`}>
        <h2 className="text-[48px] font-alcuin mb-0 h-[58px]  font-bold tracking-wide text-white">
         {page || "About us"}
        </h2>
        <div className={ `flex items-center justify-center  mt-3`}>
          <div className="w-3 h-3 bg-white rotate-45"></div>
          <div className={`${arrowSize ? 'w-[500px]' : 'w-60'} h-[3px] bg-white`}></div>
          <div className="w-3 h-3 bg-white rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default CommomImg