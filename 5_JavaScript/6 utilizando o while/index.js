let warpCount = 0;
let chosenOption = '';
let driver = prompt("digite o nome do motorista");

chosenOption = prompt("Deseja aceitar a próxima corrida? \n1-sim\n2-não");

while(chosenOption == "1"){
  warpCount = warpCount + 1;
  chosenOption = prompt("Deseja aceitar a próxima corrida? \n1-sim\n2-não");
}

alert("Motorista: " +driver+ "\n Quantidade de corridas: " +warpCount)
