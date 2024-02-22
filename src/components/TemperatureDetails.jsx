import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { WiCloudyWindy, WiHumidity } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { FiSunset } from "react-icons/fi";
import { iconUrlFromCode } from "../services/weatherServices";
import { formatToLocalTime } from "../services/weatherServices";
const TemperatureDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div className="mx-auto w-3/4 bg-[#1d1c1f] rounded-3xl px-10 pb-5">
      <div className="flex items-center justify-center py-6 text-4xl text-cyan-300">
        <p>{details} </p>
      </div>

      <div className="flex items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          alt="Weather Icons"
          className="w-36 h-36"
        />
        <p className="text-8xl font-meedum">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2 items-center justify-start">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureLow size={24} className="mr-1" />
            Real Feel
            <span className="font-medium ml-1">
              {`${feels_like.toFixed()}°`}{" "}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiHumidity size={32} className="mr-1" />
            Humidity
            <span className="font-medium ml-1">
              {" "}
              {`${humidity.toFixed()}%`}{" "}
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WiCloudyWindy size={24} className="mr-1" />
            Wind
            <span className="font-medium ml-1">{`${speed}Km/hr`} </span>
          </div>
        </div>
      </div>
      {/* next Paragraph */}
      <div className="flex flex-row items-center justify-center space-x-2 text-white py-3 text-xl">
        <BsSun />
        <p>
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <FiSunset />
        <p>
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowUp />
        <p>
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`} </span>
        </p>
        <p className="font-light">|</p>
        <AiOutlineArrowDown />
        <p>
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureDetails;
