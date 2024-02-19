import React from "react";
import Logo from "../assets/logo.png";
import { UilSearch, UilMapMarker, UilHunting } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex flex-column justify-between items-center my-6">
      <div>
        <a href="#">
          <img src={Logo} alt="logo" width={240} height={58} />
        </a>
      </div>
      <div>
        <input
          className="text-md font-semibold p-2 px-5 w-96 shadow-xl focus:outline-none capitalize placeholder:lowercase bg-[#1d1c1f] text-white  rounded-full"
          placeholder="search for city"
          type="text"
        >
          {/* <UilSearch /> */}
        </input>
      </div>

      <div>
        <button className="flex gap-2 items-center text-red-400 text-lg font-medium border-2 border-red-400 p-2 rounded-full px-3 transition ease-out hover:scale-105">
          <UilHunting />
          <span>Current Location</span>
        </button>
      </div>
    </div>
  );
};

export default Inputs;
