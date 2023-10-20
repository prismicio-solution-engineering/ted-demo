import React from 'react';
import Image from 'next/image';

const FeaturedBanner = () => {
    return (
      <section className="flex flex-wrap-reverse md:flex-no-wrap bg-white text-center py-12 px-4 md:px-40">
        <div className="flex-1 text-left pb-8 md:pb-0">
          <h6 className="uppercase tracking-wider font-bold text-eb0028">Feature</h6>
          <h1 className="text-2xl md:text-4xl font-bold text-555555 my-2">Expert talks on education, business & tech </h1>
          <p className="text-sm md:text-base text-555555 mb-2">Listen to our latest talk about the importance of creativity in education.</p>
          <button className="text-white bg-[#eb0028] hover:bg-black py-3 px-6 text-sm md:text-base font-bold tracking-wider uppercase shadow-lg">Watch Now</button>
        </div>
        <div className="flex-1 relative h-48 md:h-auto md:min-h-full">
          <Image
            src="https://source.unsplash.com/random" 
            alt="featured-talk"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
        </div>
      </section>
    );
}

export default FeaturedBanner;