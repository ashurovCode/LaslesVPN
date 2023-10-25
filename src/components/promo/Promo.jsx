import React from "react";
import "./promo.css";
import promoImg from "../../assets/icons/promo-img.svg"

export default function Promo() {
  return (
    <section>
      <div className="container">
        <div className="promo">
          <div className="promo-text">
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease and fun using 
               <span>LaslesVPN</span> discover interesting features from us.
            </p>
            <div className="promo-btn">Get Started</div>
          </div>
          <div className="promo-img">
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
}
