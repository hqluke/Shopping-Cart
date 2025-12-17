import App from "./App";
import Cart from "./Cart.jsx";
import Shop from "./Shop.jsx";

async function rootLoader(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    return data;
}
const routes = [
    {
        path: "/",
        loader: rootLoader,
        element: <App />,
    },
    {
        path: "cart",
        element: <Cart />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
];

export default routes;
