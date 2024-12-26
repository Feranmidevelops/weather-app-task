import CurrentWeather from "./current-weather.json";
import dailyForecast from "./daily-forecast.json" 



export function getCurrentWeather() {
  return CurrentWeather.current;
}

export function getDailyForecast (){
  return dailyForecast.daily.data
}

