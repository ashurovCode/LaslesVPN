import React from 'react'
import './global.css'
import globalMap from '../../assets/images/map.svg'
import discord from '../../assets/images/discord.png'
import reddit from '../../assets/images/reddit.png'
import spotify from "../../assets/images/spotify.png";

export default function Global() {
  return (
    <section>
      <div className="container">
        <div className="global-content">
          <div className="global-title">
            <h1>Huge Global Network of Fast VPN</h1>
            <p>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </p>
          </div>
          <div className="global-img">
            <img src={globalMap} alt="" />
          </div>
          <div className="global-brends">
            <img src={spotify} alt="" />
            <img src={discord} alt="" />
            <img src={reddit} alt="" />
            <img src={discord} alt="" />
            <img src={spotify} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
