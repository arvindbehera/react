/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */
// ProductItem.js

import React from "react";

function ProductItem({ product, addToCart }) {
  return (
    <div>
      <h6>{product.title}</h6>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
}

export default ProductItem;
