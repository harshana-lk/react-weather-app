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
  UilRaindropsAlt,
  UilTornado,
  UilEye,
  UilAngleDown,
} from "@iconscout/react-unicons";
import TimeAndLocation from "./TimeAndLocation";

const TemperatureDetails = () => {
  return (
    <div>
      <div className="flex flex-row   gap-10" style={{ marginTop: "5rem" }}>
        <div
          className="bg-secondary-background rounded-3xl px-11 py-5 flex flex-col items-satrt justify-start h-80 "
          // style={{ paddingBottom: 20 }}
        >
          <div className="flex text-xl text-red-400">
            <p className="font-medium">Now</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 text-white py-3 px-5">
            <div className="flex items-center justify-center flex-row gap-5">
              <p className="text-7xl">
                34°
                <sup className="text-5xl">C</sup>
              </p>

              <img src={WeatherIcon} alt="weather icon" className="w-20" />
            </div>
          </div>
          <div>
            <p>Broken Clouds</p>
          </div>

          <hr className="mt-5" />
          <div>
            <TimeAndLocation />
          </div>
        </div>
        <div
          className="bg-secondary-background rounded-3xl px-6 flex flex-col flex-start py-5 "
          // style={{ width: "80%" }}
        >
          <p className="text-xl text-red-400">Todays Highlight</p>
          <div className="flex flex-row gap-5 mt-4 justify-between">
            <div className="bg-sub-background rounded-3xl px-6 py-5 ">
              <div className="flex items-center justify-between">
                <p>Air Quality</p>
                <button className="text-red-400">Poor</button>
              </div>
              <div className="flex flex-row gap-5 mt-10">
                <UilWind size={75} />
                <div className="flex flex-col items-center justify-center">
                  <p>PM2.5</p>
                  <p className="text-4xl">53.5</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>PM2.5</p>
                  <p className="text-4xl">53.5</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>PM2.5</p>
                  <p className="text-4xl">53.5</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p>PM2.5</p>
                  <p className="text-4xl">53.5</p>
                </div>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5">
              <p>Sunrise & Sunset</p>
              <div className="flex flex-row gap-10 mt-5">
                <div className="flex flex-col ">
                  <UilSun size={55} />
                  <p className="mt-2">Sunrise</p>
                  <p className="text-4xl mt-2">6:26 AM</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                  <UilSunset size={55} className="ml-10" />
                  <div className="flex flex-col gap-2">
                    <p>Sunset</p>
                    <p className="text-4xl">6:26 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 gap-4">
            <div className="bg-sub-background rounded-3xl px-6 py-5">
              <p>Humadity</p>
              <div className="flex flex-row items-center justify-center gap-16 mt-5">
                <UilRaindropsAlt size={55} />
                <p className="text-4xl">65%</p>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5">
              <p>Pressure</p>
              <div className="flex flex-row items-center justify-center  mt-5">
                <UilTornado size={55} />
                <p className="text-4xl ml-16">1013</p>
                <p className="text-2xl">hPa</p>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5">
              <p>Visibility</p>
              <div className="flex flex-row items-center justify-center gap-16 mt-5">
                <UilEye size={55} />
                <p className="text-4xl">65%</p>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5">
              <p>Feels Like</p>
              <div className="flex flex-row items-center justify-center gap-16 mt-5">
                <UilTemperature size={55} />
                <p className="text-4xl">65%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="flex gap-2 items-center mt-5 text-red-400">
          <UilAngleDown />
          <p>Load More</p>
        </button>
      </div>
    </div>
  );
};

export default TemperatureDetails;
