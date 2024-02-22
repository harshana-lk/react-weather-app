import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import Logo from "../assets/logo.png";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    // when input feild are typed it gets auto filled and  city is not empty on submit query would be changed!
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div>
      <hr className="my-10" />
      <div className=" flex flex-row justify-center items-center my-6">
        <div className=" flex flex-row items-center justify-evenly space-x-4 md:flex md:flex-col sm:flex sm:flex-col">
          <div className="flex flex-row justify-center items-center">
            <a href="#" className="mr-10 sm:w-80">
              <img src={Logo} alt="logo" width={560} height={58} />
            </a>
          </div>
          <input
            type="text"
            className=" font-medium p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-full bg-[#1d1c1f] text-white px-5"
            placeholder="  Search Your Location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <BiSearchAlt2
            size={55}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <HiLocationMarker
            size={55}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
          <div className=" flex flex-row w-1/4 items-center justify-center ml-5">
            <button
              name="metric"
              className="text-xl text-white font-light hover:scale-125 transition ease-out"
              onClick={handleUnitsChange}
            >
              °C
            </button>
            <p className="text-xl text-white mx-1">|</p>
            <button
              name="imperial"
              className="text-xl text-white font-light hover:scale-125 transition ease-out"
              onClick={handleUnitsChange}
            >
              °F
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
