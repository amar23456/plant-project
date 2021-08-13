const mongoose =require('mongoose')

const airindexSchema =new mongoose.Schema({
    district:{
      type:String,
      required:true
    },
    state:{
        type: String,
        required:true
    },
    airIndex:{
        type:String,
        required:true
    }
})

mongoose.model('AirIndex',airindexSchema)