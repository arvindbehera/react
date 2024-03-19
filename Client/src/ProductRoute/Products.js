/* eslint-disable */

import { useEffect, useState } from "react";
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
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title.slice(0, 20)}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
