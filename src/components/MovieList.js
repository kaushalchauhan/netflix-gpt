import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="md:text-3xl text-lg py-4  capitalize text-white">
        {title}
      </h1>
      <div className="flex gap-2 overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path || movie?.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
