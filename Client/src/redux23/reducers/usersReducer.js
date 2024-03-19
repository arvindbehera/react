import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILUER,
  initialUserState,
} from "../actions/actionTypes";

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" };
    case FETCH_USER_FAILUER:
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
}
