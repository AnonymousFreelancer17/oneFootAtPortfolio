import Link from "next/link";
import React from "react";
import { FaAppStore, FaBell, FaSearch, FaStore } from "react-icons/fa";
import {NavigationMenu} from "@ui"

const Navbar = () => {
  const navlinks = [
    { title: "abcdfghh", type: "redirect" },
    { title: "abchjhjfgh", type: "redirect" },
    { title: "ajhdkbb", type: "redirect" },
    { title: "ahhjghjghj", type: "redirect" },
    { title: "Register", type: "redirect", to: "auth/register" },
    ,
    { title: "Login", type: "redirect", to: "auth/login" },
  ];

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      {/* above nav */}
      <div className="w-full h-[40px] flex justify-center items-center border-b border-gray-300 dark:border-gray-700">
        <div className="w-11/12 flex justify-between items-center">
          <div className="">
            <button
              type="button"
              className="flex gap-x-2 justify-center items-center font-medium"
            >
              <FaAppStore />
              Download App
            </button>
          </div>

          <div className="md:flex hidden justify-center items-center gap-x-4">
            {/* {navlinks?.map((d, index) => {
              return (
                <Link
                  key={index}
                  href={d?.to || "#"}
                  className={`${
                    d?.title === "Login" || d?.title === "Register"
                      ? "font-bold px-2 "
                      : "font-medium text-gray-700 dark:text-gray-400"
                  } `}
                 
                >
                  {d?.title}
                </Link>
              );
            })} */}
            <NavigationMenu />
          </div>
        </div>
      </div>

      <div className="w-full h-[60px] flex justify-center items-center border-b border-gray-400 dark:border-gray-700">
        <div className="w-11/12 h-full flex justify-between items-center">
          <Link href={"/"} className="w-2/12 font-bold flex justify-start items-center">
            Logo.com
          </Link>

          <div className="flex-1 min-h-full md:flex hidden justify-center items-center">
            <div className="h-11/12 py-2 flex justify-center items-center border border-gray-200 dark:border-gray-700 rounded-tl-md rounded-bl-md px-2">
              <select
                name="category"
                className="px-4 flex justify-start items-center outline-none border-none bg-transparent h-full"
              >
                <option value="all-category">All Category</option>
              </select>
            </div>

            <div className="flex-1 h-11/12 flex justify-center items-center border-r border-t border-b border-gray-200 dark:border-gray-700 gap-x-2 rounded-br-md rounded-tr-md p-2">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products or brand here"
                className="flex-1 bg-transparent"
              />
            </div>
          </div>

          <div className="w-2/12 h-full gap-x-4 flex justify-end items-center">
            <button type="button" className="px-3 h-4/5">
              <FaBell />
            </button>

            <button type="button" className="px-3 h-4/5">
              <FaStore />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
