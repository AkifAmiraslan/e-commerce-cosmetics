/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { setHomeBackground, setOtherBackground, selectBackgroundColor, selectTextColor } from "../../../redux/navSlice"
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./styles.scss";
import arrow from "../../../assets/images/icn arrow-right header .icn-xs.svg";
import search from "../../../assets/images/icn search .icn-xs.svg";
import cart from "../../../assets/images/icn shopping-cart .icn-xs.svg";
import menu from "../../../assets/images/icn menu .icn-xs.svg";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const backgroundColor = useSelector(selectBackgroundColor);
  const textColor = useSelector(selectTextColor);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(setHomeBackground());
    } else {
      dispatch(setOtherBackground());
    }
   
  }, [dispatch, location]);

  const isMobile = window.innerWidth <= 768;

  

  return (
    <>
    
      <nav style={{ background: isMobile ? 'white' : backgroundColor, color: isMobile ? 'black' : textColor }}>
        <div className="logo">
            Lovely
        </div>

        <div className="icons">
          <img src={search} alt="icon" />
          <img src={cart} alt="icon" />
          <img src={menu} alt="icon" onClick={toggleMobileMenu} />
        </div>

        <ul className="nav-link">
          <Link to="/" className="link" style={{color: textColor }}>
            Home
          </Link>

          <Link to="/productList" target="_blank" className="link" style={{color: textColor }}>
            Product
          </Link>

          <Link to="/pricing" className="link" style={{color: textColor }}>
            Pricing
          </Link>

          <Link to="/contact" className="link" style={{color: textColor }}>
            Contact
          </Link>
        </ul>

        <form>
          <Link to="/signIn" target="_blank" className="nav-login" style={{color: textColor }}>
            Login
          </Link>

          <Link to="/signUp" target="_blank"className="nav-signup">
              Become a member <img src={arrow} alt="icon" />
          </Link>
        </form>
      </nav>

      <ul className={`nav-link-mobile ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="link">
          Home
        </Link>

        <Link to="/product" className="link">
          Product
        </Link>

        <Link to="/pricing" className="link">
          Pricing
        </Link>

        <Link to="/contact" className="link">
          Contact
        </Link>
      </ul>
    </>
  );
}
export default Header;
