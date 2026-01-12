import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";

type DropdownProps = {
  trigger?: "onClick" | "onMouseEnter";
  buttonText: string;
  content: ReactNode;
  align?: "left" | "right" | "center";
  modalSize?: "fullScreen" | "menuSize";
};

const Dropdown = ({
  trigger = "onClick",
  buttonText,
  content,
  modalSize = "menuSize",
  align = "center",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* -----------------------------
     Close on outside click
  ------------------------------ */
  useEffect(() => {
    if (trigger === "onMouseEnter") return;

    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [trigger]);

  const alignment = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      ref={dropdownRef}
      className="flex"
      onMouseEnter={() => trigger === "onMouseEnter" && setOpen(true)}
      onMouseLeave={() => trigger === "onMouseEnter" && setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => trigger === "onClick" && setOpen((p) => !p)}
        className="py-2 flex items-center gap-1 rounded-md text-sm
                   text-gray-800 dark:text-gray-100
                   hover:text-blue-600 dark:hover:text-blue-400
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {buttonText}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* -----------------------------
          MENU SIZE DROPDOWN
      ------------------------------ */}
      {modalSize === "menuSize" && (
        <div
          className={`absolute top-[40px] w-screen h-[40vh]
            rounded-lg border border-gray-200 dark:border-neutral-700
            bg-white dark:bg-neutral-900 shadow-lg
            transition-all duration-200 ease-out z-50
            flex justify-center items-center
            ${alignment[align]}
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          onMouseEnter={() => trigger === "onMouseEnter" && setOpen(true)}
          onMouseLeave={() => trigger === "onMouseEnter" && setOpen(false)}
        >
          {content}
        </div>
      )}

      {/* -----------------------------
          FULL SCREEN MEGA MENU
      ------------------------------ */}
      {modalSize === "fullScreen" && (
        <div
          className={`fixed inset-x-0 top-[40px] min-w-screen h-[40vh]
            bg-white dark:bg-neutral-900
            z-[6000000]
            transition-all duration-200 ease-out
            ${
              open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
