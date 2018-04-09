import { Router } from 'express'

const router = Router()

router.route('/users')
  .get((req, res) => {
    res.json({
      GET: '/users',
      POST: '/users',
    })
  })

  .post((req, res) => {
    const data = {
      status: 200,
      text: 'ok',
    }
    res.json(data)
  })

export default router
