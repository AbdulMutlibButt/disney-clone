
import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login-div">
        <div className="login_main_div">
          <img className="login_img1" src="/images/cta-logo-one.svg" alt="" />
          <button className="login_button">GET ALL THERE</button>
          <p className="login_discription">
            Disney Plus is an on-demand, ad-free streaming service created by
            The Walt Disney Company. With Disney Plus, subscribers can watch
            thousands of Disney movies and series on their devices (smart TVs,
            phones, laptops, tablets, and gaming consoles).
          </p>

          <img src="/images/cta-logo-two.png" alt="" />
        </div>
        <img
          className="login_bgImage"
          src="/images/login-background.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
