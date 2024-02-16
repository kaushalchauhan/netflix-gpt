import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] justify-center px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black font-semibold hover:text-red-600 transition-all duration-200 p-2 px-8 text-xl rounded">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white font-semibold hover:text-black transition-all duration-200 p-2 px-8 text-xl rounded bg-opacity-55 ms-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
