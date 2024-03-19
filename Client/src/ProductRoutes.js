/* eslint-disable */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SingleProducts from "./SingleProduct";
import Products from "./Products";

function ProductRoutes() {
  return (
    <div>
      <Link to="/">
        <h1>Products</h1>
      </Link>
      <Routes>
        <Route path="/" element={<Products />}>
          Products
        </Route>
        <Route path="/products/:productId" element={<SingleProducts />}></Route>
      </Routes>
    </div>
  );
}

export default ProductRoutes;
