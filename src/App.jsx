import { useState } from "react";
import HeaderBar from "./HeaderBar.jsx";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import CardPreview from "./CardPreview.jsx";
import "./App.css";
import { Link } from "react-router";
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
                <div className="title">
                    <h1>Home</h1>
                </div>
                <div className="c">
                    <div className="left">
                        <h1>Quick search</h1>
                        <div className="itemList">
                            <ul>
                                <Link to="/shop/smartphones">
                                    <li>Phones</li>
                                </Link>
                                <Link to="/shop/tablets">
                                    <li>Tablets</li>
                                </Link>
                                <Link to="/shop/mobile-accessories">
                                    <li>Mobile Accessories</li>
                                </Link>
                                <Link to="/shop/fragrances">
                                    <li>Fragrances</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="desc">
                            <h2>About</h2>
                            <div className="descArea">
                                <p>
                                    The FakeShopAPI store features a diverse
                                    range of products designed to represent a
                                    modern online marketplace. The men’s
                                    clothing category includes casual and
                                    practical apparel such as jackets, t-shirts,
                                    and slim-fit tops, often styled for everyday
                                    wear. These items emphasize comfort and
                                    versatility, making them suitable for both
                                    relaxed and semi-casual settings. The
                                    women’s clothing section offers a broader
                                    variety of styles, including dresses,
                                    blouses, and seasonal outfits that balance
                                    fashion and functionality. Many pieces
                                    highlight contemporary trends while
                                    remaining accessible for daily use.
                                </p>

                                <p>
                                    The store also offers a selection of
                                    accessories, primarily focused on jewelry
                                    such as necklaces, rings, and bracelets.
                                    These items range from simple, minimalist
                                    designs to more eye-catching statement
                                    pieces, providing options for different
                                    tastes and occasions. Accessories help
                                    complement the clothing categories and add a
                                    lifestyle-focused element to the store.
                                </p>

                                <p>
                                    In the technology category, FakeShopAPI
                                    includes popular consumer electronics such
                                    as smartphones, laptops, and headphones.
                                    These products are positioned as essential
                                    tools for work, entertainment, and
                                    communication, reflecting common tech
                                    purchases in real-world e-commerce
                                    platforms. Overall, the store presents a
                                    balanced mix of fashion, accessories, and
                                    electronics, making FakeShopAPI a realistic
                                    and well-rounded sample dataset for
                                    practicing full-stack or frontend shopping
                                    applications.
                                </p>
                            </div>
                        </div>
                        <div className="shopC">
                            <h2>Top Sellers</h2>
                            <div className="previewProductsContainer">
                                {SlicedProducts.map((p) => (
                                    <CardPreview key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
