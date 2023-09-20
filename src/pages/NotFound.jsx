import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { AuthContext } from "../context/AuthContextProvider";

const NotFound = () => {
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
console.log(isLoggedIn);
  useEffect(() => {
    setIsLoggedIn(true)
    if ((!localStorage.getItem("email") && !localStorage.getItem("password"))) {
      navigate("/");
    }
  }, [navigate,isLoggedIn]);
  return (
    <>
      <NavBar logoutRender={true} />
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-6">
            <div className="alert alert-success text-center" role="alert">
              <h2>Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
