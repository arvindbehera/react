import { fetchUserRequest } from "../actions/actionTypes";
import { fetchUserSuccess } from "../actions/actionTypes";
import { fetchUserFailuer } from "../actions/actionTypes";

export function fetchUsers(id) {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await resp.json();
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailuer(error));
    }
  };
}
