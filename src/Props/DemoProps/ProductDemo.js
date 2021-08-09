import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {
        //this.props: thuộc tính có sẵn của rcc


        return (
            <div className="card">
                <img src="https://picsum.photos/200/200"/>
                <div className="card-body bg-dark text-white">
                    <p>{this.props.productName}</p>
                    <p>{this.props.price}</p>
                </div>
            </div>
        )
    }
}

