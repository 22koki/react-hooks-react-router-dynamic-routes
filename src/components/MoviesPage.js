import React from "react";
//import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
//import MoviesList from "./components/MovieList.js";

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
export default MoviesPage;
