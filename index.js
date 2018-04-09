const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
  console.log('server listen on port 3000')
});

app.get('/',(req,res)=>{
  console.log('helloword')
  res.send(`Helloworld listen on port ${PORT}`)
})