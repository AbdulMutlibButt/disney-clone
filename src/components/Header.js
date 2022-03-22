import React from "react";
import { auth, provider } from "../firebase";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="header_navbar">
      <img className="header_logo" src="/images/logo.svg" alt="" />
      <div className="header_navmenu">
        <a className="header_navmenu_link" href="/home">
          <img
            className="header_navmenu_img"
            src="/images/home-icon.svg"
            alt=""
          />
          <span className="header_navmenu_span">HOME</span>
        </a>
        <a className="header_navmenu_link" href="/home">
          <img
            className="header_navmenu_img"
            src="/images/search-icon.svg"
            alt=""
          />
          <span className="header_navmenu_span">SEARCH</span>
        </a>
        <a className="header_navmenu_link" href="/home">
          <img
            className="header_navmenu_img"
            src="/images/watchlist-icon.svg"
            alt=""
          />
          <span className="header_navmenu_span">WATCHLIST</span>
        </a>
        <a className="header_navmenu_link" href="/home">
          <img
            className="header_navmenu_img"
            src="/images/movie-icon.svg"
            alt=""
          />
          <span className="header_navmenu_span">MOVIES</span>
        </a>
        <a className="header_navmenu_link" href="/home">
          <img
            className="header_navmenu_img"
            src="/images/series-icon.svg"
            alt=""
          />
          <span className="header_navmenu_span">SERIES</span>
        </a>
      </div>
      <p onClick={handleAuth} className="header_navmenu_login">
        LOGIN
      </p>
    </div>
  );
}
export default Header;
