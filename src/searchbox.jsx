import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function Searchbox({ updateInfo }){
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const  API_KEY = '2240ae8a26640eb0ca10acd1ebbb8885';
    
    let [City, setCity] = useState("");
    let [Error, setError] = useState(false);


    let getWeatherInfo = async()=>{
       try{
            let response =  await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
            city:City,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_Like: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
         console.log(result);
         return result;
    } 
    
    catch(err){
             throw(err);
    }
       }
        let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(City);
            let newInfo = await getWeatherInfo();
            updateInfo( newInfo );
            setCity("");
            setError(false);
    }
             
    catch(err){ 
            setError(err);
            setCity("");

        }
    }
   

    return(
        <div className="SearchBox">
            <h2>Weather App</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined"  
                required value={City} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" style={{marginBottom:"20px"}}>
                    Search
                </Button>
                {Error && <p style={{color:"red"}}><b>No such place exist in our API!</b></p>}
            </form>
        </div>
    );
}