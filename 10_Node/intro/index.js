//add and format date and time
const moment = require('moment')

function showDate(){
  console.log(moment().format('HH:mm'))
}

showDate()