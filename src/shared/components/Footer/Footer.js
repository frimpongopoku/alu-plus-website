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
import {
  faCaretRight,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { QUICK_LINKS } from "./values";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container" style={{marginTop:60}}>
        <div className="row" style={{ height: "100%" }}>
          <div
            className="col-md-3 footer-column vanish-on-pc"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div className="footer-content-wrapper">
              <h4 className="footer-column-title">QUICK LINKS</h4>

              <div style={{ width: "100%" }}>
                {QUICK_LINKS.map((link) => (
                  <a href={link.url} className="footer-link">
                    <FontAwesomeIcon icon={faCaretRight} /> {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
            className="col-md-3 footer-column vanish-on-phone "
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
            className="col-md-3 footer-column vanish-on-phone"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div className="footer-content-wrapper">
              <h4 className="footer-column-title">QUICK LINKS</h4>

              <div style={{ width: "100%" }}>
                {QUICK_LINKS.map((link) => (
                  <a href={link.url} className="footer-link">
                    <FontAwesomeIcon icon={faCaretRight} /> {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ----------------- ADDRESS AREA ------------- */}
          <div
            className="col-md-3 footer-column vanish-on-phone"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <div className="footer-content-wrapper">
              <h4 className="footer-column-title">ADDRESSES</h4>

              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ marginRight: 6, color: "#F6BCBC" }}
                  />
                  <div className="footer-add">
                    <h6>ALC Mauritius</h6>
                    <h6>African Leadership Campus</h6>
                    <p>
                      Powder Mill Rd,
                      <br />
                      Pamplemousses, 21001 <br />
                      Mauritius
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ marginRight: 6, color: "#F6BCBC" }}
                  />
                  <div className="footer-add">
                    <h6>ALU Rwanda</h6>
                    <h6>African Leadership University</h6>
                    <p>
                      Bombogo,
                      <br />
                      Kigali Innovation City
                      <br />
                      Next to Azam
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ marginRight: 6, color: "#F6BCBC" }}
                  />
                  <div className="footer-add">
                    <h6>Front Desk</h6>

                    <p>
                      <span style={{ color: "#ffb3b3" }}>
                        <b>Rwanda:</b>
                      </span>{" "}
                      +250 784 650 219,
                      <br />
                      <span style={{ color: "#ffb3b3" }}>
                        <b>Mauritius:</b>
                      </span>{" "}
                      +230 53 43 49 51,
                      <br />
                    </p>
                  </div>
                </div>
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
