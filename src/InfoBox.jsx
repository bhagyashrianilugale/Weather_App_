import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';


export default function InfoBox({Info}){

    const HOT_URL ="https://media.istockphoto.com/id/1090614334/photo/beautiful-cloudscape-over-the-sea-waves-sunrise-shot.webp?b=1&s=170667a&w=0&k=20&c=qhXcDLvxPkBRyISmnVkJb0uzTVpRIu4RuO2AGDkqX-4=";

    const COLD_URL ="https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

   
    return(
      <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345, height:450}}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          Info.humidity > 80 
          ? RAIN_URL
          :Info.temp > 15 
          ? HOT_URL
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           <p><b>{Info.city}</b>{
            Info.humidity > 80 
            ? <ThunderstormIcon/>
            :Info.temp > 15 
            ? <WbSunnyIcon/>
            : <AcUnitIcon/>
           }</p> 
        </Typography>
        <Typography variant="body2" color="text.secondary"  component="span">
          <p>Temperature: {Info.temp}&deg;C</p>
          <p>Humidity: {Info.humidity}</p>
          <p>Min Temperature: {Info.tempMin}&deg;C</p>
          <p>Max Temperature: {Info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{Info.weather}</i> and Feels like: {Info.feels_Like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}