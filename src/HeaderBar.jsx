import { useState } from "react";
import "./HeaderBar.css";
import { Link } from "react-router";
function HeaderBar() {
    return (
        <>
            <div className="navContainer">
                <div className="navLeft">
                    <Link to="/">
                        <img src="/logo-tux-svgrepo-com.svg" />
                    </Link>
                </div>
                <div className="navMiddle">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                <div className="navRight">
                    <Link to="/cart">
                        <img src="/cart-shopping-fast-svgrepo-com.svg" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeaderBar;
