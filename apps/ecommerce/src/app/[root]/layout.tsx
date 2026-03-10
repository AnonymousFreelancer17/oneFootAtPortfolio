import React, { ReactNode } from "react";
import SidebarFilter from "../../components/sidebar/SidebarFilter";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-auto flex justify-center items-start mt-[100px] py-8 gap-4">
      <SidebarFilter />
      <div className="w-[calc(100vw-20vw)] h-auto flex justify-center items-center cursor-pointer">
        {children}
      </div>
    </div>
  );
};

export default layout;
