import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const { moviesResult, moviesName } = useSelector((store) => store.gpt);
  if (!moviesName) return null;
  return (
    <div className="m-4 bg-black bg-opacity-65 text-white">
      <div>
        {moviesName.map((movieName, index) => (
          <MovieList
            title={movieName}
            key={movieName}
            movies={moviesResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
