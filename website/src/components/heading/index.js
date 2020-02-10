import React, { Component } from "react";
import './index.scss';

export default class Heading extends Component {
  render() {
    const { heading } = this.props;
    return (
      <div className="heading-container">
        <h2>{heading}</h2>
      </div>
    );
  }
}
