import "../style/HomePreview.css";
import { Link } from "react-router";
function HomePreview({ product }) {
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
            <div className="previewCardContainerh">
                <div className="cardDivh">
                    <div className="previewImageh">
                        <Link to={`/shop/${product.category}/${product.id}`}>
                            <img src={product.images[0]} />
                        </Link>
                    </div>
                    <div className="previewTitleh">
                        <Link to={`/shop/${product.category}/${product.id}`}>
                            <h2>{truncateAtWord(product.title, 60)}</h2>
                        </Link>
                    </div>
                    <div className="previewPriceh">
                        <h1>${product.price.toFixed(2)}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePreview;

