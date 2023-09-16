import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../utils/api";

function UseDetailProductHooks(productId) {
  return useQuery({ queryKey: ["products", productId], queryFn: () => getProductById(productId) });
}

export default UseDetailProductHooks;
