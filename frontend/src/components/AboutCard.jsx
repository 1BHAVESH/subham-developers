import React from "react";
import Abtimg2 from "../assets/Vector (3).png"; // small img

const AboutCard = () => {
  // 👉 Cards ka data (yahin se card banenge)
  const cards = [
    {
      id: "01",
      title: "Wide range of properties",
      desc: "At Subham Developers, we are committed to offer the best full-service Real Estate and Infrastructure Development.",
      icon: Abtimg2,
    },
    {
      id: "02",
      title: "Wide range of properties",
      desc: "At Subham Developers, we are committed to offer the best full-service Real Estate and Infrastructure Development.",
      icon: Abtimg2,
    },
    {
      id: "03",
      title: "Wide range of properties",
      desc: "At Subham Developers, we are committed to offer the best full-service Real Estate and Infrastructure Development.",
      icon: Abtimg2,
    },
  ];

  return (
    <>
      {/* FEATURE CARDS SECTION */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {cards.map((item, index) => (
            <div
              key={index}
              className="p-6 w-[360px] h-[278px] border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="w-[80px] h-[80px] bg-black rounded-md flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="w-7 h-7" />
                </div>
                <p className="font-semibold text-gray-700">{item.id}</p>
              </div>

              <h3 className="text-lg  font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default AboutCard;
