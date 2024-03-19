/* eslint-disable */
import {
  FETCH_PRODUCT_FAILUER,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actions/actionTypes";
import { initialProductState } from "../actions/actionTypes";

export function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: "" };
    case FETCH_PRODUCT_FAILUER:
      return { ...state, loading: false, products: [], error: action.payload };
    default:
      return state;
  }
}
