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
router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    res.send(`id: ${req.params.id}`)
  } catch (error) {
    res.status(422).json(error)
  }
})

//rota put
router.put('/:id', async (req, res) => {
  let { name } = req.body
  try {
    let checklist = await Checklist.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: True }
    )
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let checklist = await Checklist.findByIdAndRemove(req.params.id)
    res.status(200).json(checklist)
  } catch (error) {
    res.status(422).json(error)
  }
})

module.exports = router
