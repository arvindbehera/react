import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProducts() {
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
      <h1>Single Products</h1>
      <h3>{products.title}</h3>
      <h4>{products.price}</h4>
    </div>
  );
}

export default SingleProducts;
