import React, { Component } from "react";
import Hero from "../shared/components/Hero/Hero";
import Navbar from "../shared/components/Navbar/Navbar";
import PageTitle from "../shared/components/Page Title/PageTitle";

export default class Playground extends Component {
  render() {
    return (
      <div>
        {/* <center>This is the end, hold your breathe and count to 10</center> */}
        {/* <Navbar /> */}
        <Hero />
        <PageTitle />
      </div>
    );
  }
}
