import React from "react";
import { UilMapMarker, UilCalender } from "@iconscout/react-unicons";

const TimeAndLocation = () => {
  return (
    <div className="flex flex-col items-start justify-center mt-5">
      <div className="flex items-center justify-center ">
        <UilCalender size={25} className="mr-2" />
        <p className="text-slate-400 font-medium ">Friday , 18 May 2024</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <UilMapMarker size={25} className="mr-2" />
        <p className="text-slate-400 font-medium">Colombo , Sri-Lanka</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
