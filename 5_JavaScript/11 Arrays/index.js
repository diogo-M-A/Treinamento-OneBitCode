const hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, false],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
  ];

let hitchPlatform = (hitchedSpaceships)=>{
  let platforms = [];
  for(let i = 1; i <=hitchedSpaceships.length; i++){
    platforms.push(i);
  }
  return platforms;
}

let crowdedShips = hitchedSpaceships.filter( (ship) => {
  return ship[1] > 9;
}).map((ship)=>{
  return ship[0];
})

let notHitched = hitchedSpaceships.findIndex((ship) => {
  return ship[2] == false;
});

let names = hitchedSpaceships.map((ship)=>{
  return ship[0].toUpperCase();
})

alert('Plataformas: ' + hitchPlatform(hitchedSpaceships).join(', ') + '\nNaves com mais de 9 pessoas: ' +crowdedShips.join(', ')+ '\nPrimeira plataforma com engate pendente na fila: '+(notHitched + 1)+ '\nNaves: ' + names.join(', '))

console.log(hitchPlatform(hitchedSpaceships));
console.log(crowdedShips);
console.log(notHitched);
console.log(names);

