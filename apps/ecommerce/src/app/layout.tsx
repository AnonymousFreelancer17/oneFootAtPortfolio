import { Navbar } from "../../../../libs/ui/src/components/Navbar";
import { Footer } from "../../../../libs/ui/src/components/Footer";
import { ThemeProvider } from "../../../../libs/ui/src/hooks/ThemeProvider";
 

import "./globals.css";

import { Book, InfoIcon, Phone, Shield } from "lucide-react";
import TopNavContent from "../components/TopNavContent";
import MainNavContent from "../components/MainNavContent";

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

// const footerLinks = [
//   [
//     [ title: "online shopping", links: [] ],
//     [{ title: "useful links", links: [] }],
//   ],
//   [[{ title: "customer policies" }]],
//   [[{ title: "experience myntra app on mobile" }]],
//   [[{ title: "" }]],
// ];

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
              "w-screen h-[40vh] dark:bg-neutral-800 bg-neutral-100 border-t dark:border-neutral-600 border-neutral-600 dark:text-white text-black flex justify-center items-center"
            }
            list={[]}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
