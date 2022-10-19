const express = require('express')

// metódo router permite criar rota dos arquivos
const router = express.Router()

const Checklist = require('../models/checklist')

// rota get padrão
router.get('/', (req, res) => {
  console.log('rota get')
  res.send(req.body)
})

// rota post
router.post('/', async (req, res) => {
  let { name } = req.body
  try {
    let checklist = await Checklist.create({ name })
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
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
