import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
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
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Line Chart",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 2,
          },
        ],
      },
    });
    return () => {
      if (chartInstarnce.current) {
        chartInstarnce.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

export default LineChart;
