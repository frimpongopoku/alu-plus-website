import React, { Component } from "react";
import "./PageTitle.css";
export default class PageTitle extends Component {
  render() {
    const { title, subtitle, theme, tag } = this.props;
    return (
      <>
        <h1
          style={{
            "--text-color": theme?.color || "var(--app-theme-maroon)",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="page-title"
          id={tag || "not-tagged"}
        >
          <span>{title}</span>

          {subtitle && <small>{subtitle}</small>}
        </h1>
      </>
    );
  }
}

PageTitle.defaultProps = {
  title: "Learn skills that work in the 21st Century",
  // subtitle: "here we go",
};
