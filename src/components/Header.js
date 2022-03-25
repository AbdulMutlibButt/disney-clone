import React from "react";
import { auth, provider } from "../firebase";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useEffect } from "react";
function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const logOut = () => {
    auth.signOut().then(() => {
      history.push("/");
      setUser("");
    });
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  console.log(userPhoto);
  return (
    <div className="header_navbar">
      <img className="header_logo" src="/images/logo.svg" alt="" />
      {!userName ? (
        <p onClick={handleAuth} className="header_navmenu_login">
          LOGIN
        </p>
      ) : (
        <>
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
          <div className="header_navmenu_signOut">
            <div>
              <img
                className="header_navmenu_userphoto"
                src={`${userPhoto}`}
                alt={userName}
              />
            </div>
            <div className="header_navmenu_dropdown">
              <div
                onClick={() => {
                  logOut();
                }}
                className="header_navmenu_logOut"
              >
                logOut
              </div>
            </div>
          </div>

          {/* <img
            className="header_navmenu_userphoto"
            src={`${userPhoto}`}
            alt={userName}
          /> */}
        </>
      )}
    </div>
  );
}
export default Header;
