import HeaderBar from "./HeaderBar.jsx";
import { useLoaderData, useParams } from "react-router";
import ProductCard from "./ProductCard.jsx";

function CategoryPage(test) {
    const Products = useLoaderData();
    const { category } = useParams();

    return (
        <>
            <div className="shopContainer">
                <div className="headerDiv">
                    <HeaderBar />
                </div>
                {/* Capitalize first letter */}
                <h1>
                    Shop {category.charAt(0).toUpperCase() + category.slice(1)}
                </h1>
                <div className="productsContainer">
                    {Products.filter((p) => p.category == category).map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
