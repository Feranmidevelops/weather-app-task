import "../styles/components/Main.scss";
import Forecast from "./Forecast";
import CurrrentWeather from "./CurrentWeather";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";
import Loader from "./Loader";

function Main() {
  const { loading, CurrentWeather, DailyForecast } = useContext(WeatherContext);
  console.log("Main", loading, CurrentWeather, DailyForecast);
  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrrentWeather data={CurrentWeather} />
          <Forecast type="daily" title="DAILY FORECAST" data={DailyForecast} />
        </>
      )}
    </div>
  );
}

export default Main;
