import React, { Component } from "react";

export default class GlassesImgButton extends Component {
  render() {
    let { glasses } = this.props;
    return <img src={glasses.url} alt="..." width="100%" />;
  }
}
