import { TextField, Button } from "@mui/material"
import Send from '@mui/icons-material/Send'
import './SearchBox.css'
import { useState } from "react"

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);

    // const API_KEY = process.env.KEY;
    const API_KEY = 'cc3090cf33b5f267b26cb197ac73c8d6';
    console.log(API_KEY);

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    let fetchData = async () => {
        try {
            let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
            let response = await fetch(url);
            let result =  await response.json();
            let data = {
                city: city,
                temp: result.main.temp,
                tempMin: result.main.temp_min,
                tempMax: result.main.temp_max,
                humidity: result.main.humidity,
                feelsLike: result.main.feels_like,
                weather: result.weather[0].description,
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