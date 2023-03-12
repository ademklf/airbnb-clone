import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="Header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="header_icon"
      />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
