import React, { Component } from "react";

export default class ModelFace extends Component {
  render() {
    return <img src={this.props.faceImg} className="face" />;
  }
}
