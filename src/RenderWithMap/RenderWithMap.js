import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "Iphone",
      price: 1000,
      img: "https://picsum.photos/id/1/200/200",
    },
    {
      id: 2,
      name: "Iphone X",
      price: 2000,
      img: "https://picsum.photos/id/2/200/200",
    },
    {
      id: 3,
      name: "Iphone XS",
      price: 3000,
      img: "https://picsum.photos/id/3/200/200",
    },
  ];

  renderProduct = () => {
    // let content = [];
    // for (let i = 0; i < this.arrProduct.length; i++) {
    //   //Mỗi lần duyệt lấy ra 1 đối tượng product
    //   let product = this.arrProduct[i];
    //   //Tử đối tượng product => tạo ra 1 tagJSX
    //   let tagTr = (
    //     <tr>
    //       <td>{product.id}</td>
    //       <td>{product.name}</td>
    //       <td>
    //         <img src={product.img}></img>
    //       </td>
    //       <td>{product.price}</td>
    //       <td></td>
    //     </tr>
    //   );
    //   content.push(tagTr); //[<tr></tr>, <tr></tr>, <tr></tr>]
    // }
    // return content;

    let content = this.arrProduct.map((product, index) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>
            <img src={product.img}></img>
          </td>
          <td>{product.price}</td>
          <td></td>
        </tr>
      );
    });
    return content;
  };

  renderProductCard = () => {
      let content = this.arrProduct.map((product, index) => {
          return <div className="col-4">
              <div className="card">
                  <img src={product.img} ></img>
                  <div className="card-body bg-dark text-white">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                  </div>
              </div>
          </div>
      })
      return content;
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr/>
        <h3>Danh sách sản phẩm</h3>
        <div className="row">
            {this.renderProductCard()}
        </div>
      </div>
    );
  }
}
