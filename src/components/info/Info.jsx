import React from "react";
import "./info.css";
import userImg from "../../assets/icons/heroicons_sm-user.svg";
import locationImg from "../../assets/icons/gridicons_location.svg";
import serverImg from "../../assets/icons/bx_bxs-server.svg";

export default function Info() {
  return (
    <div className="container">
      <div className="info">
        <div className="info-content">
          <div className="line info-box">
            <div className="info-box-img">
              <img src={userImg} alt="" />
            </div>
            <div className="info-title">
              <span>90+</span>USER
            </div>
          </div>
          <div className="line info-box">
            <div className="info-box-img">
              <img src={locationImg} alt="" />
            </div>
            <div className="info-title">
              <span>30+</span>LOCATION
            </div>
          </div>
          <div className="line info-box">
            <div className="info-box-img">
              <img src={serverImg} alt="" />
            </div>
            <div className="info-title">
              <span>50+</span>SERVER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
