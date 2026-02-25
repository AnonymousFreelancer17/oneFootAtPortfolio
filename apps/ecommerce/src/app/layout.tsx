import { Navbar } from "../../../../libs/ui/src/components/Navbar";
import { Footer } from "../../../../libs/ui/src/components/Footer";
import { ThemeProvider } from "../../../../libs/ui/src/hooks/ThemeProvider";

import "./globals.css";

import { Book, InfoIcon, Phone, Shield } from "lucide-react";
import TopNavContent from "../components/TopNavContent";
import MainNavContent from "../components/MainNavContent";
import Link from "next/link";
import { safeCapitalize } from "../utils/string";

export const metadata = {
  title: "Welcome",
  description: "An ecommerce site connecting cultures!",
};

const navLinks = [
  {
    containerClassName: "flex justify-center items-center",
    className: "flex justify-center items-center gap-x-1 text-sm",
    iconClassName: "relative",
    buttonText: "About-us",
    type: "link",
    href: "/about",
    action: "",
    icon: <InfoIcon size={16} />,
    counterText: "",
    showCounter: false,
  },
  {
    containerClassName: "flex justify-center items-center",
    className: "flex justify-center items-center gap-x-1 text-sm",
    iconClassName: "relative",
    buttonText: "Contact-us",
    type: "link",
    href: "/contact-us",
    action: "",
    icon: <Phone size={16} />,
    counterText: "",
    showCounter: false,
  },
  {
    containerClassName: "flex justify-center items-center",
    className: "flex justify-center items-center gap-x-1 text-sm",
    iconClassName: "relative",
    buttonText: "Blogs",
    type: "link",
    href: "/blogs",
    action: "",
    icon: <Book size={16} />,
    counterText: "",
    showCounter: false,
  },
  {
    containerClassName: "flex justify-center items-center",
    className: "flex justify-center items-center gap-x-1 text-sm",
    iconClassName: "relative",
    buttonText: "MStore support 24/7Hr",
    type: "link",
    href: "/support",
    action: "",
    icon: <Shield size={16} />,
    counterText: "",
    showCounter: false,
  },
];

const footerLinks = [
  {
    title: "online shopping",
    links: [
      { title: "men", href: "" },
      { title: "women", href: "" },
      { title: "kids", href: "" },
      { title: "home", href: "" },
      { title: "beauty", href: "" },
      { title: "genz", href: "" },
    ],
  },
  {
    title: "useful links",
    links: [
      { title: "blogs", href: "" },
      { title: "carrers", href: "" },
      { title: "site map", href: "" },
      { title: "corporate information", href: "" },
      { title: "Mstore globals", href: "" },
    ],
  },
  {
    title: "customer policies",
    links: [
      { title: "contact us", href: "" },
      { title: "FAQ", href: "" },
      { title: "T&C", href: "" },
      { title: "terms of use", href: "" },
      { title: "track orders", href: "" },
      { title: "Shipping", href: "" },
      { title: "cancellation", href: "" },
      { title: "returns", href: "" },
      { title: "privacy policy", href: "" },
      { title: "grievance redressal", href: "" },
      { title: "connect app", href: "" },
    ],
  },
  {
    title: "experience MStore app on Mobile",
    links: [
      { title: "google play", href: "" },
      { title: "app store", href: "" },
    ],
  },
  {
    title: "keep in touch",
    links: [
      { title: "facebook", href: "" },
      { title: "X", href: "" },
      { title: "youtube", href: "" },
      { title: "instagram", href: "" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar
            source="ecommerce"
            className="w-screen h-[100px] flex justify-center items-center fixed top-0 dark:bg-neutral-900 bg-neutral-100 z-[9999]"
            containerClassName="w-full flex flex-col justify-center items-center"
            hideNavAtRoutes={["/admin", ""]}
            topNav={true}
            topNavContent={<TopNavContent navLinks={navLinks} />}
            mainNav={true}
            mainNavContent={<MainNavContent />}
          />
          {children}
          <Footer
            className={
              "w-screen h-[80vh] dark:bg-neutral-800 bg-neutral-200 border-t dark:border-neutral-600 border-neutral-300 dark:text-white text-black flex flex-col justify-center items-center gap-y-4 z-[9999]"
            }
            topContent={
              <div className="lg:w-10/12 w-11/12 h-1/6 flex justify-start items-center">
                <div>Logo Container</div>

                <div></div>
              </div>
            }
            bottomContent={
              <div className="lg:w-10/12 w-11/12 h-1/6 flex justify-between items-center">
                <div className="w-1/3 flex justify-start items-center">
                  In case of any concern,{" "}
                  <Link href={"/"} className="font-medium text-green-500">
                    Contact Us
                  </Link>
                </div>

                <div className="w-1/3 flex justify-center items-center">©2026 www.oneFoot.com. All rights reserved.</div>

                <div className="w-1/3 flex justify-end items-center gap-x-1.5">
                  A
                  <Link href={"/"} className="font-medium text-green-500">
                    OneFoot
                  </Link>{" "}
                  company
                </div>
              </div>
            }
            centerContent={
              <div
                className={
                  "lg:w-10/12 w-11/12 flex-1 flex justify-center items-center gap-x-4 border-t border-b border-neutral-400 dark:border-neutral-600 py-8"
                }
              >
                {footerLinks?.map((obj: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className={
                        "w-1/4 h-full flex flex-col justify-start items-center gap-y-4"
                      }
                    >
                      <div className="w-11/12 flex justify-start items-center uppercase font-medium">
                        {obj.title}
                      </div>
                      <div className="w-11/12 flex flex-col justify-center items-center gap-y-4 dark:text-neutral-300 text-neutral-600">
                        {obj.links?.map((links: any, index: any) => {
                          return (
                            <Link
                              key={index}
                              href={links.href}
                              className="w-full text-left "
                            >
                              {safeCapitalize(links.title)}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
