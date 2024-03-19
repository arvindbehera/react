/* eslint-disable */

function Card({ products }) {
  const allProducts = products.map((product) => {
    return (
      <div key={product.id}>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
      </div>
    );
  });
  return (
    <div>
      <h3>Products</h3>
      <h3>{allProducts}</h3>
    </div>
  );
}

export default Card;
