import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../actions/movieActions";
import "../styles/movieDetails.css";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { movie, loading, error } = useSelector(
    (state) => state.movies
  );

  // 🔥 THIS is what fixes refresh
  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return null;

  return (
    <div className="movie-details">
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-language">
        Language: <span>{movie.language}</span>
      </p>

      <div className="trailer-container">
        <iframe
    src={movie.trailerUrl}
    title="Movie Trailer"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
      </div>

      <button className="book-btn">Book Now</button>
    </div>
  );
};

export default MovieDetails;
