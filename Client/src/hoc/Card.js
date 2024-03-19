/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function Card({ products }) {
  return (
    <div>
      <h1>Products</h1>
      {products.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
}

export default Card;
