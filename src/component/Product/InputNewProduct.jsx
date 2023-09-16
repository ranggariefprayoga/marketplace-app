import { useForm } from "react-hook-form";
import UseAddNewProductHook from "../../Hooks/UseAddNewProductHook";

function InputNewProduct() {
  const { register, handleSubmit } = useForm();
  const { mutate: addProduct } = UseAddNewProductHook();

  const onSubmit = (data) => {
    const image = "https://random.imagecdn.app/500/150";
    const newData = { ...data, image };
    addProduct(newData);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Title">Title</label>
      <input {...register("title")} />
      <label htmlFor="Price">Price</label>
      <input {...register("price")} />
      <label htmlFor="Description">Description</label>
      <input {...register("description")} />
      <label htmlFor="Category">Category</label>
      <select {...register("categories")}>
        <option value="electronics">Electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men`s clothing</option>
        <option value="women's clothing">women`s clothing</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default InputNewProduct;
