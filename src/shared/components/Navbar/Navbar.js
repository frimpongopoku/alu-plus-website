import React, { Component } from "react";
import "./Navbar.css";
import { TOP_LINKS, NAV_DEFAULT_LINKS } from "./values";
import logo from "./../../../assets/media/logo.png";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutUs, Academics, StudentLife } from "./MenuDisplays";
import { MobileBlanket, MobileNav, MobileSideBar } from "./mobile/MobileNav";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlanket: false,
      blanketContent: null,
      showPhoneSideBar: false,
      showPhoneBlanket: false,
    };
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown(e, params) {
    e.preventDefault();
    if (!params) return;
    const activeMenuID = this.state.blanketContent?.id;

    const stateKey = params.phone ? "showPhoneSideBar" : "showBlanket";
    // const extraParams = params.phone ? { showBlanket: true } : {};
    if (activeMenuID && activeMenuID === params.id)
      return this.setState({
        [stateKey]: false,
        blanketContent: null,
        showPhoneBlanket: false,
      });
    this.setState({
      [stateKey]: true,
      blanketContent: params,
      showPhoneBlanket: true,
    });
  }

  render() {
    const { showBlanket, blanketContent, showPhoneSideBar, showPhoneBlanket } =
      this.state;
    const Jsx = (blanketContent && blanketContent.jsx) || <></>;
    return (
      <div className="navbar-root">
        <div style={{ position: "relative" }}>
          {/* ---------- TOP BAR -------- */}
          <div className="top-nav">
            <div className="right-blue-menu">
              {TOP_LINKS.map((link, index) => (
                <a
                  href={link.url}
                  key={index.toString()}
                  className="top-bar-link"
                >
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

          <MobileNav
            logo={logo}
            toggled={this.state.showPhoneSideBar}
            toggleSidebar={(value) => {
              this.setState({ showPhoneSideBar: value });
            }}
          />
          <div className="real-navbar elevate-1 vanish-on-phone">
            <div className="nav-logo">
              <img
                className=""
                style={{ height: 120, marginTop: -12 }}
                src={logo}
              />
            </div>

            <div className="nav-links-container">
              {NAV_DEFAULT_LINKS.map((item, index) => (
                <div key={index.toString()}>
                  {item.hasChildren ? (
                    <a
                      href="#"
                      className="menu-item"
                      onClick={(e) =>
                        this.showDropdown(e, {
                          id: item.id,
                          jsx: item.jsx,
                          title: item.name,
                        })
                      }
                    >
                      {item.name}{" "}
                    </a>
                  ) : (
                    <a className="menu-item" href={item.link}>
                      {item.name}{" "}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <button className="nav-apply">
              Apply Now <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
          </div>

          {/* ------ MOBILE SIDEBAR COMPONENT --------- */}
          {showPhoneSideBar && (
            <>
              <div className="phone-ghost"></div>
              <MobileSideBar
                showBlanket={this.showDropdown}
                toggled={this.state.showPhoneSideBar}
                toggleSidebar={(value) => {
                  this.setState({ showPhoneSideBar: value });
                }}
              />
              {showPhoneBlanket && (
                <MobileBlanket
                  title={this.state.blanketContent?.title}
                  toggled={this.state.showPhoneSideBar}
                  toggleSidebar={(value) => {
                    this.setState({ showPhoneSideBar: value });
                  }}
                >
                  {<Jsx />}
                </MobileBlanket>
              )}
            </>
          )}

          {/* -------------------- NORMAL PC MODE NAV & BLANKET  */}
          {showBlanket && (
            <>
              <div className="vanish-on-phone">
                <div
                  className="ghost-curtain"
                  onClick={() => {
                    this.setState({ showBlanket: false, blanketContent: null });
                  }}
                ></div>
                <div className="nav-drop-blanket elevate-float">
                  <div style={{ padding: 20, height: "100%", width: "100%" }}>
                    <h3 className="drop-name">{blanketContent?.title}</h3>
                    <div className="student-life-menu-container">{<Jsx />}</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
