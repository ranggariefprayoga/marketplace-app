import axios from "axios";

const getAllProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};

const getAllCarts = () => {
  return axios.get("https://fakestoreapi.com/carts");
};

const getProductById = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};

export { getAllProducts, getProductById, getAllCarts };
