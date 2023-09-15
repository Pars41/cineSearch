import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRouter = () => {
  //? Consuming
  const { isLoggedIn } = useContext(AuthContext);

  return (localStorage.getItem("email")&&localStorage.getItem("password")) ? <Outlet /> : <Navigate to="/" />;

};

export default PrivateRouter;
