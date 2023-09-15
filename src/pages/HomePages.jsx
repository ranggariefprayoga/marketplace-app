import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../utils/api";
import ListProducts from "../component/Product/ListProducts";

function HomePages() {
  const { data, isLoading, isError, error } = useQuery(
    { queryKey: ["products"], queryFn: getAllProducts },
    {
      refetchOnWindowFocus: true,
    }
  );

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

export default HomePages;
