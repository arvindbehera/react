/* eslint-disable  */
import { applyMiddleware } from "redux";
import { createStore, combineReducer } from "redux";
import { productReducer } from "../actions/actionTypes";
import thunk from "redux-thunk";

export const store = createStore(productReducer, applyMiddleware(thunk));
