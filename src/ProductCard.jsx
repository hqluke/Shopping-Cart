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
                        <div className="rating">
                            <p>{product.rating.rate}★</p>
                            <p>({product.rating.count})</p>
                        </div>
                        <h1>${product.price.toFixed(2)}</h1>
                        {/* <p>{product.description}</p> */}
                    </div>

                    <div className="cardBottom">
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
