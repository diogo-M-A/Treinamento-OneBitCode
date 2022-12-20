const express = require('express')

const app = express()
app.use(express.json())

const log = (req, res, next) => {
  console.log(req.body)
  console.log(`Data: ${Date.now()}`)
  next()
}
app.use(log)

app.get('/', (req, res)=>{
  res.send('<h1>Minha lista de tarefas :)</h1>')
})

app.get('/json', (req, res)=>{
  console.log(req.body)
  res.json({name: 'Diogo', Birt: '17/06/2002'})
})

app.listen(3000, ()=>{
  console.log('O servidor foi iniciado')
})