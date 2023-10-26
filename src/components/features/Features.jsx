import React from "react";
import "./features.css";
import FeatureImg from "../../assets/images/Illustration 2.svg";
import CheckIcon from '../../assets/icons/bx_bxs-check-circle.svg'

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <div className="features-img">
            <img src={FeatureImg} alt="" />
          </div>
          <div className="features-title">
            <h1>We Provide Many Features You Can Use</h1>
            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul>
              <li>
                <img src={CheckIcon} alt="" />
                Powerfull online protection.
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                Internet without borders.
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                Supercharged VPN
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                No specific time limits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
