import { useQuery } from "@tanstack/react-query";
import { deleteProductById } from "../utils/api";

function UseDeleteProductHook(productId) {
  return useQuery({ queryKey: ["products", productId], queryFn: () => deleteProductById(productId) });
}

export default UseDeleteProductHook;
