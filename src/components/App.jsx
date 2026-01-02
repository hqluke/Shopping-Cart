import { useState } from "react";
import HeaderBar from "./HeaderBar.jsx";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import HomePreview from "./HomePreview.jsx";
import { Link } from "react-router";
import "../style/App.css";
function App() {
    return (
        <>
            <div className="homeContainer">
                <div className="headerDiv">
                    <HeaderBar />
                </div>
                <div className="title">
                    <h1>Home</h1>
                </div>
                <div className="c">
                    <div className="cc">
                        <div className="hc">
                            <Link to="/shop/smartphones">
                                <p>Phones</p>
                            </Link>
                        </div>
                        <div className="hc">
                            <Link to="/shop/laptops">
                                <p>Laptops</p>
                            </Link>
                        </div>
                        <div className="hc">
                            <Link to="/shop/fragrances">
                                <p>Fragrances</p>
                            </Link>
                        </div>
                        <div className="hc">
                            <Link to="/shop/mens-watches">
                                <p>Mens watches</p>
                            </Link>
                        </div>
                        <div className="hc">
                            <Link to="/shop/womens-watches">
                                <p>Womens watches</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
