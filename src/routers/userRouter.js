import express from 'express'
import userList from '../controllers/user/userList'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Teste método POST')
})
  
router.get('/list', userList)
  
router.get('/', (req, res) => {
    res.json({message: "Rota POST /user"})
})
  
router.get('/', (req, res) => {
    res.json({message: "Rota PUT /user"})
})
  
router.get('/', (req, res) => {
  res.json({message: "Rota DELETE /user"})
})

export default router
  