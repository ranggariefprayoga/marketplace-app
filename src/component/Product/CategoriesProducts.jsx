import { useNavigate } from "react-router-dom";
import UseCategoriesProductsHook from "../../Hooks/UseCategoriesProductsHook";
import { ThreeDots } from "react-loader-spinner";
// import UseGetCategoryHook from "../../Hooks/UseGetCategoryHook";

function CategoriesProducts() {
  const navigate = useNavigate();
  const { data: category, isLoading, isError, error } = UseCategoriesProductsHook();

  if (isLoading)
    return (
      <div className="loading-container">
        <ThreeDots height="80" width="80" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
      </div>
    );

  if (isError) return <h2>Error, {error.message}</h2>;

  const handleCategoriesProduct = (category) => {
    navigate(`/products/category/${category}`);
  };

  return (
    <div className="categories">
      <div className="category-title">
        <h2>Categories Product</h2>
      </div>
      <div className="category-container">
        {category?.data.map((category, idx) => (
          <div key={idx} className="category-item" onClick={() => handleCategoriesProduct(category)}>
            <div className="image-category">
              <div className="one">
                <img className="categories-icon" src="./shirt.svg" alt="Man" />
                <img className="categories-icon" src="./women.svg" alt="Man" />
              </div>
              <div className="two">
                <img className="categories-icon" src="./electronic.svg" alt="Man" />
                <img className="categories-icon" src="./jewelry.svg" alt="Man" />
              </div>
            </div>
            <div className="category-information">
              <p>{category.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesProducts;
