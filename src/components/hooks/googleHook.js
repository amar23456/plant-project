import {useContext,useState,useEffect} from 'react'
import {Context as AuthContext} from '../../Context/AuthContxt'
import * as Google from 'expo-google-app-auth'
import mongononAuth from '../../api-data/mongononAuth'

export default () =>{

    const [results,setResults]=useState(null)
    const { notsigned,gLogin } =useContext(AuthContext)
 const Glogin = async()=> {
     try {
        const result = await Google.logInAsync({
          androidClientId:'259976480401-he5dp744pjuvpsmpok1fc5ehlhi6i9q1.apps.googleusercontent.com',
          iosClientId: '259976480401-0vn1cb04f49hr2g8bqn75uh9io30qu5o.apps.googleusercontent.com',
     
            scopes: ['profile', 'email'],
        });

       if (result.type === 'success') {
           console.log(result)
           const data=result.user
         await gLogin({data})
       } else {
          return { cancelled: true };
        }
      } 
  
         catch (e){
         console.log("error",e)
  
        }
       
      
      }
      useEffect(() => {
        Glogin()
      
      }, []);

    }
      



