import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] justify-center md:px-12 px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black font-semibold hover:text-red-600 transition-all duration-200 p-2 md:px-8 px-3 md:text-xl text-sm mt-[10%] md:mt-0 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500 hidden md:inline-block text-white font-semibold hover:text-black transition-all duration-200 p-2 px-8 text-xl rounded-lg bg-opacity-55 ms-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
