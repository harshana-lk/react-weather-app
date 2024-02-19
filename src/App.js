import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Header from "./components/Header";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureDetails from "./components/TemperatureDetails";

function App() {
  return (
    <div className="mx-auto max-w-screen-full py-3 px-28 bg-black text-white">
      <Header />
      <TemperatureDetails />
    </div>
  );
}

export default App;
