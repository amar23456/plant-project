const mongoose =require('mongoose')
const userSchema= new mongoose.Schema({
    timestamp : Number,
     name:{
         type:String,
         
     },
     Id:{
         type:String,
         unique:true,
         require:true
     },
     
     email:{
         type:String,
         unique:true
     },
     photoUrl:{
         type:String
         
     }


})
mongoose.model('User',userSchema)

