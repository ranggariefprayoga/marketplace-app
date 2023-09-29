import { useQuery } from "@tanstack/react-query";
import { getAllCarts } from "../utils/api";
import { ThreeDots } from "react-loader-spinner";

function CartPages() {
  const { isLoading, isError, error } = useQuery({ queryKey: ["carts"], queryFn: getAllCarts });

  if (isLoading)
    return (
      <div className="loading-container">
        <ThreeDots height="80" width="80" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
      </div>
    );

  if (isError) return <h2>Error, {error.message}</h2>;

  return <div className="cart-container">Ini Cart Page</div>;
}

export default CartPages;
