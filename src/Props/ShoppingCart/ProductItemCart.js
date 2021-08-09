import React, { Component } from "react";

export default class ProductItemCart extends Component {
    
  render() {
    let {item, addToCart} = this.props 
    return (
      <div className="card">
        <img src={item.hinhAnh} alt="..." />
        <div className="card-body">
            <h3>{item.tenSP}</h3>
            <p>{item.giaBan.toLocaleString()}</p>
            <button className="btn btn-danger" onClick={()=>{
                //Click va gọi lại hàm addToCart (ShoppingCart)
                addToCart(item)
            }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class ProductItemCart extends Component {
//   render() {
//       let {item, addToCart} = this.props
//     return (

//       <div className="card">
//         <img height={350} src={item.hinhAnh} alt="..." />
//         <div className="card-body">
//             <h3>{item.tenSP}</h3>
//             <p>{item.giaBan.toLocaleString()}</p>
//             <button className="btn btn-danger" onClick={()=>{addToCart(item)}}>Thêm giỏ hàng</button>
//         </div>
//       </div>
//     );
//   }
// }
