import { useQuery } from "@tanstack/react-query";
import { getAllCart } from "../states/handler";

function UseGetAllCartsHook() {
  return useQuery(
    { queryKey: ["carts"], queryFn: getAllCart },
    {
      refetchOnWindowFocus: true,
    }
  );
}

export default UseGetAllCartsHook;
