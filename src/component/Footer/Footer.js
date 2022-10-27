import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";
function Footer() {
  const scroll_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <div className="footer">
      <div className="back__top" onClick={scroll_top}>
        Back to top
      </div>

      <div className="top">
        <div className="links">
          <h3 className="title">Get to Know Us</h3>
          <ul>
            <li>
            
              <a>Careers</a>
            </li>
            <li>
              
              <a>Blog</a>
            </li>
            <li>
              
              <a>About Amazon</a>
            </li>
            <li>
              
              <a>Sustainability</a>
            </li>
            <li>
              
              <a>Press Center</a>
            </li>
            <li>
              
              <a>Investor Relations</a>
            </li>
            <li>
              
              <a>Amazon Devices</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3 className="title">Make Money with Us</h3>
          <ul>
            <li>
              
              <a>Sell products on Amazon</a>
            </li>
            <li>
              
              <a>Sell apps on Amazon</a>
            </li>
            <li>
              
              <a>Become an Affiliate</a>
            </li>
            <li>
              
              <a>Become a Delivery Driver</a>
            </li>
            <li>
              
              <a>Start a package delivery business</a>
            </li>
            <li>
              
              <a>Advertise Your Products</a>
            </li>
            <li>
              
              <a>Self-Publish with Us</a>
            </li>
            <li>
              
              <a>Host an Amazon Hub</a>
            </li>
            <li>
              
              <a>See More Make Money with Us</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3 className="title">Amazon Payment Products</h3>
          <ul>
            <li>
              
              <a>Amazon Rewards Visa Signature Cards</a>
            </li>
            <li>
              
              <a>Amazon.com Store Card</a>
            </li>
            <li>
              
              <a>Amazon Secured Card</a>
            </li>
            <li>
              
              <a>Amazon Business Card</a>
            </li>
            <li>
              
              <a>Amazon Business Line of Credit</a>
            </li>
            <li>
              
              <a>Credit Card Marketplace</a>
            </li>
            <li>
              
              <a>Reload Your Balance</a>
            </li>
            <li>
              
              <a>Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h3 className="title">Let Us Help You</h3>
          <ul>
            <li>
            
              <a>Amazon and COVID-19</a>
            </li>
            <li>
              
              <a>Your Account</a>
            </li>
            <li>
              
              <a>Your Orders</a>
            </li>
            <li>
              
              <a>Shipping Rates & Policies</a>
            </li>
            <li>
              
              <a>Amazon Prime</a>
            </li>
            <li>
              
              <a>Returns & Replacements</a>
            </li>
            <li>
              
              <a>Manage Your Content and Devices</a>
            </li>
            <li>
              
              <a>Amazon Assistant</a>
            </li>
            <li>
              
              <a>Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div>
          <img
            onClick={scroll_top}
            className="fotter_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>
        <div className="fotter_flag">
          <img
            className="flag"
            src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
          />
          Unites States
        </div>
        <div className="developed">Developed By : Tiahna</div>
      </div>
    </div>
  );
}

export default Footer;
