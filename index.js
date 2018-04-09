import express from 'express'
import bodyParser from 'body-parser'
import router from './routes'
const Userroute = require('./Routes/Userroute');

const app = express();
const PORT = process.env.PORT || 3000

app
  // NOTE: pass json data
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  // NOTE: add router to server here
  .use('/api', router)

  .listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
  })

app
  .get('/', (req, res) => {
    res.send('It\' ok!')
  })


/*********Another Choice****/
let userdata=[{id:1,name:"Kittinut",surname:"Pramhan",job:"novice"}];
var routeruser =express.Router();
Userroute(app,userdata,routeruser);

