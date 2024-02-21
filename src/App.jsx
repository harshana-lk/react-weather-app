import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TodayWeather from "./components/TodayWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./services/weatherService";
import Forcast from "./components/Forcast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  console.log(currentWeather);
  console.log(forecast);

  const searchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (Response) => {
        const weatherResponse = await Response[0].json();
        const forcastResponse = await Response[1].json();

        setCurrentWeather({ city: searchData.lable, ...weatherResponse });
        setForecast({ city: searchData.lable, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="mx-auto w-auto h-auto py-3 px-12 bg-main-background text-white md:h-auto sm:h-auto">
      <Header onSearchChange={searchChangeHandler} />
      <TodayWeather data={currentWeather} />
      <Forcast items={forecast} />
    </div>
  );
}

export default App;
