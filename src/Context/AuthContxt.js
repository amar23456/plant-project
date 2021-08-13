import AsyncStorage from '@react-native-community/async-storage'
import { navigate } from '../Navigation-routes/NavigationRef';
import createDataContext from './createDataContext'

import mongoNA from '../api-data/mongDbreq'



const authReducer =(state,action)=>{

    switch(action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload}
        case 'signin':
            return { errorMessage:'',isLoggedIn:true,token:action.payload.data,userdata:action.payload.userdata}
        case 'clear_error_message':
            return { ...state,errorMessage:'' }
        case 'signout':
            return {token:null,errorMessage:''}

        default :
            return state;

    }
}

const fbLogin =dispatch => async({data}) =>{
           try{
             
           
            const token = await mongoNA.post('/fbLogin',{
                name:`${data.name}`,Id:`${data.id}`});
           
           const data=token.data.token
            await AsyncStorage.setItem('token',data)
            const userdata = await mongoNA.get('/user')
           
              dispatch({type :'signin',payload:{data,userdata}})
               
             } catch(err){
            
             dispatch({type:'add_error',payload:'Facebook not verified'})
             navigate('Signup')
        }
    }




const gLogin = dispatch =>async({data}) => {
   try{
      
       const token =await mongoNA.post('/googleLogin',{
       name:`${data.name}`,Id:`${data.id}`,photoUrl:`${data.photoUrl}`,email:`${data.email}`})
       const data =token.data.token
       const userdata = await mongoNA.get('/user')
       await AsyncStorage.setItem('token',data)
       dispatch({type:'signin',payload:{data,userdata}})
       
      } 
      catch (err){
      dispatch({type:'add_error',payload:'Google not Verified'})
      navigate('Signup')
      }
    }

const notsigned = dispatch =>async() =>{

    dispatch( {type:'add_error',payload:'Something went wrong'})
   
     }
const signout =(dispatch)=>async()=>{

    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'})
     navigate('Signup');
   }
const checkAuth= dispatch=>async() =>{

    const data =await AsyncStorage.getItem('token')
    const userdata = await mongoNA.get('/user')
    const func =()=>{
        dispatch({type:'add_error',payload:'Signin to save data'})
       navigate('Signup')
    }
    data? dispatch({type:'signin',payload:{data,userdata}}) :func()

}




export const {Provider,Context}=createDataContext(
    authReducer,
    {fbLogin,signout,notsigned,gLogin,checkAuth},
    {token:null,errorMessage:'',isLoggedIn:false,userdata:null}
)