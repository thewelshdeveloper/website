import React, { Component } from "react";
import Header from "../../components/header";
import Wave from "../../components/wave";
import Title from "../../components/title";
import "./index.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Wave/>
        <Header />
        <div className="background-top">
        hi
        </div>
        <div className="background-bottom">
        </div>
         {/* <Title/>  */}
      </div>
    );
  }
}
