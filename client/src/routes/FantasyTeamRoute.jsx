import { Navigate } from "react-router-dom";
import FantasyTeamPage from "../pages/FantasyTeamPage";

const GetToken = () => {
  const storageData = JSON.parse(localStorage.getItem("user-storage"));
  if (storageData && storageData.state && storageData.state.token) {
    return storageData.state.token;
  }
  return null;
};

export const FantasyTeamRoute = () => {
  const token = GetToken();
  if (token) {
    return <FantasyTeamPage />;
  } else {
    return <Navigate to="/login" />;
  }
};
