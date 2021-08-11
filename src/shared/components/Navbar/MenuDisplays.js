import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import MUImage from "./../../../assets/media/alu-mauri.jpeg";
import RWImage from "./../../../assets/media/alu-rwanda.jpeg";
import { ABOUT_US_LINKS, ACADEMICS_LINKS, STUDENT_LIFE_LINKS } from "./values";
export const StudentLife = () => {
  return (
    <>
      {/* --------------- MAURITIUS ----------- */}
      <div className="image-menu-card">
        <img alt="menu-image" src={MUImage} />
        <h6
          style={{
            margin: "11px 3px",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: ".9rem",
          }}
        >
          ALC Mauritius
        </h6>
        <p>
          Experience the Island while shaping <br />
          Africa Up.
        </p>
        <a href="/campus/mu">
          See more{" "}
          <FontAwesomeIcon
            style={{ marginLeft: 5 }}
            icon={faLongArrowAltRight}
          />
        </a>
      </div>
      {/* -------------- RWANDA ------------------ */}
      <div className="image-menu-card">
        <img alt="menu-image" src={RWImage} />
        <h6
          style={{
            margin: "11px 3px",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: ".9rem",
          }}
        >
          ALU Rwanda
        </h6>
        <p>
          Feast with Paul Kagame, while you straighten out <br />
          Africa's short comings.
        </p>
        <a href="/campus/rw">
          See more{" "}
          <FontAwesomeIcon
            style={{ marginLeft: 5 }}
            icon={faLongArrowAltRight}
          />
        </a>
      </div>

      <div className="normal-menu-blanket-column">
        {STUDENT_LIFE_LINKS.map((link, index) => (
          <a
            key={index.toString()}
            className="student-life-link"
            href={link.link}
          >
            {link.name}
            <FontAwesomeIcon
              style={{ marginLeft: 5 }}
              icon={faLongArrowAltRight}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export var Academics = () => {
  return (
    <>
      {ACADEMICS_LINKS.map((list, index) => (
        <div key={index.toString()} className="normal-menu-blanket-column">
          <p className="mobile-group-name" style={{ fontWeight: "500" }}>
            {list.groupName}
          </p>
          {list.links.map((link, ind) => (
            <a
              className="student-life-link"
              key={ind.toString()}
              href={link.link}
            >
              {link.name}
              <FontAwesomeIcon
                style={{ marginLeft: 5 }}
                icon={faLongArrowAltRight}
              />
            </a>
          ))}
        </div>
      ))}
    </>
  );
};
export const AboutUs = () => {
  return (
    <>
      {ABOUT_US_LINKS.map((list, index) => (
        <div key={index.toString()} className="normal-menu-blanket-column">
          <p className="mobile-group-name" style={{ fontWeight: "500" }}>
            {list.groupName}
          </p>
          {list.links.map((link, ind) => (
            <a
              key={ind.toString()}
              style={{ textTransform: "capitalize" }}
              className="student-life-link"
              href={link.link}
            >
              {link.name}
              <FontAwesomeIcon
                style={{ marginLeft: 5 }}
                icon={faLongArrowAltRight}
              />
            </a>
          ))}
        </div>
      ))}
    </>
  );
};
