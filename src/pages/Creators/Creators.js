import React, { Component } from "react";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageRow from "../../shared/components/Page Row/PageRow";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

import "./Creators.css";
import { TEAM } from "./values";
class Creators extends Component {
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
            }}
          >
            {params.country}
          </div>
        </div>
        <p className="member-bio" style={{ textAlign: "justify" }}>
          {params.bio}
        </p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <Hero title="Creators" subtitle="The team behind the scene" />

        <PageTitle title="Meet The Team" />

        {TEAM.reverse().map((mem, ind) => (
          <>
            <div key={ind.toString()} style={{ marginBottom: "1%" }}>
              <PageRow
                leftSplit={3}
                rightSplit={9}
                left={this.left({ color: mem.imgColor, img: mem.img })}
                right={this.right(mem)}
              />
            </div>
            <div className="col-md-8 offset-md-2">
              {mem.coords && (
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    position: "relative",
                    marginBottom: 20,
                    marginBottom: "10%",
                  }}
                >
                  <p>{mem.name} lives here</p>
                  <Map
                    zoom={14}
                    google={window.google}
                    initialCenter={mem.coords}
                  >
                    <Marker name={"Current location"} />
                  </Map>
                </div>
              )}
            </div>
          </>
        ))}

        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDSczU-xULK_7PdU8-HqwGjc-xvjaq2BhI",
})(Creators);
