const express =require('express');
const mongoose= require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const Comments =mongoose.model('Comments')
const router =express.Router();

router.get('/comments',async(req,res)=>{
    const comments= await Comments.find({})
    res.send(comments)
})

router.post('/comments',requireAuth,async(req,res)=>{
    
    const {comments,articlesId}= req.body
    if (!articlesId || !comments)
    {
        res.send('Enter Data')
    }
    try{
      let comment= new Comments({articlesId,comments,userId:req.user._id})
        await comment.save()
        res.send('Commented')
    }catch{
      res.send('Not Saved Comment')
    }
})

router.put('/comments',requireAuth,async(req,res)=>{
    const { id,comments}=req.body
     try{
       let com=  Comments.updateOne({id},{$set:{comments:comments}})
         res.send('Updated!')
     } catch{
         res.send("not Updated")
     }
})

router.delete('/comments',async(req,res)=>{
    const {id} =req.body
    try {
        Comments.deleteOne({_id:id})
        res.send('deleted!')
    }catch{
        res.send("Not Deleted")
    }

})

module.exports=router;