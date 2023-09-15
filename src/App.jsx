/* eslint-disable react/jsx-no-target-blank */
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import "./index.css";
import Navigation from "./component/Navigation/Navigation";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <Navigation />
      <main className="main">
        <Routes>
          <Route path="/*" element={<HomePages />} />
          <Route path="/product/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
