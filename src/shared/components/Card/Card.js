import React, { Component } from "react";
import "./Card.css";
export default class Card extends Component {
  render() {
    const { theme, img, text, title, link, linkText, hasFooter } = this.props;
    return (
      <div className="card-container elevate-float">
        <div className="card-img-container">
          <img
            className="card-img"
            src={img || "https://via.placeholder.com/300"}
            alt="card media"
          ></img>
          <div
            style={{
              "--overlay-color":
                theme?.overlayColor || "var(--app-theme-maroon)",
            }}
            className="card-img-overlay"
          ></div>
        </div>
        <div className="card-content">
          <h5 style={{ "--title-color": theme?.titleColor || "black" }}>
            {title}
          </h5>
          <p style={{ "--text-color": theme?.textColor || "#4e4e4e" }}>
            {text}
          </p>
        </div>
        {hasFooter && (
          <div className="m-card-footer">
            <a
              style={{ "--action-color": theme?.actionColor || "maroon" }}
              href={link}
            >
              {linkText}
            </a>
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
};
