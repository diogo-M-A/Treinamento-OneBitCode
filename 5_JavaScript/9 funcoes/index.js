let spaceshipName = prompt('digite o nome do veículo');
let spaceshipVelocity = 0;
let choosenOption;

function showMenu(){
  let option;
  while(option != '1' && option != '2' && option != '3' && option != '4'){
    option = prompt('O que deseja fazer?\n' +
                    '1- Acelerar 5km/s\n' +
                    '2- Desacelerar 5km/s\n' +
                    '3- Imprimir dados de bordo\n' +
                    '4- Sair do programa');
  }
  return option;
}

function speedUp(velocity){
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity){
  let newVelocity = velocity - 5;
  if(newVelocity < 0){
    newVelocity = 0;
  }
  return newVelocity;
}

function boardData(name, velocity){
  alert('Espaçonave: ' + name + '\n Velocidade: ' + velocity + ' km/s');
}

do{
  choosenOption = showMenu();
  switch(choosenOption){
    case '1':
      spaceshipVelocity = speedUp(spaceshipVelocity);
    break;

    case '2':
      spaceshipVelocity = slowDown(spaceshipVelocity);
    break;

    case '3':
      boardData(spaceshipName, spaceshipVelocity);
    break;

    case '4':
      alert('Encerrando programa de bordo')
  }
} while(choosenOption != 4);

