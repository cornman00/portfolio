import React, { Component } from "react";
import CenterBox from "./CenterBox";
import Footer from "./Footer";

export class HomeMain extends Component {
  render() {
    return (
      <div className="main-box ">
        <div className="left-main-box">left</div>
        <div className="right-main-box">right</div>
      </div>
    );
  }
}

export default HomeMain;
