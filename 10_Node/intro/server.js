const http = require('http')
const server = http.createServer((req, res)=>{
  console.log(req.method)
  console.log(req.url)
  console.log(req.statusCode)
  res.end('<h1>Hello  World</h1>')
})

server.listen(3000, ()=>{
  console.log('Servidor ativo!')
})