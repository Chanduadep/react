// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Weather = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const getWeather = async () => {
//     const options = {
//       method: "GET",
//       url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
//       params: { q: "Mumbai", days: "3" },
//       headers: {
//         "x-rapidapi-key": "f48114461fmsh1c02aba6eb38357p1aa904jsn0ddbc6a0217d",
//         "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
//       },
//     };

//     try {
//       setLoading(true);
//       const response = await axios.request(options);
//       setWeatherData(response.data);
//       setLoading(false);
//     } catch (error) {
//       setError("Failed to fetch weather data");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getWeather(city);
//   }, [city]);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };
//   return (
//     <div>
//       <h2>Weather Forcast</h2>
//       <input
//         type="text"
//         value={city}
//         onChange={handleCityChange}
//         placeholder="Enter City..."
//       />
//       <button onClick={() => getWeather(city)}>Get Forecast</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : weatherData ? (
//         <div>
//           <h3>
//             {weatherData.name}, {weatherData.sys.country}
//           </h3>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default Weather;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: 'London',
        days: '3'
      },
      headers: {
        'x-rapidapi-key': '044dcbfe38mshb043cef3582312ap187500jsn488774ec3efc',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    try {
      setLoading(true);

      const response = await axios.request(options);
      setWeatherData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch weather data");
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchWeatherData(city);
  // }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h2>Weather Forecast</h2>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city"
      />
      <button onClick={() => fetchWeatherData(city)}>Get Weather</button>
      {weatherData ? (
        <div>
          <h3>{weatherData.location.name}</h3>
          <h3>{weatherData.location.country}</h3>
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Humidity: {weatherData.current.humidity} </p>

          <img src={weatherData.current.condition.icon} alt="" />
          {weatherData.forecast.forecastday[0].hour.map((forecastday) => (
            <div>
              <h1>Forecastday Time {forecastday.time.slice(11)}</h1>
              <h1>Forecastday Temp {forecastday.temp_c}</h1>
            </div>
            
          ))}
          {/* <p>Weather: {weatherData.weather[0].description}</p> 
           <p>Humidity: {weatherData.main.humidity}%</p> */}
        </div>
      ) : (
        <div>Data not found!!</div>
      )}
    </div>
  );
};

export default Weather;