import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../utils/api";

function UseCategoriesProductsHook() {
  return useQuery(
    { queryKey: ["categories"], queryFn: getAllCategories },
    {
      refetchOnWindowFocus: true,
    }
  );
}

export default UseCategoriesProductsHook;
