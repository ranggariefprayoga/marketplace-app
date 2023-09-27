import { useState } from "react";
import ListProducts from "../component/Product/ListProducts";
import UseProductsHooks from "../Hooks/UseProductsHooks";

function ProductsPage() {
  const [detailId, setDetailId] = useState();
  const { data, isLoading, isError, error } = UseProductsHooks();

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;
  const handleDetailId = (id) => {
    setDetailId(id);
  };
  // console.log(data);

  return (
    <>
      {data?.data.map((product) => (
        <div key={product.id}>
          <ListProducts product={product} handleDetailId={handleDetailId} detailId={detailId} />
        </div>
      ))}
    </>
  );
}

export default ProductsPage;
