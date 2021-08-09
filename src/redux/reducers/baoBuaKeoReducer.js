const stateDefault = {
  arrSelector: [
    { id: "keo", img: "./img/BaoBuaKeo/keo.png", select: true },
    { id: "bua", img: "./img/BaoBuaKeo/bua.png", select: false},
    { id: "bao", img: "./img/BaoBuaKeo/bao.png", select: false },
  ],
  result: "You Won!",
  roundYouWon: 0,
  roundYouPlayed: 0,
  computer: { id: "bua", img: "./img/BaoBuaKeo/bua.png" },
};

const baoBuaKeoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ROCK_PAPER_SCISSOR": {
      let arrSelectedUpdate = [...state.arrSelector];
      //Tạo ra mảng cược mới từ mảng cược cũ và action.selectID do người dùng truyền lên
      arrSelectedUpdate = arrSelectedUpdate.map((item, index) => {
        if (item.id === action.selectID) {
          return { ...item, select: true };
        }
        return { ...item, select: false };
      });
      //setState của arrSelector => render lại giao diện
      state.arrSelector = arrSelectedUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let randomNum = Math.floor(Math.random() * 3);
      let randomSlt = state.arrSelector[randomNum];

      state.computer = randomSlt;

      return { ...state };
    }
    case "END_GAME":
      state.roundYouPlayed += 1;
      let player = state.arrSelector.find((item) => item.select === true);
      let computer = state.computer;

      switch (player.id) {
        case "keo":
          if (computer.id === "keo") {
            state.result = "Draw !!!";
          } else if (computer.id === "bua") {
            state.result = "You are Doomed !!!";
          } else {
            state.roundYouWon += 1;
            state.result = "Hasta La Vista, Baby !";
          } break;
        case "bua":
          if (computer.id === "keo") {
            state.roundYouWon += 1;
            state.result = "Hasta La Vista, Baby !";
          } else if (computer.id === "bua") {
            state.result = "Draw !!!";
          } else {
            state.result = "You are Doomed !!!";
          } break;
        case "bao":
          if (computer.id === "keo") {
            state.result = "You are Doomed !!!";
          } else if (computer.id === "bua") {
            state.roundYouWon += 1;
            state.result = "Hasta La Vista, Baby !";
          } else {
            state.result = "Draw !!!";
          } break;
        default:
          state.result = "Hasta La Vista, Baby !";
    
      }

      return { ...state };

    default:
      return { ...state };
  }
};

export default baoBuaKeoReducer;
