import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Colombo",
    },
    {
      id: 2,
      title: "Panadura",
    },
    {
      id: 3,
      title: "Galle",
    },
    {
      id: 4,
      title: "Badulla",
    },
    {
      id: 5,
      title: "Kandy",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          className="text-red-400 text-lg font-medium"
          key={index}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
