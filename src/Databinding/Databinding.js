import React, { Component } from 'react'

export default class Databinding extends Component {
    //Thuộc tính 
    name = 'Mon';
    
    
    //Phương thức tự xây dựng 
    renderCard = () => {
        let product = {
            id: 1,
            name: 'Iphone',
            price: 1000,
            img: 'https://picsum.photos/seed/picsum/200/300'
        }
        return <div className="card w-25">
            <img src={product.img} />
            <div className="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hàng</button>
            </div>
        </div>
    }


    render() {
        //khai báo biến, hàm (Khai báo sẽ  có từ khóa let var const)
        let tenHocVien = 'Mon'
        return (
            <div className="container">
                <div id="content"> {tenHocVien} </div>
                <div id="content"> {this.name} </div>
                
                {this.renderCard()}
            </div>
        )
    }
}
