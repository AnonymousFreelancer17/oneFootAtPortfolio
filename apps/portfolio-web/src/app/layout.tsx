import "./global.css";
import { Navbar } from "../../../../libs/ui/src/components/Navbar";
import { Footer } from "../../../../libs/ui/src/components/Footer";
import NavigationSidebar from "../component/NavigationSidebar";
import Link from "next/link";

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
      title: "services",
      type: "",
      redirect: "/services",
      content: [{}],
    },
    {
      title: "about us",
      type: "",
      redirect: "/about-us",
      content: [{}],
    },
    {
      title: "contact us",
      type: "",
      redirect: "/contact-us",
      content: [{}],
    },
    {
      title: "carrer",
      type: "",
      redirect: "/carrer",
      content: [{}],
    },
  ];

  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <Navbar
          className="w-screen h-[100px] bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center"
          source="portfolio"
          containerClassName="w-full flex justify-center
           items-center"
          topNav={false}
          topNavContent={<div className="h-[40px] bg-red-500 flex"></div>}
          mainNav={true}
          mainNavContent={
            <div className="lg:w-8/12 md:w-8/12 w-full h-[100px] flex justify-between items-center">
              <div>
                <Link href={`/`}>OneFootLabs</Link>
              </div>

              <div className="flex list-none cursor-pointer gap-x-4">
                {navlinks.map((d, index) => {
                  return (
                    <Link href={d.redirect} key={index}>
                      {d?.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          }
          hideNavAtRoutes={["", ""]}
        />
        <div className=" bg-neutral-100">
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
