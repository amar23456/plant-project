const express =require('express');
const mongoose = require('mongoose');
const router =express.Router();
const jwt =require('jsonwebtoken')
const Google =mongoose.model('User')

router.post('/googleLogin',async(req,res)=>{
    console.log('fb')
    const {name,Id,email,photoUrl} =req.body

    if(!name||!Id||!email){
        return res
          .status(422)
          .send({error :'Enter data'})
    }

    try {
        const google =await Google.find({Id:Id})

        if (google.length !==0)
        {
            const token =jwt.sign({userId:google._id},'my_secret_key')
            res.send(token)
        }
        else {
            try {
                const user= new Google({name,Id,email,photoUrl})
                await user.save();
                const token =jwt.sign({userId:user._id},'my_secret_key')
                res
                  .send(token)
            }
            catch(err){
                res
                .status(422)
                .send('Try again')
            }
        }}
        catch {
          res
           .send('error')
        }
        router.get('/google',(req,res)=>{
            const googleUser =Google.find()
            res.send (googleUser)
        })
    })
  module.exports= router;


    
