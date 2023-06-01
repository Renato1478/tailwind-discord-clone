"use client";

import { FaSun, FaMoon } from "react-icons/fa";

import useDarkMode from "@/hooks/useDarkMode";

const ThemeToggleButton = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

export default ThemeToggleButton;
