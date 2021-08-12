import React, { Component } from "react";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./Gallery.css";
import { SECTIONS } from "./values";
export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero title="ALU Gallery" subtitle="Experience our highlights" />
        {SECTIONS.map((sec, index) => (
          <div key={index.toString()}>
            <PageTitle title={sec.title} tag={sec.tag} />
            <div className="col-md-10 offset-md-1">
              <div
                className="everyday-flex gallery-shelf"
                key={"pa" + index.toString()}
              >
                {sec.pics.map((item, ind) => (
                  <img
                    key={ind.toString()}
                    src={item || "https://via.placeholder.com/300"}
                    className="gallery-img elevate-1-half"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
