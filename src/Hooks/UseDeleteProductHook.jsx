import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteACart } from "../states/handler";

function UseDeleteProductHook() {
  const queryClient = useQueryClient();
  return useMutation(deleteACart, {
    onSuccess: () => {
      queryClient.invalidateQueries("carts");
    },
  });
}

export default UseDeleteProductHook;
