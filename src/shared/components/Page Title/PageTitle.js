import React, { Component } from "react";
import "./PageTitle.css";
export default class PageTitle extends Component {
  render() {
    const { title, subtitle, theme } = this.props;
    return (
      <>
        <h1
          style={{ "--text-color": theme?.color || "var(--app-theme-maroon)" }}
          className="page-title"
        >
          <span>{title}</span>
        </h1>
        {subtitle && <small>{subtitle}</small>}
      </>
    );
  }
}

PageTitle.defaultProps = {
  title: "Learn skills that work in the 21st Century",
  // subtitle: "here we go",
};
