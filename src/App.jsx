import "./App.css";
import Forcast from "./components/Forcast";
import Header from "./components/Header";
import TodayWeather from "./components/TodayWeather";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData("weather", { q: "London" });
    console.log(data);
  };
  fetchWeather();

  return (
    <div className="mx-auto w-auto h-screen py-3 px-12 bg-main-background text-white md:h-auto sm:h-auto">
      <Header />
      <TodayWeather />
      {/* <Forcast /> */}
    </div>
  );
}

export default App;
