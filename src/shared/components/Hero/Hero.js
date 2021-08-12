import React, { Component } from "react";
import "./Hero.css";
import backImage from "./../../../assets/media/back-grad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.skewedDiv = null;
    this.setSkewedDiv = (element) => (this.skewedDiv = element);
    this.gbemi = React.createRef();
  }
  componentDidMount() {
    this.scrollCheckFxn();
  }

  scrollCheckFxn() {
    // ---- to be continued
    var lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        const div = this.skewedDiv?.current;
        if (st > lastScrollTop) {
          // downscroll code
          // div.style.opacity = 0;
          if (div) div.style.opacity = 0;
          // console.log("I ma the div bro", this.skewedDiv);
        } else {
          // upscroll code
          if (div) div.style.opacity = 1;
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  }
  render() {
    this.scrollCheckFxn();
    const {
      theme,
      skewed,
      title,
      subtitle,
      link,
      linkText,
      Jsx,
      image,
      imageStyle,
    } = this.props;

    return (
      <div style={{ position: "relative", marginTop: "10vh" }} ref={this.gbemi}>
        <div className="hero-sizing hero-background">
          <img
            style={imageStyle}
            src={image || backImage}
            className="hero-sizing hero-back-image"
            alt="social media icon"
          />
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
              ref={this.setSkewedDiv}
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
                    <Link to={link} className="">
                      {linkText} <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Link>
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
  imageStyle: {},
};
