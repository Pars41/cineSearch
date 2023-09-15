import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthContextProvider";

const MovieDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState([]);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const API_KEY = "0a06593e3ed888b80a4b7c4da86b6bb9";
  const getVideo = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Something went wrong");
        // }
        return res.json();
      })
      .then((data) => setVideo(data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => {
        // if (!res.ok) {
        //   throw new Error("Something went wrong");
        // }
        return res.json();
      })
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
    getVideo();
  }, [id]);

  const getposterURL = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`;
  };

  const getvideoLink = (video) => {
    return `https://www.youtube.com/watch?v=${video}`;
  };
  useEffect(() => {
    // Eğer kullanıcı giriş yapmamışsa ve isLoggedIn false ise, otomatik olarak login sayfasına yönlendirin.
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="movie-detail">
      <SearchBar />

      <div className="overview">
        <div className="image">
          <img
            className="shadow-lg p-3  bg-dark rounded"
            src={getposterURL(movies.poster_path)}
            alt="poster"
          />
        </div>
        <div className="details">
          {movies.overview && (
            <p>
              <span className="label">Overview</span> : {movies.overview}
            </p>
          )}
          {!movies.overview && (
            <p>
              <span className="label">No overview</span>
            </p>
          )}

          <p>
            <span className="label">Release Date</span> : {movies.release_date}
          </p>
          <p>
            <span className="label">Rate</span> :{" "}
            {Math.round(movies.vote_average * 10) / 10}
          </p>

          <p>
            <span className="label">Total Vote</span> : {movies.vote_count}{" "}
          </p>
          {video.length !== 0 ? (
            <ul className="trailers">
              <span className="label">Watch trailers</span>:
              {video.map((item, i) => {
                const { key } = item;
                return (
                  <>
                    <a target="_blank" href={getvideoLink(key)}>
                      {i + 1}
                    </a>
                    <br />
                  </>
                );
              })}
            </ul>
          ) : (
            <span>No Trailer</span>
          )}

          <NavLink onClick={() => navigate(-1)}>Go Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
