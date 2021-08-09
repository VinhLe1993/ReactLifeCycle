import React, { Component } from "react";
import ProductItem from "./ProductItem.js";
export default class ProductList extends Component {
  renderProduct = () => {
    let { product, viewDetail } = this.props;
    return product.map((product, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItem item={product} viewDetail={viewDetail} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}


