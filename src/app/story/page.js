"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import StoryData from "../../../data/StoryData";

export default function Story() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const treasureMapGradient = {
    background: "linear-gradient(to right, #f5f0e1, #e8d1b0, #f5f0e1)",
  };

  return (
    <div className="py-8 pt-24" style={treasureMapGradient}>
      <h1
        className="text-4xl font-bold text-center mb-4"
        style={{ color: "#8b4513" }}
        data-aos="fade-in"
      >
        Our Journey
      </h1>
      <p
        className="text-xl text-center mb-12" // Subtitle styling
        style={{ color: "#a35c29" }} // Matching color for consistency
        data-aos="fade-up" // AOS animation for the subtitle
      >
        Capturing Our Unforgettable Moments And How Far We&apos;ve Come
      </p>
      <div className="max-w-4xl mx-auto p-4 rounded-xl">
        {StoryData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } md:items-center gap-8 mb-10`}
            data-aos="fade-up"
          >
            <div className="md:w-1/2">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-xl shadow-xl w-full h-auto object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 space-y-3">
              <p className="text-xl font-semibold text-gray-800 capitalize">
                {item.title}
              </p>
              <p className="text-md text-gray-500">{item.date}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
