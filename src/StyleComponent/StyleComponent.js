import React, { Component } from 'react'
import Style from './StyleComponent.module.css'

export default class StyleComponent extends Component {
    render() {
        return (
            <div>
                Style component
                <p className={`${Style.fontBold} ${Style['p-green']}`}>Hello</p>
            </div>
        )
    }
}
