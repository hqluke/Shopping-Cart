import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();

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
            <HeaderBar />
            {cart.map((item) => (
                <div key={item.id}>
                    <img src={item.images[0]} />
                    <h3>{item.title}</h3>
                    <p>Qty: {item.count}</p>
                    <img
                        src="/public/left-arrow-svgrepo-com.svg"
                        onClick={() => updateQuantity(item.id, item.count - 1)}
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
                        src="/public/right-arrow-svgrepo-com.svg"
                        onClick={() => updateQuantity(item.id, item.count + 1)}
                    />

                    <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
                </div>
            ))}
        </>
    );
}

export default Cart;
