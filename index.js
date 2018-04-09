import express from 'express'
import bodyParser from 'body-parser'
import router from './routes'

const app = express()
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
