import React, { Component } from "react";
import GlassesImgButton from "./GlassesImgButton.js";
import ModelFace from "./ModelFace.js";

export default class GlassShop extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    productDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  glassesButton = () => {
    let arrButton = this.arrGlasses.map((glasses, index) => {
      return (
        <div>
          <button
            onClick={() => {
              this.handleClick(glasses);
            }}
          >
            <GlassesImgButton glasses={this.arrGlasses[index]} />
          </button>
        </div>
      );
    });
    return arrButton;
  };

  handleClick = (productClick) => {
    this.setState({
      productDetail: productClick
    })
  }

  render() {
    let {productDetail} = this.state; 
    return (
      <div className="content">
        <div className="header">Glass Shop</div>
        <div className="body">
          <div className="body__item">
            <ModelFace faceImg="./glassesImage/model.jpg" />
            <img src={productDetail.url} className="glasses" />
            <div className="cardInfo">
              <h3>{productDetail.name}</h3>
              <p>{productDetail.desc}</p>
              <p>{productDetail.price}</p>
            </div>
          </div>
          <div className="body__item">
            <ModelFace faceImg="./glassesImage/model.jpg" />
          </div>
        </div>
        <div className="choose_glasses">{this.glassesButton()}</div>
      </div>
    );
  }
}
