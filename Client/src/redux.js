/* eslint-disable */
import { createStore } from "redux";

//create const
const BUY_PENS = "BUY_PENS";

//create action type
function buyPens() {
  return {
    type: BUY_PENS,
  };
}

//create reducer
const initialPenState = {
  totalPens: 100,
};

function penReducer(state = initialPenState, action) {
  switch (action.type) {
    case BUY_PENS:
      return {
        ...state,
        totalPens: state.totalPens - 1,
      };
    default:
      return state;
  }
}

//create store
const store = createStore(penReducer);
console.log(store.getState());
