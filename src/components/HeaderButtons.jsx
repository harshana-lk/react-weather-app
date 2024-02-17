import React from "react";

const HeaderButtons = () => {
  const cities = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Tokyo",
    },
    {
      id: 4,
      name: "Toronto",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around ">
      {cities.map((city) => (
        <button key={city.id} className="text-red-400 text-lg font-medium">
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default HeaderButtons;
