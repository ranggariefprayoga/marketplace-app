/* eslint-disable react/prop-types */
function CartList({ cart }) {
  return (
    <div className="cart-list">
      <p>ID: {cart.id}</p>
      <p>UserId: {cart.userId}</p>
    </div>
  );
}

export default CartList;
