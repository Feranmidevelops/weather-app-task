import WeatherIcon from "./WeatherIcon";




function DailyForecastWidget({ data }) {
  const { 
    day, icon, 
    summary, temperature_max, 
    temperature_min, wind } 
    = data;
  


const now_date = {
  day: new Intl.DateTimeFormat(navigator.language, {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  }).format(new Date()),

};

const weather_date = {
  day: new Intl.DateTimeFormat(navigator.language, {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  }).format(new Date(day)),
  
};
weather_date.day = now_date.day === weather_date.day ? "Today" : weather_date.day; 


  return (
    <div className="widget">
      <div className="day">{weather_date.day}</div>
      <div className="icon-temp">
        <div className="icon">
          <WeatherIcon iconNumber={icon} summary={summary} />
        </div>
        <div className="temperature">
          <div className="max"> {Math.round(temperature_max)} °c </div>
          <div className="min"> {Math.round(temperature_min)} °c </div>
        </div>
      </div>

      <div className="wind">{Math.round(wind.speed)} m/h</div>
    </div>
  );
}

export default DailyForecastWidget;
