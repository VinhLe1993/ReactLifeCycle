import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./gioHangReducer";
import { diceGameReducer } from "./diceGameReducer";
import baoBuaKeoReducer  from "./baoBuaKeoReducer";
import { BTQLReducer } from "./BTQLReducer";
import BTDatVeReducer from "./BTDatVeReducer";
//state trong redux là reducer
const rootReducer = combineReducers({
  //Các state được lưu trữ tại đây
  gioHangReducer: gioHangReducer,
  diceGameReducer,
  baoBuaKeoReducer,
  BTQLReducer,
  BTDatVeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
