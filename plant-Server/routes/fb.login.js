const express =require('express');
const mongoose = require('mongoose');
const router =express.Router();
const jwt =require('jsonwebtoken')
const Fb =mongoose.model('User')




  router.post('/fbLogin',async(req,res)=>{
    console.log('fb')
    const {name,Id}=req.body
    if(!name||!Id){
        return res
         .status(422)
         .json({error:'Give a name'});
        
    }

    try {
            const fb = await Fb.find({Id:Id})
             console.log(fb.length)
            if (fb.length !==0)
            {
             
              const token =jwt.sign({userId:fb._id},'my_secret_key')
              res.send({token})
                
           
            }
            else{
              console.log('saving user')
              try{
                const user =new Fb({name,Id})
                await user.save();
                const token=jwt.sign({userId:user._id},'my_secret_key')
                res
                .send({token})
          }
          catch(err){
               res
               .status(422)
               .send({error:err.message})
            
            }
          }
       }
          catch {
            res
            .send('error')
        }
   }    
)
router.get('/fb',(req,res)=>{
  const fbUser =Fb.find({})
  res.send({"fbUser":fbUser})
})
    
module.exports=router;