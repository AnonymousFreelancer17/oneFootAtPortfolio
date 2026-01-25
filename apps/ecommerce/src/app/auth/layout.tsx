import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-screen h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 mt-[100px]">{children}</div>;
};

export default Layout;
