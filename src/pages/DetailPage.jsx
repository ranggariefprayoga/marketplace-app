/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";

// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Alert, AlertTitle } from "@mui/material";
import UseDetailProductHooks from "../Hooks/UseDetailProductHooks";
import { ThreeDots } from "react-loader-spinner";

function DetailProduct({ id }) {
  const { isLoading, isError, error, data } = UseDetailProductHooks(id);

  if (isLoading)
    return (
      <div className="loading-container">
        <ThreeDots height="80" width="80" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
      </div>
    );

  if (isError) return <h2>Error, {error.message}</h2>;

  const handleAddToCart = () => {
    return (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    );
  };

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
      <div className="add-to-cart" onClick={handleAddToCart}>
        <h5>+ Keranjang</h5>
      </div>
    </div>
  );
}

export default DetailProduct;
