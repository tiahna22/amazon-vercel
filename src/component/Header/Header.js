import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
import LocationApi from "../LocationApi/LocationApi";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/" className="header__clearlink ">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <Link to="/selectyourlocation" className="header__clearlink locc">
        <LocationOnOutlinedIcon className="licon" />
        <div className="header__option ">
          <span className="header__optionLineOne">Deliver to</span>
          <span className="header__optionLineTwo">
            <LocationApi className="location" />
          </span>
        </div>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/LogIn"} className="header__clearlink ">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearlink ">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>
        <Link to="/Checkout" className="header__clearlink ">
          <div className="head">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
