import React, { Component } from 'react'
import ProductItem from "./ProductItem.js"

export default class ProductList extends Component {
    
    

    render() {
        let {product} = this.props;
        return (
            <div>
                <h3 className="text-center">Shoes shop</h3>
                <div className="row">
                    <div className="col-4">
                        <ProductItem />
                    </div>
                    <div className="col-4">
                        <ProductItem />
                    </div>
                    <div className="col-4">
                        <ProductItem />
                    </div>
                </div>
            </div>
        )
    }
}
