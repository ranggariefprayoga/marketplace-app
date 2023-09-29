import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountMenu from "./DropDown";

const styleForShoppingCartIcon = {
  width: "40px",
  height: "40px",
};

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="icon-navigation">
        <ShoppingCartIcon style={styleForShoppingCartIcon} />
        <h1>Marketplace App</h1>
      </div>
      <div className="account">
        <AccountMenu />
      </div>
      {/* <ul className="navigation-link">
        <li className="user">
          <img src="./user.svg" alt="user" />
          <span>Hello!</span>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/carts">Cart</a>
        </li>
      </ul> */}
    </div>
  );
}

export default Navigation;
