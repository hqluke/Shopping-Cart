import { useState } from "react";
import "./HeaderBar.css";
import { Link } from "react-router";
function HeaderBar() {
    return (
        <>
            <div className="navContainer">
                <div className="navLeft">
                    <img src="../public/logo-tux-svgrepo-com.svg" />
                </div>
                <div className="navMiddle">
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/shop">Shop</Link>

                </div>
                <div className="navRight">
                    <img src="../public/cart-shopping-fast-svgrepo-com.svg" />
                </div>
            </div>
        </>
    );
}

export default HeaderBar;
