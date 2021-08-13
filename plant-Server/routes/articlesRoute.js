const express =require('express');
const mongoose= require('mongoose');
const Articles=mongoose.model('Articles')
const requireAuth=require('../middleware/requireAuth')

const router =express.Router();

router.get('/articles',async(req,res)=>{
    const article =await Articles.find();
    res.send(article)
});
  
router.post('/articles',requireAuth,async(req,res)=>{
    const {place,name,message,votes}=req.body
    if(!name||!message){
        return res
         .sendStatus(422)
         .send({error:'Give a name '});
    }
    try {
         const articles =new Articles({place,name,message,votes,userId:req.user._id})
         await articles.save();
         res.send('Saved')
    } catch(err){
        res.status(422).send({error:err.message})
    }
})

router.put('/articles',requireAuth,async(req,res) =>{
    const {id,votes} =req.body

    if (!votes){
        return res
          .send(422)
          .send({error:'No Vote'});
       }
   

    try {
      
      let vote = Articles.updateOne({_id: id} ,{$set:{votes:votes} })
        res.send('updated')
    } catch {
      res.send('Not voted')
    }
})


router.delete('/articles',requireAuth,async(req,res) =>{
      const {id} =req.body
    try{
        let del =Articles.deleteOne({_id:id})
         
         res.send('Deleted!')
    } catch{
        res.send('not deleted')
    }

})


module.exports=router;