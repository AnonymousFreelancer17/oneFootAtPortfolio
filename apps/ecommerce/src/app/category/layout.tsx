"use client";

import React, { ReactNode } from "react";
import SidebarFilter from "../../components/sidebar/SidebarFilter";
import Link from "next/link";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen min-h-[120vh] flex justify-center items-center py-8 bg-neutral-100 dark:bg-neutral-900">
      <div className="w-full flex justify-end items-center relative">
        {/* Sidebar */}
        <SidebarFilter />

        {/* Main Content */}
        <div className="md:w-[calc(100%-15vw)] mt-[70px] w-full h-auto flex justify-center items-center">
          <div className="w-full flex flex-col justify-start items-center relative">
            <div className="w-full h-[60px] flex justify-start items-center gap-2">
              <Link href={"/"} className="font-medium hover:text-green-500">
                Home
              </Link>{" "}
              /{" "}
              <Link
                href={"/category"}
                className="font-medium hover:text-green-500"
              >
                Categories
              </Link>
            </div>

            <div className="w-full h-full relative">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
