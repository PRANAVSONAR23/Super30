import axios from 'axios'
import React, { useEffect, useState } from 'react'

//Weather app

const Fourteen = () => {

    const [weather, setWeather] = useState(null)

    useEffect(()=>{
       if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const latitude=position.coords.latitude;
            const longitude=position.coords.longitude;
             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bd1924f314265fdea86924a72a090b84`)
            .then((res)=>setWeather(res.data))
            .catch((err)=>console.error(err))
        })
       }
    },[])   
  return (
    <>
    {
        weather?(
            <div> 
                <h1>Weather</h1>
                <h2>temperature:{weather.main.temp}</h2>
                <h2>Conditions:{weather.weather[0].description}</h2>
            </div>
        ):(
            <div>
                <h1>Loading........</h1>
                
            </div>
        )
    }
     
    </>
  )
}

export default Fourteen