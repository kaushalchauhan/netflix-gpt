import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  // get a random movies across all movies as a main movie
  // const mainMovies = movies[0];
  const mainMovies = movies[Math.floor(Math.random() * movies.length)];
  const { original_title, overview, id } = mainMovies;
  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
