import React, { Component } from "react";
import "./Hero.css";
import backImage from "./../../../assets/media/back-grad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
export default class Hero extends Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className="hero-background">
          <img src={backImage} className="hero-back-image" />
        </div>
        <div
          className="hero-trans-layer"
          style={{ "--backgroundColor": "maroon" }}
        ></div>
        <div className="skewed-box">

        </div>
        {/* <div className="hero-content">
          <h2>AFRICAN LEADERSHIP UNIVERSITY</h2>
          <p>Get the education that is built around the impact you want</p>

          <button className="">
            OUR PROGRAMS <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </div> */}
      </div>
    );
  }
}
