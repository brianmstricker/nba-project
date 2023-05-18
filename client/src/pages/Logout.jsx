import useUserStore from "../store/userStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);
  return <div>page</div>;
};
export default Logout;
