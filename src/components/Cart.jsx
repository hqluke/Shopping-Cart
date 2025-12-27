import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";
import "../style/Cart.css";
import { Link } from "react-router";
import { useEffect, useState } from "react";
function Cart() {
    const { cart, removeFromCart, updateQuantity, totalPrice, itemCount } =
        useCart();
    const [totalTax, setTotalTax] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const handleInputChange = (itemId) => (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            updateQuantity(itemId, value);
        }
    };

    const handleInputBlur = (item) => {
        if (item.count < 1) {
            updateQuantity(item.id, 1);
        }
    };

    function calcMoney() {
        let tax = totalPrice * 0.06760098;
        setTotalTax(tax);
        setFinalPrice(totalPrice + tax);
    }

    useEffect(() => {
        calcMoney();
    }, [totalPrice]);

    return (
        <>
            <div id="cart-container">
                <HeaderBar />
                <div className="cardcenter">
                    <div className="clhs">
                        {cart.map((item) => (
                            <div className="cartCard" key={item.id}>
                                <div className="cLeft">
                                    <Link
                                        to={`/shop/${item.category}/${item.id}`}
                                    >
                                        <img src={item.images[0]} />
                                    </Link>
                                </div>
                                <div className="cRight">
                                    <Link
                                        to={`/shop/${item.category}/${item.id}`}
                                    >
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <p>Qty: {item.count}</p>
                                    <p>Price: ${item.price.toFixed(2)}</p>

                                    <div className="cArrows">
                                        <img
                                            src="/minus-circle-svgrepo-com.svg"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.count - 1,
                                                )
                                            }
                                        />
                                        <input
                                            min="1"
                                            type="number"
                                            step="1"
                                            value={item.count}
                                            onChange={handleInputChange(
                                                item.id,
                                            )}
                                            onBlur={handleInputBlur(item)}
                                        />

                                        <img
                                            src="/plus-circle-svgrepo-com.svg"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.count + 1,
                                                )
                                            }
                                        />
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove From Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {totalPrice > 0 && (
                        <div className="crhs">
                            <div className="crt">
                                <h1>Items({itemCount}):</h1>
                                <h2>${totalPrice.toFixed(2)}</h2>
                            </div>
                            <div className="crm">
                                <h1>Tax: </h1>
                                <h2>${totalTax.toFixed(2)}</h2>
                            </div>
                            <div className="crb">
                                <h1>Order Total:</h1>
                                <h2>${finalPrice.toFixed(2)}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
