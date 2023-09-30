/* eslint-disable no-undef */
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { deleteACart } from "../../states/handler";
import UseDeleteProductHook from "../../Hooks/UseDeleteProductHook";

/* eslint-disable react/prop-types */
function CartList({ item }) {
  const { mutate: deleteProduct } = UseDeleteProductHook();

  const handleDeleteProduct = () => {
    alert("kamu yakin?");
    deleteProduct(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-header">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-item-content">
        <p>{item.title}</p>
        <p>USD {item.price}</p>
        <p>{item.rating.rate}</p>
        <div className="delete-icon" onClick={handleDeleteProduct}>
          <DeleteForeverIcon />
        </div>
      </div>
    </div>
  );
}

export default CartList;
