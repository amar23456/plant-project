import createDataContext from './createDataContext'
import mongoDbreq from '../api-data/mongDbreq'
import { ActivityIndicator, Snackbar } from 'react-native-paper';
import { View } from 'react-native';
import { useState } from 'react'
const dataReducer =(state,action) =>{
    switch (action.type){
        case 'add_location':
            return{ ...state,currentLocation:action.payload}
        case 'add_aqi_data':
            return {...state,aqi:action.payload}
        case 'fetch_data':
            return{...state,articles:action.payload}
        case 'save_data':
            return {...state,message:action.payload}
        default:
            return state
    }
};

const messageIndicator =(res)=>{
    const [snack, setSnack] = useState(false);
   return(<View>
        {res? <Snackbar 
        visible={snack} duration='4000' onDismiss={setSnack(!snack)}
       >{res.data}</Snackbar>:<ActivityIndicator size='small' color='black'/>}
       </View>
)
}

const addLocation =(dispatch) => async (location)=>{
    console.log(location)
    return (
      dispatch({type:'add_location',payload:location})
    )
}

const addAqi = dispatch =>async (data)=>{
    return  (
        dispatch({type:'add_aqi_data',payload:data})
    )
}


const saveArticle =dispatch =>async(title,body)=>{
    
    //api request to save article
   const res= await mongoDbreq.post('/articles',{title,body})
      messageIndicator(res);
      dispatch({ type:'save_data',payload:res.data})
     
}

const fetchArticle =dispatch =>async ()=>{
    const response =await mongoDbreq.get('/articles')
     dispatch({ type:'fetch_data',payload:response.data })
}


const saveComment =dispatch =>async(articleId,comment)=>{
    
    const res= await mongoDbreq.post('/comments',{articleId,comment})
     messageIndicator(res);    
    dispatch ({type:'save_data',payload:res.data})
     
}
export const {Context,Provider} =createDataContext(
    dataReducer,
    {addLocation,saveArticle,saveComment,addAqi,fetchArticle},
    {currentLocation:null,aqi:null,articles:null,message:''}
)