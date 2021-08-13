import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screen/HomeScreen";
import ArticleScreen from "../screen/ArticleScreen";
import ProfileScreen from "../screen/ProfileScreen";
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo } from '@expo/vector-icons'; 
import {  StyleSheet } from "react-native";  
import { createStackNavigator } from "@react-navigation/stack";
import { AddPlant } from "../screen/AddPlant";
import { UserPic } from "../components/UserPic";


import SingleArticle from "../screen/SingleArticleScreen";

import AddArticle from "../screen/Extras/ArticleModalScreen";


const Tab=createBottomTabNavigator();

 const HomeRoute =()=>{
    
 return (  <Tab.Navigator tabBarOptions={()=>{
             tabStyle= styles.tab
        }}
        >
        <Tab.Screen name='Home' component={free}
         options={()=>({
            
            tabBarBadge:'4',
            tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size} />

        })
        }/>
        <Tab.Screen name="Articles" component={Article}
          options={()=>({
           tabBarIcon:({size,color})=><Entypo name="feather" size={size} color={color} />
        })}
        />

        <Tab.Screen name="Profile" component={ProfileScreen}
        options={()=>({
            tabBarIcon:({color,size})=><AntDesign name="profile" size={size} color={color} />
        })}
        />
        
    </Tab.Navigator>
 )}
 const styles=StyleSheet.create({
     tab:{
        fontSize:10,
         
     }
 })
const gre= createStackNavigator();
  const free= ()=>{
     const style= {
         headerStatusBarHeight:5,
         headerLeftContainerStyle:{
         marginTop:60
       },
         headerTitleContainerStyle:{
         paddingTop:18,
         alignSelf:'center'
     },
        headerRightContainerStyle:{
        paddingTop:18,
        alignSelf:'center',
        paddingRight:5
     },
     headerRight: ()=>{
       return  <UserPic />
       }
    }

  
    return (
        <gre.Navigator >
             <gre.Screen name="Home" component={HomeScreen}
             options={ style   }
              
            />
            <gre.Screen name='Add' component={AddPlant} options={{...style},{headerRight:()=>{return null}}}/>
     
           </gre.Navigator>
       )
   }
   const Art=createStackNavigator()
   const Article= ()=>{
    const style= {
        headerStatusBarHeight:5,
        headerLeftContainerStyle:{
        marginTop:60
      },
        headerTitleContainerStyle:{
        paddingTop:18,
        alignSelf:'center'
    },
       headerRightContainerStyle:{
       paddingTop:18,
       alignSelf:'center',
       paddingRight:5
    },
    headerRight: ()=>{
      return  <UserPic />
      }
   }
    return (
     <Art.Navigator  >
         <Art.Screen name='Articles ' component={ArticleScreen} option={{...style},{headerRight:()=>{ return null}}} />
         <Art.Screen name='Single' component={SingleArticle}/>
         <Art.Screen name='AddArticle' component={AddArticle}/>
         </Art.Navigator>
    )}
 export {HomeRoute};