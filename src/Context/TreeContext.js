import { useState } from 'react';
import { navigate } from '../Navigation-routes/NavigationRef';
import createDataContext from './createDataContext'
import mongDbreq from '../api-data/mongDbreq'


const treereducer =(state,action)=>{
    switch(action.type){
       
        case 'add_new_location':
            return{...state,location:action.payload}
        case 'save_data':
            return {...state,message:action.payload}
        default:
            return state;
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


const treeLocation =(dispatch) =>async(location)=>{
    return (
        dispatch({type:'add_new_location',payload:location})
    )
}

const saveTree =dispatch =>async(title,description,coords)=>{
    console.log(title)
    console.log(coords)
 try{ 
       const res= await mongDbreq.post('/treelocation',{title,description,coords })
     console.log(res)
       dispatch({ type:'save_data', payload:res.data })
       navigate('Home')
   } catch {
       console.log('error')
   }
}
export const {Provider,Context}= createDataContext(
    treereducer,
    {saveTree,treeLocation},
    {location:null,message:''}
)