import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";
import "../style/Cart.css";
import { Link } from "react-router";
function Cart() {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

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

    return (
        <>
            <div id="cart-container">
                <HeaderBar />
                {cart.map((item) => (
                    <div className="cartCard" key={item.id}>
                        <div className="cLeft">
                            <Link to={`/shop/${item.category}/${item.id}`}>
                                <img src={item.images[0]} />
                            </Link>
                        </div>
                        <div className="cRight">
                            <Link to={`/shop/${item.category}/${item.id}`}>
                                <h3>{item.title}</h3>
                            </Link>
                            <p>Qty: {item.count}</p>
                            <div className="cArrows">
                                <img
                                    src="/minus-circle-svgrepo-com.svg"
                                    onClick={() =>
                                        updateQuantity(item.id, item.count - 1)
                                    }
                                />
                                <input
                                    min="1"
                                    type="number"
                                    step="1"
                                    value={item.count}
                                    onChange={handleInputChange(item.id)}
                                    onBlur={handleInputBlur(item)}
                                />

                                <img
                                    src="/plus-circle-svgrepo-com.svg"
                                    onClick={() =>
                                        updateQuantity(item.id, item.count + 1)
                                    }
                                />
                            </div>

                            <button onClick={() => removeFromCart(item.id)}>
                                Remove From Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h1>${totalPrice.toFixed(2)}</h1>
        </>
    );
}

export default Cart;
