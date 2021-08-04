import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import MUImage from "./../../../assets/media/alu-mauri.jpeg";
import RWImage from "./../../../assets/media/alu-rwanda.jpeg";
import { STUDENT_LIFE_LINKS } from "./values";
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
        <a href="#">
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
        <a href="#">
          See more{" "}
          <FontAwesomeIcon
            style={{ marginLeft: 5 }}
            icon={faLongArrowAltRight}
          />
        </a>
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "70%" }}>
        {STUDENT_LIFE_LINKS.map((link) => (
          <a className="student-life-link" href={link.link}>
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
