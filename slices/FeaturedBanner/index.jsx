import React from 'react';
import { PrismicNextImage } from '@prismicio/next';

const FeaturedBanner = ({ slice }) => {
    return (
      <section className="flex flex-wrap-reverse md:flex-no-wrap bg-white text-center py-12 px-4 md:px-40">
        <div className="flex-1 text-left pb-8 md:pb-0">
          <h6 className="uppercase tracking-wider font-bold text-eb0028">{slice.primary.feature_title}</h6>
          <h1 className="text-2xl md:text-4xl font-bold text-555555 my-2">{slice.primary.main_title}</h1>
          <p className="text-sm md:text-base text-555555 mb-2">{slice.primary.description}</p>
          <button className="text-white bg-[#eb0028] hover:bg-black py-3 px-6 text-sm md:text-base font-bold tracking-wider uppercase shadow-lg">{slice.primary.button_text}</button>
        </div>
        <div className="flex-1 relative h-auto md:min-h-full">
          <PrismicNextImage
            field={slice.primary.image}
            fill={true}
            className="absolute z-0 object-cover"
            alt="featured-talk"
          />
        </div>
      </section>
    );
}

export default FeaturedBanner;
