/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable no-global-assign */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";

export const useFetch = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let resp = await fetch(`https://fakestoreapi.com/products`);
      let data = await resp.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return [products];
};
