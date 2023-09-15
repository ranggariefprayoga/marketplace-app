import axios from "axios";

const getAllProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};

const getProductById = (id) => {
  return axios.get(`https://fakestoreapi.com/product/${id}`);
};

export { getAllProducts, getProductById };
