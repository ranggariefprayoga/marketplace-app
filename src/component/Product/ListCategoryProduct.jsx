// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UseGetCategoryHook from "../../Hooks/UseGetCategoryHook";

/* eslint-disable react/prop-types */
function ListCategoryProduct() {
  const { category } = useParams();
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  const { data, isLoading, isError, error } = UseGetCategoryHook(category);

  if (isLoading) return <h2>Is Loading...</h2>;

  if (isError) return <h2>Error, {error.message}</h2>;

  return (
    <div className="category">
      <div className="icon-wrapper" onClick={handleBackToHome}>
        <KeyboardBackspaceIcon />
      </div>
      <p>{data?.data.length}</p>
      {data?.data.map((item, idx) => (
        <div key={idx}>
          <p>
            {item.category} - {item.title}
          </p>
          <img src={item.image} alt={item.category} />
          <Link to={`/products/${item.id}`}>Lihat Detail</Link>
        </div>
      ))}
    </div>
  );
}

export default ListCategoryProduct;
