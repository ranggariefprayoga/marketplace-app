/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UseDetailProductHooks from "../Hooks/UseDetailProductHooks";

function DetailProduct({ id, handleDetailId }) {
  const { isLoading, isError, error, data } = UseDetailProductHooks(id);

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <>
      <div className="icon-wrapper" onClick={() => handleDetailId(null)}>
        <KeyboardBackspaceIcon />
      </div>
      <div>{data?.data.title}</div>
    </>
  );
}

export default DetailProduct;
