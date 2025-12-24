import { useLoaderData, useParams } from "react-router";
import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";
import { useState } from "react";

function ProductPage() {
    const products = useLoaderData();
    const { productId } = useParams();

    const product = products.find((p) => p.id === Number(productId));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const { addToCart } = useCart();
    const [count, setCount] = useState(1);

    const addCount = () => {
        setCount((prev) => Math.max(1, prev + 1));
    };

    const subCount = () => {
        setCount((prev) => Math.max(1, prev - 1));
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
            setCount(value);
        } else if (e.target.value === "") {
            setCount(""); // Allow empty during typing
        }
    };

    const handleInputBlur = () => {
        if (count === "" || count < 1) {
            setCount(1); // Reset to 1 if invalid
        }
    };

    return (
        <>
            <HeaderBar></HeaderBar>
            <div className="fullCard">
                <img src={product.images[0]} />
                <h1>{product.title}</h1>
                <h2>${product.price.toFixed(2)}</h2>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <img
                    src="/public/left-arrow-svgrepo-com.svg"
                    onClick={subCount}
                />
                <input
                    min="1"
                    type="number"
                    step="1"
                    value={count}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                />

                <img
                    src="/public/right-arrow-svgrepo-com.svg"
                    onClick={addCount}
                />

                <button onClick={() => addToCart(product, count)}>
                    Add {count} to cart
                </button>
            </div>
        </>
    );
}

export default ProductPage;
