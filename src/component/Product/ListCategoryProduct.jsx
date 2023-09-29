// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UseGetCategoryHook from "../../Hooks/UseGetCategoryHook";
import { PopUp } from "../PopUp/PopUp";

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
        <span>Back</span>
      </div>
      <div className="list-category-products">
        {data?.data.map((item, idx) => (
          <div key={idx} className="product-item">
            <div className="image-product">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="product-content">
              <p className="title">{item.title}</p>
              <div className="product-information">
                <p className="price">USD {item.price}</p>
                <p className="name-category">#{item.category}</p>
              </div>
            </div>
            <div className="link-pop-up">
              <PopUp product={item} />
            </div>
            {/* <Popup position="top center" trigger={<Link className="to-detail"> Open Modal </Link>} modal>
              <DetailProduct id={product.id} />
            </Popup> */}
            {/* {detailId == product.id && <DetailProduct id={product.id} handleDetailId={handleDetailId} />} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCategoryProduct;
