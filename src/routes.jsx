import App from "./App";
import Cart from "./Cart.jsx";
import Shop from "./Shop.jsx";

const routes = [
    {
        path: "/",
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
