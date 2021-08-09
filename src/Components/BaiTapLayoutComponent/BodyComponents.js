import React, { Component } from 'react'
import BannerComponents from './BannerComponents'
import ItemComponents from './ItemComponents'
export default class BodyComponents extends Component {
    render() {
        return (
            <div className="container">
                <BannerComponents/>
                <ItemComponents/>
            </div>
        )
    }
}
