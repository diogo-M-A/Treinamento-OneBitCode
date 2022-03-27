let lyDistance = prompt('Insira a distância em anos luz que deseja converter');
let lyConvert = prompt('insira a unidade para a qual deseja converter: \n1- parsec(pc) \n2- unidade astronômica (AU) \n3- quilômetros (km) \n\n Digite o número da opção')

let choosenUnity
let convertedDistance

switch (lyConvert) {
  case '1':
    choosenUnity = 'Parsec'
    convertedDistance = lyDistance * 306601
    break
  case '2':
    choosenUnity = 'Unidade Astronômica'
    convertedDistance = lyDistance * 63241.1
    break
  case '3': 
    choosenUnity = 'Quilômetros'
    convertedDistance = lyDistance * 9.5 * Math.pow(10, 12)
}

alert('Distância em anos-luz: ' + lyDistance + '\n' + choosenUnity + ": " + convertedDistance)