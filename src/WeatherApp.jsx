import Search from "./Search"
import WeatherInfo from "./WeatherInfo"
import { useState } from "react"
import "./WeatherApp.css"

export default function WeatherApp() {

    let IMG_INIT = "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?_gl=1*hjxsdl*_ga*OTUzODE4ODE0LjE3NTAwOTcyNzI.*_ga_8JE65Q40S6*czE3NTUxNTA4NTIkbzExJGcxJHQxNzU1MTUwOTgwJGo1OSRsMCRoMA.."
    let HOT_IMG = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_IMG = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let RAIN_IMG = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const [weather, setWeather] = useState({

    })

    let updateInfo = (info) => {
        setWeather(info)
    }

    return (<div className="cardType">
        <h3>Weather App - Bin Tariq</h3>
        <Search updateInfo={updateInfo} />
        <WeatherInfo info={weather} IMG_INIT={IMG_INIT} HOT_IMG={HOT_IMG} COLD_IMG={COLD_IMG} RAIN_IMG={RAIN_IMG} />
    </div>)
}