import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-gray-800/80  grid grid-cols-12 p-5 rounded">
        <input
          className="col-span-9 ps-1 p-4 m-4 bg-transparent border-b-2 outline-none text-white"
          type="text"
          placeholder={lang[selectedLang].gptSearchPlaceHolder}
        />
        <button className="col-span-3 px-6 py-2 m-4 bg-purple-600 rounded text-white">
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
