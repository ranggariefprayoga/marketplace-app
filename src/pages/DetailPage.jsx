/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";

// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UseDetailProductHooks from "../Hooks/UseDetailProductHooks";

function DetailProduct({ id }) {
  const { isLoading, isError, error, data } = UseDetailProductHooks(id);

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <div className="detail-item">
      <div className="detail-image">
        <p className="detail-title">{data?.data.title}</p>
        <img src={data?.data.image} alt={data?.data.title} />
      </div>
      <div className="detail-information">
        <h3>USD {data?.data.price}</h3>
        <p className="description">{data?.data.description}</p>
      </div>
      <div className="add-to-cart">
        <h5>+ Keranjang</h5>
      </div>
    </div>
  );
}

export default DetailProduct;
