import React, { Component } from "react";
import ProductItemCart from "./ProductItemCart.js";

export default class ProductListCart extends Component {
    renderPhone = () => {
        let {dataPhone, addToCart} = this.props;
        return dataPhone.map ((product, index) => {
            return <div className="col-4" key={index}>
                <ProductItemCart item={product} addToCart={addToCart}/>
            </div>
        })
    }

  render() {
    return (
      <div className="row">
        {this.renderPhone()}
      </div>
    );
  }
}

// import React, { Component } from "react";
// import ProductItemCart from "./ProductItemCart";

// export default class ProductListCart extends Component {
//   renderProduct = () => {
//     let { dataPhone, addToCart } = this.props;
//     return dataPhone.map((phone, index) => {
//       return (
//         <div className="col-4" key={index}>
//           <ProductItemCart item={phone} addToCart={addToCart}/>
//         </div>
//       );
//     });
//   };
//   render() {
//     return (
//       <div className="row">
//         {this.renderProduct()}
//       </div>
//     );
//   }
// }
