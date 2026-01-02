import "../style/CardPreview.css";
import { Link } from "react-router";
function CardPreview({ product }) {
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

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <>
            <div className="previewCardContainer">
                <div className="cardDiv">
                    <div className="previewImage">
                        <Link to={`/shop/${product.category}/${product.id}`}>
                            <img src={product.images[0]} />
                        </Link>
                    </div>
                    <div className="previewTitle">
                        <Link to={`/shop/${product.category}/${product.id}`}>
                            <h2>{truncateAtWord(product.title, 30)}</h2>
                        </Link>
                    </div>
                    <div className="previewPrice">
                        <h1>{formatter.format(product.price)}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardPreview;
