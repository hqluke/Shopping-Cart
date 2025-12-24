import { createRoot } from "react-dom/client";
import "./style/index.css";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router";
import { CartProvider } from "./components/CartContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>,
);
