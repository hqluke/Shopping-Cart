import { useLoaderData, useParams, Link } from "react-router";
import HeaderBar from "./HeaderBar.jsx";
import { useCart } from "./CartContext";
import { useState } from "react";
import "../style/ProductPage.css";

function ProductPage() {
    const products = useLoaderData();
    const { productId } = useParams();
    const { addToCart, cart } = useCart();

    const product = products.find((p) => p.id === Number(productId));
    if (!product) {
        return <h2>Product not found</h2>;
    }

    const [mainImage, setMainImage] = useState(product.images[0]);
    const [count, setCount] = useState(1);
    const totalStock = product.stock;
    const cartItem = cart.find((item) => item.id === product.id);
    const currentCartQuantity = cartItem ? cartItem.count : 0;
    const availableStock = totalStock - currentCartQuantity;

    const addCount = () => {
        setCount((prev) => Math.min(availableStock, prev + 1));
    };

    const subCount = () => {
        setCount((prev) => Math.max(1, prev - 1));
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1 && value <= availableStock) {
            setCount(value);
        } else if (value >= availableStock) {
            setCount(availableStock);
        } else if (e.target.value === "") {
            setCount(""); // Allow empty during typing
        }
    };

    const handleInputBlur = () => {
        if (count === "" || count < 1) {
            setCount(1); // Reset to 1 if invalid
        }
    };

    const plural = availableStock === 1 ? "item" : "items";

    function cartCheck() {
        const cartItem = cart.find((item) => item.id === product.id);
        const currentCartQuantity = cartItem ? cartItem.count : 0;
        const availableStock = totalStock - currentCartQuantity;
        if (availableStock <= 0) {
            alert(
                `No more stock available. You already have ${currentCartQuantity} in your cart.`,
            );
            return;
        }

        const quantityToAdd = Math.min(count, availableStock);

        if (quantityToAdd < count) {
            alert(
                `Only ${availableStock} ${plural} available. Adding ${quantityToAdd} to cart.`,
            );
        }

        addToCart(product, quantityToAdd);
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        if (isNaN(date)) return ""; // prevent “Invalid Date”

        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(date);
    }

    return (
        <>
            <div className="ppfull">
                <HeaderBar></HeaderBar>
                <div className="fullCard">
                    <div className="ppLeft">
                        <div className="ppLC">
                            <div className="ppli">
                                {product.images.length !== 1 &&
                                    product.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="ppi"
                                            onClick={() => setMainImage(image)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={image}
                                                draggable="false"
                                            />
                                        </div>
                                    ))}
                            </div>
                            <div className="pplmainImage">
                                <img src={mainImage} draggable="false" />
                            </div>
                        </div>
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
                        <p>
                            Shop more:{" "}
                            <Link to={`/shop/${product.category}`}>
                                {product.category}
                            </Link>
                        </p>
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
                                <p>
                                    {availableStock} {plural} available
                                </p>
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
                        <button onClick={() => cartCheck()}>
                            Add {count} to cart
                        </button>
                    </div>
                </div>
                {/* <h1>Customer Reviews</h1> */}
                {/* <div className="ppreviews"> */}
                {/*     <div className="pprc"> */}
                {/*         <div className="pprt"> */}
                {/*             <p>{product.reviews[0].reviewerName}</p> */}
                {/*             <div className="pprr"> */}
                {/*                 <p>{product.reviews[0].rating}</p> */}
                {/*                 <p>★</p> */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <p>{formatDate(product.reviews[0].date)}</p> */}
                {/*         <p>{product.reviews[0].comment}</p> */}
                {/*     </div> */}
                {/*     <div className="pprc"> */}
                {/*         <div className="pprt"> */}
                {/*             <p>{product.reviews[1].reviewerName}</p> */}
                {/*             <div className="pprr"> */}
                {/*                 <p>{product.reviews[1].rating}</p> */}
                {/*                 <p>★</p> */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <p>{formatDate(product.reviews[1].date)}</p> */}
                {/*         <p>{product.reviews[1].comment}</p> */}
                {/*     </div> */}
                {/*     <div className="pprc"> */}
                {/*         <div className="pprt"> */}
                {/*             <p>{product.reviews[2].reviewerName}</p> */}
                {/*             <div className="pprr"> */}
                {/*                 <p>{product.reviews[2].rating}</p> */}
                {/*                 <p>★</p> */}
                {/*             </div> */}
                {/*         </div> */}
                {/*         <h3>{formatDate(product.reviews[2].date)}</h3> */}
                {/*         <p>{product.reviews[2].comment}</p> */}
                {/*     </div> */}
                {/* </div> */}
            </div>
        </>
    );
}

export default ProductPage;
