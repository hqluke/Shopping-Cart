import App from "./components/App";
import Cart from "./components/Cart.jsx";
import Shop from "./components/Shop.jsx";
import ProductPage from "./components/ProductPage.jsx";
import CategoryPage from "./components/CategoryPage.jsx";

async function rootLoader() {
    const categoryNames = [
        "smartphones",
        "laptops",
        "mens-watches",
        "womens-watches",
        "fragrances",
    ];

    const promises = categoryNames.map(async (category) => {
        const response = await fetch(
            `https://dummyjson.com/products/category/${category}`,
        );
        const data = await response.json();
        return data.products;
    });

    const results = await Promise.all(promises);
    const arr = results.flat();
    return arr;
}

const routes = [
    {
        path: "/",
        loader: rootLoader,
        element: <App />,
    },
    {
        path: "cart",
        loader: rootLoader,
        element: <Cart />,
    },
    {
        path: "shop",
        loader: rootLoader,
        element: <Shop />,
    },
    {
        path: "shop/:category/:productId",
        loader: rootLoader,
        element: <ProductPage />,
    },
    {
        path: "shop/:category/",
        loader: rootLoader,
        element: <CategoryPage />,
    },
];

export default routes;
