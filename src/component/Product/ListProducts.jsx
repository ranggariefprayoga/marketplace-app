/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ListProducts({ product }) {
  return (
    <div className="list-product">
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} />
      <Link to={`/products/${product.id}`}>Lihat Detail</Link>
    </div>
  );
}

export default ListProducts;
