import React from "react";
import { Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";

const ThemeToggle = ({ showLabel = false }) => {
  const { theme, toggleTheme } = useApp();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="theme-toggle__icon">
        {isLight ? <Moon size={18} /> : <Sun size={18} />}
      </span>
      {showLabel && (
        <span className="theme-toggle__label">
          {isLight ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
