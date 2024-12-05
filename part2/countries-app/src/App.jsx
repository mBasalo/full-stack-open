import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weather, setWeather] = useState(null); // For storing weather data

  const API_KEY = "60a77904bedfb074b9a0b3767b4b213e"; // Replace with your actual API key

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setSelectedCountry(null);
  };

  useEffect(() => {
    if (query) {
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((response) => {
          const filteredCountries = response.data.filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
          );
          setCountries(filteredCountries);
        });
    } else {
      setCountries([]);
    }
  }, [query]);

  // Fetch weather when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      const capital = selectedCountry.capital[0];
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`;
  
      const fetchWeather = async () => {
        try {
          const response = await axios.get(url);
          setWeather(response.data);
        } catch (error) {
          console.error("Failed to fetch weather data:", error.message);
          setWeather(null); // Handle error gracefully
        }
      };
  
      fetchWeather();
    }
  }, [selectedCountry]);
  

  const renderCountries = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1) {
      return (
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => setSelectedCountry(country)}>Show</button>
            </li>
          ))}
        </ul>
      );
    } else if (countries.length === 1) {
      setSelectedCountry(countries[0]);
    }
    return null;
  };

  const renderCountryDetails = () => {
    if (!selectedCountry) return null;

    const { name, capital, area, flags, languages } = selectedCountry;

    return (
      <div>
        <h2>{name.common}</h2>
        <p>Capital: {capital}</p>
        <p>Area: {area} km²</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(languages).map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
        <img src={flags.svg} alt={`Flag of ${name.common}`} width="200px" />

        {renderWeather()}
      </div>
    );
  };

  const renderWeather = () => {
    if (!weather) return <p>Loading weather...</p>;

    const { main, weather: weatherDetails, wind } = weather;

    return (
      <div>
        <h3>Weather in {selectedCountry.capital[0]}</h3>
        <p>Temperature: {main.temp}°C</p>
        <p>Wind: {wind.speed} m/s</p>
        <p>Weather: {weatherDetails[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
          alt={weatherDetails[0].description}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Country Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search for a country"
      />
      {renderCountries()}
      {renderCountryDetails()}
    </div>
  );
};

export default App;
