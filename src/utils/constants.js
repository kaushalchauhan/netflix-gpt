export const USER_AVTAR =
  "https://avatars.githubusercontent.com/u/73069418?v=4";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const TMDB_API_OPTIONS = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
