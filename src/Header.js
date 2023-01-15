import React from "react";
import logo from "./images/logo192.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Header-text-container">
        <p className="Header-text">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
      </div>
    </div>
  );
}
