import React, { Component } from "react";
import PageTitle from "../../shared/components/Page Title/PageTitle";

export default class Error extends Component {
  render() {
    return (
      <div
        className="everyday-flex"
        style={{ height: "100vh", background: "#ffdfdf", flexWrap: "wrap" }}
      >
        <PageTitle title="Sorry the page you are looking for, does not exist" />
        <a
          href="/"
          style={{
            color: "maroon",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          GO BACK
        </a>
        {/* <h1>Sorry the page you are looking for does not exist</h1> */}
      </div>
    );
  }
}
