import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux';

class Dices extends Component {
    //Tính tổng điểm
    // renderPts = () => {
    //     return to
    // }


    render() {
        let {dicesArr} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-danger" onClick={()=>{
                            const action = {
                                type: 'SELECTED',
                                yourSelection: true
                            }
                            //Props từ redux cung cấp (this.props.dispatch)
                            //Dùng hàm dispatch gửi len reducer
                            this.props.dispatch(action)
                        }}>
                            <div className="p-5 display-4">Tài</div>
                        </button>
                    </div>
                    <div className="col-6 text-center">
                        <img src={dicesArr[0].img} alt="..." width={50} className="mr-3"/>
                        <img src={dicesArr[1].img} alt="..." width={50}/>
                        <img src={dicesArr[2].img} alt="..." width={50} className="ml-3"/>
                        <br />
                        <br />
                        {/* <div className="display-4">
                            {this.renderPts()}
                        </div> */}
                    </div>
                    <div className="col-3">
                    <button className="btn bg-dark text-white" onClick={()=>{
                        const action = {
                            type: 'SELECTED',
                            yourSelection: false
                        }
                        //Props từ redux cung cấp (this.props.dispatch)
                        //Dùng hàm dispatch gửi len reducer
                        this.props.dispatch(action)
                    }}>
                            <div className="p-5 display-4">Xỉu</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

//Hàm này giúp lấy dữ liệu state từ redux về
const mapStateToProps = (rootReducer) => {
    return {
        dicesArr: rootReducer.diceGameReducer.dicesArr
    }
}

export default connect (mapStateToProps) (Dices);
