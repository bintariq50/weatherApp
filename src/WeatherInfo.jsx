import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

export default function WeatherInfo({ info, IMG_INIT, HOT_IMG, COLD_IMG, RAIN_IMG }) {

    useEffect(() => {
        let bg = IMG_INIT;
        if (info.humidiy > 80) {
            bg = RAIN_IMG;
        }
        else {
            if (info.temp > 15) {
                bg = HOT_IMG
            }
            else {
                bg = COLD_IMG;
            }
        }

        document.body.style.setProperty("--bg-url", `url(${bg})`);
    }, [info, IMG_INIT, HOT_IMG, COLD_IMG, RAIN_IMG]);
    return (
        <>
            <Card sx={{ maxWidth: 345 }} style={{ zIndex: 10 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidiy > 80 ? RAIN_IMG : info.temp > 15 ? HOT_IMG : COLD_IMG}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p><strong>Temperature:</strong>{info.temp} &deg;C</p>
                        <p><strong>Min Temperature:</strong>{info.tempMin}&deg;C</p>
                        <p><strong>Max Temperature:</strong>{info.tempMax} &deg;C</p>
                        <p><strong>Humidity:</strong>{info.humidiy} %</p>
                        <p><strong>Wind:</strong>{info.wind} km/h</p>
                    </Typography>
                </CardContent>

            </Card >
        </>

    )
}