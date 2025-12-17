import "./ProductCard.css";
function ProductCard({ product }) {
    return (
        <>
            <div className="cardContainer">
                <div className="cardLeft">
                    <div className="cardTop">
                        <img src={product.image} />
                    </div>
                </div>
                <div className="cardRight">
                    <div className="cardMiddle">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>

                    <div className="cardBottom">
                        <p>${product.price}</p>
                        <div className="rating">
                            <p>{product.rating.rate}</p>
                            <p>{product.rating.count}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
