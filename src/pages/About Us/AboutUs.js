import React, { Component } from "react";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageRow from "../../shared/components/Page Row/PageRow";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./AboutUs.css";
export default class AboutUs extends Component {
  lefSide() {
    return (
      <div className="everyday-flex">
        <img
          className="sole-image"
          src="https://via.placeholder.com/300"
          className="camp-left-img"
        />
      </div>
    );
  }

  rightSide() {
    return (
      <div className="everyday-flex">
        <p className="text-block member-bio">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <Navbar />
        <Hero title="ABOUT US" subtitle="Nurturing the african leaders" />

        <PageTitle title="WE DRIVE CHANGE IN AND OUT OF OUR COMMUNITIES" />
        <PageRow left={this.lefSide()} right={this.rightSide()} />
        <PageTitle title="HUBS IN ALL CORNERS" />
        <PageRow
          leftSplit={8}
          rightSplit={4}
          left={this.rightSide()}
          right={
            <img
              className="sole-image camp-left-img"
              src="https://via.placeholder.com/300"
            />
          }
        />

        <PageTitle title="FRUITFULL EXPERIENCES WHILE SOLVING AFRICA'S PROBLEMS" />
        <div className="col-md-8 offset-md-2">
          <div className="row">
            <center style={{ width: "100%" }}>
              <img
                src="https://via.placeholder.com/600"
                className="image-in-view"
              />
            </center>
          </div>
          <div className="image-shelf">
            {[1, 2, 3].map((img, index) => (
              <img
                key={index.toString()}
                className="img-item"
                src="https://via.placeholder.com/300"
              />
            ))}
          </div>
        </div>

        {/* ------------------- STATISTICS -------------- */}

        <PageTitle title="WHERE WE ARE NOW" />
        <div className="col-md-8 offset-md-2">
          <div className="number-tray">
            {[1, 2, 3].map((img, index) => (
              <div key={index.toString()} className="tray-item">
                <p className="tray-number">568+</p>

                <span>FEMALES</span>
              </div>
            ))}
          </div>
          <div className="number-tray">
            {[1, 2, 3].map((img, index) => (
              <div key={index.toString()} className="tray-item">
                <p className="tray-number">568+</p>

                <span>FEMALES</span>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
