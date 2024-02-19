import React from "react";
import { UilMapMarker } from "@iconscout/react-unicons";

const TimeAndLocation = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="flex items-center justify-center ">
        <p className="text-white text-xl font-extralight">
          Friday , 18 May 2024 | Local Time: 11:43 AM
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <UilMapMarker size={35} className="mr-1" />
        <p className="text-white text-3xl font-medium">Colombo , Sri-Lanka</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
