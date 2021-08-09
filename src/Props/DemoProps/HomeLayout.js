import React, { Component } from "react";
import Footer from "./Footer.js";
import ProductDemo from "./ProductDemo.js";

export default class HomeLayout extends Component {
  render() {
    return (
      <div className="container">
        <h3>Home layout</h3>

        <Footer bgColor="black" content="FrontEnd" />
        <hr />
        <h3>Product</h3>
        <div className="row">
          <div className="col-4">
            <ProductDemo productName="Pixel 3" price="1000"/>
          </div>
          <div className="col-4">
            <ProductDemo productName="Pixel 3a" price="800"/>
          </div>
          <div className="col-4">
            <ProductDemo productName="Pixel 3 XL" price="1500"/>
          </div>
        </div>
      </div>
    );
  }
}
