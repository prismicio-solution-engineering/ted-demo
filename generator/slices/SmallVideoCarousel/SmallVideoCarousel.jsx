import React from "react";
import { PlayIcon } from "@heroicons/react/solid";

const videos = Array(6).fill({
  img: "https://source.unsplash.com/random",
  title: "Example Video",
  author: "John Doe",
  month: "January",
});

const SmallVideoCarousel = () => {
  return (
    <div className="p-10 md:px-40 bg-white">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-xl font-bold text-gray-500">Small Video Carousel</h2>
        <a href="/" className="text-red-600 underline">See More</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {videos.map((video, idx) => (
          <div key={idx} className="group overflow-hidden">
            <div className="relative w-full pb-2/3">
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="invisible group-hover:visible absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-all">
                <PlayIcon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h3 className="mt-2 text-gray-500">{video.title}</h3>
            <p className="mt-1 text-gray-400">{video.author}</p>
            <p className="mt-1 text-gray-400">{video.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallVideoCarousel;