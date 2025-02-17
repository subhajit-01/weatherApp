import React, { useEffect, useState } from "react";
import "./components/WeatherTody.css";
import "./components/Responsive.css";
import Axios from "axios";
import WeatherTody from "./components/WeatherTody";
import { searchContext } from "./context/Context";

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [search, setSearch] = useState("");

  let func = async () => {
    let place = search === "" ? "kolkata" : search;
    try {
      let response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=d7f7b5ed6aa7fabb6dfd003aab47707f&units=metric`
      );
      setWeatherData(response.data);
      console.log(weatherData);
      
    } catch (error) {
      alert("city is not available....");
    }
  };
  useEffect(() => {
    func();
  }, []);

  return (
    <>
      <searchContext.Provider value={{ weatherData, search, setSearch, func }}>
        <WeatherTody />
      </searchContext.Provider>
    </>
  );
};

export default App;
