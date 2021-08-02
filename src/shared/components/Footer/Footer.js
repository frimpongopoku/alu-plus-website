import React, { Component } from "react";
import "./Footer.css";
import logo from "./../../../assets/media/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-md-3 footer-column"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {/* ----------------- SUBSCRIPTION AND LOGO AREA --------- */}
            <div className="footer-content-wrapper">
              <div className="logo-container elevate-float">
                <img
                  src={logo}
                  style={{ height: 140, width: 240 }}
                  alt="logo media"
                />
              </div>

              <div className="footer-socials" style={{ padding: 6 }}>
                <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" />
              </div>

              <div className="subscription-area">
                <p>Subscribe To News Letter</p>
                <input className="textbox" placeholder="Email..." />

                <button id="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>

          {/* ----------------- ABOUT US AREA -------------- */}
          <div
            className="col-md-3 footer-column"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div className="footer-content-wrapper">
              <h4 className="footer-column-title">ABOUT US</h4>
              <p className="footer-about-us">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                proin vitae morbi quis dui. Tortor, sit lacus, nibh mauris
                sagittis, libero, senectus nulla. Tellus mattis nulla non vitae
                libero, ac volutpat. Pulvinar lobortis nec fermentum cursus at
                mattis integer elementum tortor. Tellus nulla diam pellentesque
                dictum non suspendisse. Mauris etiam magnis Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer proin vitae morbi
                quis dui. Tortor, sit lacus, nibh mauris sagittis, libero,
                senectus nulla. Tellus mattis nulla non vitae libero, ac
                volutpat. Pulvinar lobortis nec fermentum cursus at mattis
                integer elementum tortor. Tellus nulla diam pellentesque dictum
                non suspendisse. Mauris etiam magnis
              </p>
            </div>
          </div>


          {/* ------------------ QUICK LINKS ----------- */}
          <div
            className="col-md-3 footer-column"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div className="footer-content-wrapper">
              <h4 className="footer-column-title">QUICK LINKS</h4>
              
            </div>
          </div>
        </div>
        <div className="footer-bottom-panel">
          <p>
            {" "}
            @2021 African Leadership University, All Rights Reserved | Site by
            F.A.S.O
          </p>
        </div>
      </div>
    );
  }
}
