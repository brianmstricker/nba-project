import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../error-page.jsx";
import CreatePlayerPage from "./pages/CreatePlayerPage.jsx";
import PropTypes from "prop-types";
import NavBar from "./components/Navbar.jsx";

export const FantasyTeamContext = React.createContext();

const FantasyTeamProvider = ({ children }) => {
  const fantasyTeam = useState([]);
  return (
    <FantasyTeamContext.Provider value={fantasyTeam}>
      {children}
    </FantasyTeamContext.Provider>
  );
};

FantasyTeamProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

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
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FantasyTeamProvider>
      <NavBar />
      <RouterProvider router={router} />
    </FantasyTeamProvider>
  </React.StrictMode>
);
