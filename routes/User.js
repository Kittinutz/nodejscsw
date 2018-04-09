


module.exports = (app,data) =>{
  app.get('/user',(req,res,next)=>{
    res.send('hello user')
  });
  
  app.get('/',(req,res)=>{
    console.log('helloword')
    res.send(' Helloworld listen on port 3000')
  })
  
};