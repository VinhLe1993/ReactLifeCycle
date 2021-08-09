import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert('Sĩ đẹp trai');
    }


    render() {
        let name = 'Bảo';

        return (
            <div className="container">
                handle event
                <br />
                <button id="btn" onClick={(event)=>{
                    alert(`${name} đẹp trai`)
                }}>Click me</button>
            </div>
        )
    }
}
