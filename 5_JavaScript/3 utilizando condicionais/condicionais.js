var velocidade = prompt('informe a velocidade do atual');

if(velocidade <= 0){
  alert('Carro parado. Dê a partida');
} else if(velocidade < 40){
  alert('Velocidade baixa. Vá mais rápido');
} else if(velocidade < 80){
  alert('velocidade ideal');
} else if(velocidade < 100){
  alert('Muito rápido. Reduza a velocidade');
} else {
  alert('quer morrer?')
}