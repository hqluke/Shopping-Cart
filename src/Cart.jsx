import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";

function Cart() {
    const { cart } = useCart();

    return (
        <>
            <HeaderBar />
            {cart.map(item => (
                <div key={item.id}>
                   <img src={item.images[0]} />
                    <h3>{item.title}</h3>
                    <p>Qty: {item.count}</p>
                </div>
            ))}
        </>
    );
}

export default Cart;
