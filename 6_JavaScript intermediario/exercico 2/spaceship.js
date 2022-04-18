class Spaceship{
  static get DECELERATION_RATE(){
    return 0.17
  }
  constructor(name, crew){
    this.name = name,
    this.crew = crew,
    this.velocity = 0
  }
  speedUp(acceleration){
    this.velocity += acceleration * (1 - Spaceship.DECELERATION_RATE)
  }
}

