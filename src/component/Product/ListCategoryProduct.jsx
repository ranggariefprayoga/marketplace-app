// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UseGetCategoryHook from "../../Hooks/UseGetCategoryHook";

/* eslint-disable react/prop-types */
function ListCategoryProduct() {
  const { category } = useParams();
  const { data, isLoading, isError, error } = UseGetCategoryHook(category);

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <div className="category">
      {data?.data.map((item, idx) => (
        <div key={idx}>
          <p>{item.category}</p>
          <img src={item.image} alt={item.category} />
        </div>
      ))}
    </div>
  );
}

export default ListCategoryProduct;
