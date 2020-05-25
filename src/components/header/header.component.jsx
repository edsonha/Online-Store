import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, isCartDropdownHidden }) => {
  console.log("I am called from Header");
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartDropdownHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { isCartDropdownHidden },
}) => ({
  currentUser,
  isCartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
