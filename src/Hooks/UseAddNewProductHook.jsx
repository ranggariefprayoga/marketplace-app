import { useMutation } from "@tanstack/react-query";
import { addNewProduct } from "../utils/api";

function UseAddNewProductHook() {
  return useMutation(async (data) => {
    console.log("pantau isi", await addNewProduct(data));
    await addNewProduct(data);
  });
}

export default UseAddNewProductHook;
