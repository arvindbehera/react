import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";

function Routing() {
  return (
    <div>
      <Link to="/">Products</Link>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default Routing;
