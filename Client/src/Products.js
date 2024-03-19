/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let resp = await fetch(`https://fakestoreapi.com/products`);
      let data = await resp.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}/`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
