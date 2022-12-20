//create new files in server
const fs = require('fs')

fs.writeFile('text.txt', 'Hello text', err => {
  console.log(err)
})

fs.appendFile('text.txt', ' :)', err => {
  console.log(err)
})