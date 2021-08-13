const jwt =require('jsonwebtoken')
const mongoose =require('mongoose')
const User =mongoose.model('User')

module.exports=(req,res,next)=>{
    const {authorization} =req.headers

    if (!authorization){
        return res.status(401).send({error:'You must '})

    }
    const token =authorization.replace('Bearer ','')
    
    jwt.verify(token,'my_secret_key',async(err,payload)=>{
        if(err){
            return res.status(401).send({error:'You  login'})
        }
         const {userId}=payload
        
        const userdata = await User.findById(payload.userId)
        
         req.user =userdata
         console.log(req.user._id)
        next();
    })
}