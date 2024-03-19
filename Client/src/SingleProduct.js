/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProducts({ props }) {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getSingle = async () => {
      const resp = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await resp.json();
      setProducts(data);
    };
    getSingle();
  }, []);

  return (
    <div>
      <h3>{products.title}</h3>
      <h3>{products.id}</h3>
      <h3>{products.category}</h3>
    </div>
  );
}

export default SingleProducts;
