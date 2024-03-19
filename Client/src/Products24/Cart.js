/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */

// Cart.js

import React from "react";

function Cart({ cartProducts }) {
  const handleTotal = () => {
    let total = cartProducts.reduce((pv, cv) => {
      return pv + cv.price;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h3>Cart</h3>
      {cartProducts.map((product) => (
        <h3 key={product.id}>
          {product.title}: {product.price}
        </h3>
      ))}
      <h3>Total = {handleTotal()}</h3>
    </div>
  );
}

export default Cart;
