const express = require('express')
const app = express()
const bodyParser = require('body-parser')  // เขียนมั้ง
const cors = require('cors')               // เขียนมั้ง
const router = express.Router()            // เขียนมั้ง

let bears = [{id: 1, name: 'Pooh'},
    {id: 2, name: 'Winnie'},
    null
    ]

app.use(cors())

// เขียน
app.use('/api', bodyParser.json() , router);  // ต้องประกาศ

router.route('/bears')
    .get((req, res) => {
        res.send(bears)               // ส่งรายการไปหา Client
    })

    .post(
        (req, res) => {
            const bear = {}
            bear.id = bears.length + 1
            bear.name = req.body.name   // ต้องดูว่าตรงกับค่า ภายใน obj ที่ส่งมาหรือไม่
            bears.push(bear)            // ยัด bear ลงใน arr bears
            res.send(bears)             // ส่งกลับไปหา client 
    }) 

router.route('/bears/:id')
    .delete( (req,res) => { 
        const id = req.params.id-1  // ตอนส่งมาจะมีค่าเท่ากับ id
        delete bears[id]            // แต่เราลบจาก arr เลยต้องลบ -1
        res.send(bears)             // ส่งกลับไปหา client
    })    

    .get( (req,res) => {
        res.send(bears[req.params.id])
    })
    // ไม่ต้องเขียน
    // .put((req,res ) =>  {
    //     const id = req.params.id
    //     bears[id].name = req.body.name
    //     res.send( bears)
    // })
app.listen(8888)
