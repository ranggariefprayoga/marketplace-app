import CategoriesProducts from "../component/Product/CategoriesProducts";
import InputNewProduct from "../component/Product/InputNewProduct";
import ProductsPage from "./ProductsPage";

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <CategoriesProducts />
      <InputNewProduct />
      <ProductsPage />
    </>
  );
}

export default HomePage;
