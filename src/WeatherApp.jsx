import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import './WeatherApp.css'

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Pune',
        humidity: 33,
        temp: 25.05,
        weather: "scattered clouds",
        sunrise: '06:00',
        pressure: 2154,
        country: 'India',
        wind: 5.05
    });

    let updateInfo = (result) => {
        setWeatherInfo(result); 
    }

    return(
        <>
            <h2 className="header">Weatherly</h2>
            <div className="weatherapp" style={{ textAlign: "center"}}>    
                <SearchBox updateInfo={updateInfo}></SearchBox>
                <InfoBox data={weatherInfo}></InfoBox>
            </div>
        </>
    )
}