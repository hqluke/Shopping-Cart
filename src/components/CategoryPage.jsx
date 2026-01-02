import HeaderBar from "./HeaderBar.jsx";
import { useLoaderData, useParams } from "react-router";
import CardPreview from "./CardPreview.jsx";

function CategoryPage() {
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
                <div className="productsContainerc">
                    {Products.filter((p) => p.category == category).map((p) => (
                        <CardPreview key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CategoryPage;
