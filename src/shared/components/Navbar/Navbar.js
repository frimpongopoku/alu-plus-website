import React, { Component } from "react";
import "./Navbar.css";
import { TOP_LINKS } from "./values";
import logo from "./../../../assets/media/logo.png";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StudentLife } from "./MenuDisplays";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showBlanket: false, blanketContent: null };
  }

  showDropdown(e, params) {
    e.preventDefault();
    if (!params) return;
    const activeMenuID = this.state.blanketContent?.id;
    if (activeMenuID && activeMenuID === params.id)
      return this.setState({ showBlanket: false, blanketContent: null });
    this.setState({ showBlanket: true, blanketContent: params });
  }

  render() {
    const { showBlanket, blanketContent } = this.state;
    const Jsx = (blanketContent && blanketContent.jsx) || <></>;
    return (
      <div style={{ position: "relative" }}>
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
            <a
              className="menu-item"
              href="#"
              onClick={(e) =>
                this.showDropdown(e, { id: "student-life", jsx: StudentLife })
              }
            >
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

        {showBlanket && (
          <>
            <div
              className="ghost-curtain"
              onClick={() => {
                this.setState({ showBlanket: false, blanketContent: null });
              }}
            ></div>
            <div className="nav-drop-blanket elevate-float">{<Jsx />}</div>
          </>
        )}
      </div>
    );
  }
}
