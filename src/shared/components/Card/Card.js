import React, { Component } from "react";
import "./Card.css";
import { HashLink as Link } from "react-router-hash-link";
export default class Card extends Component {
  render() {
    const {
      theme,
      img,
      text,
      title,
      link,
      linkText,
      hasFooter,
      mobile,
      rootClassName,
    } = this.props;
    if (mobile)
      return (
        <div className="mob-card">
          <div
            style={{ padding: 15 }}
            className="mob-card-content card-content"
          >
            <h5 style={{ "--title-color": theme?.textColor || "black" }}>
              {title}
            </h5>
            <p style={{ "--text-color": "#4e4e4e" }}>{text}</p>
          </div>
          {hasFooter && (
            <div className="m-card-footer">
              <Link
                style={{ "--action-color": theme?.actionColor || "maroon" }}
                to={link}
              >
                {linkText}
              </Link>
            </div>
          )}
        </div>
      );
    return (
      <div className={`card-container elevate-float ${rootClassName}`}>
        <div className="card-img-container">
          <img
            className="m-card-img"
            src={img || "https://via.placeholder.com/300"}
            alt="card media"
          ></img>
          <div
            style={{
              "--overlay-color":
                theme?.overlayColor || "var(--app-theme-maroon)",
            }}
            className="m-card-img-overlay"
          ></div>
        </div>
        <div className="card-content">
          <h5 style={{ "--title-color": theme?.textColor || "black" }}>
            {title}
          </h5>
          <p style={{ "--text-color": "#4e4e4e" }}>{text}</p>
        </div>
        {hasFooter && (
          <div className="m-card-footer">
            <Link
              style={{ "--action-color": theme?.actionColor || "maroon" }}
              to={link}
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

Card.defaultProps = {
  title: "PROJECT",
  text: `Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Porttitor aliquet etiam dictum ut mauris in cras quisque tristique.`,
  link: "#",
  linkText: "Download",
  hasFooter: false,
  rootClassName: "",
};
