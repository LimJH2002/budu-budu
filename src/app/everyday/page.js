// EverydayMoments.js
"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const EverydayMoments = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetch the image data from the server component
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        const formattedData = data.map((image) => `${image}`);
        setImages(formattedData);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  // Define breakpoints for the masonry grid columns
  const breakpointColumnsObj = {
    default: 8,
    1100: 3,
    700: 2,
    500: 1,
  };

  {
    console.log("fdfdfdfd", images);
  }

  return (
    <div className="bg-slate-300 xl:px-10 px-4 min-h-screen">
      <h1
        className="text-4xl font-bold text-center pt-24 text-slate-500 mb-4"
        data-aos="fade-in"
      >
        Everyday Moments
      </h1>
      <p className="text-xl text-center mb-8 text-slate-400" data-aos="fade-up">
        Capturing the little joys and simple pleasures of daily life
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} data-aos="fade-up">
            <img
              src={image}
              alt={`Everyday Moment ${index}`}
              width="500"
              height="300"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="transition duration-300 ease-in-out transform hover:scale-105 rounded-xl"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default EverydayMoments;
