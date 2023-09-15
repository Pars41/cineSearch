import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const SearchBar = () => {
  const {
    search,
    setSearch,
    setSearchResults,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const getQuery = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTA2NTkzZTNlZDg4OGI4MGE0YjdjNGRhODZiNmJiOSIsInN1YiI6IjY0MDUwYjdkMTM2NTQ1MDA4Y2U5Y2RjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2UyJs2H4wd7bfyJca4Uo-ntjcEXibVx7CPnc0gUz0ro",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResults(response.results))
      .catch((err) => console.error(err));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getQuery();
      const currentLocation = window.location.pathname;
      if (currentLocation !== "/movies") {
        navigate("/movies");
      }
    }
  };
  const handleSearch = () => {
    const currentLocation = window.location.pathname;
    if (currentLocation !== "/movies") {
      navigate("/movies");
    }
    getQuery();
  };

  return (
    <div className="container my-3 ">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="search d-flex">
            <i className="fa fa-search" />
            <input
              type="search"
              className="form-control"
              placeholder="Search a movie, tv show or actor.."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              onKeyPress={handleKeyPress}
              autoFocus
            />
            <button className="btn btn-dark mx-2" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
