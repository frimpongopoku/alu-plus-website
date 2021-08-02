import React, { Component } from "react";
import "./Footer.css";
import logo from "./../../../assets/media/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
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
            <div className="footer-content-wrapper">
              <div className="logo-container elevate-float">
                <img
                  src={logo}
                  style={{ height: 140, width: 240 }}
                  alt="logo media"
                />
              </div>

              <div className="footer-socials" style={{ padding: 6 }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
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
