import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../utils/api";

function UseProductsHooks() {
  return useQuery(
    { queryKey: ["products"], queryFn: getAllProducts },
    {
      refetchOnWindowFocus: true,
    }
  );
}

export default UseProductsHooks;
