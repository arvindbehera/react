import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <h1>Single Product Item</h1>
      <hr></hr>
      <h3>{product.title}</h3>
      <h4>Price: {product.price}/-</h4>
      <p>{product.description}</p>
    </>
  );
}

export default SingleProduct;
