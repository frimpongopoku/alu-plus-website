import {
  faHandSparkles,
  faMedal,
  faStar,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Card from "../../shared/components/Card/Card";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./LandingPage.css";
import { CORE_COURSES } from "./values";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Hero
          title="AFRICAN LEADERSHIP UNIVERSITY"
          subtitle="Get the education that is built around the impact you want"
          skewed={false}
        />
        <PageTitle />

        <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
          <div className="row">
            {CORE_COURSES.map((item, index) => (
              <div key={index.toString()} className="col-md-3">
                <Card title={item.name} />
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
                style={{ color: "var(--app-theme-blue)" }}
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

        <PageTitle title="ONLY AT ALU" />

        <div className="only-at-alu"></div>

        {/* ----------- TESTIMONIALS --------- */}

        <PageTitle title="WHAT PEOPLE SAY" />
        <div className="landing-testimonials-container">
          <div>
            <div className="l-test-card elevate-float"></div>
          </div>
        </div>

        {/* ------- FOOTER--------- */}
        <Footer />
      </div>
    );
  }
}
