import { useLoaderData, useParams } from "react-router";
import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";
import { useState } from "react";
import "../style/ProductPage.css";

function ProductPage() {
    const products = useLoaderData();
    const { productId } = useParams();

    const product = products.find((p) => p.id === Number(productId));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const [count, setCount] = useState(1);
    const { addToCart } = useCart();
    const totalStock = product.stock;

    const addCount = () => {
        setCount((prev) => Math.min(totalStock, prev + 1));
    };

    const subCount = () => {
        setCount((prev) => Math.max(1, prev - 1));
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1 && value <= totalStock) {
            setCount(value);
        } else if (value >= totalStock) {
            setCount(totalStock);
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
            <div className="ppfull">
                <HeaderBar></HeaderBar>
                <div className="fullCard">
                    <div className="ppLeft">
                        <img src={product.images[0]} />
                    </div>
                    <div className="ppRight">
                        <div className="pptbr">
                            <div className="ppt">
                                <h1>{product.title}</h1>
                            </div>
                            <div className="ppbr">
                                <p>{product.brand}</p>
                                <div className="ppbrr">
                                    <p>{product.rating.toFixed(2)}</p>
                                    <p>★</p>
                                </div>
                            </div>
                        </div>
                        <h2>${product.price.toFixed(2)}</h2>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                        <div className="ppsp">
                            <div className="shipping">
                                <h2>Shipping</h2>
                                <p>{product.warrantyInformation}</p>
                                <p>{product.shippingInformation}</p>
                                <p>{product.returnPolicy}</p>
                            </div>
                            <div className="dimensions">
                                <h2>Package Information</h2>
                                <p>
                                    Dimensions: {product.dimensions.depth}{" "}
                                    <i>x</i> {product.dimensions.width} <i>x</i>{" "}
                                    {product.dimensions.height} inches
                                </p>
                                <p>Weight: {product.weight.toFixed(2)} lbs</p>
                            </div>
                        </div>
                        <div className="ppbuy">
                            <div className="ppstock">
                                <p>{product.stock} items available</p>
                            </div>
                            <div className="arrows">
                                <img
                                    src="/minus-circle-svgrepo-com.svg"
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
                                    src="/plus-circle-svgrepo-com.svg"
                                    onClick={addCount}
                                />
                            </div>
                        </div>
                        <button onClick={() => addToCart(product, count)}>
                            Add {count} to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
