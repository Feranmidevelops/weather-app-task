import "../styles/components/Main.scss";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { getDailyForecast } from "../api";



function Main() {
  return (
    <div className="Main">
        <CurrentWeather />
        <Forecast 
        type="daily" 
        title="7 DAYS FORECAST"  
        data={getDailyForecast()} />
    </div>
  );
}

export default Main;