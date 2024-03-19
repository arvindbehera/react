/* eslint-disable */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      let resp = await fetch(`https://fakestoreapi.com/products/${productId}`);
      let data = await resp.json();
      setSingleProduct(data);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h1>SingleProduct</h1>
      <h3>{singleProduct.title}</h3>
    </div>
  );
}

export default SingleProduct;
