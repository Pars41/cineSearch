import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const NavBar = () => {
  const { setIsLoggedIn, isLoggedIn, setSearch,search, setSearchResults } =
    useContext(AuthContext);
console.log(search);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setSearch("");
    setSearchResults([])
    localStorage.setItem("email", null);
    localStorage.setItem("password", null);
  };
  return (
    <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary px-4 mb-0">
      <div className="d-flex justify-content-between w-100">
        <NavLink
          className="navbar-brand text-white px-5"
          onClick={() => setSearchResults([])}
          to="movies"
        >
          cineSearch
        </NavLink>

        <ul className="navbar-nav">
          {isLoggedIn ? (
            <>
              <p>{localStorage.getItem("name")}</p>
              <NavLink to="#" className="mx-2">
                <button
                  onClick={() => handleLogout(setIsLoggedIn)}
                  className="btn btn-dark btn-outline-light mx-1"
                >
                  Logout
                </button>
              </NavLink>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
