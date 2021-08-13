const express =require('express')
const mongoose=require('mongoose')
const requireAuth = require('../middleware/requireAuth')
const TreeLocation =mongoose.model('Trees')

const router= express.Router()

router.get('/treelocation',async(req,res)=>{
    const response = await TreeLocation.find()
    res.send(response)
})


router.post('/treelocation',requireAuth,async(req,res)=>{
   
    const {title,description,coords} =req.body
    console.log(await req.user)
   try{
    const Location =new TreeLocation({userId:req.user._id,title,description,coords})
    await Location.save()
    res.send('Saved tree location')
   }
    catch{
       res.send('Did Not Saved Location')
    }
})
  router.delete('/treelocation',requireAuth,async(req,res)=>{
    const id =req.body
    try {
        await TreeLocation.findByIdAndDelete({id})
        res.send('Deleted tree location')
     }
     catch {
        res.send('Not Deleted')
     }
})

module.exports= router
