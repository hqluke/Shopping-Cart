import { useState } from "react";
import "../style/HeaderBar.css";
import { Link } from "react-router";
import { useCart } from "./CartContext";
function HeaderBar() {
    const { itemCount } = useCart();
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
                        <div className="himg">
                            <img src="/cart-shopping-fast-svgrepo-com.svg" />
                        </div>
                    </Link>
                    <Link to="/cart">{itemCount > 0 &&
                        <div className="hcount">
                             <p>{itemCount}</p>
                        </div>}
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeaderBar;
