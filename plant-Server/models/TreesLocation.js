const mongoose= require('mongoose')

const treeSchema =new mongoose.Schema({
    timestamp:Number,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
        },
    title:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    },
    coords:{
            latitude:Number,
            longitude:Number
        }
    
})

 mongoose.model('Trees',treeSchema)

