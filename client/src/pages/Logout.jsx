import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const Logout = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    setUser(false);
    localStorage.removeItem("user-storage");
    navigate("/");
  }, [navigate, setUser]);
  return null;
};

export default Logout;
