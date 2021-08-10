import React, { Component } from "react";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./ApplicationPage.css";
import { FORM } from "./values";
export default class ApplicationPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero
          title="APPLICATION"
          subtitle="Secure your spot at the African Leadership University"
        />
        <PageTitle
          title="APPLY"
          subtitle="We will communicate with you after your details are sent"
        />

        <div className="col-md-8 offset-md-2" style={{ marginTop: "4%" }}>
          {FORM.map((value, index) => {
            if (value.type === "text")
              return (
                <div key={index.toString()}>
                  {" "}
                  <Textbox {...value} />
                </div>
              );
            if (value.type === "dropdown")
              return (
                <div key={index.toString()}>
                  {" "}
                  <Dropdown {...value} />
                </div>
              );
          })}
          <div className="everyday-flex" style={{ justifyContent: "flex-end" }}>
            <button
              className="btn btn-success"
              style={{
                padding: "15px 50px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              SEND
            </button>
          </div>
        </div>
        <PageTitle
          title="ASK US YOUR QUESTIONS"
          subtitle="The questions you ask here will be public "
        />
      </div>
    );
  }
}

const Textbox = (props) => {
  const { type, placeholder, label } = props;
  return (
    <div className="input-container">
      <small className="m-label">{label}</small>
      <input className="m-textbox" type={type} placeholder={placeholder} />
    </div>
  );
};

const Dropdown = (props) => {
  const { label, data } = props;
  return (
    <div className="input-container">
      <small className="m-label">{label}</small>
      <div className="custom-select-container">
        <select className="select-undefault">
          <option>----</option>
          {data?.map((item, index) => (
            <option key={index.toString()}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
