import React, { Component } from "react";
import "./Hero.css";
import backImage from "./../../../assets/media/back-grad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
export default class Hero extends Component {
  render() {
    const { theme, skewed, title, subtitle, link, linkText, Jsx } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <div className="hero-sizing hero-background">
          <img src={backImage} className="hero-sizing hero-back-image" />
        </div>
        <div
          className="hero-sizing hero-trans-layer"
          style={{
            "--backgroundColor": theme?.layerBackgroundColor || "maroon",
          }}
        ></div>

        {skewed ? (
          <>
            <div
              className="skewed-box"
              style={{
                "--skewed-background": theme?.skewedBackgroundColor || "maroon",
              }}
            ></div>

            <div className="hero-sizing content-box-2">
              {!Jsx ? (
                <>
                  <h2 className="hero-title">{title}</h2>
                  <p className="hero-subtitle">{subtitle}</p>
                </>
              ) : (
                <Jsx />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="hero-sizing hero-content">
              {!Jsx ? (
                <>
                  <h2 className="hero-title">{title}</h2>
                  <p className="hero-subtitle">{subtitle}</p>

                  {linkText && link && (
                    <a href={link} className="">
                      {linkText} <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </a>
                  )}
                </>
              ) : (
                <Jsx />
              )}
            </div>
          </>
        )}
      </div>
    );
  }
}

Hero.defaultProps = {
  skewed: true,
  title: "AFRICAN LEADERSHIP UNIVERSITY",
  subtitle: "Get the education that is built around the impact you want",
  link: "#",
  linkText: "OUR PROGRAMS",
  Jsx: null,
};
