import React, { Component } from "react";
import Card from "../shared/components/Card/Card";


export default class Playground extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: "100vh",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "20%" }}>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}
