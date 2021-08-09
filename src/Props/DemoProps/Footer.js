import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        /**this.props: là một thuộc tính có sẵn của react
         *    class component dùng để nhận giá trị tử 
         *      component cha truyền vào ()
         */
        console.log ('this.props', this.props)

        return (
           <footer style={{backgroundColor:this.props.
        bgColor}} className="text-white text-center">
            Footer
        </footer>
           

        )
    }
}

