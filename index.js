const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const PORT = 3000;

/***************** ROUTES **************/
const Useroute = require('./routes/User');

/***************** ROUTES **************/
/***************configuration ***************/
app.use(bodyParser.json()); // read json request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
/*******ROUTE MODULES**********/
Useroute(app);
/*******ROUTE MODULES**********/

app.listen(PORT,()=>{
  console.log('server listen on port 3000')
});