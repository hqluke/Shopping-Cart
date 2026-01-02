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
                        <div
                            className="hc"
                            style={{
                                "--bg-image":
                                    "url(/ebca4415b6315474f387e920bb06bb69.jpg)",
                            }}
                        >
                            <Link to="/shop/smartphones">
                                <p>Phones</p>
                            </Link>
                        </div>
                        <div
                            className="hc"
                            style={{
                                "--bg-image":
                                    "url(/0755dac2159096e80ee08deca7b6755a.jpg)",
                            }}
                        >
                            <Link to="/shop/laptops">
                                <p>Laptops</p>
                            </Link>
                        </div>
                        <div
                            className="hc"
                            style={{
                                "--bg-image":
                                    "url(/efa4d40b0f49c6be4b3dcced1f6e2276.jpg)",
                            }}
                        >
                            <Link to="/shop/fragrances">
                                <p>Fragrances</p>
                            </Link>
                        </div>
                        <div
                            className="hc"
                            style={{
                                "--bg-image":
                                    "url(/df5b7166cc792f0751547a0fb2256c81.jpg)",
                            }}
                        >
                            <Link to="/shop/mens-watches">
                                <p>Mens watches</p>
                            </Link>
                        </div>
                        <div
                            className="hc"
                            style={{
                                "--bg-image":
                                    "url(/screenshot-2025-12-31_01-09-10_flipped.png)",
                            }}
                        >
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
