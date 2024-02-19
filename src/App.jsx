import "./App.css";
import Forcast from "./components/Forcast";

import Header from "./components/Header";

import TodayWeather from "./components/TodayWeather";
import getWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "London" });
    console.log(data);
  };
  fetchWeather();

  return (
    <div className="mx-auto w-screen h-screen py-3 px-12 bg-main-background text-white ">
      {/* <Header />
      <TodayWeather /> */}
      <Forcast title={"Hourly forecast"} />
      <Forcast title={"Daily forecast"} />
    </div>
  );
}

export default App;
