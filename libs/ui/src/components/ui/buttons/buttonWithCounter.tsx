"use client";


import { ReactElement } from "react";

export function ButtonWithCounter({
  icon,
  title,
  count,
}: {
  icon: ReactElement;
  title: string;
  count: number;
}) {
  return (
    <button
      type="button"
      className="h-4/5 flex justify-center items-center gap-x-1 dark:text-white text-black"
    >
      <div className="flex justify-center items-center p-1 relative">
        {icon}

        <div className="w-4 h-4 absolute bg-green-600 rounded-full top-[-6px] right-[-6px] text-white flex justify-center items-center text-[10px] font-medium">
          {count}
        </div>
      </div>
      {title}
    </button>
  );
}
