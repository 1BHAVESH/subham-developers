import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faShieldHalved,
  faCamera,
  faFireExtinguisher,
  faWater,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

const Animities = () => {
  const amenities = [
    { text: "Ample Parking Space", icon: faCar },
    { text: "Beautiful Landscaping", icon: faCamera },
    { text: "Rain Water Harvesting System", icon: faWater },
    { text: "Adequate Water Supply", icon: faWater },
    { text: "CCTV Surveillance", icon: faVideo },
    { text: "3 Tier Security", icon: faShieldHalved },
    { text: "Entry through Security Application", icon: faShieldHalved },
    { text: "Security Guards at Entry & Exit Point", icon: faShieldHalved },
   
  ];

  return (
    <section className="w-full h-[460px] py-16 bg-[#0e0e0e] bg-cover bg-center">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[145px] h-[106px]">
              <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-full cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-black text-[22px]" />
              </div>
              <p className="text-white mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Animities;
