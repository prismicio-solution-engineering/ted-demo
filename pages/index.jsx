import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

import { createClient } from "./../prismicio.ts";

export default function Home({ page }) {
  return (
    <>
      <Header />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
};


export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home");

  return {
    props: { page },
    revalidate: 10
  };
}

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-4 font-inter">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <img width="90" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TED_three_letter_logo.svg/2560px-TED_three_letter_logo.svg.png" alt="Company Logo" className="object-contain" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/services" className="text-red-600 font-bold">Services</a>
          <a href="/destinations" className="text-red-600 font-bold">Destinations</a>
          <a href="/contact" className="text-red-600 font-bold">Contact</a>
          {/* ... other navigation items */}
        </nav>
        <div className="md:hidden flex items-center">
          <button className="text-red-600">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M4 6h16M4 12h16m-16 6h16" fill="none" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};