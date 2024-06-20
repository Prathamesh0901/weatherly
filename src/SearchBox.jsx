import { TextField, Button } from "@mui/material"
import Send from '@mui/icons-material/Send'
import './SearchBox.css'
import { useState } from "react"

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    // const API_KEY = process.env.KEY;
    const API_KEY = 'cc3090cf33b5f267b26cb197ac73c8d6';

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    function convertTime(time) {
        const date = new Date(time * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        // console.log(formattedTime);
        return formattedTime;
    }

    function convertPressure(pressure) {
        const mmHg = pressure * 0.75006156;
        return mmHg;
    }

    // convertTime(1718843402);

    let fetchData = async () => {
        try {
            let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            let response = await fetch(url);
            let result =  await response.json();
            
            let data = {
                city: city,
                temp: result.main.temp,
                humidity: result.main.humidity,
                weather: result.weather[0].description,
                pressure: convertPressure(result.main.pressure),
                country: result.sys.country,
                sunrise: convertTime(result.sys.sunrise),
                wind: result.wind.speed
            } 
            console.log(data);
            return data;
        }
        catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value); 
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault(); 
            console.log(city); 
            let data = await fetchData();
            console.log(data);
            setCity('');
            updateInfo(data);
            setError(false);
        } 
        catch (err) {
            setError(true); 
        }
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <p className="heading">Find the weather of your city</p>
                <input type="text" id="city" placeholder="City Name" name="city" value={city} onChange={handleChange} required></input>
                <Button variant="contained" type="submit" className="submitBtn"><Send></Send></Button>
                {error && <p style={{color: "red"}}>No data for this place!</p>}
            </form>
        </div>
    )
}