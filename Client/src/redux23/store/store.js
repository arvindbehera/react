import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../actions/actionTypes";

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
