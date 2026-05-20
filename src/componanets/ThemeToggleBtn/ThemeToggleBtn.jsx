"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";

export const ThemeToggleBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
       {theme === "dark" ? <Sun width={20} height={20} className="text-yellow-500"/> : <Moon width={20} height={20} className="text-info"/>}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
