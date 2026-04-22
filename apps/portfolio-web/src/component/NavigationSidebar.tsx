"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NavigationSidebar = () => {
  const currentRoute = usePathname();
  const [visibility, setVisibility] = useState(false);
  const [id, setId] = useState(0)

  const data = [
    {
      route: "/",
      section: [
        { title: "Naviagte your next", referredSection: "landing" },
        { title: "Digital core capabilities", referredSection: "skills" },
        { title: "Our operating model ", referredSection: "operating" },
        { title: "About us", referredSection: "aboutUs" },
        { title: "Feedback", referredSection: "feedback" },
        { title: "Carrer", referredSection: "carrer" },
        { title: "Contact us", referredSection: "contactUs" },
      ],
    },

    {
      route: "/about-us",
      section: [
        { title: "Naviagte your next", referredSection: "landing" },
        { title: "Digital core capabilities", referredSection: "skills" },
        { title: "Our operating model ", referredSection: "operating" },
        { title: "About us", referredSection: "aboutUs" },
        { title: "Feedback", referredSection: "feedback" },
        { title: "Carrer", referredSection: "carrer" },
        { title: "Contact us", referredSection: "contactUs" },
      ],
    },
  ];

  const currentSectionData = data.find((d) => d.route === currentRoute);

  return (
    <div className="w-[100px] h-[60vh] mx-[20px] fixed left-0 top-[20%] flex flex-col justify-center items-start gap-y-4 z-20">
      {currentSectionData?.section?.map((d, index) => {
        return (
          <li
            key={index}
            className="list-none w-1/2 h-[60px] hover:w-3/4 border-t border-neutral-600 text-sm transition-[width,border-width] duration-300 delay-300 ease-linear hover:border-t-[5px] flex justify-start items-start"
            onMouseOver={()=>{
              setVisibility(true);
              setId(index)
            }}
            onMouseOut={()=>{
              setVisibility(false)
              setId(100)
            }}
          >
            <button
              className={`w-full opacity-0 ${visibility && id === index ? "opacity-100" : "opacity-0" } hover:opacity-100 flex justify-start items-start transition-opacity duration-150 delay-75 ease-linear py-2 `}
              onClick={() => {
                const el = document.getElementById(d.referredSection);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {d.title}
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default NavigationSidebar;
