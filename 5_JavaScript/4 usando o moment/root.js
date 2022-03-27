let departureDayEntry = prompt('Informe a data de partida no formato DD/MM/AAAA');
let departureDay = moment(departureDayEntry, "DD/MM/YYYY");
let today = moment()

let diference = today - departureDay

let chooseOption = prompt('Escolha como gostaria de exibir o tempo de partida: \n1- Segundos \n2- Minutos \n3- Horas \n4- Dias')

if(chooseOption == 1){
  alert('Sua viagem iniciou a ' + Math.round(diference/1000) + ' Segundos')
}else if(chooseOption == 2){
  alert('Sua viajem iniciou a ' + Math.round(diference/1000/60) + ' Minutos')
}else if(chooseOption == 3){
  alert('Sua viajem iniciou a ' + Math.round(diference/1000/60/60) + ' Horas')
}else if(chooseOption == 4){
  alert('Sua viajem iniciou a ' + Math.round(diference/1000/60/60/24) + ' Dias')
}