import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContextProvider";

const Movies = () => {
  const { isLoggedIn, setIsLoggedIn, searchResults } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_KEY = "0a06593e3ed888b80a4b7c4da86b6bb9";
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const getMovie = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setMovies(data.results);
    } catch (error) {}
  };

  const [movies, setMovies] = useState([]);
console.log(isLoggedIn
)
  useEffect(() => {
    getMovie();

    // Eğer kullanıcı giriş yapmamışsa ve isLoggedIn false ise, otomatik olarak login sayfasına yönlendir.

    // if (!isLoggedIn) {
    //   navigate("/");
    // }
if(!localStorage.getItem("email")&&!localStorage.getItem("password")){
  navigate("/")
}
   
  }, [ navigate]);

  return (
    <>
    <NavBar logoutRender={true}/>
    <div className="main-page">
      <SearchBar />
      {searchResults.length !== 0 ? null : (
        <div className="mb-4 text-center">
          <h3>Trending Movies</h3>
        </div>
      )}

      <div className="main-content">
        {searchResults.length !== 0
          ? searchResults
              .filter((item) => item.poster_path && item.backdrop_path) // Sadece poster_path ve backdrop_path'i olanları getir
              .map((item, i) => {
                const { id } = item;
                return (
                  <MovieCard
                    item={item}
                    key={i}
                    onClick={() => navigate(`${id}`)}
                  />
                );
              })
          : movies.map((item, i) => {
              const { id } = item;
              return (
                <MovieCard
                  item={item}
                  key={i}
                  onClick={() => navigate(`${id}`)}
                />
              );
            })}
      </div>
    </div>
    </>
    
  );
};

export default Movies;
