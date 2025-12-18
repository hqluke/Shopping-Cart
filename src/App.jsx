import { useState } from "react";
import HeaderBar from "./HeaderBar.jsx";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "./ProductCard.jsx";
import "./App.css";
function App() {
    //home page
    // const [initProducts, setInitProducts] = useState([]);

    const Products = useLoaderData();
    console.log(Products);
    return (
        <>
            <HeaderBar />
            <div className="homeContainer">
                <h1>Home</h1>
                <div className="productsContainer">
                    {Products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
