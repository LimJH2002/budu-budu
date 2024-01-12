// pages/story.js
export default function Story() {
  const timelineData = [
    {
      date: "Date 1",
      title: "Title 1",
      description: "Description 1",
      imageUrl: "./timeline/1.jpg",
    },
    {
      date: "Date 2",
      title: "Title 2",
      description: "Description 2",
      imageUrl: "./timeline/2.jpg",
    },
    // Add more entries as needed
  ];

  return (
    <div className="bg-white py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Our Journey
      </h1>
      <div className="max-w-4xl mx-auto p-4">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } md:items-center gap-8 mb-10`}
          >
            <div className="md:w-1/2">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-xl shadow-xl w-full h-auto object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 space-y-3">
              <p className="text-xl font-semibold text-gray-800">
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
