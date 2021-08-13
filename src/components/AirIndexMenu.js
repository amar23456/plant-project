import React,{useContext,useEffect,useState} from 'react'
import {Text, View} from 'react-native'
import useLocation from "../components/hooks/useLocation";
import {Context as DataContext} from '../Context/DataContext'
import { getCurrentPositionAsync, requestPermissionsAsync } from "expo-location";
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Badge } from 'react-native-paper';



export default () =>{
    const [components,setComponents] =useState(null)

    const {state:{currentLocation,aqi},addAqi}=useContext(DataContext)
   
    const getData=()=>{
        
        const APIkey='418deed4e7199a6a67ad04324fa07d68'
        fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${currentLocation.coords.latitude}&lon=${currentLocation.coords.longitude}&appid=${APIkey}`)
            .then(response=> response.json())
            .then(data =>{addAqi(data.list[0].main.aqi)
           setComponents(data.list[0].components)
    })
         
};
            
        
    
    useEffect(() => {
          getData()
        
    }, []);
   
   let element= async()=>{
     await components.map((value,key)=>{
    return <Text> {value}</Text>
   })

}
   
       
    
return ( <>
    
    <Text>your area air quality is<Badge>{aqi}</Badge>  </Text>
   {components? <Text>{Object.entries(components).map(([k,v]) => `\n${k}:${v} \n\n `)}</Text>:<ActivityIndicator/> }
    </> )
}        
           
         


        
          
    
    
    
    