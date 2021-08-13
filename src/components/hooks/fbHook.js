import {useContext,useEffect,useState} from 'react'
import * as Facebook from 'expo-facebook';
import {Context as AuthContext} from '../../Context/AuthContxt'
import mongononAuth from '../../api-data/mongononAuth';



export default () =>{
     
      
        const {notsigned,fbLogin }= useContext(AuthContext)
       
    
        const LoginFb =async()=>{
        try {
              await Facebook.initializeAsync({
                  appId:'841252573387850',
              });
              const {
                  type,
                  token,
                  }= await Facebook.logInWithReadPermissionsAsync({
                  permissions:['public_profile'],
              });
              if (type ==='success'){
                  
              
             const response =await fetch(`https://graph.facebook.com/me?access_token=${token}`);
             const data = await response.json()
           
                   fbLogin({data})
                   
          } else {
            notsigned()
            
          }
      } catch({message}){
         
          alert(`Facebook Login Error: ${message}`);
      }
      
      
        // const toggleAuthAsync =async()=> {
          
        //       const auth = await Facebook.getAuthenticationCredentialAsync();
            
        //       if (!auth) {
        //         notsigned()
        //       } 
        //       else {
               
               
        //         console.log(data)
               
        //       }
        //   }
        }    

 useEffect(() => {
   LoginFb();
   

  
  
 }, []);      
}