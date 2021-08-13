const mongoose =require('mongoose')

const fbUserSchema = new mongoose.Schema({

    timestamp:Number,

    fbId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        default:''
    }

})

mongoose.model('F',userSchema)
