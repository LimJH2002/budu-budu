"use client";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "tailwindcss/tailwind.css";
import anniversaries from "../../../data/AnniversaryData";

export default function Anniversary() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 py-8 pt-36 min-h-screen">
      <h1 className="text-6xl font-extrabold text-center text-blue-500 mb-6">
        Our Anniversaries
      </h1>
      <p className="text-2xl text-center text-blue-400 mb-12">
        Milestones of our journey together
      </p>
      {anniversaries.map((anniversary, index) => (
        <div
          key={index}
          className="bg-white/90 shadow-xl rounded-3xl overflow-hidden mb-12 mx-auto max-w-5xl p-6 transition duration-500 hover:shadow-2xl"
        >
          <h2 className="text-4xl font-semibold text-blue-600 mb-3">
            {anniversary.year}
          </h2>
          <p className="text-lg italic text-blue-500 mb-6">
            {anniversary.location}
          </p>
          <div className="carousel rounded-lg">
            {anniversary.images.map((image, idx) => (
              <div key={idx} className="carousel-item">
                <img
                  src={image}
                  alt={`Anniversary ${anniversary.year}`}
                  width="300"
                  height="500"
                  className="mx-[1px] rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-gray-700 text-xl mt-6">
            <p>{anniversary.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
