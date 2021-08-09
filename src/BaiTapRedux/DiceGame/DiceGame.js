import React, { Component } from 'react'
import DiceGameMainDesk from './DiceGameMainDesk.js'
import Dices from './Dices'
import './DiceGameStyle.css'; //Ảnh hưởng đến toàn bộ ứng dụng kể cã app.js

export default class DiceGame extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center">Bài tập game xúc xắc</h3>
                <Dices />
                <DiceGameMainDesk />
            </div>
        )
    }
}
