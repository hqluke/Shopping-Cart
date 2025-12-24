import { useState } from "react";
import "../style/HeaderBar.css";
import { Link } from "react-router";
import { useCart } from "./CartContext";
function HeaderBar() {
    const {itemCount} = useCart();
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
                        {itemCount > 0 && <p>{itemCount}</p>}  
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeaderBar;
