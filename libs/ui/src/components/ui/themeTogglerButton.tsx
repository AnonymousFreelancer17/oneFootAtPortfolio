"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  /* ---------------------------
     INIT THEME
  --------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;

    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  /* ---------------------------
     TOGGLE
  --------------------------- */
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);

    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className=" gap-x-2
                 text-black dark:text-white hidden
                 transition-all duration-300 md:flex justify-center items-center text-center"
    >
      <div
        className="w-6 h-6 rounded-full border dark:
                 text-black dark:text-white
                 transition-all duration-300 flex justify-center items-center"
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </div>

      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
