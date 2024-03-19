/* eslint-disable */
import { useEffect, useState } from "react";

export const withProducts = (Component) => {
  return () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const resp = await fetch(`https://fakestoreapi.com/products`);
        const data = await resp.json();
        setProducts(data);
      };
      fetchProducts();
    }, []);
    return <Component products={products} />;
  };
};
