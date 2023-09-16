import { useMutation } from "@tanstack/react-query";
import { addNewProduct } from "../utils/api";

function UseAddNewProductHook(user) {
  return useMutation({ mutationFn: () => addNewProduct(user) });
}

export default UseAddNewProductHook;
