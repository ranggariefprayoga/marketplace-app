const addProductToCart = (product) => {
  const cartProducts = JSON.parse(localStorage.getItem("cart"));
  if (!cartProducts || cartProducts.length == 0) {
    const data = JSON.stringify([product]);
    localStorage.setItem("cart", data);
  } else {
    cartProducts.push(product);
    const data = JSON.stringify(cartProducts);
    localStorage.setItem("cart", data);
  }
};

const getAllCart = () => {
  return JSON.parse(localStorage.getItem("cart"));
};

const deleteACart = (id) => {
  const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
  const indexToDelete = cartProducts.findIndex((element) => element.id === id);
  if (indexToDelete !== -1) {
    cartProducts.splice(indexToDelete, 1);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  } else {
    console.log(`Objek dengan ID ${id} tidak ditemukan.`);
  }
};

export { addProductToCart, getAllCart, deleteACart };
