import "./global.css";
import { Navbar } from "../../../../libs/ui/src/components/Navbar";
import { Footer } from "../../../../libs/ui/src/components/Footer";

export const metadata = {
  title: "Welcome: OneFoot Labs",
  description: "Nx way to show my devlopment prowers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <Navbar
          className="w-screen h-[100px] bg-neutral-100 flex justify-center items-center"
          source="portfolio"
          containerClassName="w-full flex justify-center
           items-center"
          topNav={false}
          topNavContent={<div className="h-[40px] bg-red-500 flex"></div>}
          mainNav={true}
          mainNavContent={
            <div className="lg:w-8/12 md:w-8/12 w-full h-[100px] flex justify-between items-center">
              <div>LogoContainer</div>

              <div>NavLinks</div>
            </div>
          }
          hideNavAtRoutes={["", ""]}
        />
        <div className="">{children}</div>
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
