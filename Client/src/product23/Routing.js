import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProductsList from "./ProductsList";
import SingleProducts from "./SingleProducts";

function Routing() {
  return (
    <div>
      <Link to="/">Products</Link>
      <Routes>
        <Route path="/" element={<ProductsList />}></Route>
        <Route path="/products/:productId" element={<SingleProducts />}></Route>
      </Routes>
    </div>
  );
}

export default Routing;
