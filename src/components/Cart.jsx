import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";
import "../style/Cart.css";
import { Link, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { useRef } from "react";

function Cart() {
    const products = useLoaderData();
    const { cart, removeFromCart, updateQuantity, totalPrice, itemCount } =
        useCart();
    const [totalTax, setTotalTax] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    // 👇 local editable field values
    const [inputs, setInputs] = useState({});

    // initialize when cart loads / changes
    useEffect(() => {
        setInputs(
            Object.fromEntries(cart.map((item) => [item.id, item.count])),
        );
    }, [cart]);

    const handleInputChange = (item, stock) => (e) => {
        const raw = e.target.value;

        // allow blank while typing
        if (raw === "") {
            setInputs((prev) => ({ ...prev, [item.id]: "" }));
            return;
        }

        const num = parseInt(raw, 10);
        if (isNaN(num)) return;

        // clamp to stock limits
        const safe = Math.min(stock, Math.max(1, num));

        setInputs((prev) => ({ ...prev, [item.id]: safe }));
        updateQuantity(item.id, safe);
    };

    const handleBlur = (item) => () => {
        if (inputs[item.id] === "" || inputs[item.id] < 1) {
            setInputs((prev) => ({ ...prev, [item.id]: 1 }));
            updateQuantity(item.id, 1);
        }
    };

    function calcMoney() {
        let tax = totalPrice * 0.06760098;
        setTotalTax(tax);
        setFinalPrice(totalPrice + tax);
    }

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

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
                                            value={inputs[item.id] ?? ""}
                                            onChange={handleInputChange(
                                                item,
                                                item.stock,
                                            )}
                                            onBlur={handleBlur(item)}
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
                                <h2>{formatter.format(totalPrice)}</h2>
                            </div>
                            <div className="crm">
                                <h1>Tax: </h1>
                                <h2>{formatter.format(totalTax)}</h2>
                            </div>
                            <div className="crb">
                                <h1>Order Total:</h1>
                                <h2>{formatter.format(finalPrice)}</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
