const mongoose =require('mongoose');



const articleSchema = new mongoose.Schema({
    timestamp:Number,
   
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    place:{
        type:String,
        default:''
        
    },
    name:{
        type:String,
        default:''
    },
    message:{
        type:String,
        default:''
    },
    
    votes:Number
   
    
})


mongoose.model('Articles',articleSchema);