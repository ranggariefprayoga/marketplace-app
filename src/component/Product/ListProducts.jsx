/* eslint-disable react/prop-types */
// import Popup from "reactjs-popup";
// import DetailProduct from "../../pages/DetailPage";
// import { Link } from "react-router-dom";
import { PopUp } from "../PopUp/PopUp";

function ListProducts({ product }) {
  return (
    <div className="product-item">
      <div className="image-product">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-content">
        <p className="title">{product.title}</p>
        <p className="price">USD {product.price}</p>
        <p>Rating {product.rating.rate}</p>
      </div>
      <div className="link-pop-up">
        <PopUp product={product} />
      </div>
    </div>
  );
}

export default ListProducts;
