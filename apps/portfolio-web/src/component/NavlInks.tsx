"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavLinks = ({ navLinks }: { navLinks: any }) => {
  const [hoveredNavlink, setHoveredNavlink] = useState({
    id: "",
    state: false,
  });

  return (
    <>
      {navLinks?.map((d: any, index: any) => {
        return (
          <Link
            href={d.redirect}
            key={index}
            className={`dark:text-neutral-200 text-neutral-700 font-medium flex flex-col`}
            onMouseOver={() => {
              setHoveredNavlink({ id: d.title, state: true });
            }}
            onMouseOut={() => {
              setHoveredNavlink({ id: "", state: false });
            }}
          >
            {d?.title}
            <div
              className={`border-b-4 ${hoveredNavlink.id === d.title ? "border-b w-full" : "border-none w-0"} transition-[width,border] duration-300 delay-75 ease-linear`}
            ></div>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
