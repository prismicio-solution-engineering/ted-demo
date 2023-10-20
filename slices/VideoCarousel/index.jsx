import React from 'react';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/solid';
import { PrismicNextImage } from '@prismicio/next';

const VideoCarousel = ({ slice }) => {
  return (
    slice.variation === 'default' ? (
      <div className="px-10 py-10 bg-white md:px-40">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {slice.items.map((video, idx) => (
            <div key={idx} className="relative group">
              <div className='relative'>
                <PrismicNextImage
                  field={video.video_image}
                  className="w-full h-56 object-cover"
                  alt={video.video_title}
                />
                <div className="invisible group-hover:visible absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-all">
                  <PlayIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-inter font-semibold text-[#555555] leading-6">{video.video_title}</h3>
                <p className="text-[#555555] mt-1">{video.video_author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-start">
          <button className="flex items-center text-lg font-semibold text-[#eb0028]">
            More Videos
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    ) : (
      <div className="p-10 md:px-40 bg-white">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-xl font-bold text-gray-500">Small Video Carousel</h2>
          <a href="/" className="text-red-600 underline">See More</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {slice.items.map((video, idx) => (
            <div key={idx} className="group overflow-hidden">
              <div className="relative w-full pb-2/3">
                <PrismicNextImage
                  field={video.video_image}
                  className="w-full h-24 object-cover transform group-hover:scale-105 transition-transform"
                  alt={video.video_title}
                />
                <div className="invisible group-hover:visible absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-all">
                  <PlayIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="mt-2 text-gray-500">{video.video_title}</h3>
              <p className="mt-1 text-gray-400">{video.video_author}</p>
              <p className="mt-1 text-gray-400">{video.video_month}</p>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default VideoCarousel;
