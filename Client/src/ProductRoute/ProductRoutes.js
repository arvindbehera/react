/* eslint-disable */

import { Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

function ProductRoutes() {
  return (
    <div>
      <Link to="/">Products</Link>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:products/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default ProductRoutes;
