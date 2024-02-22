import "./App.css";
import TopButton from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import Forecast from "./components/Forecast";
// import getWeatherData from './services/weatherServices';
import getFormattedWeatherData from "./services/weatherServices";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "tokyo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // useEffect: every time  the query(location) or units changes  the API call would be made to fetch new data. !
  useEffect(() => {
    const fetchWeather = async () => {
      // const data = await getFormattedWeatherData({ q: "london" });
      // console.log(data);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log("you are seeing updated weather", weather);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div
      className={`mx-auto w-auto h-auto py-3 px-12 bg-[#131214] shadow-xl shadow-gray-400 md:h-auto sm:h-auto`}
    >
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {/* && if true then render  */}
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast title="Hourly forecast" items={weather.hourly} />
          <Forecast title="Daily forecast" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
