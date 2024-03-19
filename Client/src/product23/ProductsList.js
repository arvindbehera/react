import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const data = await resp.json();
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
            <Link to={`/products/${product.id}/`}>{product.title}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsList;
