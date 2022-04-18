
class Spaceship{
  constructor(name, crew){
    this.name = name,
    this.crew = crew,
    this.isHitched = false,
    this.openEntrances = false
  }

  hitch(){
    this.isHitched = true,
    this.openEntrances = true
  }
}


function showMenu(){
  let option;
  while(option != 1 && option != 2 && option != 3){
    option = prompt('O que deseja fazer? \n1- Engatar nave \n2- Imprimir nave \n3- Sair do programa')
  }
  return option
}

function registerSpaceship(){
  let spaceshipName = prompt('Digite o nome da nave')
  let spaceshipCrew = prompt('Digite o número de tripulantes')
  let spaceship = new Spaceship(spaceshipName, spaceshipCrew)
  return spaceship;
}

function printSpaceship(spaceships){
  let spaceshipList = ''
  spaceships.forEach((spaceship, index) =>{
    spaceshipList += (index + 1) + '- ' + spaceship.name + ' (' +spaceship.crew+ ' tripulantes)\n'
  })
  alert(spaceshipList)
}

let hitched = []

let option;
while(option != 3){
  option = showMenu()
  switch(option){
    case '1':
      let SpaceshipToAdd = registerSpaceship()
      SpaceshipToAdd.hitch()
      hitched.push(SpaceshipToAdd)
    break
    case '2':
      printSpaceship(hitched)
    break
      
  }
}

printSpaceship()