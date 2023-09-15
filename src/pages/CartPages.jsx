import { useQuery } from "@tanstack/react-query";
import { getAllCarts } from "../utils/api";
import CartList from "../component/Cart/CartList";

function CartPages() {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ["carts"], queryFn: getAllCarts });

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <>
      {data?.data.map((cart) => (
        <CartList key={cart.id} cart={cart} />
      ))}
    </>
  );
}

export default CartPages;
