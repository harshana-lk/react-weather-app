const API_KEY = "82fe4af93bcd8e8d0c5bb516aa111697";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  returnfetch(url).then((res) => res.json().then((data) => data));
};

export default getWeatherData;
