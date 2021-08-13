import axios from "axios";


export default axios.create({
 
  baseURL: "http://api.openweathermap.org/data/2.5",
  
 
});

//http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}
