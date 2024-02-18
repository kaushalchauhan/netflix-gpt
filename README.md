# Neflix GPT

- Create React App
- Config Tailwind CSS
- Header
- Routing
- Login Form
- Form validation
- useRef form
- Firebase Setup
- Deploying our app to the production
- Create sign-up user account
- Implement sigin user Api
- Created our user redux store with userSlice
- Update Profile
- Implemented Signout
- Register for IMDB API
- get data from tmdb now playing
- Custom hook for now playing movies, movie-trailer
- Create movie slice
- update store with movie data
- fetch data for movie trailer
- update store with trailer video data
- embedded the youtube video and make it autoplay-mute
- build secondary component
- build movie list
- build movie card
- TMDB img CDN URL
- add styling to browse page using tailwind CSS
- created usePopularMovie custom hook
- GPT Search Page
- GPT Search Bar
- Multi language Feature
- BUGFIX - toggleGptSearchView() from the store on signout
- implemented GPT Search using openAI
- fetch gpt movie suggestion from TMDB
- created gptSlice added data
- reuse movieList component to make suggestion container
- implemented memoziation
- .env file
- site responsive

### Features

- Login/Signup Page

  - Sign in/Sign up Form
  - Redirect to Browse Page

- Browse - when user is logged in (after authentication)

  - Header
  - Main Movie
  - trailer in bg
  - Movie title and description
  - Movies Suggestions
    - Movies List

- Netflix GPT

  - Search bar
  - Movies Suggestions

- Multilang support for GPT search page

- Add memoziation for nowPlaying,

  #### firebase setup

  - install firebase cli = `sudo npm install -g firebase-tools`
  - `firebase login`
  - `firebase init`
  - What do you want to use as your public directory? `build`
  - `firebase deploy`
  - link - https://netlixgpt.web.app

# env var in CRA(create react app)

- create .env file, add with prefix in var name, i.e - REACT_APP_OPENAI_KEY = "jfllnle"
- add to config like export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
- add .env to .gitignore
