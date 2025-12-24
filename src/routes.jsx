import App from "./components/App";
import Cart from "./components/Cart.jsx";
import Shop from "./components/Shop.jsx";
import ProductPage from "./components/ProductPage.jsx"
import CategoryPage from "./components/CategoryPage.jsx"

async function rootLoader() {
    let arr = [];

    let response = await fetch(
        "https://dummyjson.com/products/category/smartphones",
        // "https://dummyjson.com/products/categories",
    );
    let data = await response.json();
    arr.push(...data.products);

    response = await fetch("https://dummyjson.com/products/category/tablets");
    data = await response.json();
    arr.push(...data.products);

    response = await fetch(
        "https://dummyjson.com/products/category/mobile-accessories",
    );
    data = await response.json();
    arr.push(...data.products);

    response = await fetch(
        "https://dummyjson.com/products/category/fragrances",
    );
    data = await response.json();
    arr.push(...data.products);

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
