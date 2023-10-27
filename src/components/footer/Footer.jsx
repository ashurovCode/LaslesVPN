import React from "react";
import "./footer.css";
import logo from "../../assets/icons/logo.svg";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import twiter from "../../assets/icons/twitter.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-soccial">
            <div className="footer-logo">
              <img src={logo} alt="" />
              Laslesspa <span>VPN</span>
            </div>
            <p className="footer-soccial-dec">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
            <div className="footer-soccial-icon">
              <img src={facebook} alt="" />
              <img src={twiter} alt="" />
              <img src={instagram} alt="" />
            </div>

            <p className="footer-soccial-copy">
              © {year} Lasles <span>VPN</span>
            </p>
          </div>
          <div className="footer-detail">
            <div className="footer-detail-text">
              <h2>Product</h2>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-detail-text">
              <h2>Engage</h2>
              <ul>
                <li>LaslesVPN ? </li>
                <li>FAQ</li>
                <li>Tutorials</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="footer-detail-text">
              <h2>Earn Money</h2>
              <ul>
                <li>Affiliate</li>
                <li>Become Partner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
