import React, { Component } from "react";
import Cart from "./Cart.js";
import ProductListCart from "./ProductListCart.js";

export default class ShoppingCart extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    cart: [],
  };
  //State nằm ở đâu thì phương thức setState sẽ được khai báo tại đó (conmponent đó)
  addToCart = (productClick) => {
    console.log(productClick);
    //khi click vào sản phẩm thêm thuộc tính số lượng
    let cartProduct = { ...productClick, soLuong: 1 };
    //Lấy sản phẩm đó thêm vào mảng giỏ hàng
    let cartUpdate = [...this.state.cart];

    //Kiểm tra sản phẩm vừa click có tồn tại trong giỏ
    //hàng hay chưa
    let productInCart = cartUpdate.find((sp) => sp.maSP === cartProduct.maSP);

    if (productInCart) {
      //Tìm thấy
      productInCart.soLuong += 1; // tăng số lượng
    } else {
      //không tìm thấy
      cartUpdate.push(cartProduct); // Thêm vào giỏ hàng
      // cartUpdate = {...cartUpdate, cartProduct}
    }

    //setstate => cập nhật lại giá trị cho giỏ hàng mới
    this.setState({
      cart: cartUpdate,
    });
  };

  removeProduct = (productIDClick) => {
    console.log("clickRemove", productIDClick);
    let { cart } = this.state;
    //Tìm ra vị trí phần tử trong mảng có cùng maSP với productIDClick
    // let index = cart.findIndex((sp) => sp.maSP === productIDClick);
    // if (index !== -1) {
    //   //Tìm thấy
    //   cart.splice(index, 1);//Tiến hành xóa phần tử tại vị trí tím thấy
    // }

    cart = cart.filter((product) => product.maSP !== productIDClick);
    //Xử lý setState => cập nhật lại giỏ hàng
    this.setState({
      cart: cart,
    });
  };

  quantityCart = (productIDClick, soLuong) => {
    let { cart } = this.state;

    let plusMinusProduct = cart.find(
      (product) => product.maSP === productIDClick
    );
    if (plusMinusProduct) {
      plusMinusProduct.soLuong += soLuong;
      if (plusMinusProduct.soLuong < 1) {
        //   alert('Số lượng tối thiểu là 1!');
        //   //2 - -1 = 1
        //   plusMinusProduct.soLuong -= soLuong;
        this.removeProduct(productIDClick);
        return;
      }
    }
    this.setState({
      cart: cart,
    });
  };

  totalInCart = () => {
    let { cart } = this.state;
    let total = cart.reduce((soLuong, sanPham, index) => {
      return (soLuong += sanPham.soLuong);
    }, 0);

    return total.toLocaleString();
  };

  totalPrice = () => {
    let { cart } = this.state;
    let total = cart.reduce((price, sanPham, index) => {
      return (price += sanPham.soLuong * sanPham.giaBan);
    }, 0);
    return total.toLocaleString();
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            className="text text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalInCart()} - {this.totalPrice()} VND)
          </span>
        </div>
        <Cart
          cart={this.state.cart}
          removeProduct={this.removeProduct}
          quantityCart={this.quantityCart}
        />
        <ProductListCart
          dataPhone={this.dataPhone}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}


