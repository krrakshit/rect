import { useEffect } from "react";
import Card from "./components/card";
import Button from "./components/button";
import Input from "./components/input";
import { useWeather } from "./context/Weather";

import "./App.css";


function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;