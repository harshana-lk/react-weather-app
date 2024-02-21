import React from "react";
import UiImage from "../assets/weather-icons/01d.png";

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
  UilCalender,
  UilMapMarker,
} from "@iconscout/react-unicons";
import { DateTime } from "luxon";

const TemperatureDetails = ({ data }) => {
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  return (
    <div>
      <div className="flex flex-row gap-10 mt-14 md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
        <div
          className="bg-secondary-background rounded-3xl px-11 py-5 flex flex-col items-satrt justify-start h-80 md:w-[600px] sm:w-[500px] "
          // style={{ paddingBottom: 20 }}
        >
          <div className="flex text-xl text-red-400">
            <p className="font-medium">Now</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 text-white py-3 px-5">
            <div className="flex items-center justify-center flex-row gap-5">
              <span className="text-7xl flex">
                {data === null ? <p>10</p> : Math.round(data.main.temp)}
                <sub className=" text-[6rem]">&deg;</sub>
              </span>

              <img src={UiImage} alt="weather icon" className="w-20" />
            </div>
          </div>
          <div className="text-xl text-slate-400 uppercase">
            <p>
              {data === null ? <p>Clear sky</p> : data.weather[0].description}
            </p>
          </div>

          <hr className="mt-5" />
          <div>
            <div className="flex flex-col items-start justify-center mt-5">
              <div className="flex items-center justify-center ">
                <UilCalender size={25} className="mr-2" />
                <p className="text-slate-400 font-medium ">
                  {" "}
                  {data === null ? (
                    <p>10</p>
                  ) : (
                    formatToLocalTime(
                      data.dt,
                      data.timezone,
                      "cccc, dd LLL yyyy"
                    )
                  )}
                </p>
              </div>
              <div className="flex items-center justify-center my-3">
                <UilMapMarker size={25} className="mr-2" />
                <p className="text-slate-400 font-medium flex">
                  {data === null ? <p>Colombo</p> : data.name} ,{" "}
                  {data === null ? <p>LK</p> : data.sys.country}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-secondary-background rounded-3xl overflow-x-auto px-6 flex flex-col flex-start py-5 md:flex md:flex-col md:items-center md:w-[600px] sm:flex sm:flex-col sm:items-center sm:w-[500px] "
          // style={{ width: "80%" }}
        >
          <p className="text-xl text-red-400">Todays Highlight</p>
          <div className="flex flex-row gap-5 mt-4 justify-between md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
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
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5">
              <p>Sunrise & Sunset</p>
              <div className="flex flex-row gap-10 mt-5">
                <div className="flex flex-col items-center justify-center ">
                  <UilSun size={55} />
                  <p className="mt-2">Sunrise</p>

                  <span className="text-3xl mt-2 md:text-xl sm:text-xl">
                    {data === null ? (
                      <p>6:26 PM</p>
                    ) : (
                      formatToLocalTime(
                        data.sys.sunset,
                        data.timezone,
                        "hh:mm a"
                      )
                    )}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-5">
                  <UilSunset size={55} className="ml-10" />
                  <div className="flex flex-col gap-2">
                    <p>Sunset</p>
                    <span className="text-3xl mt-2 md:text-xl sm:text-xl">
                      {data === null ? (
                        <p>6:26 AM</p>
                      ) : (
                        formatToLocalTime(
                          data.sys.sunrise,
                          data.timezone,
                          "hh:mm a"
                        )
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 gap-4 md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
            <div className="bg-sub-background rounded-3xl px-6 py-5 md:w-[475px] sm:w-[450px]">
              <p>Humadity</p>
              <div className="flex flex-row items-center justify-c gap-16 mt-5 md:justify-between sm:justify-between">
                <UilRaindropsAlt size={55} />
                <span className="text-2xl flex">
                  {data === null ? <p>10</p> : Math.round(data.main.humidity)}%
                </span>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5 md:w-[475px] sm:w-[450px]">
              <p>Pressure</p>
              <div className="flex flex-row items-center justify-center gap-16 mt-5 md:justify-between sm:justify-between">
                <UilTornado size={55} />
                <span className="text-2xl flex">
                  {data === null ? <p>10</p> : Math.round(data.main.pressure)}{" "}
                  hpa
                </span>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5 md:w-[475px] sm:w-[450px]">
              <p>Visibility</p>
              <div className="flex flex-row items-center justify-center gap-16 mt-5 md:justify-between sm:justify-between">
                <UilEye size={55} />
                <span className="text-2xl flex">
                  {data === null ? (
                    <p>10</p>
                  ) : (
                    Math.round(data.visibility / 1000)
                  )}{" "}
                  km
                </span>
              </div>
            </div>
            <div className="bg-sub-background rounded-3xl px-6 py-5 md:w-[475px] sm:w-[450px]">
              <p>Feels Like</p>
              <div className="flex flex-row items-center justify-center gap-16 mt-5 md:justify-between sm:justify-between">
                <UilTemperature size={55} />
                <p className="text-2xl flex">
                  {data === null ? <p>10</p> : Math.round(data.main.temp)}
                  <sup>&deg;</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <button className="flex gap-2 items-center mt-5 text-red-400">
          <UilAngleDown />
          <p>Load More</p>
        </button>
      </div> */}
    </div>
  );
};

export default TemperatureDetails;
