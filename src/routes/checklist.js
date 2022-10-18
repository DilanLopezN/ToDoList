const express = require('express')

// metódo router permite criar rota dos arquivos
const router = express.Router()

router.get('checklist', (req, res) => {
  console.log('rota get')
  res.send()
})

module.exports = router
