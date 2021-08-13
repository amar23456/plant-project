var express =require('express');
const mongoose =require('mongoose');


require('./models/TreesLocation')
require('./models/airIndex')
require('./models/articles')

require('./models/comments')

require('./models/google')

const requireAuth=require('./middleware/requireAuth')
const fbLogin =require('./routes/fb.login')
const gLogin =require('./routes/googleRoute')
const treeRoute =require('./routes/TreeRoute')
const articlesRoute =require('./routes/articlesRoute')
const homeRoute =require('./routes/homeRoute')
const commentRoute=require('./routes/commentRoute')

const app =express();


app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET,PUT,DELETE");
    next();
  });
  
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
  app.use(fbLogin)
  app.use(gLogin)  
  app.use(articlesRoute)
  app.use(homeRoute)
  app.use(commentRoute)
  app.use(treeRoute)
  
  const mongoUri ='mongodb+srv://SecondAdmin:jv9f4H9wRwiaT5xj@cluster0.lt6aq.mongodb.net/<dbname>?retryWrites=true&w=majority';
  
  mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

  mongoose.connection.on('connected',()=>{
    console.log('connected')
  });
  
  mongoose.connection.on('error',(err)=>{
  console.error('Error',err)
  })

  app.get('/user',requireAuth,(req,res)=>{
    console.log(req.user._id)
    res.send('hello')
  })

  app.listen(3000,()=>{
    console.log('Hekk')
  })