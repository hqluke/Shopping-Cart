import { useState } from "react";
import HeaderBar from "./HeaderBar.jsx";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import CardPreview from "./CardPreview.jsx"
import "./App.css";
function App() {
    //home page
    // const [initProducts, setInitProducts] = useState([]);

    const Products = useLoaderData();
    const SlicedProducts = [...Products]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 4);
    return (
        <>
            <div className="homeContainer">
                <div className="headerDiv">
                    <HeaderBar />
                </div>
                <h1>Home</h1>
                <div className="previewProductsContainer">
                    {SlicedProducts.map((p) => (
                        <CardPreview key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
