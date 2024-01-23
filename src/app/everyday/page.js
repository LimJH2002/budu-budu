// EverydayMoments.js
"use client";
// import Masonry from "@mui/lab/Masonry";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

const EverydayMoments = () => {
  const generateNumbersArray = () => {
    const numbers = [];
    for (let i = 0; i < 375; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const [images, setImages] = useState(shuffleArray(generateNumbersArray()));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Define breakpoints for the masonry grid columns
  const breakpointColumnsObj = {
    default: 10,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="bg-slate-300 xl:px-10 px-4 min-h-screen">
      <h1
        className="text-4xl font-bold text-center pt-36 text-slate-500 mb-4"
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
        {/* <Masonry columns={10} spacing={2}> */}
        {images.map((image, index) => (
          <div key={index} data-aos="fade-up">
            <img
              src={`./everyday/Pic${image}.jpg`}
              alt={`Everyday Moment ${image}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="transition duration-300 ease-in-out transform hover:scale-110 rounded-xl"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default EverydayMoments;
