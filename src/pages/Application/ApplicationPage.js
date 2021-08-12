import React, { Component } from "react";
import Footer from "../../shared/components/Footer/Footer";
import Hero from "../../shared/components/Hero/Hero";
import Navbar from "../../shared/components/Navbar/Navbar";
import PageTitle from "../../shared/components/Page Title/PageTitle";
import "./ApplicationPage.css";
import { FORM } from "./values";

export default class ApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

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

            return <></>;
          })}
          <div className="everyday-flex" style={{ justifyContent: "flex-end" }}>
            <button
              className="btn btn-success hybrid"
              style={{
                padding: "15px 50px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginRight: 10,
              }}
              onClick={() => this.setState({ submitted: true, form: null })}
            >
              SEND
            </button>
          </div>

          {this.state.submitted && (
            <p
              className="alert alert-success"
              style={{ marginTop: 10, cursor: "pointer" }}
              onClick={() => this.setState({ submitted: false })}
            >
              {" "}
              Great, thanks for sending your details
            </p>
          )}
        </div>

        <Footer />

        {/* -------------- DISCUSSION AREA ----------------- */}
        {/* <PageTitle
          title="ASK US YOUR QUESTIONS"
          subtitle="The questions you ask here will be public "
        />
        <div className="col-md-8 offset-md-2" style={{ marginTop: "4%" }}>
          <div className="comment-section">
            <div style={{ color: "#e4e4e4" }}>
              <small>Unique Identification: </small>{" "}
              <small>UIERjdFDSJ783d&dddd</small>
            </div>
            <Textbox
              label="name"
              placeholder="What name would you like to go by? "
              type="text"
              style={{
                borderColor: "var(--app-theme-maroon)",
                // borderRadius: 5,
                borderWidth: 0,
                borderLeftWidth: 4,
                marginBottom: 10,
              }}
            />
            <textarea
              className="m-textarea"
              rows="6"
              placeholder="Ask us any question..."
            ></textarea>

            <div
              className="everyday-flex"
              style={{
                justifyContent: "flex-end",
                marginBottom: 13,
              }}
            >
              <button
                className="btn btn-success hybrid"
                style={{
                  padding: "15px 50px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginRight: 10,
                  background: "var(--app-theme-maroon)",
                  borderColor: "var(--app-theme-maroon)",
                }}
              >
                POST
              </button>
            </div>
          </div>
          {[1, 2, 4, 4].map((item, index) => (
            <div className="comment-item" key={index.toString()}>
              <h3>Frimpong Opoku Agyemang</h3>
              <small>22nd February 2021</small>
              <p>
                cum mattis amet fusce. Maecenas ut elit, malesuada eu libero,
                cursus dis porta et. Cras egestas pellentesque nunc elit turpis
                ultrices ornare nullam tortor. Cras sit lectus habitant turpis
                dolor tortor viverra est lorem. Pellentesque hendrerit tempor
                laoreet facilisi netus tincidunt sit blandit et. Quis orci eu
                imperdiet congue sed quam semper. Auctor amet tortor sed vitae.
                A mattis ullamcorper
              </p>
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

export const Textbox = (props) => {
  const { type = "text", placeholder, label, style = {}, textarea } = props;

  if (textarea)
    return (
      <div className="input-container">
        <small className="m-label">{label}</small>
        <textarea
          className="m-textbox"
          type={type}
          placeholder={placeholder}
          style={style}
          rows="7"
        ></textarea>
      </div>
    );
  return (
    <div className="input-container">
      <small className="m-label">{label}</small>
      <input
        className="m-textbox"
        type={type}
        placeholder={placeholder}
        style={style}
      />
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
