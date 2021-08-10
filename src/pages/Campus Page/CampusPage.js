import React, { Component } from "react";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageRow from "../../shared/components/Page Row/PageRow";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./CampusPage.css";
export default class CampusPage extends Component {
  left() {
    return (
      <div className="everyday-flex">
        <img src="http://via.placeholder.com/300" />
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
          subtitle="Welcome to the island of jellyfish"
        />

        <PageTitle title="#TheIslandIsMyCampus" />
        <PageRow left={this.left()} right={this.right()} />
        <PageTitle title="HOUSING" />
        <PageRow leftSplit={12} rightSplit={0} left={this.right()} />
      </div>
    );
  }
}
