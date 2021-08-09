import React, { Component } from "react";

export default class PhoneList extends Component {
  render() {
    let { productList } = this.props;
    return (
      <div className="card">
        <img src={productList.hinhAnh} alt="..." height={350} />
        <div className="card-body">
          <h3>{productList.tenSP}</h3>
          <p>{productList.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleClick(productList);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}


