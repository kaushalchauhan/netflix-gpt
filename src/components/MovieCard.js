import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, backdrop_path }) => {
  return (
    <div className="w-48 pr-4 rounded">
      <img alt="movie card" src={IMG_CDN_URL + posterPath || backdrop_path} />
    </div>
  );
};

export default MovieCard;
