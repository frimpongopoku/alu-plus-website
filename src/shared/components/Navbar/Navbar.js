import React, { Component } from "react";
import "./Navbar.css";
import { TOP_LINKS } from "./values";
import logo from "./../../../assets/media/logo.png";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* ---------- TOP BAR -------- */}
        <div className="top-nav">
          <div className="right-blue-menu">
            {TOP_LINKS.map((link) => (
              <a href={link.url} className="top-bar-link">
                {" "}
                {link.name}
              </a>
            ))}
          </div>

          <div className="top-creators">
            <a href="#" className="top-bar-link">
              About Creators
            </a>
          </div>
        </div>

        {/* ----------------- REAL NAV BAR ------------- */}
        <div className="real-navbar elevate-float">
          <div className="nav-logo">
            <img
              className=""
              style={{ height: 120, marginTop: -12 }}
              src={logo}
            />
          </div>

          <div className="nav-links-container">
            <a className="menu-item" href="#">
              HOME  
            </a>
            <a className="menu-item" href="#">
              ACADEMICS 
            </a>
            <a className="menu-item" href="#">
              STUDENT LIFE 
            </a>
            <a className="menu-item" href="#">
              ABOUT 
            </a>
            <a className="menu-item" href="#">
              CONTACT 
            </a>
          </div>

          <button className="nav-apply">
            Apply Now <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </div>
      </div>
    );
  }
}
