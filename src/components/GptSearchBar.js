import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openAI";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // search movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest movies for the query : " +
      searchText.current.value +
      "only give me names of 5 movies, comman seprated like the example result given ahead. Example Result:  96, Chupke Chupke, Hera Pheri, Koi Mil Gaya, Gadar";

    // make an api call to GPTAPI & get movie results
    try {
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (gptResult.status === 429) {
        // Handle rate limit exceeded error
        alert("Rate limit exceeded. Please try again later.");
        return;
      }

      if (!gptResult.choices) {
        alert("Something went wrong");
        return;
      }

      if (!gptResult.choices) {
        alert("Something went wrong");
      }
      console.log(gptResult.choices?.[0]?.message?.content);
      const gptMovieList = gptResult.choices?.[0]?.message?.content.split(",");

      const PromiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(PromiseArray);
      dispatch(
        addGptMoviesResult({
          moviesName: gptMovieList,
          moviesResult: tmdbResults,
        })
      );
    } catch (error) {
      alert("GPT API Rate limit exceeded.");
    }
  };

  return (
    <div className=" pt-[50%] md:pt-[10%] flex justify-center md:items-start items-center">
      <form
        className="md:w-1/2 w-full bg-gray-800/80  grid grid-cols-12 p-5 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 ps-1 p-4 m-1 md:m-4 bg-transparent border-b-2 outline-none text-white"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 px-2 md:px-6 md:py-2 py-0 md:m-4 m-0 bg-purple-600 rounded text-white"
          onClick={handleGPTSearch}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
