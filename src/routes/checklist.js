const express = require('express')

// metódo router permite criar rota dos arquivos
const router = express.Router()

// rota get padrão
router.get('/', (req, res) => {
  console.log('rota get')
  res.send(req.body)
})

// rota post
router.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body)
})

//rota get com param
router.get('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`id: ${req.params.id}`)
})

//rota put
router.put('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`put id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  res.send(`delete id: ${req.params.id}`)
})

module.exports = router
