"use client";

import {
  User2,
  MapPin,
  InfoIcon,
  Shield,
  Download,
  LayoutGrid,
  Book,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaHeart, FaSearch, FaShoppingBag } from "react-icons/fa";
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

// const navlinks: NavGroup[] = [
//   {
//     source: "ecommerce",
//     downloadLink: "",
//     logo: "",
//     data: [
//       {
//         title: "Men",
//         type: "redirect",
//         content: `<>men</>`,
//         trigger: "onClick",
//         align: "center",
//         modalSize: "fullScreen",
//       },
//       {
//         title: "Women",
//         type: "redirect",
//         content: `<>women</>`,
//         trigger: "onClick",
//         align: "center",
//         modalSize: "fullScreen",
//       },
//       {
//         title: "Kids",
//         type: "redirect",
//         content: `<>kid</>`,
//         trigger: "onClick",
//         align: "left",
//         modalSize: "fullScreen",
//       },
//       {
//         title: "Home",
//         type: "redirect",
//         content: `<>Home</>`,
//         trigger: "onClick",
//         align: "left",
//         modalSize: "fullScreen",
//       },
//       {
//         title: "Offline Stores",
//         type: "redirect",
//         content: `<>offline-stores</>`,
//         trigger: "onClick",
//         align: "left",
//         modalSize: "fullScreen",
//       },
//     ],
//   },
// ];

export function Navbar({
  source,
  className,
}: {
  source: string;
  className: string;
}) {
  // const [data, setData] = useState<NavItem[]>([]);
  // const pathname = usePathname();

  // const [category, setCategory] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Use http instead of https for localhost
  //       const response = await axios.get(
  //         "http://localhost:8000/scrapper/myntra/categories",
  //       );

  //       console.log(response.data.parsed);

  //       setCategory(response.data.parsed);
  //     } catch (err: any) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const hideNavbarRoutes = [
  //   // "/auth/login",
  //   // "/auth/register",
  //   "/studio",
  //   "/admin",
  // ];
  // const shouldHideSomeElements = hideNavbarRoutes.includes(pathname);

  // useEffect(() => {
  //   const found = navlinks.find((item) => item.source === source);
  //   if (found) setData(found.data);
  // }, [source]);

  return <nav className={className}></nav>;
}
