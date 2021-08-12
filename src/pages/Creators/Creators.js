import React, { Component } from "react";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageRow from "../../shared/components/Page Row/PageRow";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./Creators.css";
import { TEAM } from "./values";
export default class Creators extends Component {
  left(params = {}) {
    return (
      <div className="everyday-flex">
        <img
          className="team-mate-img"
          style={{ borderColor: params.color }}
          src={params.img}
          alt="site media"
        />
      </div>
    );
  }

  right(params) {
    return (
      <div className="everyday-flex" style={{ flexDirection: "column" }}>
        <div
          className="everyday-flex"
          style={{ width: "100%", marginBottom: "12px" }}
        >
          <div
            className="everyday-flex team-member-name"
            style={{ flex: "6", justifyContent: "flex-start" }}
          >
            <span> {params.name} </span>
          </div>
          <div
            className="everyday-flex team-member-country"
            style={{
              flex: "6",
              justifyContent: "flex-end",
              // flexDirection: "row-reverse",
            }}
          >
            {params.country}
          </div>
        </div>
        <p className="member-bio">{params.bio}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <Hero title="Creators" subtitle="The team behind the scene" />

        <PageTitle title="Meet The Team" />

        {TEAM.map((mem, ind) => (
          <div key={ind.toString()} style={{ marginBottom: "8%" }}>
            <PageRow
              leftSplit={3}
              rightSplit={9}
              left={this.left({ color: mem.imgColor, img: mem.img })}
              right={this.right(mem)}
            />
          </div>
        ))}

        <Footer />
      </div>
    );
  }
}
