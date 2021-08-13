
const mongoose =require('mongoose');

const commentSchema = new mongoose.Schema({
    timestamp:Number,

    articlesId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Articles'
    },
   
    comments:{
        type:String,
        default:''
    }
})





mongoose.model('Comments',commentSchema)
