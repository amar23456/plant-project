import { Text } from "react-native-elements";
import  React,{useContext, useState,useEffect}  from "react";
import { View, StyleSheet, Button  } from "react-native";
import {Context as DataContext} from '../Context/DataContext'
import {Context as AuthContext} from '../Context/AuthContxt'
import CasualLocation from '../components/CasualLocation'
import AirIndexMenu from "../components/AirIndexMenu";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import HomeMap from "../components/Maps/HomeMap";
import Spacer from "../components/Spacer";
import api from '../api-data/mongononAuth'

// https://api.waqi.info/feed/beijing/?token=a75be8d4e65c416dc8773fcb700b9e3663c6da74 
// https://www.patreon.com/amar_pop
//http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}

const HomeScreen=({navigation})=>{
    // knowing air quality index of location and seeing markers in maps of users who plant trees and navigating to add plant screen 
    const [treeData, setTreeData] = useState(null);
    useEffect( () => {
            navigation.addListener('focus',async()=>{
                const response = await api.get('/treelocation')
                setTreeData(response)
    })
     },
      []);
    
    const {state:{currentLocation}} =useContext(DataContext)
    const {signout} =useContext(AuthContext)
    const [location,setLocation] =useState(false) 
    
    return <ScrollView>
        <View style={styles.container}>
        <Text style={styles.text}>Welcome  </Text>
   
       <Button 
         style={styles.button}
         title='getAqi From Location' 
         onPress={()=> setLocation(true) }/>
         {location? <CasualLocation />:null}
         {currentLocation ? <AirIndexMenu/>:<ActivityIndicator/>}
        <Button 
         title="Give your Gift"  
         onPress={()=> navigation.navigate('Add')}
        />
        <Spacer/>
        {treeData?<HomeMap/>:null}
        <Spacer/>
        <Button title='SignOut' onPress={()=>signout() }/> 
        </View>
        </ScrollView>
    }


export default HomeScreen;

const styles=StyleSheet.create({
    container:{
        textAlign:'center',
        marginTop:20,
        marginLeft:20,
        backgroundColor:'#F8F8F8'
    },
    button:
    {
        marginLeft:100,
        marginRight:100,
    },
    text:{
        fontSize:25,
        shadowColor:'#000',
        shadowOffset:{ width:0,height:2}
    }
});