import React, { useContext } from "react";
import { FaCloud, FaSearchLocation, FaRegSun, FaRegMoon } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import Clock from "./Clock";
import { searchContext } from "../context/Context";

const WeatherTody = () => {
  const value = useContext(searchContext);

  let submit = (event) => {
    event.preventDefault();
    value.func();
    value.setSearch("");
  };
  let change = (event) => {
    let res = event.target.value;
    value.setSearch(res);
  };

  let currTime = () => {
    if (value.weatherData) {
      let time = new Date().getTime();
      const sunrise = value.weatherData.sys.sunrise*1000;
      const sunset = value.weatherData.sys.sunset*1000;
      if (time > sunrise && time < sunset) {
        return <FaRegSun />;
      } else {
        return <FaRegMoon />;
      }
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="centerParentBox">
            <div className="leftSide">
              <div className="bottomDetails">
                <Clock />
                <div className="tempDetail">
                  {value.weatherData ? (
                    <span>
                      {value.weatherData.main.temp}
                      <sup>0</sup>C
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="weatherIcon">
                <span>
               
                 {currTime()}
                </span>
                {value.weatherData ? (
                  <span>{value.weatherData.weather[0].main}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="searchBtn">
                <form onSubmit={submit}>
                  <input
                    type="search"
                    onChange={change}
                    value={value.search}
                    placeholder="Location"
                  />
                  <button>
                    <FaSearchLocation />
                  </button>
                </form>
              </div>

              <div className="placeName">
                <span>
                  <MdOutlinePlace />{" "}
                  {value.weatherData ? (
                    <span>{`${value.weatherData.name},${value.weatherData.sys.country}`}</span>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <div className="weatherDetails">
                <div className="line temp">
                  <span>Temp</span>
                  {value.weatherData ? (
                    <span>
                      {value.weatherData.main.temp}
                      <sup>0</sup>C
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="line humidity">
                  <span>Humidity</span>
                  {value.weatherData ? (
                    <span>{value.weatherData.main.humidity}%</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="line visibility">
                  <span>Visibility</span>
                  {value.weatherData ? (
                    <span>{value.weatherData.visibility}m</span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="line windSpeed">
                  <span>Wind Speed</span>
                  {value.weatherData ? (
                    <span>{value.weatherData.wind.speed}Kph</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherTody;
