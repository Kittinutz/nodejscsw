import { Router } from 'express'
import { name, random } from 'faker'
import generateId from './generateId'

const router = Router()
const database = {}

router
  .post('/session', async (req, res) => {
    const sessionId = generateId()
    const data = (database[sessionId] = [])

    for (let i = 0; i < 10; i++) {
      data.push({
        id: i,
        firstname: name.firstName(),
        lastname: name.lastName(),
        age: random.number() % 100 + 1,
      })
    }

    res.json({
      sessionId,
      data,
    })
  })

router.get('/users', (req, res) => {
  res.json(database)
})

router
  .route('/users/:sessionId')

  .get(({ params: { sessionId } }, res) => {
    res.json(database[sessionId])
  })

  .post(({ params: { sessionId }, body: { firstname, lastname, age } }, res) => {
    const data = database[sessionId]

    data.push({
      id: data.length,
      firstname,
      lastname,
      age,
    })

    res.json(data)
  })

router
  .route('/users/:sessionId/:id')

  .get(({ params: { sessionId, id } }, res) => {
    res.json(database[sessionId][id])
  })

  .put(({ params: { sessionId, id }, body: { firstname, lastname, age } }, res) => {
    database[sessionId][id] = {
      id,
      firstname,
      lastname,
      age,
    }

    res.json(database[sessionId])
  })

  .delete(({ params: { sessionId, id } }, res) => {
    delete database[sessionId][id]

    res.json(database[sessionId])
  })

export default router
