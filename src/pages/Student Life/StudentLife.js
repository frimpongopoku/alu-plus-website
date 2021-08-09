import React, { Component } from "react";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import "./StudentLife.css";
export default class StudentLife extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero title="STUDENT LIFE" subtitle="Nurturing the african leaders" />
      </div>
    );
  }
}
