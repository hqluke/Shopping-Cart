import "./ProductCard.css";
import { Link } from "react-router";
import { useCart } from "./CartContext";

function ProductCard({ product }) {
    const { addToCart } = useCart();

    const truncateAtWord = (text, limit = 200) => {
        if (text.length <= limit) return text;

        const trimmed = text.slice(0, limit);
        const lastSpace = trimmed.lastIndexOf(" ");
        const lastColon = trimmed.lastIndexOf(":");
        const lastComma = trimmed.lastIndexOf(",");

        const lastBreakPoint = Math.max(lastSpace, lastColon, lastComma);
        const truncated = trimmed.slice(
            0,
            lastBreakPoint > 0 ? lastBreakPoint : limit,
        );

        // Remove trailing punctuation (comma, colon, semicolon, etc.)
        return truncated.replace(/[,:;]+$/, "") + "...";
    };

    return (
        <>
            <div className="cardContainer">
                <div className="cardLeft">
                    <div className="cardTop">
                        <Link to={`/shop/${product.category}/${product.id}`}>
                            <img src={product.images[0]} />
                        </Link>
                    </div>
                </div>
                <div className="cardRight">
                    <div className="cardMiddle">
                        <Link to={`/shop/${product.category}/${product.id}`}>
                            <h2>{truncateAtWord(product.title, 67)}</h2>
                        </Link>
                        <h1>${product.price.toFixed(2)}</h1>
                        <p>{truncateAtWord(product.description, 200)}</p>
                    </div>

                    <div className="cardBottom">
                        <button onClick={() => addToCart(product, 1)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
