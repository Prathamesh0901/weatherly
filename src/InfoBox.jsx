import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import { Thunderstorm, AcUnit, WbSunny } from '@mui/icons-material';

export default function InfoBox({data}) {

    let HOT_URL = "https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.webp?b=1&s=170667a&w=0&k=20&c=HXuSwwH0R9j2czqyg6Wesr1sqUzZhZNOIENK5t4bxvA=";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

    return (
        <div className="infobox">
            <div className="cardContainer">
            <Card sx={{height: 400, width: 480}}>
                <CardContent>
                <p>{data.city}
                {data.humidity > 80 ? <Thunderstorm fontSize='large'></Thunderstorm> : data.temp > 15? <WbSunny></WbSunny> : <AcUnit></AcUnit>}
                </p>
                <Typography variant="body2" color="text. secondary" component='span'>
                    <p>Temperature: {data.temp}&deg;C</p>
                    <p>Humidity: {data.humidity}</p>
                    <p>Min Temp: {data.tempMin}&deg;C</p>
                    <p>Max Temp: {data.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{data.weather}</i> and feels like {data.feelsLike}&deg;C</p>
                </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}