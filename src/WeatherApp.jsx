import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Pune',
        feelsLike: 24.84,
        humidity: 33,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "scattered clouds"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result); 
    }

    return(
        <div className="weatherapp" style={{ textAlign: "center"}}>    
            <h2>Weatherly</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox data={weatherInfo}></InfoBox>
        </div>
    )
}