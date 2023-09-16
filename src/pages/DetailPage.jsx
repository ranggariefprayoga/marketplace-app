// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UseDetailProductHooks from "../Hooks/UseDetailProductHooks";

function DetailPage() {
  const { id } = useParams();
  const { isLoading, isError, error, data } = UseDetailProductHooks(id);

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return <div>{data?.data.title}</div>;
}

export default DetailPage;
