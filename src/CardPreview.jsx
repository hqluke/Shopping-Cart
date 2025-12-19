import "./CardPreview.css";
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

    return (
        <>
            <div className="previewCardContainer">
                <div className="cardDiv">
                    <div className="previewImage">
                        <img src={product.image} />
                    </div>
                    <div className="previewTitle">
                        <h2>{truncateAtWord(product.title, 60)}</h2>
                    </div>
                    <div className="previewRating">
                        <p>{product.rating.rate}</p>
                        <p>★</p>
                        <p>({product.rating.count})</p>
                    </div>
                    <div className="previewPrice">
                        <h1>${product.price.toFixed(2)}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardPreview;
