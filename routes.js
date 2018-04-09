import { Router } from 'express'
import generateId from './generateId'

const router = Router()
const database = {}

router
  .post('/session', (req, res) => {
    const sessionId = generateId()
    database[sessionId] = []

    res.json({
      sessionId,
    })
  })

router
  .route('/users/:sessionId')
  .get(({ params: { sessionId } }, res) => {
    res.json(database[sessionId])
  })

  .post(({ params: { sessionId }, body: { firstname, lastname, age } }, res) => {
    const data = database[sessionId]

    data.push({
      id: data.length + 1,
      firstname,
      lastname,
      age,
    })

    res.json(data)
  })

export default router
