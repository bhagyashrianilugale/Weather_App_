import Searchbox  from './searchbox';
import InfoBox from './InfoBox.jsx';
import { useState } from "react";


export default  function Weatherapp(){
    const[WeatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feels_Like: 17.84,
        humidity: 47,
        temp: 18.69,
        tempMax: 18.69,
        tempMin: 18.69,
        feelslike: 22.98,
        weather:"overcast clouds"
    });

    let updateInfo = (newInfo)=>{
         setWeatherInfo(newInfo);    
    }   
     return(
        <div style={{textAlign:"center"}}>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox Info={WeatherInfo}/>
        </div>
     
    )
};
