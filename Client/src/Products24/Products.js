/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */

import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function Products() {
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let resp = await fetch(`https://fakestoreapi.com/products`);
      let data = await resp.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  const handleCartProducts = (product) => {
    setCartProduct((prev) => [...prev, product]);
  };

  const handleTotal = () => {
    let total = cartProduct.reduce((pv, cv) => {
      return pv + cv.price;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h6>{product.title}</h6>
          <button onClick={() => handleCartProducts(product)}>
            Add To Cart
          </button>
        </div>
      ))}
      <h3>Cart</h3>
      {cartProduct.map((product) => (
        <h3 key={product.id}>
          {product.title}: {product.price}
        </h3>
      ))}
      <h3>Total = {handleTotal()}</h3>
    </div>
  );
}

export default Products;
