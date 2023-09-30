import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PlaceIcon from "@mui/icons-material/Place";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import CartList from "../component/Cart/CartList";
import UseGetAllCartsHook from "../Hooks/UseGetAllCartsHook";
import Payment from "../component/Cart/Payment";

function CartPages() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const { isLoading, isError, error, data } = UseGetAllCartsHook();

  if (isLoading)
    return (
      <div className="loading-container">
        <ThreeDots height="80" width="80" radius="9" color="black" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
      </div>
    );

  if (isError) return <h2>Error, {error.message}</h2>;

  if (data.length == 0) return <h1>Barangmu gada nih, buru checkout!</h1>;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="back-to-home" onClick={handleBackToHome}>
          <KeyboardBackspaceIcon />
        </div>
        <h2>Carts</h2>
      </div>
      <div className="cart-content">
        <div className="cart-address">
          <div className="icon-address">
            <PlaceIcon />
          </div>
          <h5>
            Dikirim ke <span>Rumah Rangga Arief Prayoga</span>
          </h5>
        </div>
        <div className="check-all">
          <div className="check">
            <input type="checkbox" name="Pilih semua" id="" />
          </div>
          <h5>Pilih Semua</h5>
        </div>
        <div className="cart-from-local-storage">
          <div className="cart-products">
            {data.map((item, idx) => (
              <CartList item={item} key={idx} />
            ))}
          </div>
          <div className="payment-container">
            <Payment data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPages;
