// Netflix-style movie card component
import React, { useState } from "react";

const MovieCard = ({ movie, isLarge = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`movie-card ${isLarge ? "movie-card--large" : ""}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        onLoad={handleImageLoad}
        className={`movie-card__image ${imageLoaded ? "loaded" : ""}`}
      />
      <div className="movie-card__info">
        <h3>{movie.title || movie.name}</h3>
        <p className="movie-card__rating">⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
