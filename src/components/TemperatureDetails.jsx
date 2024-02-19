import React from "react";
import WeatherIcon from "../assets/weather-icons/09n.png";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureDetails = () => {
  return (
    <div className="flex flex-row   gap-20" style={{ marginTop: "1rem" }}>
      <div
        className="bg-[#1d1c1f] rounded-3xl px-6 flex flex-col items-satrt justify-start"
        style={{ paddingBottom: 20 }}
      >
        <div className="flex py-3 text-xl text-red-400">
          <p className="font-medium">Now</p>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 text-white py-3 px-5">
          <div className="flex items-center justify-center flex-row gap-5">
            <p className="text-8xl">
              34°
              <sup className="text-5xl">C</sup>
            </p>

            <img src={WeatherIcon} alt="weather icon" className="w-20" />
          </div>
        </div>
        <div>
          <p>Broken Clouds</p>
        </div>

        <hr className="mt-3" />
      </div>
      <div
        className="bg-[#1d1c1f] rounded-3xl px-6 flex flex-col flex-start py-3 "
        style={{ width: "80%" }}
      >
        <p className="text-xl text-red-400">Todays Highlight</p>
      </div>
    </div>
  );
};

export default TemperatureDetails;
