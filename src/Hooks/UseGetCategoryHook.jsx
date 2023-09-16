import { useQuery } from "@tanstack/react-query";
import { getInCategory } from "../utils/api";

function UseGetCategoryHook(category) {
  return useQuery(
    { queryKey: ["category"], queryFn: () => getInCategory(category) },
    {
      refetchOnWindowFocus: true,
    }
  );
}

export default UseGetCategoryHook;
