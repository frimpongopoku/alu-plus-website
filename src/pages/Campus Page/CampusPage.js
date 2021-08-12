import React, { Component } from "react";
import Card from "../../shared/components/Card/Card";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageRow from "../../shared/components/Page Row/PageRow";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./CampusPage.css";
import { PICTURES, POLICIES } from "./values";
import athena from "./../../assets/media/athena.jpeg";

export default class CampusPage extends Component {
 
  initDisqus() {
    var d = document,
      s = d.createElement("script");
    s.src = "https://ip-group-3-faso.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }

  componentDidMount() {
    this.initDisqus();
  }

  left() {
    return (
      <div className="everyday-flex ">
        <img src={athena} className="camp-left-img" alt="paragraph media" />
      </div>
    );
  }

  right() {
    return (
      <div className="everyday-flex">
        <p className="member-bio" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet egestas
          maecenas scelerisque imperdiet aenean elementum tortor. Lacus
          malesuada cum mattis amet fusce. Maecenas ut elit, malesuada eu
          libero, cursus dis porta et. Cras egestas pellentesque nunc elit
          turpis ultrices ornare nullam tortor. Cras sit lectus habitant turpis
          dolor tortor viverra est lorem. Pellentesque hendrerit tempor laoreet
          facilisi netus tincidunt sit blandit et. Quis orci eu imperdiet congue
          sed quam semper. Auctor amet tortor sed vitae. A mattis ullamcorper
          cursus ullamcorper. Amet lectus pretium sit iaculis. Purus elit leo eu
          porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          egestas maecenas scelerisque imperdiet aenean elementum tortor. Lacus
          malesuada cum mattis amet fusce. Maecenas ut elit, malesuada eu
          libero, cursus dis porta et. Cras egestas pellentesque nunc elit
          turpis ultrices ornare nullam tortor. Cras sit lectus habitant turpis
          dolor tortor viverra est lorem. Pellentesque hendrerit tempor laoreet
          facilisi netus tincidunt sit blandit et. Quis orci eu imperdiet congue
          sed quam semper. Auctor amet tortor sed vitae. A mattis ullamcorper
          cursus ullamcorper. Amet lectus pretium sit iaculis. Purus elit leo eu
          porta.
        </p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Navbar />

        <Hero
          title="Mauritius Campus"
          subtitle="Welcome to the island of jellyfishes"
          image="https://www.alueducation.com/wp-content/uploads/2021/05/NR-impact-banner.jpg"
          imageStyle={{ objectPosition: "center" }}
        />

        <PageTitle title="#TheIslandIsMyCampus" />
        <PageRow left={this.left()} right={this.right()} />
        <PageTitle title="HOUSING" />
        <PageRow leftSplit={12} rightSplit={0} left={this.right()} />
        <div className="col-md-8 offset-md-2">
          {PICTURES.map((item, index) => (
            <div
              className="everyday-flex"
              style={{ flexWrap: "wrap" }}
              key={index.toString()}
            >
              {item.map((image, ind) => (
                <img
                  key={ind.toString()}
                  src={image.url}
                  className="housing-image"
                  alt="students"
                />
              ))}
            </div>
          ))}
        </div>

        <PageTitle title="OUR POLICIES" />
        <div className="col-md-8 offset-md-2">
          {/* ------------------ MOBILE VERSION OF OUR POLICIES ------------------ */}
          {POLICIES.map((arr, index) => (
            <div className=" vanish-on-pc" key={index.toString()}>
              {arr.map((policy, ind) => (
                <div
                  className=" "
                  key={ind.toString()}
                  style={{ margin: "10px 0px" }}
                >
                  <Card
                    title={policy.name}
                    text={policy.description}
                    hasFooter
                    theme={{
                      textColor: policy.theme.textColor,
                      actionColor: policy.theme.textColor,
                      overlayColor: policy.theme.textColor,
                    }}
                    mobile
                  />
                </div>
              ))}
            </div>
          ))}
          {/* ------------------ PC VERSION OF OUR POLICIES ------------------ */}
          {POLICIES.map((arr, index) => (
            <div
              className="everyday-flex vanish-on-phone"
              key={index.toString()}
            >
              {arr.map((policy, ind) => (
                <div
                  className="col-md-4 col-xs-12 col-lg-4 col-sm-6 "
                  key={ind.toString()}
                >
                  <Card
                    img={policy.image}
                    title={policy.name}
                    text={policy.description}
                    hasFooter
                    theme={{
                      textColor: policy.theme.textColor,
                      actionColor: policy.theme.textColor,
                      overlayColor: policy.theme.textColor,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <PageTitle
          title="ADVICE"
          subtitle="Are you already a student? Leave a message to the upcoming leaders"
          tag="advice"
        />
        <div className="col-md-8 offset-md-2">
          <div id="disqus_thread"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
