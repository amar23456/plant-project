
const express =require('express')
const mongoose =require('mongoose')
const AirIndex=mongoose.model('Articles')
const router= express.Router();

router.get('/airindex/?state?district', async(req,res)=>{
    
   
    try{
    const airindex= await AirIndex.findOne({district:req.params.district})
       
    res.send(airindex)
       
    } catch{
        res.send('err')
      try {
          const airindex=await AirIndex.findOne({state:req.params.state})
          res.send(airindex)
      } catch (error) {
          res.send(error)
          
      }   
    }
})
router.post('/airindex',async(req,res)=>{
    const {state,district}=req.body
    if (!state||!district){
        return res
         .send(422)
         .send({error:'No Data'})
    } 
    try{
        const airindex=new AirIndex({state,district})
        await airindex.save();
        res.send(airindex)
    } catch(err){
        res.status(422).send({error:err.message})
    }
})
  


module.exports= router