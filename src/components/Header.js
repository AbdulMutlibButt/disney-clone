import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header_navbar">
      <img className="header_logo" src="/images/logo.svg" alt="" />
      <div className="header_navmenu">
        <a className="header_navmenu_link" href="/home">
          <img className="header_navmenu_img" src="/images/home-icon.svg" alt="" />
        </a>
        <span className="header_navmenu_span" >HOME</span>
      </div>
    </div>
  );
}
export default Header;
