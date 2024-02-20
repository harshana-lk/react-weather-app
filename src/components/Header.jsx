import React from "react";
import Logo from "../assets/logo.png";
import { UilHunting } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex flex-column justify-around items-center my-6 sm:flex sm:flex-col md:flex md:flex-col ">
      <div>
        <a href="#">
          <img
            src={Logo}
            alt="logo"
            width={240}
            height={58}
            // className="lg:w-10"
          />
        </a>
      </div>
      <div className="flex items-center justify-center gap-20 md:mt-10 sm:mt-6">
        <input
          className="text-md font-semibold p-2 px-5 py-4  shadow-xl focus:outline-none capitalize placeholder:lowercase bg-[#1d1c1f] text-white  rounded-full w-[600px] md:w-96 sm:w-64"
          placeholder="search for city"
          type="text"
          // style={{ width: "600px" }}
        />
        {/* <UilSearch /> */}
        <div>
          <button className="flex gap-2 items-center text-red-400 text-lg font-medium border-2 border-red-400 p-2 rounded-full px-3 transition ease-out hover:scale-105 md:text-xs">
            <UilHunting />
            {/* <p>Current Weather</p> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
