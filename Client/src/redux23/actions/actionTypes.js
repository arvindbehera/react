export const FETCH_PRODUCT_LOADING = "FETCH_PRODUCT_LOADING";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILUER = "FETCH_PRODUCT_FAILUER";

const initialProductSatate = {
  loading: true,
  products: [],
  error: "",
};

export const fetchProductLoading = () => {
  return {
    type: FETCH_PRODUCT_LOADING,
  };
};

export const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

export const fetchProductFailuer = (error) => {
  return {
    type: FETCH_PRODUCT_FAILUER,
    payload: error,
  };
};

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(fetchProductLoading);
    try {
      const resp = await fetch(`https://fakestoreapi.com/productss`);
      const data = await resp.json();
      let productData = data.map((item) => item);
      dispatch(fetchProductSuccess(productData));
    } catch (err) {
      dispatch(fetchProductFailuer(err));
    }
  };
}

export function productReducer(state = initialProductSatate, action) {
  switch (action.type) {
    case FETCH_PRODUCT_LOADING:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: action.payload, error: "" };
    case FETCH_PRODUCT_FAILUER:
      return { ...state, loading: false, products: [], error: action.payload };
    default:
      return state;
  }
}
