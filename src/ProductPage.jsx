import { useLoaderData, useParams } from "react-router";

function ProductPage() {
    const products = useLoaderData();
    const { productId } = useParams();

    const product = products.find(
        p => p.id === Number(productId)
    );

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="fullCard">
            <img src={product.images[0]} />
            <h1>{product.title}</h1>
            <h2>${product.price.toFixed(2)}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <button>Add to cart</button>
        </div>
    );
}

export default ProductPage;
