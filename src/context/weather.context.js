
import { createContext,  useEffect,  useState } from 'react';
import {DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS} from '../constantS';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider ({children}){
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [CurrentWeather, setCurrentWeather] = useState({});
    const [DailyForecast, setDailyForecast] = useState([]);
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.auto);
    const [units, setUnits] = useState("");

    useEffect(() => {
        async function _getWeatherData() {
           setLoading(true);

            const cw = await getWeatherData(
                "current", 
                place.place_id, 
                measurementSystem,
            );
            console.log("Current Weather Data:", cw);
            setCurrentWeather(cw);
            setUnits(UNITS[cw.units]);
            
        

            const df = await getWeatherData(
                "daily", 
                place.place_id, 
                measurementSystem,
            );
            console.log("Daily Forecast Data:", df);
            setDailyForecast(df?.daily?.data);

            setLoading(false);
           } 
        _getWeatherData();
        }, [place, measurementSystem]);
        
        const updatePlace = (newPlace) => {
            setPlace(newPlace);
        };
    

    return (
        <WeatherContext.Provider 
        value={{ 
            place, 
            setPlace,
            loading,
            CurrentWeather, 
            DailyForecast, 
            updatePlace,
            measurementSystem, 
            setMeasurementSystem,
            units,

        }}>
            {children}
        </WeatherContext.Provider>
    );
}

export { WeatherProvider };
export default WeatherContext;