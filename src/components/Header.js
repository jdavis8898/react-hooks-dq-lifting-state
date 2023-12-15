import React, { useState } from "react";
import Menu from "./Menu";

function Header({ onToggleDarkMode, darkMode }) {

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu 
        onToggleDarkMode={onToggleDarkMode}
        darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default Header;
