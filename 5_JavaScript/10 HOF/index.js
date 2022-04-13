let velocity = 150;

function slowDown(velocity, printer) {
  while (velocity > 0) {
    printer(velocity)
    velocity -= 20;
  }
  alert('A nave está parada e já pode ser evacuada com segurança')
}

let callback = (velocity) => {
  console.log('A nave esta a ' + velocity + ' km/s');
}

slowDown(velocity, callback);