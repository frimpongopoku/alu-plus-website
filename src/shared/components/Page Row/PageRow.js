import React, { Component } from "react";
import "./PageRow.css";
export default class PageRow extends Component {
  render() {
    const { left, right, leftSplit, rightSplit, totalSplit } = this.props;
    return (
      <div>
        <div className={`col-md-${totalSplit} offset-md-2`}>
          <div className="row">
            <div className={`col-md-${leftSplit} m-page-column`}>{left}</div>
            <div className={`col-md-${rightSplit} m-page-column`}>{right}</div>
          </div>
        </div>
      </div>
    );
  }
}

PageRow.defaultProps = {
  left: <></>,
  right: <></>,
  leftSplit: 4,
  rightSplit: 8,
  totalSplit: 8,
};
