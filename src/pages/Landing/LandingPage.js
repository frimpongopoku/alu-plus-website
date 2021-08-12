import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faHandSparkles,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Card from "../../shared/components/Card/Card";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./LandingPage.css";
import { CONTACT_FORM, CORE_COURSES } from "./values";
import { getRandomAnimationClass } from "./../../shared/utils/utils";
import facebook from "./../../assets/media/facebook.png";
import google from "./../../assets/media/google.png";
import coke from "./../../assets/media/coke.png";
import microsoft from "./../../assets/media/microsoft.png";
import { Textbox } from "../Application/ApplicationPage";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <Hero
          title="AFRICAN LEADERSHIP UNIVERSITY"
          subtitle="Get the education that is built around the impact you want"
          skewed={false}
          link="/about#courses"
          // image={PAGE_DATA.backgroundImage}
        />
        <PageTitle />

        <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
          <div className="row">
            {CORE_COURSES.map((item, index) => (
              <div
                key={index.toString()}
                className="col-md-3 col-xs-3 col-sm-3"
              >
                <Card
                  title={item.name}
                  rootClassName={getRandomAnimationClass()}
                  img={item.image}
                  linkText="Read More"
                  link={item.link}
                  hasFooter
                />
              </div>
            ))}
          </div>

          <PageTitle title="AWARDS" />

          <div className="row">
            <div className="col-md-4 col-xs-4 col-sm-4 m-column">
              <FontAwesomeIcon className="land-fa" icon={faHandSparkles} />
              <h5 className="land-h5">21st Century Skills</h5>
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4 m-column">
              <h1
                className="land-fa"
                style={{
                  fontWeight: "bold",
                  color: "var(--app-theme-blue)",
                  fontSize: "12rem",
                }}
              >
                1
              </h1>
              <h5
                className="land-h5"
                style={{ color: "var(--app-theme-blue)", textAlign: "center" }}
              >
                Most Innovative Company
              </h5>
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4 m-column">
              <FontAwesomeIcon className="land-fa" icon={faMedal} />
              <h5 className="land-h5">The Havard Of Africa</h5>
            </div>
          </div>
        </div>

        {/* ----------------- ONLY ALU ------ */}

        <PageTitle title="MEET OUR PARTNERS" tag="sponsors" />

        <div className="only-at-alu everyday-flex">
          <img
            className="sponsor-logo"
            src={facebook}
            alt="social media icon"
          />
          <img className="sponsor-logo" src={coke} alt="social media icon" />
          <img className="sponsor-logo" src={google} alt="social media icon" />
          <img
            className="sponsor-logo"
            src={microsoft}
            alt="social media icon"
          />
        </div>

        {/* ----------- TESTIMONIALS --------- */}

        <PageTitle title="WHAT PEOPLE SAY" tag="testimonials" />
        <div className="landing-testimonials-container">
          <div>
            <div className="l-test-card ">
              <img
                src="https://i.pravatar.cc/300"
                alt="user pic"
                className="l-test-image"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <h5> ~Frimpong Opoku</h5>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: 20,
            }}
          >
            <FontAwesomeIcon className="arrow-svg" icon={faArrowCircleLeft} />
            <FontAwesomeIcon className="arrow-svg" icon={faArrowCircleRight} />
          </div>
        </div>

        <PageTitle
          title="CONTACT US"
          subtitle="Send us a message"
          tag="contact-us"
        />
        <div className="col-md-8 offset-md-2">
          {CONTACT_FORM.map((field, index) => (
            <div key={index.toString()}>
              <Textbox {...field} />
            </div>
          ))}
          <div className="everyday-flex" style={{ justifyContent: "flex-end" }}>
            <button
              className="btn btn-success hybrid"
              style={{
                padding: "15px 50px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginRight: 10,
              }}
              onClick={() => this.setState({ submitted: true })}
            >
              SEND
            </button>
          </div>

          {this.state.submitted && (
            <p
              className="alert alert-success"
              style={{ marginTop: 10, cursor: "pointer" }}
              onClick={() => this.setState({ submitted: false })}
            >
              {" "}
              Great, your message has been well received, we will get back to
              you as soon as possible.
            </p>
          )}
        </div>

        {/* ------- FOOTER--------- */}
        <Footer />
      </div>
    );
  }
}
