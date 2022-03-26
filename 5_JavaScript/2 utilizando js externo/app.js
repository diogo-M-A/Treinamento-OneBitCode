var nomeVelha = prompt("Insira o nome da pessoa mais velha");
var idadeVelha = prompt("Insira a idade da pessoa mais velha");
var nomeNova = prompt('Insira o nome da pessoa mais nova');
var idadeNova = prompt('Insira a idade da pessoa mais nova');

var diferenca = idadeVelha - idadeNova;

alert(nomeVelha + ": " + idadeVelha + '\n' + nomeNova + ": " + idadeNova + '\n' + 'a diferença de idade é ' + diferenca);