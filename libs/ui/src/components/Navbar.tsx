"use client";

import {
  User2,
  MapPin,
  Building,
  InfoIcon,
  Shield,
  Download,
  SquareStackIcon,
  Variable,
  LayoutGrid,
  Book,
  Phone,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaHeart, FaMobile, FaSearch, FaShoppingBag } from "react-icons/fa";
import { usePathname } from "next/navigation";

import axios from "axios";
import LocaleButton from "./ui/buttons/geoButton.js";
import ThemeToggle from "./ui/themeTogglerButton";
import ButtonWithCounter from "./ui/buttons/buttonWithCounter.js";

type NavItem = {
  title: string;
  type: string;
  content: ReactNode;
  align?: "left" | "right" | "center";
  trigger?: "onClick" | "onMouseEnter";
  modalSize?: "fullScreen" | "menuSize";
};

type NavGroup = {
  source: string;
  downloadLink: string;
  logo: string;
  data: NavItem[];
};

const navlinks: NavGroup[] = [
  {
    source: "ecommerce",
    downloadLink: "",
    logo: "",
    data: [
      {
        title: "Men",
        type: "redirect",
        content: `<>men</>`,
        trigger: "onClick",
        align: "center",
        modalSize: "fullScreen",
      },
      {
        title: "Women",
        type: "redirect",
        content: `<>women</>`,
        trigger: "onClick",
        align: "center",
        modalSize: "fullScreen",
      },
      {
        title: "Kids",
        type: "redirect",
        content: `<>kid</>`,
        trigger: "onClick",
        align: "left",
        modalSize: "fullScreen",
      },
      {
        title: "Home",
        type: "redirect",
        content: `<>Home</>`,
        trigger: "onClick",
        align: "left",
        modalSize: "fullScreen",
      },
      {
        title: "Offline Stores",
        type: "redirect",
        content: `<>offline-stores</>`,
        trigger: "onClick",
        align: "left",
        modalSize: "fullScreen",
      },
    ],
  },
];

export default function Navbar({ source }: { source: string }) {
  const [data, setData] = useState<NavItem[]>([]);
  const pathname = usePathname();

  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use http instead of https for localhost
        const response = await axios.get(
          "http://localhost:8000/scrapper/limeroad/categories"
        );

        console.log(response.data.parsed);

        setCategory(response.data.parsed);
      } catch (err: any) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const hideNavbarRoutes = [
    // "/auth/login",
    // "/auth/register",
    "/studio",
    "/admin",
  ];
  const shouldHideSomeElements = hideNavbarRoutes.includes(pathname);

  useEffect(() => {
    const found = navlinks.find((item) => item.source === source);
    if (found) setData(found.data);
  }, [source]);

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      {/* Top Bar */}
      <div
        className={`w-full ${
          shouldHideSomeElements ? "h-[80px] fixed top-0" : "h-[40px]"
        } bg-green-600 flex justify-center items-center border-b border-neutral-300 dark:border-neutral-700`}
      >
        <div className="w-11/12 h-full flex justify-between items-center">
          <button
            type="button"
            className="flex gap-x-1 justify-center items-center font-medium text-white"
          >
            <Download size={16} />
            Download App
          </button>

          <div className="h-full sm:flex hidden justify-center items-center gap-x-4 text-white">
            {/* {data?.map((d, index) => (
              <Dropdown
                key={index}
                buttonText={d.title}
                trigger="onMouseEnter"
                content={d.content}
              />
            ))} */}

            <Link href={"/about-us"} className="gap-x-1 flex text-xs">
              <InfoIcon size={16} /> <div>About Us</div>
            </Link>

            <Link href={"/contact-us"} className="gap-x-1 flex text-xs">
              <Phone size={16} />
              Contact Us
            </Link>

            <Link href={"/contact-us"} className="gap-x-1 flex text-xs">
              <Book size={16} />
              Blogs
            </Link>

            <Link href={"/contact-us"} className="gap-x-1 flex text-xs">
              <Shield size={16} />
              MStore support 24/7Hr
            </Link>

            <LocaleButton />
          </div>
        </div>
      </div>

      {!shouldHideSomeElements && (
        <div className="w-full h-[60px] flex justify-center items-center border-b border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 bg-neutral-100">
          <div className="w-11/12 h-full flex justify-between items-center">
            <div className="lg:w-3/12 md:w-4/12 h-full flex justify-start items-center gap-x-6">
              <Link
                href={"/"}
                className="font-bold flex justify-start items-center dark:text-white text-black"
              >
                MStore
              </Link>

              <button
                type="button"
                className="md:flex hidden justify-center items-center gap-x-1 dark:text-white text-black"
              >
                <MapPin />
                <div className="text-left">
                  <div className="text-sm">Find an</div>
                  <div className="font-semibold text-sm">Offline Store</div>
                </div>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 min-h-full lg:flex hidden justify-center items-center">
              {/* Category Select */}
              <div className="h-[40px] flex items-center border border-green-600 rounded-tl-md rounded-bl-md px-2 bg-green-600">
                <LayoutGrid size={16} color="white" />
                <select
                  name="category"
                  className="p-2 h-full bg-transparent dark:text-white text-white outline-none cursor-pointer"
                >
                  <option
                    className="w-full bg-green-600 dark:text-white text-white"
                    value="all-category"
                    selected
                  >
                    All Category
                  </option>
                  {Object.keys(category).map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="w-full dark:text-neutral-200 bg-green-600 focus:bg-green-700 active:bg-green-700 text-white selection:bg-green-700"
                    >
                      {cat[0].toLocaleUpperCase() +
                        cat.slice(1, cat.length).toLocaleLowerCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="flex-1 h-[40px] flex items-center border-t border-b border-r border-neutral-400 dark:border-neutral-600 rounded-br-md rounded-tr-md p-2 bg-neutral-200 dark:bg-neutral-900 relative">
                <div className="flex-1 h-full flex gap-x-2 justify-center items-center relative">
                  <FaSearch className="dark:text-white text-black" />
                  <input
                    type="text"
                    placeholder="Search products or brand here"
                    className="flex-1 bg-transparent outline-none text-black dark:text-white placeholder:dark:text-neutral-500"
                    id="search-bar"
                    name="search-bar"
                  />
                </div>

                {/* recommendation serach optionbs */}
                <div
                  className="bg-green-600 w-full h-[30vh] absolute left-0 top-0 hidden"
                  style={{
                    marginTop: "45px",
                  }}
                ></div>
              </div>
            </div>

            {/* Right Icons */}
            <div className="lg:w-3/12 md:w-4/12 h-full gap-x-4 flex justify-end items-center">
              <ThemeToggle />

              <Link
                href={"/auth/login"}
                className="flex justify-center items-center gap-x-2 dark:text-white text-black"
              >
                <div className="w-6 h-6 border rounded-full dark:border-neutral-200 flex justify-center items-center">
                  <User2 size={16} />
                </div>
                Sign-in
              </Link>


              <ButtonWithCounter icon={<FaHeart size={16} />} title="Wishlist" count={4} />

              <ButtonWithCounter icon={<FaShoppingBag size={16} />} title="Cart" count={2} />

               

              {/* notification is a auth-based service */}
              {/* <button
                    type="button"
                    className=" h-4/5 relative flex justify-center items-center"
                  >
                    <FaBell size={16} className="relative" />
                    <div className="w-1 h-1 rounded-full bg-red-500 text-white text-xs flex justify-center items-center absolute right-0 top-0 mt-4 ">
                      <div className="w-2 h-2 rounded-full bg-red-500 absolute animate-pulse"></div>
                    </div>
                  </button> */}

              {/* <button
                    type="button"
                    className="w-8 h-8 flex justify-center items-center rounded-full dark:bg-neutral-700 border border-neutral-400"
                  ></button> */}
            </div>
          </div>
        </div>
      )}
       



       {/*  for smaller screens only  */}
      <div className="w-screen h-[60px] lg:hidden md:flex flex justify-center items-center border-b dark:border-neutral-600 border-neutral-400 dark:bg-neutral-900 bg-neutral-100">
              <div className="w-10/12 flex justify-center items-center">
                {/* Category Select */}
              <div className="h-11/12 flex items-center border border-neutral-200 dark:border-neutral-700 rounded-tl-md rounded-bl-md px-2 bg-green-600">
                <LayoutGrid size={16} color="white" />
                <select
                  name="category"
                  className="p-2 h-full bg-transparent dark:text-white text-white outline-none cursor-pointer"
                >
                  <option
                    className="w-full bg-green-600 dark:text-white text-white"
                    value="all-category"
                  >
                    All Category
                  </option>
                  {Object.keys(category).map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="w-full dark:text-neutral-200 bg-green-600 text-white"
                    >
                      {cat[0].toLocaleUpperCase() +
                        cat.slice(1, cat.length).toLocaleLowerCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="flex-1 h-11/12 flex items-center border border-neutral-200 dark:border-neutral-700 rounded-br-md rounded-tr-md p-2 bg-neutral-200 dark:bg-neutral-900 relative">
                <div className="flex-1 h-full flex gap-x-2 justify-center items-center relative">
                  <FaSearch className="dark:text-white text-black" />
                  <input
                    type="text"
                    placeholder="Search products or brand here"
                    className="flex-1 bg-transparent outline-none text-black placeholder:darK:text-neutral-700  dark:text-white"
                    id="search-bar"
                    name="search-bar"
                  />
                </div>

                {/* recommendation serach optionbs */}
                <div
                  className="bg-green-600 w-full h-[30vh] absolute left-0 top-0 hidden"
                  style={{
                    marginTop: "45px",
                  }}
                ></div>
              </div>
            </div>
              </div>
    </div>

    
  );
}
