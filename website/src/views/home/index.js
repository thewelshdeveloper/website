import React, { Component } from "react";
import Header from "../../components/header";
import Wave from "../../assets/svg/wave1.svg";
import "./index.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="background-top">
            <div id="wave-container">
          <div id="wave"></div>
        </div>
        </div>
        <div className="background-bottom"></div>
        <Header />
      </div>
    );
  }
}
