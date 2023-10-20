import React from "react";

const TextCentered = ({ slice }) => {
  return (
    <div className="w-full bg-[#ffefa1] px-10 py-16 sm:px-24 md:px-40 lg:px-80">
      <h1 className="text-3xl text-[#555555] font-inter leading-tight mb-6">
        {slice.primary.title}
      </h1>
      <p className="text-lg text-[#555555] font-inter leading-relaxed">
        {slice.primary.paragraph}
      </p>
    </div>
  );
};

export default TextCentered;
