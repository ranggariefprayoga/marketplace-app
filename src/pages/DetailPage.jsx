/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
import { Button } from "@mui/material";
import UseDetailProductHooks from "../Hooks/UseDetailProductHooks";
import { ThreeDots } from "react-loader-spinner";
import AlertBox from "../component/PopUp/Alert";
import { addProductToCart } from "../states/handler";

function DetailProduct({ id }) {
  const { isLoading, isError, error, data } = UseDetailProductHooks(id);

  const handleSuccesAlert = () => {
    alert("yeay data berhasil masuk");
    addProductToCart(data?.data);
  };

  if (isLoading)
    return (
      <div className="loading-container">
        <ThreeDots height="80" width="80" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
      </div>
    );

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <div className="detail-item">
      <div className="detail-image">
        <p className="detail-title">{data?.data.title}</p>
        <img src={data?.data.image} alt={data?.data.title} />
      </div>
      <div className="detail-information">
        <h3>USD {data?.data.price}</h3>
        <p>{data?.data.rating.rate}</p>
        <p className="description">{data?.data.description}</p>
      </div>
      <div className="add-to-cart">
        <Button
          variant="contained"
          size="medium"
          onClick={() => {
            handleSuccesAlert();
          }}
        >
          + Keranjang
        </Button>
        <div className="alert-container">
          <AlertBox />;
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
