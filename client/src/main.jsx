import React from "react";
import ErrorPage from "./pages/error-page.jsx";
import CreatePlayerPage from "./pages/CreatePlayerPage.jsx";
import ReactDOM from "react-dom/client";
import HeaderNavigation from "./components/HeaderNavigation.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-player",
    element: <CreatePlayerPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderNavigation />
    <RouterProvider router={router} />
  </React.StrictMode>
);
