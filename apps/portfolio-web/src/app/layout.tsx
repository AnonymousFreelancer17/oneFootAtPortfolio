import "./global.css";
import { Navbar } from "../../../../libs/ui/src/components/Navbar";
import { Footer } from "../../../../libs/ui/src/components/Footer";
import NavigationSidebar from "../component/NavigationSidebar";
import Link from "next/link";
import NavLinks from "../component/NavlInks";
import { SearchIcon, Menu, MoonIcon, Sun } from "lucide-react";

export const metadata = {
  title: "Welcome: OneFoot Labs",
  description: "Nx way to show my devlopment prowers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navlinks = [
    {
      title: "Services",
      type: "",
      redirect: "/services",
      content: [{}],
    },
    {
      title: "About-us",
      type: "",
      redirect: "/about-us",
      content: [{}],
    },
    {
      title: "Projects",
      type: "",
      redirect: "/projects",
      content: [{}],
    },
    {
      title: "Contact-us",
      type: "",
      redirect: "/contact-us",
      content: [{}],
    },
    {
      title: "Blogs",
      type: "",
      redirect: "/blogs",
      content: [{}],
    },
    {
      title: "Carrers",
      type: "",
      redirect: "/carrers",
      content: [{}],
    },
  ];

  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <Navbar
          className="w-screen h-[100px] bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center fixed top-0 left-0 z-50"
          source="portfolio"
          containerClassName="w-full flex justify-center
           items-center"
          topNav={false}
          topNavContent={<div className="h-[40px] bg-red-500 flex"></div>}
          mainNav={true}
          mainNavContent={
            <div className="lg:w-8/12 md:w-8/12 w-full h-[100px] flex justify-between items-center">
              <div>
                <Link href={`/`} className="font-medium text-xl">
                  OneFootLabs
                </Link>
              </div>

              <div className="lg:flex hidden list-none cursor-pointer gap-x-4">
                <NavLinks navLinks={navlinks} />
              </div>

              <div className="flex gap-x-4">
                <button
                  type="button"
                  className="w-10 h-10 bg-neutral-100 rounded-full shadow-xl/30 hover:shadow-xl flex justify-center items-center border border-neutral-400"
                >
                  <SearchIcon size={20} />
                </button>
                <button
                  type="button"
                  className="w-10 h-10 bg-neutral-100 rounded-full shadow-xl/30 hover:shadow-xl flex justify-center items-center border border-neutral-400"
                >
                  <MoonIcon size={20} />
                </button>
                <button
                  type="button"
                  className="w-10 h-10 bg-neutral-900 text-neutral-100 rounded-full shadow-md hover:shadow-lg shadow-[20px,20px] flex justify-center items-center"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          }
          hideNavAtRoutes={["", ""]}
        />
        <div className=" bg-neutral-100 mt-[100px]">
          <NavigationSidebar />

          {children}
        </div>
        <Footer
          className="w-full h-[50vh] flex flex-col justify-center items-center bg-gray-100"
          topContent={<div></div>}
          bottomContent={<div></div>}
          centerContent={<div></div>}
        />
      </body>
    </html>
  );
}
