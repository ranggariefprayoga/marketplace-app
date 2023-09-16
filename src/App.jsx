/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navigation from "./component/Navigation/Navigation";
import DetailPage from "./pages/DetailPage";
import CartPages from "./pages/CartPages";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ListCategoryProduct from "./component/Product/ListCategoryProduct";

function App() {
  return (
    <>
      <Navigation />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/category/:category" element={<ListCategoryProduct />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/carts" element={<CartPages />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
