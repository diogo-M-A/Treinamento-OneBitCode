let vehicle = prompt('Digite o nome do veículo');
let newVehicle = ''
let char1 = prompt('Qual carácter deseja substituir?');
let char2 = prompt('E por qual carácter deseja substituir?');

for(let i = 0; i < vehicle.length; i++){
  if(vehicle[i] == char1){
    newVehicle += char2;
  }else{
    newVehicle += vehicle[i];
  }
}

alert('O novo nome da nave é: ' + newVehicle)