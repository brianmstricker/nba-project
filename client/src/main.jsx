import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import CreatePlayer from "./pages/CreatePlayer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-player",
    element: <CreatePlayer />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
