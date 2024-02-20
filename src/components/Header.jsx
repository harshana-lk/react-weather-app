import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { UilHunting } from "@iconscout/react-unicons";
import { IoSearch } from "react-icons/io5";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../services/weatherService";

const Header = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "26px",
      border: "none",
      boxShadow: state.isFocused ? "none" : null,
      backgroundColor: "#1d1c1f",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1d1c1f" : null,
      //   color: state.isFocused ? "white" : null,
      backgroundColor: "#1d1c1f",
      bordeColor: "#1d1c1f",
      border: "none",
      boxShadow: state.isFocused ? "none" : null,
    }),
  };
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
        <div className=" h-[3.25rem] rounded-[26px] bg-[#1d1c1f] shadow items-center m-3 w-[600px] flex z-50 md:w-96 sm:w-64">
          <IoSearch
            color="white"
            size={27}
            className="flex items-center ml-4 cursor-pointer"
          />

          <AsyncPaginate
            className=" flex-1 p-5 z-50"
            placeholder="Search for location"
            debounceTimeout={600}
            styles={customStyles}
            value={searchValue}
            onChange={onChangeHandler}
            loadOptions={loadOptions}
          />
        </div>
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

export default Header;
