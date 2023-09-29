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
        <div className="product-information">
          <p className="price">USD {product.price}</p>
          <p className="name-category">#{product.category}</p>
        </div>
      </div>
      <div className="link-pop-up">
        <PopUp product={product} />
      </div>
      {/* <Popup position="top center" trigger={<Link className="to-detail"> Open Modal </Link>} modal>
        <DetailProduct id={product.id} />
      </Popup> */}
      {/* {detailId == product.id && <DetailProduct id={product.id} handleDetailId={handleDetailId} />} */}
    </div>
  );
}

export default ListProducts;
