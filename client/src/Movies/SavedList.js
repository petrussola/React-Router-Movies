import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  debugger;
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        // <span className="saved-movie">{movie.title}</span>
        <Link to={`/movies/${movie.id}`} className="saved-movie">
          {movie.title}
        </Link>
      ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
};

export default SavedList;
