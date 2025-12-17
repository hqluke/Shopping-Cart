import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import App from "./App.jsx";
import HeaderBar from "./HeaderBar.jsx";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
