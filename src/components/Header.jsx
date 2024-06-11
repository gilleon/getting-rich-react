import React from "react";
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo of the app" />
      <h1>Get Rich</h1>
    </header>
  );
}
