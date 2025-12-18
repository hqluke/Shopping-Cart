import HeaderBar from "./HeaderBar.jsx";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard.jsx";
function Shop() {
    //home page

    const Products = useLoaderData();
    console.log("SHOP PAGE");
    console.log(Products);
    return (
        <>
            <HeaderBar />
            <div className="shopContainer">
                <h1>Shop</h1>
                <div className="productsContainer">
                    {Products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Shop;
