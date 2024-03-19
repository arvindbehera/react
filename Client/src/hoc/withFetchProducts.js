/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const withFetchProducts = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        let resp = await fetch(`https://fakestoreapi.com/products`);
        let data = await resp.json();
        setProducts(data);
      };
      fetchProducts();
    }, []);
    return <Component {...props} products={products} />;
  };
};
