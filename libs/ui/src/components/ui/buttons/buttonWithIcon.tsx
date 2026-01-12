import Link from "next/link";
import { ReactElement } from "react";

const ButtonWithIcon = ({
  type,
  icon,
  className,
  iconContainerClassName,
  circularBorder,
}: {
  type: "Link" | "Button";
  icon: ReactElement;
  className: string;
  iconContainerClassName: string;
  circularBorder: boolean;
}) => {
  return (
    <>
      {type === "Link" ? (
        <Link href={"/auth/login"} className={className}>
          <div
            className={`w-6 h-6 flex justify-center items-center ${
              circularBorder && "border rounded-full dark:border-neutral-200"
            }   `}
          >
            {icon}
          </div>
          Sign-in
        </Link>
      ) : (
        <button className={className}>
          <div
            className={`w-6 h-6 flex justify-center items-center ${
              circularBorder && "border rounded-full dark:border-neutral-200"
            } `}
          >
            {icon}
          </div>
          Sign-in
        </button>
      )}
    </>
  );
};

export default ButtonWithIcon;
