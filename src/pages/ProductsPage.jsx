import ListProducts from "../component/Product/ListProducts";
import UseProductsHooks from "../Hooks/UseProductsHooks";

function ProductsPage() {
  const { data, isLoading, isError, error } = UseProductsHooks();

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <>
      {data?.data.map((product) => (
        <ListProducts key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsPage;
