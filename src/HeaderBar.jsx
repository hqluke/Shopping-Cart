import { useState } from "react";
import "./HeaderBar.css";
function HeaderBar() {
    return (
        <>
            <div className="navContainer">
                <div className="navLeft">
                    <p>PlaceHolder</p>
                </div>
                <div className="navMiddle">
                    <p>Home</p>
                    <p>Shop</p>
                    <p>Cart</p>
                </div>
                <div className="navRight">
                    <p>Cart Image</p>
                </div>
            </div>

        </>
    );
}

export default HeaderBar;
