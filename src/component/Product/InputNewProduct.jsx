// import { useState } from "react";
import { useForm } from "react-hook-form";
// import UseAddNewProductHook from "../../Hooks/UseAddNewProductHook";

function InputNewProduct() {
  const { register, handleSubmit } = useForm();
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");

  const image = "https://random.imagecdn.app/500/150";

  const onSubmit = (data) => {
    const newData = { ...data, image };
    console.log(newData);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Title">Title</label>
      <input {...register("title")} />
      <label htmlFor="Price">Price</label>
      <input
        type="number"
        {...register("price", {
          valueAsNumber: true,
          pattern: {
            value: /^(0|[1-9]\d*)(\.\d+)?$/,
          },
        })}
      />
      <label htmlFor="Description">Description</label>
      <input {...register("description")} />
      <label htmlFor="Category">Category</label>
      <select {...register("categories")}>
        <option value="electronics">Electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men`s clothing</option>
        <option value="women's clothing">women`s clothing</option>
      </select>
      <button type="submit">Tambahkan Product</button>
    </form>
  );
}

export default InputNewProduct;
