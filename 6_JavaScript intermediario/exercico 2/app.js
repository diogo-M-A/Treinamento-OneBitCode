class App{
  constructor(){
    this.spaceship = null
  }

  start(){
    this.enrollSpaceship()
    let option
    do{
      option = this.showMenu()
      this.feature(option)
    } while(option != 3)
    this.exit()
  }

  enrollSpaceship(){
    let spaceshipName = prompt('Digite o nome da nave')
    let spaceshipCrew = prompt('Digite a quantidade de tripulantes')
    let spaceshipKind = this.askSpaceshipKind()
    if(spaceshipKind == '1'){
      let weapons = prompt('Digite o número de armas')
      this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrew, weapons)
    }else{
      let sits = prompt('Digite o número de assentos')
      this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrew, sits)
    }
  }

  askSpaceshipKind(){
    let option;
    while(!['1', '2'].includes(option)){
      option = prompt('Escolha o tipo de nave: \n1- Batalha \n2- Transporte')
    }
    return option
  }

  showMenu(){
    const message = 'O que deseja fazer? \n1- Acelerar nave \n2- Trocar nave \n3- Imprimir e sair'
    let option = prompt(message)
    while(!['1', '2', '3'].includes(option)){
      option = prompt(message)
    }
    return option
  }

  feature(option){
    switch(option){
      case '1':
        this.accelerate()
      break
      case '2':
        this.enrollSpaceship()
    }
  }

  accelerate(){
    let acceleration = Number(prompt('Quanto gostaria de acelerar?'))
    this.spaceship.speedUp(acceleration)
  }

  exit(){
    let finalMessage = 'Nome: '+this.spaceship.name+ '\nTripulantes: '+this.spaceship.crew+'\nVelocidade: '+this.spaceship.velocity
    alert(finalMessage);
  }
}