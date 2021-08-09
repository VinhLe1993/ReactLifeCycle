//Liệt kê các state của ứng dụng
const stateDefault = {
  totalRound: 10,
  roundYouWon: 9,
  yourSelection: true,
  dicesArr: [
    { img: "./img/DiceGame/1.png", pts: 1 },
    { img: "./img/DiceGame/1.png", pts: 1 },
    { img: "./img/DiceGame/1.png", pts: 1 },
  ],
};

export const diceGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SELECTED": {
      state.yourSelection = action.yourSelection;
      return { ...state };
    }

    case "PLAY_GAME": {
      //Tạo ra xúc xắc ngẫu nhiên từ số random
      const arrRandomDices = [];
      for (let i = 0; i < 3; i++) {
        //Mỗi lần chạy sẽ tạo ra 1 số ngẫu nhiên
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        //Từ số ngẫu nhiên tạo ra 1 object xúc xắc ngẫu nhiên
        let randomDices = {
          img: `./img/DiceGame/${randomNumber}.png`,
          pts: randomNumber,
        };
        //Thêm vào mảng xúc xắc ngẫu nhiên
        arrRandomDices.push(randomDices);
      }
      state.dicesArr = arrRandomDices;

      //Xử lý thắng cuộc
      let totalPts = arrRandomDices.reduce((total, randomdice, index) => {
        return (total += randomdice.pts);
      }, 0);

      if (
        (state.yourSelection && totalPts > 11) ||
        (!state.yourSelection && totalPts < 11)
      ) {
        state.roundYouWon += 1;
      }
      state.totalRound += 1;
      return { ...state };
    }

    default:
      return state;
  }
};
