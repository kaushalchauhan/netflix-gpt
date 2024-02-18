import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="md:-mt-56 mt-0 md:pl-4 pl-0 relative z-10">
          <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />

        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
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
