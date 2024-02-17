import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-20 pl-12 relative z-10">
          <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        {/* 
    MovieList - Popular
     - movie card * n
    MovieList - Trending
    MovieList - Horror
    MovieList - Now Playing
    */}
      </div>
    )
  );
};

export default SecondaryContainer;
