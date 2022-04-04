let vehicleName = prompt('Insira o nome que deseja inverter e cortar');
let forbidenChar = prompt('Insira o carácter que deseja cancelar no nome');
let newName = '';

for(let i = vehicleName.length - 1; i >= 0; i-- ){
  if(vehicleName[i] == forbidenChar){
    break
  }
  newName += vehicleName[i];
}

alert('Nome original: '+vehicleName+'\nNome após alterações: '+newName);

