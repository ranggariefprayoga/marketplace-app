import ListProducts from "../component/Product/ListProducts";
import UseProductsHooks from "../Hooks/UseProductsHooks";

function ProductsPage() {
  const { data, isLoading, isError, error } = UseProductsHooks();

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <div className="list-product">
      {data?.data.map((product) => (
        <ListProducts key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsPage;
