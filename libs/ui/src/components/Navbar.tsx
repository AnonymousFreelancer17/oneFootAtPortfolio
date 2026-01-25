"use client";

import { usePathname } from "next/navigation";
import { ReactElement } from "react";

type NavItem = {
  title: string;
  type: string;
  content: ReactElement;
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

export function Navbar({
  source,
  className,
  containerClassName,
  topNav,
  topNavContent,
  hideNavAtRoutes,
  mainNav,
  mainNavContent,
}: {
  source: string;
  className: string;
  containerClassName: string;
  topNav: boolean;
  topNavContent: ReactElement;
  hideNavAtRoutes: Array<string>;
  mainNav: boolean;
  mainNavContent: ReactElement;
}) {
  const pathname = usePathname();

  const hideNavbarRoutes = hideNavAtRoutes;
  const shouldHideSomeElements = hideNavbarRoutes.includes(pathname);

  return (
    <nav className={className}>
      {!shouldHideSomeElements && (
        <div className={containerClassName}>
          {topNav && topNavContent}

          {mainNav && mainNavContent}
        </div>
      )}
    </nav>
  );
}
