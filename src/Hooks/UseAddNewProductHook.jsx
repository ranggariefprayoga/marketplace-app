import { useMutation } from "@tanstack/react-query";
import { addNewProduct } from "../utils/api";

function UseAddNewProductHook(data) {
  return useMutation({ mutationFn: () => addNewProduct(data) });
}

export default UseAddNewProductHook;
