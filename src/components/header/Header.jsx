import React from "react";
import Logo from "../../assets/icons/logo.svg";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <img src={Logo} alt="Logo" />
              Lasles <span>VPN</span>
            </div>
            <nav>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
                <div className="header-login">
                  <li className="sign-in">Sign In</li>
                  <li className="sign-up">Sign Up</li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
