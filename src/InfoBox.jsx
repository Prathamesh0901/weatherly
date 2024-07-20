import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';
import './InfoBox.css';

export default function InfoBox({data}) {

    let HOT_URL = "https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.webp?b=1&s=170667a&w=0&k=20&c=HXuSwwH0R9j2czqyg6Wesr1sqUzZhZNOIENK5t4bxvA=";
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

    return (
        <div className="infobox">
            <div className="cardContainer">
            <div className='card'>
                <div className="card-head">
                    <div className="head-info">
                        <p>{data.temp}&deg;C</p>| {data.weather}
                    </div>
                    <div className="head-img">
                        <img src={`https://openweathermap.org/img/wn/${data.weatherImg}@2x.png`} alt="" />
                    </div>
                </div>
                <div className="city">
                    {data.city}, {data.country}
                </div>
                <h3 className='weatherInfo'>Weather info</h3>
                <div className="card-body">
                    <p><LightModeIcon fontSize='large' className='icons'/> {data.sunrise} A.M.</p>
                    <p><WaterDropIcon fontSize='large' className='icons'/> {data.humidity}</p>
                    <p><AirIcon fontSize='large' className='icons'/>{data.wind}</p>
                    <p><CompressIcon fontSize='large' className='icons'/>{data.pressure} mmHg</p>
                </div>
            </div>
            </div>
        </div>
    )
}