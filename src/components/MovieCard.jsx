import { NavLink, useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();

  const {
    poster_path,
    name,
    first_air_date,
    vote_average,
    title,
    release_date,
    id,
  } = item;

  const getposterURL = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`;
  };

  return (
    <NavLink onClick={() => navigate(`${id}`)} to={id}>
      <div className=" card-main">
        <div className="card">
          <img
            className="img-fluid rounded"
            alt="100%x280"
            src={getposterURL(poster_path)}
          />
          <p className="text-warning fw-bold average">
            {vote_average ? vote_average.toFixed(1) : "7.5"}
          </p>
          <p className="title text-light">{name ? name : title}</p>
          <p className="date text-warning">
            {first_air_date
              ? first_air_date.slice(0, 4)
              : release_date && release_date.slice(0, 4)}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
