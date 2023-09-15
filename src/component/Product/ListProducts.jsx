/* eslint-disable react/prop-types */
function ListProducts({ product }) {
  return (
    <>
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} />
      <button>Lihat Detail</button>
    </>
  );
}

export default ListProducts;
