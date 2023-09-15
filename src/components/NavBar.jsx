// import { useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContextProvider";

// const NavBar = () => {
//   const { setIsLoggedIn, isLoggedIn, setSearch,search, setSearchResults } =
//     useContext(AuthContext);
// console.log(search);
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setSearch("");
//     setSearchResults([])
//     localStorage.clear()
//   };

//   return (
//     <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary px-4 mb-0">
//       <div className="d-flex justify-content-between w-100">
//         <NavLink
//           className="navbar-brand text-white px-5"
//           onClick={() => setSearchResults([])}
//           to="movies"
//         >
//           cineSearch
//         </NavLink>

//         <ul className="navbar-nav">
//           {(localStorage.getItem("email")&&localStorage.getItem("password")) ? (
//             <>
//               <p>{localStorage.getItem("name")}</p>
//               <NavLink to="#" className="mx-2">
//                 <button
//                   onClick={() => handleLogout(setIsLoggedIn)}
//                   className="btn btn-dark btn-outline-light mx-1"
//                 >
//                   Logout
//                 </button>
//               </NavLink>
//             </>
//           ) : null}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const NavBar = ({logoutRender}) => {
  const { setIsLoggedIn, setSearch,  setSearchResults } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSearch("");
    setSearchResults([]);
    localStorage.clear();
  };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShouldRender(true);
  //   }, 0);

  //   return () => clearTimeout(timer);

  // }, []);

  return (
    <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary px-4 mb-0">
      <div className="d-flex justify-content-between w-100">
        <NavLink
          className="navbar-brand text-white px-5"
          onClick={() => setSearchResults([])}
          to="/movies"
        >
          cineSearch
        </NavLink>

        <ul className="navbar-nav">
          {logoutRender && localStorage.getItem("email") && localStorage.getItem("password") ? (
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

// import React, { useContext, useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AuthContext } from "../context/AuthContextProvider";

// const NavBar = () => {
//   const { setIsLoggedIn, setSearch, search, setSearchResults } =
//     useContext(AuthContext);
//     const [shouldRender, setShouldRender] = useState(true);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setSearch("");
//     setSearchResults([]);
//     localStorage.clear();
//   };
//   useEffect(() => {
//     const currentLocation = window.location.pathname;
//     if (currentLocation === "/") {
//       setShouldRender(false);
//       console.log(currentLocation);
//     }else{
//       setShouldRender(true)
//       console.log(currentLocation);

//     }

// }, []);

//   return (
//     <nav className="navbar bg-dark text-white navbar-expand-lg bg-body-tertiary px-4 mb-0">
//       <div className="d-flex justify-content-between w-100">
//         <NavLink
//           className="navbar-brand text-white px-5"
//           onClick={() => setSearchResults([])}
//           to="movies"
//         >
//           cineSearch
//         </NavLink>

//         <ul className="navbar-nav">
//           {(shouldRender &&
//           localStorage.getItem("email") &&
//           localStorage.getItem("password")) ? (
//             <>
//               <NavLink to="#" className="mx-2">
//                 <button
//                   onClick={() => handleLogout(setIsLoggedIn)}
//                   className="btn btn-dark btn-outline-light mx-1"
//                 >
//                   Logout
//                 </button>
//               </NavLink>
//             </>
//           ) : null}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
