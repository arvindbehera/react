import redux from "redux";
import logger from "redux-logger";
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const combineReducer = redux.combineReducers;

//create const
const BUY_PENS = "BUY_PENS";
const BUY_BOOKS = "BUY_BOOKS";

//create action types
function buyPens() {
  return {
    type: BUY_PENS,
  };
}
function buyBooks() {
  return {
    type: BUY_BOOKS,
  };
}

//initialState
const initiaPenlState = {
  totalPens: 100,
};
const initiaBooklState = {
  totalBooks: 200,
};

//create reducer
function penReducer(state = initiaPenlState, action) {
  switch (action.type) {
    case BUY_PENS:
      return { ...state, totalPens: state.totalPens - 1 };
    default:
      return state;
  }
}
function bookReducer(state = initiaBooklState, action) {
  switch (action.type) {
    case BUY_BOOKS:
      return { ...state, totalBooks: state.totalBooks - 1 };
    default:
      return state;
  }
}

//create store
const rootReducer = combineReducer({ pens: penReducer, books: bookReducer });

const store = createStore(rootReducer, applyMiddleware(logger.default));

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyPens());
store.dispatch(buyPens());
store.dispatch(buyPens());
store.dispatch(buyPens());
store.dispatch(buyBooks());
store.dispatch(buyBooks());
unsubscribe();
