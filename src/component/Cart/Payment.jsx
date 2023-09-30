/* eslint-disable react/prop-types */
function Payment({ data }) {
  const sumAllPrice = () => {
    const allPrice = data.map((item) => item.price).reduce((cur, idx) => cur + idx);
    return allPrice;
  };

  const totalPrice = sumAllPrice();
  return <div>Total belanjaan kamu: USD {totalPrice}</div>;
}

export default Payment;
