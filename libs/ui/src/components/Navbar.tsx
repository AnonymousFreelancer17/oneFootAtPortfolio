"use client";


import { StoreIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAppStore, FaBell, FaSearch, FaStore } from "react-icons/fa";

type NavItem = {
  title: string;
  type: string;
  to: string;
};

type NavGroup = {
  source: string;
  data: NavItem[];
};

const navlinks: NavGroup[] = [
  {
    source: "ecommerce",
    data: [
      { title: "Men", type: "redirect", to: "/men" },
      { title: "Women", type: "redirect", to: "/women" },
      { title: "Kids", type: "redirect", to: "/kid" },
      { title: "Offers", type: "redirect", to: "/offers" },
      { title: "offline Stores", type: "redirect", to: "/offline-stores" },
      { title: "Register", type: "redirect", to: "/auth/register" },
      { title: "Login", type: "redirect", to: "/auth/login" },
    ],
  },
];

export default function Navbar({ source }: { source: string }) {
  const [data, setData] = useState<NavItem[]>([]);

  useEffect(() => {
    const found = navlinks.find((item) => item.source === source);
    if (found) setData(found.data);
  }, [source]);

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      {/* Top Bar */}
      <div className="w-full h-[40px] flex justify-center items-center border-b border-gray-300 dark:border-gray-700">
        <div className="w-11/12 flex justify-between items-center">
          <button
            type="button"
            className="flex gap-x-2 justify-center items-center font-medium"
          >
            <FaAppStore />
            Download App
          </button>

          <div className="md:flex hidden justify-center items-center gap-x-4">
            {data?.map((d, index) => (
              <Link
                key={index}
                href={d?.to}
                className={`${
                  d?.title === "Login" || d?.title === "Register"
                    ? "font-bold px-2"
                    : "font-medium text-gray-700 dark:text-gray-400"
                }`}
              >
                {d.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full h-[60px] flex justify-center items-center border-b border-gray-400 dark:border-gray-700">
        <div className="w-11/12 h-full flex justify-between items-center">
          <Link
            href={"/"}
            className="w-2/12 font-bold flex justify-start items-center"
          >
            Logo.com
          </Link>

          {/* Search Bar */}
          <div className="flex-1 min-h-full md:flex hidden justify-center items-center">
            {/* Category Select */}
            <div className="h-full flex items-center border border-gray-200 dark:border-gray-700 rounded-tl-md rounded-bl-md px-2 bg-white dark:bg-gray-900">
              <select
                name="category"
                className="p-2 h-full bg-transparent text-gray-700 dark:text-gray-300 outline-none cursor-pointer "
              >
                <option className="text-black" value="all-category">
                  All Category
                </option>
              </select>
            </div>

            {/* Search Input */}
            <div className="flex-1 h-11/12 flex items-center border border-gray-200 dark:border-gray-700 gap-x-2 rounded-br-md rounded-tr-md p-2 bg-white dark:bg-gray-900">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products or brand here"
                className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-300"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="w-2/12 h-full gap-x-4 flex justify-end items-center">
            <button type="button" className="px-3 h-4/5 relative flex justify-center items-center">
              <FaBell size={20} className="relative" />
              <div className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center absolute right-0 top-0 mt-1 mr-1 font-bold">12</div>
            </button>

            <button type="button" className="px-3 h-4/5 flex flex-col justify-center items-center">
              <StoreIcon />
              <div className="text-xs font-bold">
                 Cart
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
