
import React from "react";
import "../Pages/styles/toggleButton.css"

const ToggleButton = ({ isDarkMode, onToggle }) => {
  return (
    <div className="theme-toggle">
      <div className="toggle-switch" onClick={onToggle}>
        <div className={`toggle-button ${isDarkMode ? "dark" : "light"}`} />
      </div>
    </div>
  );
};

export default ToggleButton;
