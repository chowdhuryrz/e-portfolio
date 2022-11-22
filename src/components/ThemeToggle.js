import React, { useContext } from "react";
import { IoMdContrast } from "react-icons/io";
import { RiContrastFill } from "react-icons/ri";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="">
      {theme === "dark" ? (
        <div
          className=""
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <IoMdContrast className="w-6 h-6" />
        </div>
      ) : (
        <div
          className=""
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <RiContrastFill className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
