import React, { Component } from 'react'
import {connect} from 'react-redux';

class DiceGameMainDesk extends Component {
    
    render() {
        let {yourSelection, totalRound, roundYouWon} = this.props
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn: <span className="text-warning">{yourSelection ? 'Tài' : 'Xỉu'}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng: <span className="text-warning">{roundYouWon}</span>
                </div>
                <div className="display-4">
                    Tổng số bàn chơi: <span className="text-warning">{totalRound}</span>
                </div>
                <button className="btn bg-success">
                    <div className="display-4" onClick={()=>{
                        const action = {
                            type: 'PLAY_GAME',
                        }
                        this.props.dispatch(action);
                    }}>Play game</div>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        yourSelection: rootReducer.diceGameReducer.yourSelection,
        totalRound: rootReducer.diceGameReducer.totalRound,
        roundYouWon: rootReducer.diceGameReducer.roundYouWon,
    }
}


export default connect(mapStateToProps) (DiceGameMainDesk);