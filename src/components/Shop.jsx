import HeaderBar from "./HeaderBar.jsx";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard.jsx";
import "../style/Shop.css";
function Shop() {
    const Products = useLoaderData();
    console.log("SHOP PAGE");
    console.log(Products);
    return (
        <>
            <div className="shopContainer">
                <div className="headerDiv">
                    <HeaderBar />
                </div>
                <h1>Shop All</h1>
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
