import axios from "axios";

const getAllProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};

const getAllCarts = () => {
  return axios.get("https://fakestoreapi.com/carts");
};

const getAllCategories = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};

const getInCategory = (category) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`);
};

const getProductById = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};

const addNewProduct = (data) => {
  return axios.post("https://fakestoreapi.com/products", data);
};

export { getAllProducts, getProductById, getAllCarts, getAllCategories, getInCategory, addNewProduct };
