
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react"
import "./Search.css"

export default function Search({ updateInfo }) {
    let [city, setCity] = useState("Lahore")

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleUpdate = async (e) => {
        let newinfo = await getCityWeatherInfo();
        updateInfo(newinfo)

    }
    const handleForm = async (e) => {
        e.preventDefault()
        handleUpdate()
    }

    const getCityWeatherInfo = async () => {
        const API_URL = "https://api.openweathermap.org/data/2.5/weather"
        const API_KEY = "f135df4e81376db8b28d9bdc47524cde"
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let json = await response.json()
        let result = {
            temp: json.main.temp,
            tempMin: json.main.temp_min,
            tempMax: json.main.temp_max,
            humidiy: json.main.humidity,
            feels: json.main.feels_like,
            name: json.name,
            wind: json.wind.speed
        }
        return result;
    }

    useEffect(() => {
        handleUpdate()
        
        
    },[])
    return (
        <div className='search-box'>
            <form onSubmit={handleForm}>
                <TextField id="city-name" label="City" variant="outlined" onChange={handleCityChange} />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}