/* eslint-disable */
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILUER = "FETCH_PRODUCT_FAILUER";

export const initialProductState = {
  loading: false,
  products: [],
  error: "",
};

export function fetchProductRequest() {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
}
export function fetchProductSuccess(products) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
}

export function fetchProductFailuer(error) {
  return {
    type: FETCH_PRODUCT_FAILUER,
    payload: error,
  };
}

//fetch action type
export function fetchProducts() {
  return async function (dispatch) {
    dispatch(fetchProductRequest());
    try {
      let resp = await fetch(`https://fakestoreapi.com/products`);
      let data = await resp.json();
      let productData = data.map((item) => item);
      dispatch(fetchProductSuccess(productData));
    } catch (err) {
      dispatch(fetchProductFailuer(err));
    }
  };
}

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
