// EverydayMoments.js
"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import EverydayMomentsData from "/data/EverydayData"; // Import your image data
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EverydayMoments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      // You can add other AOS settings here
    });
  }, []);

  // Define breakpoints for the masonry grid columns
  const breakpointColumnsObj = {
    default: 10, // when the width is >= 1200px, 4 columns
    1100: 3, // when the width is >= 1100px, 3 columns
    700: 2, // when the width is >= 700px, 2 columns
    500: 1, // when the width is >= 500px, 1 column
  };

  return (
    <div className="bg-slate-300 xl:px-10 px-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center pt-24 py-8 text-slate-500">
        Everyday Moments
      </h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {EverydayMomentsData.map((image, index) => (
          <div key={index} data-aos="fade-up">
            <Image
              src={image}
              alt={`Everyday Moment ${index}`}
              width={500} // Specify the width of the image
              height={300} // Specify the height of the image
              layout="responsive" // This will allow the image to scale nicely
              objectFit="cover" // This will ensure the image covers the area, like background-size: cover
              className="transition duration-300 ease-in-out transform hover:scale-105 rounded-xl"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default EverydayMoments;
