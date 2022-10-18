const express = require('express')

const app = express()

//middleware para utilização de json
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1> lista de tarefas </h1>')
})

app.get('/json', (req, res) => {
  res.json({
    title: 'Tarefa X',
    done: true
  })
})

app.listen(3000, () => {
  console.log('server iniciado')
})
