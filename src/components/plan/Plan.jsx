import React from "react";
import "./plan.css";
import planImg from "../../assets/icons/Free.svg";
import chekJam from "../../assets/icons/jam_check.svg";

export default function Plan() {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan-content">
          <div className="plan-title">
            <h1>Choose Your Plan</h1>
            <p>
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          <div className="plan-choose">
            <div className="plan-free plan-choose-box">
              <img src={planImg} alt="" />
              <h3>Free Plan</h3>
              <ul>
                <li>
                  <img src={chekJam} alt="" />
                  Unlimited Bandwitch
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Encrypted Connection
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  No Traffic Logs
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Works on All Devices
                </li>
              </ul>
              <h2>Free</h2>
              <div className="plan-choose-box-btn">Select</div>
            </div>
            <div className="plan-standard plan-choose-box">
              <img src={planImg} alt="" />
              <h3>Standard Plan</h3>
              <ul>
                <li>
                  <img src={chekJam} alt="" />
                  Unlimited Bandwitch
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Encrypted Connection
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  No Traffic Logs
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Works on All Devices
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Connect Anyware
                </li>
              </ul>
              <h2>
                $9<span> / mo</span>
              </h2>
              <div className="plan-choose-box-btn">Select</div>
            </div>
            <div className="plan-premium plan-choose-box">
              <img src={planImg} alt="" />
              <h3>Premium Plan</h3>
              <ul>
                <li>
                  <img src={chekJam} alt="" />
                  Unlimited Bandwitch
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Encrypted Connection
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  No Traffic Logs
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Works on All Devices
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Connect Anyware
                </li>
                <li>
                  <img src={chekJam} alt="" />
                  Get New Features
                </li>
              </ul>
              <h2>
                $12<span> / mo</span>
              </h2>
              <div className="plan-choose-box-btn">Select</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
