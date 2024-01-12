"use client";
import "leaflet/dist/leaflet.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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
    <div className="bg-gray-50 py-8 pt-24">
      <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-16">
        Our Anniversaries
      </h1>
      {anniversaries.map((anniversary, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-10 mx-auto max-w-4xl"
        >
          <h2 className="text-3xl font-semibold text-gray-800 px-6 pt-6">
            {anniversary.year}
          </h2>
          <p className="text-md italic text-gray-600 px-6 mb-4">
            {anniversary.date}
          </p>
          <Slider {...settings}>
            {anniversary.images.map((image, idx) => (
              <div key={idx} className="slick-image">
                <img
                  src={image}
                  alt={`Anniversary ${anniversary.year}`}
                  className="mx-auto"
                  style={{ maxHeight: "400px", width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </Slider>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-lg">{anniversary.description}</p>
          </div>
          {/* {anniversary.locations && (
            <MapContainer
              center={anniversary.locations[0]}
              zoom={13}
              scrollWheelZoom={false}
              className="h-64 border-2 border-gray-200 shadow-inner"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {anniversary.locations.map((loc, idx) => (
                <Marker key={idx} position={loc}>
                  <Popup>A lovely place we visited.</Popup>
                </Marker>
              ))}
            </MapContainer>
          )} */}
        </div>
      ))}
    </div>
  );
}
