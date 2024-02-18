import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, backdrop_path }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-4 rounded">
      <img alt="movie card" src={IMG_CDN_URL + posterPath || backdrop_path} />
    </div>
  );
};

export default MovieCard;
