const express = require('express')
const checklistRouter = require('./src/routes/checklist')
const app = express()

//middleware para utilização de json
app.use(express.json())

// utilização das rotas como se fosse middleware
app.use('/checklists', checklistRouter)

app.listen(3000, () => {
  console.log('server iniciado')
})
