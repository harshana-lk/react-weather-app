import React from "react";
import { iconUrlFromCode } from "../services/weatherServices";
import LineChart from "./LineChart";
const Forecast = ({ title, items }) => {
  console.log("this is item passed on ", items);
  return (
    <div className="w-3/4 mx-auto bg-[#1d1c1f] p-10 m-10 rounded-3xl">
      <div className="flex items-center justify-center ">
        <p className="text-red-400 font-medium uppercase text-xl">{title}</p>
      </div>
      <hr className="m-5" />
      <div className="flex items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-md">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt="icon"
              className="w-22 my-1"
            />
            <p className="font-medium">{`${item?.temp}°`}</p>
          </div>
        ))}
      </div>
      <LineChart />
    </div>
  );
};

export default Forecast;
