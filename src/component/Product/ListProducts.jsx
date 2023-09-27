/* eslint-disable react/prop-types */
import DetailProduct from "../../pages/DetailPage";

function ListProducts({ product, handleDetailId, detailId }) {
  return (
    <div className="list-product">
      <p>
        {product.title} - {product.price}
      </p>
      <img src={product.image} alt={product.title} />
      <a onClick={() => handleDetailId(product.id)}>Lihat Detail</a>
      {detailId == product.id && <DetailProduct id={product.id} handleDetailId={handleDetailId} />}
    </div>
  );
}

export default ListProducts;
