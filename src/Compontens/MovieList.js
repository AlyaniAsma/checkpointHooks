import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ moviesprops }) {
  return (
    <div className="MovieList">
      {moviesprops.map((el) => (
        <MovieCard moviesprops={el} />
      ))}
    </div>
  );
}
