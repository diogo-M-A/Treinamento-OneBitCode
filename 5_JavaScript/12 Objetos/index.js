let spaceship = {
  velocity: 0,
  speedUp: function(acceleration){
    this.velocity += acceleration;
  }
}

function registerSpaceship(){
  spaceship.name = prompt('Digite o nome da nave'),
  spaceship.type = prompt('Digite o tipo da nave'),
  spaceship.maxVelocity = Number(prompt('Digite a velocidade máxima suportada em km/s.'));
}


function accelerate(){
  let acceleration = Number(prompt('Digite a velocidade que deseja acelerar (km/s)'));
  spaceship.speedUp(acceleration);
  if(spaceship.velocity > spaceship.maxVelocity){
    alert('PERIGO! VELOCIDADE ACIMA DO SUPORTADO.' + '\nvelocidade da nave: ' + spaceship.velocity + '\nVelocidade máxima suportada: ' + spaceship.maxVelocity);
  }
}

function stop (){
  alert('Nome: '+spaceship.name+'\nTipo: '+spaceship.type+'\nVelocidade: '+spaceship.velocity+'\nVelocidade máxima: '+spaceship.maxVelocity);
}

function showMenu(){
  let option;
  do{
  option = prompt('O que deseja fazer? \n1- Acelerar \n2- Encerrar');
    switch(option){
      case '1':
        accelerate();
      break
      case '2':
        stop();
      break
      default:
        alert('Escolha 1 ou 2.')
    }
  }while(option != 2)
}

registerSpaceship();
showMenu();
