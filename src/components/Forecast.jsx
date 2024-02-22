import { iconUrlFromCode } from "../services/weatherServices";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Forecast = ({ title, items }) => {
  const chartRef = useRef(null);
  const chartInstarnce = useRef(null);
  useEffect(() => {
    if (chartInstarnce.current) {
      chartInstarnce.current.destroy();
    }
    const mychartRef = chartRef.current.getContext("2d");

    chartInstarnce.current = new Chart(mychartRef, {
      type: "line",
      data: {
        labels: items.map((item) => item?.title),
        datasets: [
          {
            label: title,
            data: items.map((item) => item?.temp),
            fill: false,
            borderColor: "rgb(248, 113, 113)",
            borderWidth: 2,
          },
        ],
      },
      width: "100%",
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    return () => {
      if (chartInstarnce.current) {
        chartInstarnce.current.destroy();
      }
    };
  }, []);
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
      <div className="h-80 w-auto mt-6">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default Forecast;
