"use client"

import Link from "next/link";
import { ReactElement } from "react";

export function Button({
  containerClassName,
  type,
  href,
  className,
  icon,
  action,
  showCounter,
  counterText,
  buttonText,
  iconClassName,
}: {
  containerClassName: string;
  type: "link" | "button";
  href: string | "";
  action: string;
  className: string;
  icon: ReactElement;
  buttonText: string;
  showCounter: boolean;
  counterText: string;
  iconClassName: string;
}) {
  return (
    <div className={containerClassName}>
      {type === "button" && (
        <button type="button" className={className}>
          <div className={iconClassName}>
            {icon ? icon : ""}
            {showCounter && (
              <div className="w-4 h-4 absolute bg-green-600 rounded-full top-[-6px] right-[-6px] text-white flex justify-center items-center text-[10px] font-medium">
                {counterText}
              </div>
            )}
          </div>
          <div>{buttonText}</div>
        </button>
      )}

      {type === "link" && (
        <Link href={href} className={className}>
          <div className={iconClassName}>
            {icon ? icon : ""}
            {showCounter && (
              <div className="w-4 h-4 absolute bg-green-600 rounded-full top-[-6px] right-[-6px] text-white flex justify-center items-center text-[10px] font-medium">
                {counterText}
              </div>
            )}
          </div>
          <div>{buttonText}</div>
        </Link>
      )}
    </div>
  );
}
