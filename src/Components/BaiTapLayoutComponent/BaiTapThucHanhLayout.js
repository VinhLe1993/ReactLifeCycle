import React, { Component } from 'react'
import HeaderComponents from './HeaderComponents'
import BodyComponents from './BodyComponents'
import FooterComponents from './FooterComponents'
export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
                    <HeaderComponents/>
                </div>
                <div className="col-12">
                    <BodyComponents/>
                </div>
                <div className="col-12">
                    <FooterComponents/>
                </div>
            </div>
        )
    }
}
