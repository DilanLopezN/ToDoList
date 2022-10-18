const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1> lista de tarefas </h1>')
})

app.listen(3000, () => {
  console.log('server iniciado')
})
