const prompt = require("prompt-sync")();

//console.log("Bem Vindo ao JavaScript");

//let nome = prompt ("Digite seu nome: ");
//console.log (`Olá ${nome} !`);

//let idade = prompt ("Digite sua idade: ");
//console.log(`Sua idade é: ${idade}`);

//let numero1 = parseInt(prompt ("Digite o primeiro numero: "));
//let numero2 = parseInt(prompt ("Digite o segundo numero: "));
//let soma = numero1 + numero2;
//console.log (`O resultado é: ${soma}`);
//let nome = prompt("Digite seu nome: ");
//let idade = parseInt(prompt("Agora digite sua idade: "));
//console.log (`Seu nome é: ${nome} e sua idade é: ${idade}`);
let nota1= parseFloat(prompt("Digite a primeira nota: "));
let nota2= parseFloat(prompt("Digite a segunda nota: ")); 
let nota3= parseFloat(prompt("Digite a terceira nota: ")); 
let media = [(nota1 + nota2 + nota3)/3];
 if (media>=7){
   console.log("APROVADO");
 }else {
    console.log("REPROVADO");
 }