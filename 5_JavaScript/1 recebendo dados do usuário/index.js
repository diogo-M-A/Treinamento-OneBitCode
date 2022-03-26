alert("bem vindo, a seguir pediremos que informe alguns dados");
var nome = prompt("informe seu nome");
var idade = prompt("informe sua idade");
var confirma = confirm('está é sua idade?' + idade);

alert("Nome de usuário digitado: " + nome +'\n'+ "Idade informada: " +idade+'\n'+ "confirmação de idade: " + confirma);