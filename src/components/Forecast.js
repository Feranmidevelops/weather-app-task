import DailyForecastWidget from "./DailyForecastWidget";
import "../styles/components/Forecast.scss";
import HorizontalScroll from "./HorizontalScroll";


function Forecast({ title, type, data }) {

  if (!data || !Array.isArray(data)) {
    console.error("Invalid data passed to Forecast:", data);
    return <div>Error: Forecast data is not available</div>;
}

  return (
    <div className="Forecast">
      <div className="forecast-container">
        <h2>{title}</h2>
        < HorizontalScroll className="widget-container">
          {data.map((singleData, index) => (
            <div key={index}>
              {type === "daily" ? (
                <DailyForecastWidget data={singleData} />
              ) : null}
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
}

export default Forecast;
