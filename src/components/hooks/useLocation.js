import {useEffect,useState,useContext } from "react";
import {Context as DataContext} from '../../Context/DataContext'
import {requestPermissionsAsync,getCurrentPositionAsync} from "expo-location";


export default () =>{

    const { addLocation} =useContext(DataContext)
    const [error, setError] = useState(null);
    const watching = async()=>{
        try{
            await requestPermissionsAsync();
            let e =await getCurrentPositionAsync({});
            addLocation(e);
           
        }catch{
            setError('e')
        }
    }
    useEffect(() => {
       watching()
     }, 
        
     []); 
    
    
    return error
}