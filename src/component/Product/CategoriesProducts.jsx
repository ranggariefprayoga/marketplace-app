import { Link } from "react-router-dom";
import UseCategoriesProductsHook from "../../Hooks/UseCategoriesProductsHook";
// import UseGetCategoryHook from "../../Hooks/UseGetCategoryHook";

function CategoriesProducts() {
  const { data: category, isLoading, isError, error } = UseCategoriesProductsHook();

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <div className="categories">
      {category?.data.map((category, idx) => (
        <div key={idx}>
          <p>{category}</p>
          <Link to={`/products/category/${category}`}>Lihat Detail</Link>
        </div>
      ))}
    </div>
  );
}

export default CategoriesProducts;
