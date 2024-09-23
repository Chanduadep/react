import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Index = () => {
  const [weatherData,setWeatherData]=useState(null);
  const [city,setCity]=useState('');
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    const formattedCity = `${city}, India`;
    
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: 'city', days: '1'},
            headers: {
              'x-rapidapi-key': '044dcbfe38mshb043cef3582312ap187500jsn488774ec3efc',
              'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
          };
          
          try {
            setLoading(true);
            setError(null);
              const response = await axios.request(options);
              console.log(response.data);
              setWeatherData(response.data);
              setLoading(false);

          } catch (error) {
              console.error(error);
              setError("Failed to fetch the weather data...");
              setLoading(false);
          }
    };
    const handleCity=(e)=>{
      setCity(e.target.value);
    };
    useEffect(()=>{
        getWeather()
    },[])
    const handleWeather=()=>{
      getWeather();
    };  
  return (
    <div>
      <input
      type='text' 
      placeholder='Enter City Name...'
      value={city}
      onChange={handleCity} />
      <button onClick={handleWeather}>Check</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div>
          <h2>Weather For {weatherData.location.name},{weatherData.location.region},{weatherData.location.country}</h2>
          <p>Current Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Latitude: {weatherData.location.lat}</p>
          <p>Longitude: {weatherData.location.lon}</p>
          <p>LocalTime: {weatherData.location.localtime}</p>
          <p>tzId: {weatherData.location.tz_id}</p>
          <p>LocalTime Epoch: {weatherData.location.localtime_epoch}</p>


          <h3>Forecast:</h3>
          {weatherData.forecast.forecastday.map((day) => (
            <div key={day.date}>
              <p>Date: {day.date}</p>
              <p>Max Temp: {day.day.maxtemp_c}°C</p>
              <p>Min Temp: {day.day.mintemp_c}°C</p>
              <p>Condition: {day.day.condition.text}</p>
              <h5>Hourly Forecast:</h5>
              {day.hour.map((hourData, index) => (
                <div key={index}>
                  <p>Time: {hourData.time}</p>
                  <p>Temp: {hourData.temp_c}°C</p>
                  <p>Condition: {hourData.condition.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        
      )}
    </div>
  );
};

export default Index;