import { useEffect, useState } from "react";
import "./App.css";
import Forcast from "./components/Forcast";
import Header from "./components/Header";
import TodayWeather from "./components/TodayWeather";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  // const [query, setQuery] = useState({ q: "colombo" });
  // const [units, setUnits] = useState("metric");
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     await getFormattedWeatherData({ ...query, units }).then((data) => {
  //       setWeather(data);
  //     });
  //   };
  //   fetchWeather();
  // }, [query, units]);

  return (
    <div className="mx-auto w-auto h-screen py-3 px-12 bg-main-background text-white md:h-auto sm:h-auto">
      <Header />
      <TodayWeather />
      {/* <Forcast /> */}
    </div>
  );
}

export default App;
