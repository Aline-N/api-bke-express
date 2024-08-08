import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Teste método POST')
})
  
router.get('/', (req, res) => {
    res.json({message: "Rota GET /product"})
})
  
router.get('/', (req, res) => {
    res.json({message: "Rota POST /product"})
})
  
router.get('/', (req, res) => {
    res.json({message: "Rota PUT /product"})
})
  
router.get('/', (req, res) => {
  res.json({message: "Rota DELETE /product"})
})

export default router
  