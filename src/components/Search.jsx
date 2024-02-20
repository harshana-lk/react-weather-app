import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCities } from "../services/weatherService";

export default function Search({ onSearchChange }) {
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
    <div className=" h-[3.25rem] rounded-[26px] bg-[#1d1c1f] shadow items-center m-3 w-[600px] flex z-50 md:w-96 sm:w-">
      <IoSearch
        color="white"
        size={27}
        className="flex items-center ml-4 cursor-pointer"
      />

      <AsyncPaginate
        className=" flex-1 p-5 z-50"
        placeholder="Search"
        debounceTimeout={600}
        styles={customStyles}
        value={searchValue}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
      />
    </div>
  );
}
