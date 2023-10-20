import React from 'react';
import { ChevronRightIcon, PlayIcon } from '@heroicons/react/solid';

export function VideoCarousel() {
  return (
    <div className="px-10 py-10 bg-white md:px-40">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map(card => (
          <div key={card} className="relative group">
            <div className='relative'>
              <img className="w-full h-56 object-cover" src={"https://source.unsplash.com/random"} alt="Video Screenshot"/>
              <div className="invisible group-hover:visible absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-all">
                <PlayIcon className="h-12 w-12 text-white" />
              </div>            </div>
            <div className="mt-4">
              <h3 className="text-lg font-inter font-semibold text-[#555555] leading-6">Video title {card}</h3>
              <p className="text-[#555555] mt-1">Author {card}</p>
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
  );
}

export default VideoCarousel;