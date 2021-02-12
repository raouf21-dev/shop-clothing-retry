import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../src/assets/crown.svg";
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo"> 
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}
export default Header;