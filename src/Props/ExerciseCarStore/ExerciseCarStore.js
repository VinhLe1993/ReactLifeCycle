import React, { Component } from "react";
import ProductList from "./ProductList.js"
import Modal from "./Modal.js"

export default class ExerciseCarStore extends Component {
  cars = [
    {
      id: 1,
      name: "black car",
      img: "./img/CarBasic/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/CarBasic/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/CarBasic/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 3,
      name: "Steel car",
      img: "./img/CarBasic/products/steel-car.jpg",
      price: 4000,
    },
  ];

  state = {
    productDetail: {
      id: 1,
      name: "black car",
      img: "./img/CarBasic/products/black-car.jpg",
      price: 1000,
    },
  };

  viewDetail = (productClick) => {
    this.setState({
        productDetail:productClick
    })
}

  render() {
    return <div className="container">
      <ProductList product={this.cars} viewDetail={this.viewDetail}/>
      <Modal productDetail={this.state.productDetail}/>
    </div>;
  }
}

// import React, { Component } from "react";
// import Modal from "./Modal";
// import ProductList from "./ProductList";

// export default class ExerciseCarStore extends Component {
//   products = [
//     {
//       id: 1,
//       name: "black car",
//       img: "./img/CarBasic/products/black-car.jpg",
//       price: 1000,
//     },
//     {
//       id: 2,
//       name: "red car",
//       img: "./img/CarBasic/products/red-car.jpg",
//       price: 2000,
//     },
//     {
//       id: 3,
//       name: "silver car",
//       img: "./img/CarBasic/products/silver-car.jpg",
//       price: 3000,
//     },
//     {
//       id: 3,
//       name: "Steel car",
//       img: "./img/CarBasic/products/steel-car.jpg",
//       price: 4000,
//     },
//   ];

//   state = {
//     productDetail: {
//       id: 1,
//       name: "black car",
//       img: "./img/CarBasic/products/black-car.jpg",
//       price: 1000,
//     },
//   };



//   render() {
//     return (
//       <div className="row">
//         <ProductList productData={this.products} viewDetail={this.viewDetail}/>
//         <Modal productDetail={this.state.productDetail}/>
//       </div>
//     );
//   }
// }
