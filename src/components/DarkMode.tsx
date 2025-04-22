import { useEffect, useState } from "react";
import DarkBtn from "../assets/website/dark-mode-button.png";
import LightBtn from "../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`absolute right-0 z-10 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        src={LightBtn}
        alt="ligt dark mode switch"
      />
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        src={DarkBtn}
        alt="ligt dark mode switch"
      />
    </div>
  );
};

export default DarkMode;
