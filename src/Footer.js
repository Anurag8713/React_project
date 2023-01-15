import React from "react";
import Google from "./images/google3.png";
import facebook from "./images/facebook1.png";
import twitter from "./images/twitter1.png";

export default function Footer() {
  return (
    <div className="Footer-container">
      <p className="Footer-title">or login with</p>
      <div className="Footer-img-container">
        <img src={Google} className="Footer-img-google" />
        <img src={facebook} className="Footer-img" />
        <img src={twitter} className="Footer-img" />
      </div>
      <p className="Footer-text">
        Don't have an account?
        <a className="Footer-text1">Create new now!</a>
      </p>
      <p className="Footer-text">
        By signing up, you are agree with our{" "}
        <a className="Footer-text2">Term & Conditions</a>
      </p>
    </div>
  );
}
